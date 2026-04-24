import { Suspense } from "react";
import { ProductCatalog } from "@/components/product-catalog";
import { getProducts } from "@/lib/data";

export const metadata = {
  title: "Shop",
  description: "Jelajahi katalog produk DiTz Store."
};

export default async function ShopPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string; category?: string; status?: string }>;
}) {
  const params = await searchParams;
  const products = await getProducts(params);

  return (
    <div className="container-page py-10">
      <div className="mb-8 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-gradient">Shop</h1>
        <p className="mt-3 text-white/65">
          Cari produk, filter kategori, dan pilih item terbaik dengan tampilan premium yang ringan di mobile maupun desktop.
        </p>
      </div>
      <Suspense fallback={<div className="text-sm text-white/60">Memuat...</div>}>
        <ProductCatalog products={products} />
      </Suspense>
    </div>
  );
}
