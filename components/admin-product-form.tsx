
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export function AdminProductForm({ product }: { product?: Product }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const isEdit = Boolean(product?.id);
    const url = isEdit ? `/api/admin/products/${product!.id}` : "/api/admin/products";
    const res = await fetch(url, {
      method: isEdit ? "PUT" : "POST",
      body: formData
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      toast.error(data.error || "gagal menyimpan produk");
      return;
    }

    toast.success(isEdit ? "produk diperbarui" : "produk ditambahkan");
    router.refresh();
    event.currentTarget.reset();
  }

  return (
    <Card className="glass p-6">
      <form onSubmit={onSubmit} className="grid gap-4">
        <Input name="title" defaultValue={product?.title} placeholder="judul produk" required />
        <Input name="slug" defaultValue={product?.slug} placeholder="slug unik" required />
        <Input name="category" defaultValue={product?.category} placeholder="kategori" required />
        <Input name="price" type="number" step="0.01" defaultValue={product?.price} placeholder="harga" required />
        <Input name="stock" type="number" defaultValue={product?.stock} placeholder="stok" required />
        <Input name="status" defaultValue={product?.status || "ready"} placeholder="ready / sold out" required />
        <Input name="image" type="file" accept="image/*" />
        <Textarea name="description" defaultValue={product?.description} placeholder="deskripsi lengkap" className="min-h-40" required />
        <Button type="submit" disabled={loading}>
          {loading ? "menyimpan..." : product ? "update produk" : "tambah produk"}
        </Button>
      </form>
    </Card>
  );
}
