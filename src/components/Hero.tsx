import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { headline, subtext, ctaPrimary, ctaSecondary } = siteContent.hero;

  return (
    <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {headline}
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {subtext}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Button asChild variant="accent" size="lg" className="min-w-[160px]">
            <Link to="/donate">{ctaPrimary}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[160px]">
            <Link to="/about">{ctaSecondary}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
