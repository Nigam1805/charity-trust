import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  amount?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  const y = direction === "up" ? 24 : direction === "down" ? -24 : 0;
  const x = direction === "left" ? 24 : direction === "right" ? -24 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
