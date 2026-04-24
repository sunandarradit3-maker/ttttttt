
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: formData });
    setLoading(false);
    if (res.ok) {
      toast.success("Pesan terkirim");
      event.currentTarget.reset();
    } else {
      toast.error("Gagal mengirim pesan");
    }
  }

  return (
    <div className="container-page py-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-gradient">Contact</h1>
          <p className="mt-4 max-w-2xl text-white/68">
            Hubungi tim DiTz Store untuk pertanyaan produk, kerja sama, atau dukungan pelanggan.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <Input name="name" placeholder="nama" required />
            <Input name="email" type="email" placeholder="email" required />
            <Textarea name="message" placeholder="pesan anda" required className="min-h-40" />
            <Button type="submit" disabled={loading}>
              {loading ? "mengirim..." : "kirim pesan"}
            </Button>
          </form>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">support</h2>
          <div className="mt-4 space-y-3 text-white/68">
            <p>whatsapp: 087739435496</p>
            <p>email: sunandarradit3@gmail.com</p>
            <p>telegram: @raditsunandar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
