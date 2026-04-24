import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/product-grid";
import { Product } from "@/lib/types";

export function ProductSection({ products }: { products: Product[] }) {
  return (
    <section className="container-page py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-semibold">katalog produk</h2>
          <p className="mt-2 text-white/60">pilihan produk terbaik dengan layout grid modern.</p>
        </div>
        <Button asChild variant="secondary" className="rounded-full">
          <Link href="/shop">lihat semua</Link>
        </Button>
      </div>
      <ProductGrid products={products.slice(0, 8)} />
    </section>
  );
}
