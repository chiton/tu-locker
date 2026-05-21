import { navItems, site, whatsappUrl } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-2xl font-black">tu-locker</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
            Espacios de almacenamiento seguros y flexibles para personas, familias y empresas en Bahía Blanca.
          </p>
          <p className="mt-4 text-sm text-slate-400">{site.domain}</p>
        </div>
        <div>
          <p className="font-bold">Navegación</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <a className="transition hover:text-white" href={item.href} key={item.href}>{item.label}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Contacto</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-slate-300">
            <p>{site.address}</p>
            <p><a className="hover:text-white" href={site.phoneHref}>{site.phone}</a></p>
            <p><a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><a className="hover:text-white" href={whatsappUrl} rel="noreferrer" target="_blank">WhatsApp rápido</a></p>
          </address>
          <div className="mt-4 flex gap-3 text-sm text-slate-400" aria-label="Redes sociales">
            <a className="hover:text-white" href="#contacto">Instagram</a>
            <a className="hover:text-white" href="#contacto">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} tu-locker. Todos los derechos reservados.
      </div>
    </footer>
  );
}
