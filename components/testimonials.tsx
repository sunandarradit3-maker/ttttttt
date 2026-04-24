import { Card } from "@/components/ui/card";

const data = [
  { name: "Rizky", text: "Tampilannya berasa brand internasional, clean dan premium." },
  { name: "Alya", text: "Navigasinya enak, produk gampang dicari, dan loading ringan." },
  { name: "Dimas", text: "Cocok buat store modern dengan admin panel yang jelas." }
];

export function Testimonials() {
  return (
    <section className="container-page py-10">
      <h2 className="font-display text-3xl font-semibold">testimoni customer</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} className="glass p-5">
            <p className="text-white/75">“{item.text}”</p>
            <p className="mt-4 text-sm text-white/45">{item.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
