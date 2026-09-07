import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type DimProps = {
  label?: string;
  className?: string;
} & HTMLMotionProps<"div">;

/** A measured rule with end ticks, like a drawing dimension line. */
export function DimensionLine({ label, className = "", ...rest }: DimProps) {
  return (
    <motion.div
      className={`flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-blueprint-muted select-none ${className}`}
      {...rest}
    >
      <span className="block w-1.5 h-px bg-blueprint-line" />
      <span className="block w-px h-2 bg-blueprint-line" />
      <span className="block h-px flex-1 bg-blueprint-line" />
      { label && <span className="whitespace-nowrap">{ label }</span> }
      <span className="block h-px flex-1 bg-blueprint-line" />
      <span className="block w-px h-2 bg-blueprint-line" />
      <span className="block w-1.5 h-px bg-blueprint-line" />
    </motion.div>
  );
}

/** A rule that draws in from the left (plotter effect). */
export function DrawRule({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={`block h-px bg-blueprint-line ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ transformOrigin: "left" }}
    />
  );
}

/** Corner registration marks framing a drawing sheet. */
export function RegistrationCorners({ className = "" }: { className?: string }) {
  const corner = "absolute w-4 h-4 border-blueprint-line/60";
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <span className={`${corner} top-0 left-0 border-t-1 border-l-1`} />
      <span className={`${corner} top-0 right-0 border-t-1 border-r-1`} />
      <span className={`${corner} bottom-0 left-0 border-b-1 border-l-1`} />
      <span className={`${corner} bottom-0 right-0 border-b-1 border-r-1`} />
    </div>
  );
}

/** A stamped part-number tag in honey amber. */
export function Stamp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 border-1 border-amber-paper px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-amber-deep ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      { children }
    </motion.span>
  );
}

/** A leader-callout label that points at its subject. */
export function Callout({
  children,
  className = "",
  align = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "right";
  delay?: number;
}) {
  return (
    <motion.span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-blueprint-ink ${className}`}
      initial={{ opacity: 0, x: align === "right" ? 8 : -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <span className={`block h-px w-5 ${align === "right" ? "order-1" : ""} bg-blueprint-line/60`} />
      <span className={`block w-px h-2.5 ${align === "right" ? "order-1" : ""} bg-blueprint-line/60`} />
      { children }
    </motion.span>
  );
}
