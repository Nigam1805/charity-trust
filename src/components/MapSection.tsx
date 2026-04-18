import { useState, useEffect } from "react";
import { siteContent } from "@/content/siteContent";

export function MapSection() {
  const { contact, mapSection } = siteContent;
  const [mapLoaded, setMapLoaded] = useState(false);
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapLocation)}&output=embed`;

  useEffect(() => {
    const fallback = setTimeout(() => setMapLoaded(true), 5000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <section className="py-8 md:py-12" aria-label="Location map">
      <div className="container mx-auto px-4">
        <h2 className="font-heading mb-4 text-xl font-semibold text-foreground">{mapSection.title}</h2>
        <div className="relative overflow-hidden rounded-lg border border-border">
          {/* Shimmer placeholder – same size as map */}
          <div
            className={`absolute inset-0 h-[400px] animate-shimmer transition-opacity duration-300 ${
              mapLoaded ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            aria-hidden={mapLoaded}
          >
            <div className="flex h-full items-center justify-center text-text-muted">
              <span className="text-sm">{mapSection.loading}</span>
            </div>
          </div>

          <iframe
            src={embedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={mapSection.iframeTitle}
            className={`block transition-opacity duration-300 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setMapLoaded(true)}
          />
        </div>
        <a
          href={contact.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg bg-primary px-5 py-2.5 text-base font-medium text-primary-foreground shadow-card transition-all hover:bg-primary-hover"
        >
          Open Location in Google Maps
        </a>
      </div>
    </section>
  );
}
