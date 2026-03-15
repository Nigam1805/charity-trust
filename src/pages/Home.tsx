import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siteContent } from "@/content/siteContent";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ImpactStats } from "@/components/ImpactStats";
import { GalleryGrid } from "@/components/GalleryGrid";
import { DonationSection } from "@/components/DonationSection";
import { Button } from "@/components/ui/button";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Home() {
  const { about } = siteContent;

  return (
    <>
      <Hero />
      <Services />
      <motion.section
        className="py-16 md:py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl"
            variants={sectionVariants}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Our Impact
          </motion.h2>
          <motion.p
            className="mx-auto mt-3 max-w-2xl text-center text-text-secondary"
            variants={sectionVariants}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            Together we are making a difference in the lives of those in need.
          </motion.p>
          <div className="mt-12">
            <ImpactStats stats={about.impactStats} />
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 md:py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl"
            variants={sectionVariants}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Gallery
          </motion.h2>
          <motion.p
            className="mx-auto mt-3 max-w-2xl text-center text-text-secondary"
            variants={sectionVariants}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            Glimpses of our work and the communities we serve.
          </motion.p>
          <div className="mt-12">
            <GalleryGrid preview maxPreviewItems={6} />
          </div>
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View All</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
      <DonationSection />
      <motion.section
        className="py-16 md:py-20 bg-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            Join Us in Making a Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Your support helps us serve more meals to patients, families, and children in need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
