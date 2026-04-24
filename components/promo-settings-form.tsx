
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function PromoSettingsForm({
  settings
}: {
  settings: { promo_title: string; promo_subtitle: string; promo_active: boolean } | null;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const res = await fetch("/api/admin/settings", { method: "POST", body: formData });
    setLoading(false);
    if (!res.ok) {
      toast.error("gagal menyimpan settings");
      return;
    }
    toast.success("settings tersimpan");
    router.refresh();
  }

  return (
    <Card className="glass max-w-2xl p-6">
      <form onSubmit={onSubmit} className="grid gap-4">
        <Input name="promo_title" defaultValue={settings?.promo_title || ""} placeholder="judul promo" />
        <Input name="promo_subtitle" defaultValue={settings?.promo_subtitle || ""} placeholder="subjudul promo" />
        <Input name="promo_active" defaultValue={String(settings?.promo_active ?? true)} placeholder="true / false" />
        <Button type="submit" disabled={loading}>{loading ? "menyimpan..." : "simpan banner promo"}</Button>
      </form>
    </Card>
  );
}
