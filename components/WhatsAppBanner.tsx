"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "573043290402";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Jorge, necesito una consulta de mecánica..."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

interface WhatsAppBannerProps {
  message?: string;
  subtext?: string;
}

/**
 * WhatsAppBanner — Reusable inline CTA banner with WhatsApp button.
 * Includes the required "sin ningún compromiso" phrase.
 */
export default function WhatsAppBanner({
  message = "¡Llama o escribe sin ningún compromiso!",
  subtext = "Resolvemos tu duda rápido y sin costo.",
}: WhatsAppBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      // Subtle breathing animation
      animate={{
        boxShadow: [
          "0 8px 32px rgba(249,115,22,0.12)",
          "0 12px 40px rgba(249,115,22,0.22)",
          "0 8px 32px rgba(249,115,22,0.12)",
        ],
      }}
      style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-400 to-amber-400 p-0.5 shadow-lg"
    >
      <div className="rounded-[22px] bg-gradient-to-br from-orange-50 to-yellow-50 px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-xl md:text-2xl font-bold text-slate-800 mb-1">
            {message}
          </p>
          <p className="text-slate-500 text-sm">{subtext}</p>
        </div>

        {/* CTA */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id={`whatsapp-banner-${message.slice(0, 10).replace(/\s/g, "-")}`}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold rounded-2xl shadow-md whitespace-nowrap flex-shrink-0"
        >
          <MessageCircle className="w-5 h-5" />
          Escribir por WhatsApp
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
        </motion.a>
      </div>
    </motion.div>
  );
}
