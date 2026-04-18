import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { TrustWordmark } from "@/components/TrustWordmark";

export function Footer() {
  const { trustName, tagline, about, contact, donation, nav, footerLabels } = siteContent;

  return (
    <footer className="border-t border-white/10 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <TrustWordmark className="h-24 w-24 sm:h-28 sm:w-28" />
            <h3 className="mt-2 font-heading text-lg font-semibold leading-snug">
              {trustName}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/85">{tagline}</p>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-primary-foreground/75">
              {about.intro.slice(0, 120)}...
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold">{footerLabels.quickLinks}</h3>
            <ul className="mt-4 space-y-2">
              {nav.links.map(({ href, label }) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-primary-foreground/80 transition-colors hover:text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold">{footerLabels.contact}</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${contact.phone}`} className="transition-colors hover:text-accent">{contact.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">{contact.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold">{footerLabels.supportUs}</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">{donation.message}</p>
            <Link
              to="/donate"
              className="mt-4 inline-block rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110 hover:shadow-lg"
            >
              {footerLabels.donateNow}
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-8 text-center text-sm text-primary-foreground/70">
          &copy; {new Date().getFullYear()} {trustName}. {footerLabels.rightsReserved}
        </div>
      </div>
    </footer>
  );
}
