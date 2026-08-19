"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Star, Shield, Clock } from "lucide-react";


const WHATSAPP_NUMBER = "573043290402";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Jorge, necesito una consulta de mecánica..."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const trustBadges = [
  { icon: Star, label: "+500 clientes", color: "from-yellow-400 to-orange-400" },
  { icon: Shield, label: "100% Garantía", color: "from-orange-400 to-red-400" },
  { icon: Clock, label: "Atención rápida", color: "from-orange-300 to-orange-500" },
];


/**
 * Hero section — Full-viewport intro with:
 * - Background image + warm gradient overlay
 * - Jorge's profile photo (rounded, floating)
 * - Animated headline and CTA buttons
 * - Trust badges
 * - Scroll indicator
 */
export default function Hero() {
  const handleScroll = () => {
    const section = document.querySelector("#servicios");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* ── Background image with overlay ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Mecánico trabajando en un auto"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Warm pastel overlay that ensures text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/90 via-white/75 to-orange-50/95" />
        {/* Extra top gradient for navbar legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-transparent to-yellow-50/40" />
      </div>

      {/* ── Dots pattern overlay ────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 dots-bg" />

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">

        {/* Greeting pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full text-sm font-medium text-orange-600 shadow-sm"
        >
          <span className="text-lg">👋</span>
          <span>¡Bienvenido! Tu mecánico de confianza está aquí</span>
        </motion.div>

        {/* Profile photo + headline group */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 mb-10">

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.4 }}
            // Continuous organic float
            whileInView={{ opacity: 1 }}
            className="relative flex-shrink-0"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300 to-yellow-300 blur-xl opacity-50 scale-110" />
              {/* Photo frame */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-orange-200/60">
                <Image
                  src="/jorge-photo.jpg"
                  alt="Jorge — Tu mecánico de confianza"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>
              {/* Stars badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 bg-white rounded-2xl px-3 py-1.5 shadow-lg border border-orange-100 flex items-center gap-1.5"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight md:leading-tight mb-6"
            >
              Mecánica <br className="hidden sm:block" />
              <span className="gradient-text">de Jorge</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed mb-4"
            >
              Servicio de mecánica móvil{" "}
              <strong className="text-slate-800">rápido y confiable</strong> —
              directamente a tu puerta.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed"
            >
              Sin taller, sin esperas largas, sin estrés. Jorge llega donde estés.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-main-cta"
                className="group flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl shadow-lg shadow-orange-200/60 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>🔧</span>
                Solicita tu servicio
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="tel:+573043290402"
                id="hero-call-cta"
                className="flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-orange-600 bg-white border-2 border-orange-200 rounded-2xl shadow-sm hover:border-orange-400 hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                <span>📞</span>
                Llamar ahora
              </a>
            </motion.div>

            {/* No obligation tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-4 text-sm text-slate-500 font-medium"
            >
              ¡Llama o escribe{" "}
              <span className="text-orange-500 font-semibold">sin ningún compromiso!</span>
            </motion.p>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              animate={{
                y: [0, -8, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 4 + i * 0.7,
                repeat: Infinity,
                repeatType: "loop" as const,
                ease: "easeInOut" as const,
                delay: i * 0.7,
              }}
              className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-white/80 rounded-2xl px-5 py-3 shadow-md"
            >
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0`}
              >
                <badge.icon className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-700">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll down indicator ───────────────────────────────────────── */}
      <motion.button
        onClick={handleScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Descubrir</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>

      {/* ── Wave divider to services ────────────────────────────────────── */}
      <div className="wave-bottom">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#fffbf5"
          />
        </svg>
      </div>
    </section>
  );
}
