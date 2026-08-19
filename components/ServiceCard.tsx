"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
  index: number;
}

/**
 * ServiceCard — Simplified animation as requested.
 * - Underlines and highlights title on hover/in view
 */
export default function ServiceCard({
  icon: Icon,
  title,
  description,
  gradient,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      // Entry animation
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: delay * 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <motion.div
        // Simple hover and mobile-in-view effect
        whileHover={{ scale: 1.02, y: -5 }}
        whileInView={{ scale: [1, 1.02, 1], transition: { duration: 0.5 } }}
        viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
        className="group glass-card rounded-2xl p-6 md:p-8 cursor-default h-full flex flex-col gap-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
      >
        {/* Icon circle */}
        <div
          className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300 relative inline-block w-fit">
            {title}
            {/* Underline effect on hover */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </h3>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
