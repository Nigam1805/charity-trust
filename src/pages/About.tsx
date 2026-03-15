import { useState } from "react";
import { siteContent } from "@/content/siteContent";
import { ImpactStats } from "@/components/ImpactStats";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  localImage?: string;
  imagePlaceholder: string;
};

function PersonCard({ person }: { person: Person }) {
  const primarySrc = person.localImage || person.imagePlaceholder;
  const [src, setSrc] = useState(primarySrc);

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square w-full bg-muted">
        {src ? (
          <img
            src={src}
            alt={person.name}
            className="h-full w-full object-cover"
            onError={() => setSrc(person.imagePlaceholder)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <User className="h-16 w-16" />
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground">{person.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed">{person.bio}</p>
      </CardContent>
    </Card>
  );
}

export function About() {
  const { about } = siteContent;
  const people = "people" in about ? about.people : [];

  return (
    <div className="bg-background">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            About Us
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">{about.intro}</p>
        </div>
      </section>

      {people.length > 0 && (
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl">
              Our People
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
              The trustees and team behind Care & Share Trust.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {people.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">{about.mission}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">{about.vision}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">Our Activities</h2>
          <ul className="mt-6 space-y-3 text-text-secondary">
            {about.activities.map((activity, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-primary font-medium">•</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">Why We Serve</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">{about.whyWeServe}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-center text-2xl font-bold text-primary-foreground md:text-3xl">
            Impact in Numbers
          </h2>
          <div className="mt-12">
            <ImpactStats stats={about.impactStats} variant="dark" />
          </div>
        </div>
      </section>
    </div>
  );
}
