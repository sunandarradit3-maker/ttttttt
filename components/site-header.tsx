"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "home" },
  { href: "/shop", label: "shop" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const showSearch = pathname?.startsWith("/shop");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b10]/80 backdrop-blur-xl">
      <div className="container-page flex items-center gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-amber-200 via-amber-500 to-orange-500 text-sm font-black text-black">
            D
          </div>
          <div>
            <div className="font-semibold tracking-[0.2em] uppercase">DiTz Store</div>
            <p className="text-xs text-white/40">premium ecommerce</p>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <Button key={item.href} asChild variant="ghost" className={cn("rounded-full capitalize", pathname === item.href && "bg-white/10")}>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button asChild className="rounded-full">
            <Link href="/shop"><ShoppingBag className="mr-2 h-4 w-4" />shop now</Link>
          </Button>
        </nav>
      </div>

      {showSearch ? (
        <div className="border-t border-white/10">
          <div className="container-page py-3">
            <form action="/shop" method="GET" className="flex gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <Input name="q" placeholder="cari produk..." className="pl-9" />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </header>
  );
}
