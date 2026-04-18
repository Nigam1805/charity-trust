import { DonationSection } from "@/components/DonationSection";
import { siteContent } from "@/content/siteContent";

export function Donate() {
  const p = siteContent.pages.donate;
  return (
    <div className="bg-background">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {p.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
            {p.intro}
          </p>
        </div>
      </section>
      <DonationSection />
    </div>
  );
}
