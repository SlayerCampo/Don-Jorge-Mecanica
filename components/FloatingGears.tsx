"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * FloatingGears — Epic animated background cogwheels.
 * Uses scroll-linked rotation to create a premium kinetic feel.
 * Completely decorative; pointer-events are disabled.
 */
export default function FloatingGears() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Primary large gear rotates clockwise with scroll
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // Secondary gear rotates counter-clockwise
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  // Tertiary small gear rotates faster clockwise
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 540]);

  const GearSVG = ({
    size,
    teeth,
    color = "#f97316",
  }: {
    size: number;
    teeth: number;
    color?: string;
  }) => {
    const r = size / 2;
    const innerR = r * 0.55;
    const holeR = r * 0.2;
    const toothHeight = r * 0.22;
    const toothWidth = (2 * Math.PI * r) / teeth / 2.5;

    // Build gear tooth path
    const points: string[] = [];
    const format = (val: number) => val.toFixed(3);
    
    for (let i = 0; i < teeth; i++) {
      const angle = (i / teeth) * 2 * Math.PI;
      const nextAngle = ((i + 0.5) / teeth) * 2 * Math.PI;
      const nextNextAngle = ((i + 1) / teeth) * 2 * Math.PI;

      const cos0 = Math.cos(angle - toothWidth / r / 2);
      const sin0 = Math.sin(angle - toothWidth / r / 2);
      const cos1 = Math.cos(angle + toothWidth / r / 2);
      const sin1 = Math.sin(angle + toothWidth / r / 2);
      const cos2 = Math.cos(nextAngle - toothWidth / r / 2);
      const sin2 = Math.sin(nextAngle - toothWidth / r / 2);
      const cos3 = Math.cos(nextAngle + toothWidth / r / 2);
      const sin3 = Math.sin(nextAngle + toothWidth / r / 2);
      const cosV = Math.cos(nextNextAngle - toothWidth / r / 2);
      const sinV = Math.sin(nextNextAngle - toothWidth / r / 2);

      if (i === 0) points.push(`M ${format(r + innerR * cos0)} ${format(r + innerR * sin0)}`);
      points.push(`L ${format(r + (innerR + toothHeight) * cos1)} ${format(r + (innerR + toothHeight) * sin1)}`);
      points.push(`L ${format(r + (innerR + toothHeight) * cos2)} ${format(r + (innerR + toothHeight) * sin2)}`);
      points.push(`L ${format(r + innerR * cos3)} ${format(r + innerR * sin3)}`);
      if (i < teeth - 1) {
        points.push(`L ${format(r + innerR * cosV)} ${format(r + innerR * sinV)}`);
      }
    }
    points.push("Z");

    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gear body */}
        <path d={points.join(" ")} fill={color} />
        {/* Centre hole */}
        <circle cx={r} cy={r} r={holeR} fill="white" />
        {/* Hub ring */}
        <circle cx={r} cy={r} r={holeR * 1.4} fill="none" stroke={color} strokeWidth={holeR * 0.3} />
      </svg>
    );
  };

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Large gear — top right */}
      <motion.div
        className="absolute -top-32 -right-32 gear-bg"
        style={{ rotate: rotate1 }}
      >
        <GearSVG size={380} teeth={16} color="#f97316" />
      </motion.div>

      {/* Medium gear — bottom left */}
      <motion.div
        className="absolute -bottom-24 -left-24 gear-bg"
        style={{ rotate: rotate2 }}
      >
        <GearSVG size={280} teeth={12} color="#fb923c" />
      </motion.div>

      {/* Small gear — mid right */}
      <motion.div
        className="absolute top-1/2 -right-16 gear-bg"
        style={{ rotate: rotate3, translateY: "-50%" }}
      >
        <GearSVG size={180} teeth={10} color="#fbbf24" />
      </motion.div>

      {/* Extra tiny gear — mid left */}
      <motion.div
        className="absolute top-1/3 -left-8 gear-bg"
        style={{ rotate: rotate1, translateY: "-50%" }}
      >
        <GearSVG size={120} teeth={8} color="#f97316" />
      </motion.div>
    </div>
  );
}
