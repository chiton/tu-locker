import { navItems, whatsappUrl } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <a className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trust-600" href="#inicio">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-trust-700 font-black text-white shadow-soft">TL</span>
          <span>
            <span className="block text-xl font-black tracking-tight text-slate-950">tu-locker</span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Self-storage</span>
          </span>
        </a>
        <nav aria-label="Navegación principal" className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700 lg:justify-end">
          {navItems.map((item) => (
            <a className="rounded-full px-3 py-2 transition hover:bg-trust-50 hover:text-trust-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-trust-600" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a className="rounded-full bg-trust-700 px-4 py-2 text-white shadow-sm transition hover:bg-trust-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-trust-600" href={whatsappUrl} rel="noreferrer" target="_blank">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
