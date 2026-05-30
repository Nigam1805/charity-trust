import { useState } from "react";
import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";
import { ImpactStats } from "@/components/ImpactStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  localImage?: string;
  imagePlaceholder: string;
};

type Volunteer = {
  id: string;
  name: string;
  localImage?: string;
  imagePlaceholder: string;
  imageFocus?: "top" | "upper" | "center";
};

const imageFocusClass: Record<NonNullable<Volunteer["imageFocus"]>, string> = {
  top: "object-top",
  upper: "object-[center_22%]",
  center: "object-center",
};

function PersonCard({ person }: { person: Person }) {
  const primarySrc = person.localImage || person.imagePlaceholder;
  const [src, setSrc] = useState(primarySrc);

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        {src ? (
          <img
            src={src}
            alt={person.name}
            className="h-full w-full object-cover object-top"
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

function VolunteerCard({ volunteer }: { volunteer: Volunteer }) {
  const primarySrc = volunteer.localImage || volunteer.imagePlaceholder;
  const [src, setSrc] = useState(primarySrc);
  const focus = imageFocusClass[volunteer.imageFocus ?? "top"];

  return (
    <Card className="overflow-hidden border-border/80 shadow-card">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        {src ? (
          <img
            src={src}
            alt={volunteer.name}
            className={cn("h-full w-full object-cover", focus)}
            onError={() => setSrc(volunteer.imagePlaceholder)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <User className="h-12 w-12" />
          </div>
        )}
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">{volunteer.name}</h3>
      </CardContent>
    </Card>
  );
}

export function About() {
  const { about, trustName, pages } = siteContent;
  const p = pages.about;
  const people = "people" in about ? about.people : [];
  const volunteers = "volunteers" in about ? about.volunteers : [];
  const coreValues =
    "coreValues" in about ? about.coreValues : ([] as readonly { title: string; body: string }[]);
  const whySupport =
    "whySupport" in about ? about.whySupport : ([] as readonly { title: string; body: string }[]);
  const peopleSubtitle = p.peopleSubtitleTemplate.replace("{trustName}", trustName);

  return (
    <div className="bg-background">
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="font-heading text-center text-3xl font-bold text-foreground md:text-left md:text-4xl">
            {p.title}
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-stretch lg:gap-12">
            {"inspirationImage" in about && about.inspirationImage ? (
              <figure className="w-full min-h-0">
                <div className="h-full min-h-[14rem] overflow-hidden rounded-2xl border border-border/80 bg-secondary shadow-card sm:min-h-[18rem] md:min-h-[22rem]">
                  <img
                    src={about.inspirationImage}
                    alt={"inspirationImageAlt" in about ? about.inspirationImageAlt : ""}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover object-[center_15%]"
                    decoding="async"
                  />
                </div>
              </figure>
            ) : null}
            <div className={cn("flex flex-col justify-center", !about.inspirationImage && "md:col-span-2")}>
              <p className="whitespace-pre-line text-lg leading-relaxed text-text-secondary">
                {about.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {coreValues.length > 0 && (
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl">
              {p.coreValuesTitle}
            </h2>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((item) => (
                <Card key={item.title} className="h-full border-border/80 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-text-secondary">{item.body}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {people.length > 0 && (
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl">
              {p.peopleTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
              {peopleSubtitle}
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
              {people.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          </div>
        </section>
      )}

      {volunteers.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl">
              {p.volunteersTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
              {p.volunteersSubtitle}
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
              {volunteers.map((volunteer) => (
                <VolunteerCard key={volunteer.id} volunteer={volunteer as Volunteer} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">{p.missionTitle}</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">{about.mission}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">{p.visionTitle}</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">{about.vision}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">{p.activitiesTitle}</h2>
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
          <h2 className="font-heading text-2xl font-bold text-foreground">{p.whyWeServeTitle}</h2>
          <p className="mt-4 text-text-secondary leading-relaxed">{about.whyWeServe}</p>
        </div>
      </section>

      {whySupport.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl">
              {p.whySupportTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
              {p.whySupportSubtitle}
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
              {whySupport.map((item) => (
                <Card key={item.title} className="h-full border-border/80 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-text-secondary">{item.body}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-center text-2xl font-bold text-primary-foreground md:text-3xl">
            {p.impactNumbersTitle}
          </h2>
          <div className="mt-12">
            <ImpactStats stats={about.impactStats} variant="dark" />
          </div>
        </div>
      </section>
    </div>
  );
}
