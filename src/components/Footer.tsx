import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/content/siteContent";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const { trustName, tagline, about, contact, donation } = siteContent;

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{trustName}</h3>
            <p className="mt-2 text-sm text-text-secondary">{tagline}</p>
            <p className="mt-2 line-clamp-3 text-sm text-text-secondary">{about.intro.slice(0, 120)}...</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-text-secondary hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${contact.phone}`} className="hover:text-primary">{contact.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Support Us</h3>
            <p className="mt-2 text-sm text-text-secondary">{donation.message}</p>
            <Link
              to="/donate"
              className="mt-4 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-card transition-all hover:bg-accent-hover hover:scale-105"
            >
              Donate Now
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8 text-center text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} {trustName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
