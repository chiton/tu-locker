export const site = {
  name: "tu-locker",
  domain: "tu-locker.com.ar",
  phone: "+54 291 4239860",
  phoneHref: "tel:+542914239860",
  whatsapp: "5492914239860",
  email: "contacto@tu-locker.com.ar",
  address: "Montevideo 1450, Bahía Blanca, Buenos Aires, Argentina",
  shortAddress: "Montevideo 1450, Bahía Blanca",
  mapsUrl:
    "https://www.google.com/maps?q=Montevideo%201450%2C%20Bahia%20Blanca%2C%20Buenos%20Aires%2C%20Argentina&output=embed",
  whatsappMessage:
    "Hola tu-locker, quiero solicitar un presupuesto para alquilar un espacio de almacenamiento.",
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "Tamaños", href: "#tamanos" },
  { label: "Planes", href: "#planes" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export const services = [
  {
    icon: "box",
    title: "Objetos personales",
    description: "Guardá cajas, ropa de temporada, bicicletas, herramientas o recuerdos familiares en un espacio limpio y seguro.",
  },
  {
    icon: "home",
    title: "Muebles y mudanzas",
    description: "Soluciones flexibles para cambios de vivienda, reformas, viajes largos o falta de espacio en casa.",
  },
  {
    icon: "briefcase",
    title: "Uso comercial",
    description: "Espacio extra para stock, archivos, equipamiento, material promocional o herramientas de trabajo.",
  },
];

export const values = [
  "Seguridad permanente",
  "Confianza y trato cercano",
  "Accesibilidad para personas y empresas",
];

export const securityFeatures = [
  { icon: "camera", title: "Cámaras 24/7", text: "Monitoreo continuo de áreas comunes y accesos principales." },
  { icon: "lock", title: "Acceso controlado", text: "Ingreso organizado para clientes habilitados y registro de movimientos." },
  { icon: "alarm", title: "Alarmas individuales", text: "Protección por unidad para sumar una capa extra de seguridad." },
  { icon: "light", title: "Iluminación completa", text: "Espacios iluminados para operar con comodidad y visibilidad." },
  { icon: "shield", title: "Monitoreo preventivo", text: "Rutinas de control orientadas a proteger tus pertenencias." },
];

export const storageSizes = [
  {
    icon: "box",
    name: "Pequeño",
    size: "Hasta 3 m²",
    price: "Desde $45.000/mes",
    bestFor: "Cajas y objetos personales",
    examples: ["Documentación", "Ropa de temporada", "Valijas", "Herramientas chicas"],
  },
  {
    icon: "home",
    name: "Mediano",
    size: "De 4 a 7 m²",
    price: "Desde $75.000/mes",
    bestFor: "Muebles de un departamento",
    examples: ["Sillón", "Mesa y sillas", "Electrodomésticos", "Cajas de mudanza"],
  },
  {
    icon: "warehouse",
    name: "Grande",
    size: "Desde 8 m²",
    price: "Desde $120.000/mes",
    bestFor: "Mudanzas completas o uso comercial",
    examples: ["Stock", "Equipamiento", "Muebles grandes", "Archivo comercial"],
  },
];

export const plans = [
  { icon: "calendar", name: "Mensual", detail: "Flexibilidad total", discount: "Ideal para necesidades puntuales" },
  { icon: "spark", name: "Trimestral", detail: "Ahorro intermedio", discount: "Descuento por 3 meses" },
  { icon: "star", name: "Anual", detail: "Mayor beneficio", discount: "Mejor precio por contratación anual" },
];

export const paymentMethods = ["Tarjeta", "Transferencia bancaria", "Efectivo"];

export const accessSteps = [
  { title: "Solicitá presupuesto", text: "Contanos qué necesitás guardar y por cuánto tiempo." },
  { title: "Elegí tu espacio", text: "Te orientamos para elegir el tamaño más conveniente." },
  { title: "Reservá y contratá", text: "Coordinamos documentación, pago y fecha de ingreso." },
  { title: "Accedé seguro", text: "Ingresá en horarios habilitados con llave o código personal." },
];

export const testimonials = [
  { name: "Mariana G.", text: "Necesitaba guardar muebles durante una reforma y el proceso fue simple, claro y seguro." },
  { name: "Estudio Sur", text: "Usamos tu-locker para archivo y material de oficina. Nos resolvió el problema de espacio." },
  { name: "Pablo R.", text: "La atención por WhatsApp fue rápida y me ayudaron a elegir el tamaño correcto." },
];

export const faqs = [
  { question: "¿Qué puedo guardar?", answer: "Podés guardar cajas, muebles, herramientas, documentación, stock y objetos personales. No se permiten elementos peligrosos, inflamables o ilegales." },
  { question: "¿Cómo elijo el tamaño adecuado?", answer: "Podés contactarnos por WhatsApp y te orientamos según la cantidad de cajas, muebles o equipamiento que necesitás almacenar." },
  { question: "¿Cuáles son los horarios de acceso?", answer: "El acceso se coordina dentro de horarios habilitados para mantener el control y la seguridad del predio." },
  { question: "¿Qué medios de pago aceptan?", answer: "Aceptamos tarjeta, transferencia bancaria y efectivo, con opciones mensuales, trimestrales y anuales." },
  { question: "¿Mis cosas están seguras?", answer: "El predio cuenta con cámaras 24/7, acceso controlado, alarmas individuales, iluminación y monitoreo preventivo." },
];
