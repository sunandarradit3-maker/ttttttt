import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle, Send } from "lucide-react";
import { Product } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((p) => {
        const waUrl = `/api/order/whatsapp?productId=${p.id}&name=${encodeURIComponent(p.title)}`;
        const tgUrl = `/api/order/telegram?productId=${p.id}&name=${encodeURIComponent(p.title)}`;
        return (
          <Card key={p.id} className="group overflow-hidden glass">
            <Link href={`/product/${p.id}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={p.image_url} alt={p.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 flex gap-2">
                  <Badge className="rounded-full bg-black/40 text-white border-white/10">{p.category}</Badge>
                  <Badge variant={p.status === "ready" ? "default" : "destructive"} className="rounded-full">
                    {p.status}
                  </Badge>
                </div>
              </div>
            </Link>
            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link href={`/product/${p.id}`} className="font-medium hover:underline">{p.title}</Link>
                  <p className="mt-1 text-sm text-white/55 line-clamp-2">{p.description}</p>
                </div>
                <div className="text-right text-lg font-semibold text-gradient">{formatPrice(p.price)}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm" className="rounded-full">
                  <Link href={waUrl}><MessageCircle className="mr-2 h-3.5 w-3.5" />whatsapp</Link>
                </Button>
                <Button asChild size="sm" variant="secondary" className="rounded-full">
                  <Link href={tgUrl}><Send className="mr-2 h-3.5 w-3.5" />telegram</Link>
                </Button>
                <Button size="sm" variant="ghost" className="rounded-full border border-white/10 bg-white/5">
                  <Heart className="h-3.5 w-3.5" />
                </Button>
              </div>
              <p className="text-xs text-white/45">stok {p.stock} pcs</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
