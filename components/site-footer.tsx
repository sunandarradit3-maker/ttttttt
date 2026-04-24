import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="font-semibold tracking-[0.2em] uppercase">DiTz Store</div>
          <p className="mt-3 text-sm text-white/55">
            dark luxury ecommerce untuk pengalaman belanja yang modern, cepat, dan premium.
          </p>
        </div>
        <div className="text-sm text-white/65">
          <p className="font-medium text-white">contact</p>
          <p className="mt-3">whatsapp: 087739435496</p>
          <p>email support: sunandarradit3@gmail.com</p>
          <p>telegram: @raditsunandar</p>
        </div>
        <div className="text-sm text-white/65">
          <p className="font-medium text-white">menu</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/shop">shop</Link>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
