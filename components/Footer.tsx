"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Heart, Phone } from "lucide-react";
import Modal from "./Modal";
import Image from "next/image";

const WHATSAPP_NUMBER = "573043290402";

/**
 * Footer — Simple, clean footer with links and legal note.
 */
export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const year = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-400 overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,20 C480,60 960,0 1440,40 L1440,0 L0,0 Z"
            fill="#fffbf5"
          />
        </svg>
      </div>

      <div className="relative z-10 pt-20 pb-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-md p-1">
                <Image src="/logo.png" alt="Mecánica de Jorge" width={32} height={32} className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <span className="font-bold text-lg text-white">
                Mecánica de Jorge
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Servicio de mecánica móvil profesional. Rápido, honesto y
              confiable — directo a tu puerta.
            </p>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              +57 304 329 0402
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">
              Navegación
            </h4>
            <nav className="flex flex-col gap-2 items-start">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Servicios", href: "#servicios" },
                { label: "Sobre Jorge", href: "#sobre-jorge" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-sm hover:text-orange-400 transition-colors mt-2 text-left text-slate-500"
              >
                Términos y condiciones
              </button>
            </nav>
          </div>

          {/* Services quick list */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">
              Servicios Populares
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                "Cambio de Aceite",
                "Reemplazo de Batería",
                "Pastillas de Freno",
                "Diagnóstico General",
                "Llanta Ponchada",
                "Revisión de Alternador",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {year} Mecánica de Jorge. Todos los derechos reservados.</p>
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex items-center gap-1"
          >
            Hecho con <Heart className="w-3.5 h-3.5 fill-orange-500 text-orange-500" /> para
            clientes que merecen lo mejor
          </motion.p>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Términos y Condiciones"
      >
        <ul className="list-disc pl-5 space-y-4 text-sm md:text-base leading-relaxed text-slate-600">
          <li>
            <strong>Garantía:</strong> La garantía de nuestro servicio depende del trabajo específico realizado. Ten en cuenta que si el trabajo es intervenido posteriormente en otro taller o por un tercero, la garantía se pierde de forma inmediata.
          </li>
          <li>
            <strong>Zonas de servicio y seguridad:</strong> Nos reservamos el derecho de declinar el servicio o decidir no asistir a una ubicación si consideramos que existe un riesgo para nuestra propia seguridad.
          </li>
          <li>
            <strong>Acuerdos y precios:</strong> Todo el alcance del servicio, los costos y los detalles se acordarán de forma transparente mediante llamada telefónica o en persona al momento de revisar el vehículo.
          </li>
          <li>
            <strong>Diagnósticos:</strong> Las revisiones y diagnósticos presenciales tienen un costo por el tiempo, traslado y uso de equipo. Este diagnóstico siempre se cobra, especialmente si después de recibirlo decides no continuar con la reparación.
          </li>
          <li>
            <strong>Política de respeto:</strong> El trato entre el mecánico y el cliente siempre se debe manejar con el mayor respeto adecuado. Cualquier tipo de falta de respeto puede ser motivo para cancelar el servicio.
          </li>
        </ul>
      </Modal>
    </footer>
  );
}
