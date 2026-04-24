import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { error } = await supabase.from("messages").insert({ name, email, message });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
