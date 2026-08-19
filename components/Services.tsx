"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Battery,
  CircleDot,
  Stethoscope,
  Wrench,
  Zap,
  Wind,
  Settings,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import WhatsAppBanner from "./WhatsAppBanner";

const services = [
  {
    icon: Droplets,
    title: "Cambio de Aceite",
    description:
      "Revisión y cambio completo de aceite de motor con filtro incluido. Servicio rápido en 30 minutos.",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    icon: Battery,
    title: "Reemplazo de Batería",
    description:
      "Diagnóstico y sustitución de batería en tu lugar. Llevamos la batería nueva directo a ti.",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    icon: CircleDot,
    title: "Pastillas de Freno",
    description:
      "Revisión de sistema de frenos y cambio de pastillas. Tu seguridad primero, siempre.",
    gradient: "from-red-400 to-orange-400",
  },
  {
    icon: Stethoscope,
    title: "Diagnóstico General",
    description:
      "Diagnóstico computarizado completo para identificar fallas sin misterios ni cobros innecesarios.",
    gradient: "from-orange-500 to-red-400",
  },
  {
    icon: Wrench,
    title: "Llanta Ponchada",
    description:
      "Cambio o reparación de llanta en el lugar donde te quedaste. Sin esperar a nadie más.",
    gradient: "from-amber-400 to-orange-400",
  },
  {
    icon: Zap,
    title: "Revisión de Alternador",
    description:
      "Diagnóstico del sistema eléctrico y alternador. Evita quedarte sin carga en la carretera.",
    gradient: "from-orange-300 to-yellow-400",
  },
  {
    icon: Wind,
    title: "Sistema de Aire A/C",
    description:
      "Revisión y recarga de aire acondicionado. Viaja fresco sin importar el calor.",
    gradient: "from-sky-400 to-orange-400",
  },
  {
    icon: Settings,
    title: "Afinación de Motor",
    description:
      "Bujías, filtros, correa, todo en un servicio completo para que tu motor rinda al máximo.",
    gradient: "from-orange-400 to-amber-500",
  },
];

/**
 * Services section — Animated grid of service cards.
 */
export default function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 bg-[#fffbf5]">
      {/* Subtle warm background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffbf5] via-orange-50/30 to-[#fffbf5] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            Lo que hacemos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Nuestros{" "}
            <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Resolvemos los problemas más comunes de tu auto sin que tengas que
            mover un dedo. Jorge va hasta ti, donde y cuando lo necesites.
          </p>
          <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto italic">
            * Nota: Los servicios no incluyen los repuestos, pero si lo prefieres,
            nosotros podemos buscarlos y cotizarlos por ti.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={i}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* Mid-section CTA banner */}
        <div className="mt-16">
          <WhatsAppBanner
            message="¿No ves tu servicio aquí? ¡Escríbenos!"
            subtext="Jorge puede ayudarte con casi cualquier problema mecánico."
          />
        </div>
      </div>

      {/* Wave divider bottom */}
      <div className="wave-bottom">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,60 C360,0 720,80 1080,20 C1260,0 1380,40 1440,60 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
