import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/data";
import { cn, formatPrice } from "@/lib/utils";
import { Heart, MessageCircle, Send } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);
  return {
    title: product?.title ?? "Product",
    description: product?.description ?? "Detail produk DiTz Store"
  };
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) return notFound();

  const waText = encodeURIComponent(`halo saya tertarik membeli produk di DiTz Store\n\n${product.title}`);
  const waUrl = `/api/order/whatsapp?productId=${product.id}&name=${encodeURIComponent(product.title)}`;
  const tgUrl = `/api/order/telegram?productId=${product.id}&name=${encodeURIComponent(product.title)}`;

  return (
    <div className="container-page py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow">
          <div className="absolute inset-0 bg-luxury-radial opacity-80" />
          <div className="relative aspect-[4/4]">
            <Image
              src={product.image_url}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white border-white/10">{product.category}</Badge>
            <Badge variant={product.status === "ready" ? "default" : "destructive"}>
              {product.status === "ready" ? "ready" : "sold out"}
            </Badge>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">{product.title}</h1>
          <div className="text-3xl font-semibold text-gradient">{formatPrice(product.price)}</div>
          <p className="max-w-2xl text-white/68 leading-7">{product.description}</p>

          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">stok</p>
              <p className="mt-2 text-lg font-medium">{product.stock} pcs</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">status</p>
              <p className="mt-2 text-lg font-medium">{product.status === "ready" ? "siap kirim" : "habis"}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href={waUrl}>
                <MessageCircle className="mr-2 h-4 w-4" />
                beli via whatsapp
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href={tgUrl}>
                <Send className="mr-2 h-4 w-4" />
                order via telegram
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full border border-white/10 bg-white/5">
              <Heart className="mr-2 h-4 w-4" />
              wishlist
            </Button>
          </div>

          <p className="text-sm text-white/45">
            * tombol order membuka chat dengan pesan otomatis dan menyimpan event order ke database untuk admin.
          </p>
        </div>
      </div>
    </div>
  );
}
