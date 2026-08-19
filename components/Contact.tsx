"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import Modal from "./Modal";

const WHATSAPP_NUMBER = "573043290402";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Jorge, necesito una consulta de mecánica..."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const contactCards = [
  {
    icon: Phone,
    title: "Llámanos",
    value: "+57 304 329 0402",
    sub: "Lunes–Sábado 8am–5pm",
    href: "tel:+573043290402",
    gradient: "from-orange-400 to-orange-500",
    id: "contact-phone-card",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Escribe ahora",
    sub: "Respuesta en minutos",
    href: WHATSAPP_URL,
    gradient: "from-green-400 to-green-500",
    id: "contact-whatsapp-card",
  },
  {
    icon: MapPin,
    title: "Área de servicio",
    value: "Toda la ciudad",
    sub: "Vamos hasta donde estés",
    href: "#",
    gradient: "from-amber-400 to-orange-400",
    id: "contact-area-card",
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun–Sáb",
    sub: "8:00 AM – 5:00 PM",
    href: "#",
    gradient: "from-orange-300 to-yellow-400",
    id: "contact-hours-card",
  },
];

const reviews = [
  {
    name: "María G.",
    text: "Jorge me salvó el día cuando se me ponchó la llanta en el trabajo. En 20 minutos ya estaba listo. ¡Súper recomendado!",
    stars: 5,
  },
  {
    name: "Carlos M.",
    text: "Llevaba meses con el check engine y en un taller me querían cobrar una fortuna. Jorge lo diagnosticó en una hora y fue exactamente lo que dijo.",
    stars: 5,
  },
  {
    name: "Ana L.",
    text: "Muy honesto y profesional. Me explicó todo con detalle antes de empezar. Ya es mi mecánico de cabecera.",
    stars: 5,
  },
];

/**
 * Contact section — Final CTA with contact cards, reviews, and WhatsApp button.
 */
export default function Contact() {
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-[#fffbf5]">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            Contáctanos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            ¿Listo para solucionar{" "}
            <span className="gradient-text">tu auto?</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            ¡Llama o escribe{" "}
            <strong className="text-orange-500">sin ningún compromiso!</strong>{" "}
            Te damos un presupuesto honesto antes de comenzar.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactCards.map((card, i) => {
            const isAreaCard = card.id === "contact-area-card";
            return (
              <motion.a
                key={card.id}
                href={isAreaCard ? "#" : card.href}
                id={card.id}
                onClick={isAreaCard ? (e) => { e.preventDefault(); setIsCityModalOpen(true); } : undefined}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="glass-card rounded-3xl p-6 flex flex-col items-center gap-4 text-center shadow-md shadow-orange-100/60 hover:shadow-xl transition-all cursor-pointer border border-slate-100"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md`}
                >
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest">
                    {card.title}
                  </p>
                  <p className="text-base font-bold text-slate-800">{card.value}</p>
                  <p className="text-sm text-slate-500">{card.sub}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 text-center mb-16 shadow-2xl"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-orange-400/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-4xl mb-4">🔧</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Tu auto te necesita.{" "}
              <span className="text-orange-400">Jorge también.</span>
            </h3>
            <p className="text-slate-300 text-base mb-8 max-w-lg mx-auto">
              No esperes más. Escríbele ahora y recibe atención en el mismo día.
              ¡Sin filas, sin taller, sin estrés!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-main-whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-[#25d366] text-white font-bold rounded-2xl shadow-lg shadow-green-900/40 hover:shadow-xl w-full sm:w-auto whatsapp-pulse"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Escribir por WhatsApp</span>
              </motion.a>
              <motion.a
                href="tel:+573043290402"
                id="contact-main-call"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors w-full sm:w-auto"
              >
                <Phone className="w-6 h-6" />
                <span>Llamar ahora</span>
              </motion.a>
            </div>

            <p className="mt-8 text-slate-400 text-sm">
              ¡Llama o escribe{" "}
              <span className="text-orange-400 font-semibold">sin ningún compromiso!</span>
            </p>
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-800 mb-10">
            Lo que dicen nuestros clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15
                }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
                className="glass-card rounded-3xl p-6 md:p-8 text-left shadow-sm hover:shadow-lg shadow-orange-100/50 transition-all border border-slate-100"
              >
                {/* Stars */}
                <div className="flex gap-1.5 mb-4">
                  {[...Array(review.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-sm md:text-base font-bold text-slate-800">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* City Modal */}
      <Modal
        isOpen={isCityModalOpen}
        onClose={() => setIsCityModalOpen(false)}
        title="Área de servicio"
      >
        <p>
          El servicio de mecánica a domicilio se maneja exclusivamente dentro de la ciudad de <strong>Cali</strong> y sus alrededores cercanos.
        </p>
        <p>
          Si te encuentras en un municipio aledaño, por favor comunícate con nosotros por WhatsApp para confirmar disponibilidad y un posible recargo por desplazamiento.
        </p>
      </Modal>
    </section>
  );
}
