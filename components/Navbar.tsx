"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X, Wrench } from "lucide-react";
import Image from "next/image";

const WHATSAPP_NUMBER = "573043290402";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Jorge, necesito una consulta de mecánica..."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Jorge", href: "#sobre-jorge" },
  { label: "Contacto", href: "#contacto" },
];

/**
 * Navbar — Sticky, transparent-to-opaque on scroll.
 * Includes a mobile hamburger menu and a prominent CTA button.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-orange-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform p-1">
                <Image src="/logo.png" alt="Mecánica de Jorge" width={32} height={32} className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <span className="font-bold text-lg text-slate-800 tracking-tight leading-tight">
                Mecánica<span className="text-orange-500"> de Jorge</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+5215512345678"
                id="navbar-call-btn"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200 rounded-full hover:border-orange-400 hover:text-orange-500 transition-all"
              >
                <Phone className="w-4 h-4" />
                Llamar
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="navbar-whatsapp-btn"
                className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-orange-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-b border-orange-100 shadow-xl px-4 pb-6 pt-4"
          >
            <nav className="flex flex-col gap-1 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 px-4 text-base font-medium text-slate-700 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+573043290402"
                id="mobile-call-btn"
                className="flex items-center justify-center gap-2 py-3 font-semibold text-slate-700 border border-slate-200 rounded-xl hover:border-orange-400 hover:text-orange-500 transition-all"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-whatsapp-btn"
                className="flex items-center justify-center gap-2 py-3 font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Escribir por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
