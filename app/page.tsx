import Image from "next/image";

import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsappFloatingButton } from "@/components/WhatsappFloatingButton";
import {
  accessSteps,
  faqs,
  paymentMethods,
  plans,
  securityFeatures,
  services,
  site,
  storageSizes,
  testimonials,
  values,
  whatsappUrl,
} from "@/lib/site-data";

const heroImage =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80";
const storageImage =
  "https://images.unsplash.com/photo-1609143739217-01b60dad1c67?auto=format&fit=crop&w=1200&q=80";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="inicio" className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 opacity-40">
            <Image alt="Depósito moderno con espacios de almacenamiento" className="h-full w-full object-cover" fill priority src={heroImage} sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-trust-900/75" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-32">
            <div>
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
                Guardamuebles y self-storage en Bahía Blanca
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Espacio seguro para lo que más valorás
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Alquilá un locker limpio, flexible y monitoreado para guardar objetos personales, muebles, mudanzas o stock comercial.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="rounded-full bg-white px-6 py-3 text-center font-bold text-slate-950 shadow-soft transition hover:-translate-y-1 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="#planes">
                  Ver planes
                </a>
                <a className="rounded-full bg-trust-600 px-6 py-3 text-center font-bold text-white shadow-soft transition hover:-translate-y-1 hover:bg-trust-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href={whatsappUrl} rel="noreferrer" target="_blank">
                  Solicitar presupuesto
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-soft backdrop-blur-md">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {services.map((service) => (
                  <div className="rounded-3xl bg-white p-5 text-slate-950" key={service.title}>
                    <Icon className="h-8 w-8 text-trust-700" name={service.icon} />
                    <h2 className="mt-4 text-lg font-bold">{service.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20" id="nosotros">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionHeading
                description="Nacimos para resolver una necesidad concreta: ofrecer espacio extra, seguro y accesible para quienes necesitan guardar sin complicaciones. Combinamos instalaciones cuidadas, atención cercana y opciones flexibles."
                eyebrow="Sobre nosotros"
                title="Un lugar confiable para tus pertenencias"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-950">Misión</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Brindar soluciones de almacenamiento simples, seguras y adaptadas a cada cliente.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-950">Visión</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Ser la opción de referencia en Bahía Blanca para guardar con tranquilidad.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span className="rounded-full bg-trust-50 px-4 py-2 text-sm font-semibold text-trust-900" key={value}>{value}</span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-soft">
              <Image alt="Pasillo de guardamuebles con unidades privadas" className="object-cover" fill src={storageImage} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20" id="seguridad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              align="center"
              description="Diseñamos la experiencia para que puedas guardar con tranquilidad: control, monitoreo, iluminación y medidas preventivas trabajando en conjunto."
              eyebrow="Seguridad"
              title="Protección pensada para cada espacio"
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {securityFeatures.map((feature) => (
                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft" key={feature.title}>
                  <Icon className="h-8 w-8 text-trust-700" name={feature.icon} />
                  <h3 className="mt-5 font-bold text-slate-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20" id="tamanos">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              description="Elegí el tamaño que mejor se adapta a lo que necesitás guardar. Los precios son estimados y pueden ajustarse según disponibilidad y plazo."
              eyebrow="Tamaños de storage"
              title="Tres opciones para distintas necesidades"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {storageSizes.map((storage) => (
                <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft" key={storage.name}>
                  <Icon className="h-10 w-10 text-trust-700" name={storage.icon} />
                  <h3 className="mt-6 text-2xl font-black text-slate-950">{storage.name}</h3>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-trust-700">{storage.size}</p>
                  <p className="mt-4 text-lg font-bold text-slate-900">{storage.price}</p>
                  <p className="mt-2 text-slate-600">{storage.bestFor}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {storage.examples.map((example) => (
                      <li className="flex items-center gap-2" key={example}>
                        <Icon className="h-4 w-4 text-trust-700" name="check" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white" id="planes">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              description="Contratá por el tiempo que necesitás. Cuanto mayor es el plazo, mejor es el beneficio comercial."
              eyebrow="Planes y formas de pago"
              title="Flexibilidad para personas y empresas"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <article className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" key={plan.name}>
                  <Icon className="h-9 w-9 text-blue-200" name={plan.icon} />
                  <h3 className="mt-6 text-2xl font-black">{plan.name}</h3>
                  <p className="mt-2 text-blue-100">{plan.detail}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{plan.discount}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-3xl bg-white p-6 text-slate-950">
              <p className="font-bold">Métodos de pago</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {paymentMethods.map((method) => (
                  <span className="rounded-full bg-trust-50 px-4 py-2 text-sm font-semibold text-trust-900" key={method}>{method}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20" id="acceso">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              align="center"
              description="Te acompañamos desde la consulta hasta el primer ingreso para que el alquiler sea simple y transparente."
              eyebrow="Cómo acceder"
              title="Alquilá tu espacio en cuatro pasos"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {accessSteps.map((step, index) => (
                <article className="rounded-3xl bg-slate-50 p-6" key={step.title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-trust-700 font-black text-white">{index + 1}</span>
                  <h3 className="mt-5 font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-trust-100 bg-trust-50 p-6 text-slate-700">
              <p><strong>Horarios de acceso:</strong> ingreso coordinado dentro de horarios habilitados para mantener control y seguridad.</p>
              <p className="mt-2"><strong>Acceso seguro:</strong> llave o código personal según la unidad contratada.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20" id="ubicacion">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <SectionHeading
                description="Estamos ubicados en una zona de fácil acceso para clientes particulares y comerciales."
                eyebrow="Ubicación"
                title="Montevideo 1450, Bahía Blanca"
              />
              <div className="mt-8 space-y-4 rounded-3xl bg-white p-6 shadow-sm">
                <p className="flex gap-3 text-slate-700"><Icon className="mt-1 h-5 w-5 shrink-0 text-trust-700" name="map" />{site.address}</p>
                <p className="text-sm leading-6 text-slate-600">Coordiná tu visita o ingreso por WhatsApp para recibir indicaciones precisas de acceso al predio.</p>
                <a className="inline-flex rounded-full bg-trust-700 px-5 py-3 font-bold text-white transition hover:bg-trust-900" href={whatsappUrl} rel="noreferrer" target="_blank">Consultar acceso</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <iframe
                allowFullScreen
                aria-label="Mapa de tu-locker en Montevideo 1450, Bahía Blanca"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={site.mapsUrl}
                title="Mapa de ubicación de tu-locker"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20" id="confianza">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading align="center" eyebrow="Confianza" title="Clientes que encontraron espacio extra" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote className="rounded-3xl bg-slate-50 p-6" key={testimonial.name}>
                  <p className="leading-7 text-slate-700">“{testimonial.text}”</p>
                  <footer className="mt-5 font-bold text-slate-950">{testimonial.name}</footer>
                </blockquote>
              ))}
            </div>
            <div className="mt-16 grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <details className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" key={faq.question}>
                  <summary className="cursor-pointer list-none font-bold text-slate-950 group-open:text-trust-700">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-trust-50 py-20" id="contacto">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionHeading
                description="Escribinos para recibir asesoramiento y encontrar el espacio ideal para tus cosas."
                eyebrow="Contacto"
                title="Solicitá tu presupuesto"
              />
              <div className="mt-8 space-y-4 text-slate-700">
                <p><strong>Teléfono y WhatsApp:</strong> <a className="text-trust-700 hover:underline" href={site.phoneHref}>{site.phone}</a></p>
                <p><strong>Email:</strong> <a className="text-trust-700 hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p>
                <p><strong>Dirección:</strong> {site.shortAddress}</p>
              </div>
              <a className="mt-8 inline-flex rounded-full bg-emerald-500 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-emerald-600" href={whatsappUrl} rel="noreferrer" target="_blank">
                Contactar por WhatsApp
              </a>
            </div>
            <form className="rounded-[2rem] bg-white p-6 shadow-soft" action={`mailto:${site.email}`} method="post">
              <div className="grid gap-5">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Nombre
                  <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-trust-600 focus:ring-4 focus:ring-trust-100" name="name" placeholder="Tu nombre" type="text" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Email
                  <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-trust-600 focus:ring-4 focus:ring-trust-100" name="email" placeholder="tu@email.com" type="email" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Mensaje
                  <textarea className="min-h-36 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-trust-600 focus:ring-4 focus:ring-trust-100" name="message" placeholder="Contanos qué necesitás guardar" />
                </label>
                <button className="rounded-full bg-trust-700 px-6 py-3 font-bold text-white transition hover:bg-trust-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-trust-700" type="submit">
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFloatingButton />
    </>
  );
}
