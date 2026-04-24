"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/product-grid";
import { Product } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function ProductCatalog({ products }: { products: Product[] }) {
  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const [category, setCategory] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const okCategory = category === "all" || p.category === category;
      const okSearch = `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(q.toLowerCase());
      return okCategory && okSearch;
    });
  }, [products, category, q]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <Badge
            key={c}
            onClick={() => setCategory(c)}
            className={`cursor-pointer rounded-full border px-4 py-2 ${category === c ? "bg-white text-black" : "bg-white/5 text-white"}`}
          >
            {c}
          </Badge>
        ))}
      </div>

      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="cari produk..." />

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white/60">
          tidak ada produk yang cocok.
        </div>
      ) : (
        <ProductGrid products={filtered} />
      )}
    </div>
  );
}
