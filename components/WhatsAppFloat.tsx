"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "573043290402";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Jorge, necesito una consulta de mecánica..."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

/**
 * WhatsAppFloat — Sticky floating WhatsApp button.
 * Appears after the user scrolls 300px.
 * Shows a tooltip "bubble" after a short delay.
 */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-show tooltip once, 3s after the button appears
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setTooltipOpen(true), 3000);
    const hide = setTimeout(() => setTooltipOpen(false), 7000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2"
        >
          {/* Tooltip bubble */}
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                className="relative bg-white rounded-2xl shadow-xl border border-orange-100 px-4 py-3 max-w-[200px] text-right"
              >
                <button
                  onClick={() => setTooltipOpen(false)}
                  className="absolute top-1.5 right-1.5 text-slate-300 hover:text-slate-500"
                  aria-label="Cerrar"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <p className="text-xs font-bold text-slate-800 mb-0.5 pr-3">
                  ¡Hola! 👋
                </p>
                <p className="text-xs text-slate-500 leading-snug">
                  ¿Necesitas ayuda con tu auto?
                </p>
                {/* Pointer */}
                <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-orange-100 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp button */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-btn"
            aria-label="Contactar por WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
            className="w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg shadow-green-300/60 whatsapp-pulse"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
