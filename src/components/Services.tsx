import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  UtensilsCrossed,
  Users,
  Package,
  GraduationCap,
  Home,
  HeartHandshake,
  HandHeart,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  UtensilsCrossed,
  Users,
  Package,
  GraduationCap,
  Home,
  HeartHandshake,
  HandHeart,
  Stethoscope,
};

function ServiceImage({
  primarySrc,
  fallbackSrc,
  alt,
}: { primarySrc: string; fallbackSrc: string; alt: string }) {
  const [src, setSrc] = useState(primarySrc);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (src === primarySrc && fallbackSrc !== primarySrc) {
      setSrc(fallbackSrc);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div className="flex h-40 w-full items-center justify-center bg-secondary">
        <Package className="h-12 w-12 text-primary/40" aria-hidden />
      </div>
    );
  }
  return (
    <div className="relative h-40 w-full overflow-hidden bg-secondary">
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={handleError}
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}

export function Services() {
  const { services, servicesPage } = siteContent;

  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          {servicesPage.title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-text-secondary"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {servicesPage.subtitle}
        </motion.p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Package;
            const svc = service as {
              id: string;
              icon: string;
              title: string;
              description: string;
              quote: string;
              quoteAuthor: string;
              imagePlaceholder: string;
              localImage?: string;
            };
            const primarySrc = svc.localImage ?? svc.imagePlaceholder;
            const fallbackSrc = svc.imagePlaceholder;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-card-hover">
                  <ServiceImage primarySrc={primarySrc} fallbackSrc={fallbackSrc} alt={service.title} />
                  <CardHeader className="flex-1">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="border-t border-primary/10 bg-primary-light/30 pb-6 pt-4">
                    <blockquote className="space-y-2">
                      <p className="font-heading text-sm font-medium italic leading-relaxed text-foreground/90">
                        <span className="text-primary" aria-hidden>
                          “
                        </span>
                        {svc.quote}
                        <span className="text-primary" aria-hidden>
                          ”
                        </span>
                      </p>
                      <footer className="text-xs font-medium text-text-secondary not-italic">
                        — {svc.quoteAuthor}
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
