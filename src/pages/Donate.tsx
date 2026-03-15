import { DonationSection } from "@/components/DonationSection";

export function Donate() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Donate
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
            Your contribution helps us provide nutritious meals to hospital patients, school children, and families in need.
          </p>
        </div>
      </section>
      <DonationSection />
    </div>
  );
}
