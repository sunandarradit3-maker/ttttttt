import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/auth";

export async function POST(request: Request) {
  await requireAdmin();
  const formData = await request.formData();
  const promo_title = String(formData.get("promo_title") || "");
  const promo_subtitle = String(formData.get("promo_subtitle") || "");
  const promo_active = String(formData.get("promo_active") || "true") === "true";
  const supabase = createAdminClient();

  const { error } = await supabase.from("site_settings").upsert({
    id: 1,
    promo_title,
    promo_subtitle,
    promo_active
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
