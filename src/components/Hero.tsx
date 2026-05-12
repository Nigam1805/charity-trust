import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const hero = siteContent.hero;
  const { headline, subtext, ctaPrimary, ctaSecondary } = hero;
  const bgUrl =
    "backgroundImage" in hero && typeof hero.backgroundImage === "string" && hero.backgroundImage.length > 0
      ? hero.backgroundImage
      : null;
  /** Light illustrative hero (e.g. watercolor) — softer overlay + dark text in frosted panel. */
  const lightHeroArt = Boolean(bgUrl?.includes("hero-background"));

  const motionDur = (s: number) => (prefersReducedMotion ? 0 : s);
  const motionDelay = (s: number) => (prefersReducedMotion ? 0 : s);

  return (
    <section
      className={cn(
        "relative flex overflow-hidden",
        lightHeroArt
          ? "min-h-[min(88vh,44rem)] flex-col md:min-h-[min(90vh,48rem)]"
          : "min-h-[22rem] items-center py-20 md:min-h-[28rem] md:py-28 lg:min-h-[32rem]",
        !bgUrl && "bg-hero-gradient"
      )}
    >
      {bgUrl ? (
        <>
          <img
            src={bgUrl}
            alt=""
            width={1920}
            height={1080}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              lightHeroArt ? "object-[center_30%] md:object-[center_24%] lg:object-[center_22%]" : "object-[center_35%]"
            )}
            decoding="async"
            fetchPriority="high"
            sizes="100vw"
          />
          {lightHeroArt ? (
            <>
              {/* Soft “ink well” behind headline so type stays legible on busy watercolor */}
              <div
                className="pointer-events-none absolute inset-x-0 top-[18%] z-[1] h-[52%] bg-[radial-gradient(ellipse_95%_70%_at_50%_45%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.35)_42%,transparent_68%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[26%] bg-gradient-to-b from-white/40 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[68%] bg-gradient-to-t from-background via-background/97 to-transparent"
                aria-hidden
              />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/88 via-primary/50 to-[hsl(174_45%_28%/0.55)]"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,transparent_0%,hsl(var(--primary)/0.12)_100%)]"
                aria-hidden
              />
            </>
          )}
        </>
      ) : (
        <>
          <div
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-leaf/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />
        </>
      )}

      <div
        className={cn(
          "relative z-10 container mx-auto px-4 text-center",
          lightHeroArt ? "mt-auto max-w-3xl pb-10 pt-6 md:max-w-4xl md:pb-14 md:pt-8" : "text-primary-foreground"
        )}
      >
        <motion.h1
          className={cn(
            "font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:tracking-tight",
            lightHeroArt
              ? "text-foreground [text-shadow:0_0_28px_rgba(255,255,255,0.95),0_0_2px_rgba(255,255,255,1),0_2px_14px_rgba(248,246,243,0.9)]"
              : "drop-shadow-md md:drop-shadow-lg"
          )}
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDur(0.55), ease: [0.25, 0.4, 0.25, 1] }}
        >
          {headline}
        </motion.h1>
        <motion.p
          className={cn(
            "mx-auto mt-4 max-w-xl text-base leading-snug sm:mt-5 sm:text-lg md:mt-6 md:max-w-2xl md:text-xl md:leading-snug",
            lightHeroArt ? "whitespace-pre-line text-text-secondary" : "text-primary-foreground/92 drop-shadow"
          )}
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDur(0.48), delay: motionDelay(0.1), ease: [0.25, 0.4, 0.25, 1] }}
        >
          {subtext}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-11 sm:gap-4"
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionDur(0.48), delay: motionDelay(0.22), ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Button asChild variant="default" size="lg" className="min-w-[140px] shadow-lg sm:min-w-[160px]">
            <Link to="/donate">{ctaPrimary}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className={cn(
              "min-w-[140px] sm:min-w-[160px]",
              lightHeroArt
                ? "border border-primary/35 bg-white/25 text-primary shadow-sm backdrop-blur-[2px] hover:border-primary/60 hover:bg-white/45 hover:text-primary"
                : "border-2 border-white/90 bg-white/5 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            )}
          >
            <Link to="/about">{ctaSecondary}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
