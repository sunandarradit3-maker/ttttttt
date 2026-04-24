import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, ShieldCheck, Truck } from "lucide-react";

export function Hero({ promo }: { promo?: { title: string; subtitle: string } | null }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-luxury-grid bg-[length:56px_56px] opacity-[0.22]" />
      <div className="container-page py-10 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
              <Sparkles className="h-4 w-4 text-amber-300" />
              premium dark luxury store
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Bangun pengalaman belanja yang{" "}
              <span className="text-gradient">modern</span> dan{" "}
              <span className="text-gradient">premium</span>.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/65 md:text-lg">
              DiTz Store hadir dengan UI yang clean, animasi halus, katalog cepat, wishlist, order via WhatsApp dan Telegram, serta admin panel berbasis Supabase.
            </p>
            {promo?.title ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">promo aktif</p>
                <p className="mt-2 text-lg font-medium">{promo.title}</p>
                <p className="text-white/60">{promo.subtitle}</p>
              </div>
            ) : null}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/shop">
                  mulai belanja <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-6">
                <Link href="/contact">hubungi support</Link>
              </Button>
            </div>
          </div>

          <Card className="glass relative overflow-hidden p-6 shadow-glow">
            <div className="absolute inset-0 bg-luxury-radial opacity-75" />
            <div className="relative space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["fast loading", "optimasi app router"],
                  ["secure admin", "basic route protection"],
                  ["realtime", "products update live"],
                  ["responsive", "mobile & desktop"]
                ].map(([a, b]) => (
                  <div key={a} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-medium">{a}</div>
                    <div className="mt-1 text-xs text-white/55">{b}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                <p className="text-sm text-white/50">today's highlight</p>
                <p className="mt-2 text-2xl font-semibold">Luxury storefront ready for Vercel</p>
                <div className="mt-4 flex items-center gap-3 text-sm text-white/60">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Supabase auth</span>
                  <Truck className="ml-2 h-4 w-4" />
                  <span>Order logging</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
