import { Mail, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { ContactForm } from "@/components/ContactForm";
import { MapSection } from "@/components/MapSection";

export function Contact() {
  const { contact } = siteContent;

  return (
    <div className="bg-background">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Get in touch for inquiries, partnerships, or to learn how you can help.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Contact Information</h2>
              <ul className="mt-6 space-y-4 text-text-secondary">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{contact.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href={`tel:${contact.phone}`} className="hover:text-primary">{contact.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a>
                </li>
              </ul>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
            <div>
              <MapSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
