import { Icon } from "@/components/Icon";
import { whatsappUrl } from "@/lib/site-data";

export function WhatsappFloatingButton() {
  return (
    <a
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft transition hover:-translate-y-1 hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
      href={whatsappUrl}
      rel="noreferrer"
      target="_blank"
    >
      <Icon className="h-7 w-7" name="phone" />
    </a>
  );
}
