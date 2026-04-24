import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const number = "6287739435496";
const defaultMessage = "halo saya tertarik membeli produk di DiTz Store";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const productId = url.searchParams.get("productId") || null;
  const productName = url.searchParams.get("name") || "produk";
  const message = encodeURIComponent(`${defaultMessage}\n\nproduk: ${productName}`);

  const supabase = createAdminClient();
  await supabase.from("order_events").insert({
    product_id: productId,
    product_name: productName,
    channel: "whatsapp",
    phone: number,
    status: "new"
  });

  return NextResponse.redirect(`https://wa.me/${number}?text=${message}`);
}
