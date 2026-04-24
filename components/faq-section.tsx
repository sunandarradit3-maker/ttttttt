import { Card } from "@/components/ui/card";

const faqs = [
  ["Apakah bisa deploy ke Vercel?", "Ya, struktur ini dibuat untuk App Router dan deploy-friendly."],
  ["Produk disimpan di mana?", "Data produk, gambar, order log, dan setting disimpan di Supabase."],
  ["Admin route aman?", "Ada proteksi session + allowlist email admin di middleware/proxy."]
];

export function FaqSection() {
  return (
    <section className="container-page py-10">
      <h2 className="font-display text-3xl font-semibold">faq</h2>
      <div className="mt-6 space-y-3">
        {faqs.map(([q, a]) => (
          <Card key={q} className="glass p-5">
            <p className="font-medium">{q}</p>
            <p className="mt-2 text-sm text-white/60">{a}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
