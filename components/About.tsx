"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  Heart,
  Clock3,
  Star,
  ThumbsUp,
  Wrench,
} from "lucide-react";
import WhatsAppBanner from "./WhatsAppBanner";

const highlights = [
  {
    icon: Clock3,
    title: "Disponible cuando lo necesitas",
    text: "Atiende de lunes a sábado. Responde rápido, sin hacerte esperar horas.",
  },
  {
    icon: ThumbsUp,
    title: "Honestidad ante todo",
    text: "Sin cobros de más, sin reparaciones innecesarias. Solo lo que tu auto de verdad necesita.",
  },
  {
    icon: Heart,
    title: "Trato cercano y de confianza",
    text: "Jorge trata cada auto como si fuera el propio. Más de 15 años de experiencia hablan por sí solos.",
  },
  {
    icon: Star,
    title: "+500 clientes satisfechos",
    text: "Familias, empresas y particulares que confían en Jorge para mantener sus autos en perfectas condiciones.",
  },
];

const statItems = [
  { value: "15+", label: "Años de experiencia" },
  { value: "500+", label: "Clientes felices" },
  { value: "1,200+", label: "Servicios realizados" },
  { value: "100%", label: "Honestidad garantizada" },
];

/**
 * About section — Story, credentials and trust signals for Jorge.
 */
export default function About() {
  return (
    <section id="sobre-jorge" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Top wave */}
      <div className="wave-top">
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

      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            Conóceme
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Un poco sobre{" "}
            <span className="gradient-text">Jorge</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

          {/* Left: Photo + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Photo with floating animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-200 to-yellow-200 blur-2xl opacity-60 scale-105" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-orange-200/60 border-4 border-white">
                <Image
                  src="/jorge-photo.jpg"
                  alt="Jorge, mecánico móvil de confianza"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
              {/* Badge: Tools */}
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-3 shadow-xl border border-orange-100"
              >
                <Wrench className="w-7 h-7 text-orange-500" />
              </motion.div>
              {/* Badge: Verified */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-3 py-2 shadow-xl border border-orange-100 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-xs font-bold text-slate-700">Verificado</span>
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {statItems.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="glass-card rounded-2xl p-4 text-center shadow-md border border-orange-50"
                >
                  <p className="text-2xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-xs text-slate-500 leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Story + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Story text */}
            <div className="flex flex-col gap-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                Hola, soy <strong className="text-slate-800">Jorge</strong>. Llevo
                más de <strong className="text-orange-500">15 años</strong> resolviendo
                problemas mecánicos de todo tipo. Me cansé de ver cómo los talleres
                cobran de más y tardan semanas en entregar un auto. Por eso decidí
                llevar la solución directo a ti.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                Mi filosofía es simple: <em>honestidad, rapidez y calidad</em>. No
                importa si es un cambio de aceite o una falla eléctrica complicada —
                llego a tu casa, trabajo, o donde te encuentres, y te explico exactamente
                qué tiene tu auto y cuánto va a costar{" "}
                <strong className="text-slate-700">antes de tocar nada</strong>.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                Cada cliente es un amigo. Muchos de mis clientes me recomiendan con
                su familia porque saben que pueden confiar en mí. Eso es lo que más
                me enorgullece de mi trabajo.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="flex gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <h.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-0.5">{h.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{h.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* WhatsApp CTA banner */}
        <WhatsAppBanner
          message="¿Listo para resolver tu problema?"
          subtext="¡Llama o escribe sin ningún compromiso! Respondo rápido."
        />
      </div>

      {/* Bottom wave */}
      <div className="wave-bottom">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,20 C480,80 960,0 1440,60 L1440,80 L0,80 Z"
            fill="#fffbf5"
          />
        </svg>
      </div>
    </section>
  );
}
