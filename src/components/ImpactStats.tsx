import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ImpactStat {
  label: string;
  value: string;
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const match = value.replace(/,/g, "").trim().match(/^([\d.]+)(.*)$/);
  const canAnimate = Boolean(match && /^[\d.]+$/.test(match[1]));
  const target = canAnimate && match ? parseInt(match[1], 10) || 0 : 0;
  const suffix = canAnimate && match ? match[2] || "" : "";
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || !canAnimate) return;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setDisplay(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, canAnimate]);

  if (!canAnimate) {
    return (
      <span ref={ref} className="tabular-nums">
        {value}
      </span>
    );
  }

  const formatted =
    target >= 1000 ? display.toLocaleString() : String(display);

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

interface ImpactStatsProps {
  stats: readonly ImpactStat[];
  variant?: "default" | "dark";
}

export function ImpactStats({ stats, variant = "default" }: ImpactStatsProps) {
  const isDark = variant === "dark";

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 ${isDark ? "gap-8" : "gap-6"}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className={
            isDark
              ? "text-center"
              : "rounded-xl border border-border/80 bg-background p-4 text-center shadow-card"
          }
        >
          <p
            className={
              isDark
                ? "text-3xl font-bold text-primary-foreground md:text-4xl"
                : "text-2xl font-bold text-primary"
            }
          >
            <AnimatedNumber value={stat.value} />
          </p>
          <p
            className={
              isDark
                ? "mt-1 text-lg text-primary-foreground/90"
                : "mt-1 text-sm font-medium text-text-secondary"
            }
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
