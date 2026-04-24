import { Card } from "@/components/ui/card";
import { BadgeCheck, Filter, Search, TimerReset } from "lucide-react";

const items = [
  { icon: Search, title: "Pencarian cepat", desc: "Cari produk dengan UX yang ringan dan responsif." },
  { icon: Filter, title: "Filter kategori", desc: "Saring katalog tanpa ribet di mobile maupun desktop." },
  { icon: BadgeCheck, title: "UI premium", desc: "Dark luxury aesthetic dengan kesan brand global." },
  { icon: TimerReset, title: "Performa ringan", desc: "Komponen ringkas, loading skeleton, dan navigasi mulus." }
];

export function Features() {
  return (
    <section className="container-page py-6 md:py-10">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="glass p-5">
              <Icon className="h-5 w-5 text-amber-300" />
              <h3 className="mt-4 font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{item.desc}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
