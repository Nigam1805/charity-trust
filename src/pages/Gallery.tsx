import { motion } from "framer-motion";
import { siteContent } from "@/content/siteContent";
import { GalleryGrid } from "@/components/GalleryGrid";

export function Gallery() {
  const { gallery, pages } = siteContent;
  const g = pages.gallery;
  const countLine = g.galleryCountLine.replace("{count}", String(gallery.length));

  return (
    <div className="bg-background">
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.h1
            className="font-heading text-3xl font-bold text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {g.title}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-text-secondary md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            {g.intro}
          </motion.p>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-text-secondary"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            {g.body}
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            {g.gridTitle}
          </motion.h2>
          <motion.p
            className="mx-auto mt-3 max-w-2xl text-center text-text-secondary"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {countLine}
          </motion.p>
          <div className="mt-12">
            <GalleryGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
