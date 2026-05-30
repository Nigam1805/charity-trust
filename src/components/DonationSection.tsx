import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Building2, Check, Copy, Smartphone } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DetailRowProps = {
  label: string;
  value: string;
  copyable?: boolean;
  mono?: boolean;
};

function DetailRow({ label, value, copyable, mono }: DetailRowProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="border-b border-border/70 py-3.5 last:border-b-0 last:pb-0 first:pt-0">
      <dt className="text-xs font-semibold uppercase tracking-wide text-text-muted">{label}</dt>
      <dd className="mt-1 flex items-start justify-between gap-3">
        <span
          className={cn(
            "min-w-0 flex-1 text-sm font-medium leading-snug text-foreground sm:text-base",
            mono && "break-all font-mono text-[0.8125rem] sm:text-sm"
          )}
        >
          {value}
        </span>
        {copyable && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-8 shrink-0 px-2.5 text-xs"
            onClick={handleCopy}
            aria-label={`Copy ${label}`}
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-accent" />
                Copied
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                Copy
              </>
            )}
          </Button>
        )}
      </dd>
    </div>
  );
}

function MethodCard({
  icon: Icon,
  title,
  children,
  delay = 0,
}: {
  icon: typeof Building2;
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
    >
      <Card className="h-full overflow-hidden border-border/80">
        <CardHeader className="border-b border-border/60 bg-primary/[0.04] pb-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Icon className="size-5" aria-hidden />
            </span>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-5">{children}</CardContent>
      </Card>
    </motion.div>
  );
}

export function DonationSection() {
  const { donation, legal } = siteContent;
  const L = donation.bankFieldLabels;
  const [upiCopied, setUpiCopied] = useState(false);

  async function copyUpiId() {
    try {
      await navigator.clipboard.writeText(donation.upiId);
      setUpiCopied(true);
      window.setTimeout(() => setUpiCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  const bankRows: DetailRowProps[] = [
    { label: L.bankName, value: donation.bankName },
    { label: L.accountName, value: donation.accountName },
    { label: L.accountNumber, value: donation.accountNumber, copyable: true, mono: true },
    { label: L.ifsc, value: donation.ifsc, copyable: true, mono: true },
  ];

  if ("branch" in donation && donation.branch) {
    bankRows.push({ label: L.branch, value: donation.branch });
  }

  return (
    <motion.section
      className="bg-secondary py-16 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            {donation.sectionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
            {donation.message}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">
            {donation.instructions}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          <MethodCard icon={Building2} title={donation.bankHeading} delay={0.05}>
            <dl>
              {bankRows.map((row) => (
                <DetailRow key={row.label} {...row} />
              ))}
            </dl>
          </MethodCard>

          <MethodCard icon={Smartphone} title={donation.upiHeading} delay={0.1}>
            <div className="flex flex-col items-center">
              <div className="rounded-xl border border-border bg-white p-3 shadow-sm ring-1 ring-black/[0.03]">
                <img
                  src={donation.qrCodeImage}
                  alt={donation.qrAlt}
                  className="size-44 object-contain sm:size-48"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent && !parent.querySelector(".qr-placeholder")) {
                      const span = document.createElement("span");
                      span.className =
                        "qr-placeholder flex size-44 items-center justify-center text-center text-sm text-text-secondary sm:size-48";
                      span.textContent = donation.qrLoadFailed;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
              <p className="mt-4 text-center text-sm text-text-secondary">
                {donation.upiSideTextBeforeId}
              </p>
              <div className="mt-3 w-full rounded-lg border border-border bg-muted/60 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                  {donation.upiIdLabel.replace(":", "")}
                </p>
                <div className="mt-1.5 flex items-start gap-2">
                  <p className="min-w-0 flex-1 break-all text-sm font-medium leading-snug text-foreground">
                    {donation.upiId}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 shrink-0 px-2.5 text-xs"
                    onClick={copyUpiId}
                    aria-label="Copy UPI ID"
                  >
                    {upiCopied ? (
                      <>
                        <Check className="size-3.5 text-accent" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </MethodCard>
        </div>

        <motion.div
          className="mx-auto mt-8 max-w-5xl rounded-xl border border-border/80 bg-background p-5 shadow-sm sm:p-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <h3 className="font-heading text-base font-semibold text-foreground sm:text-lg">
            {legal.donationHeading}
          </h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-muted/50 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                {legal.labels.registrationNo}
              </dt>
              <dd className="mt-1 font-mono text-sm font-medium text-foreground">{legal.registrationNo}</dd>
            </div>
            <div className="rounded-lg bg-muted/50 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                {legal.labels.pan}
              </dt>
              <dd className="mt-1 font-mono text-sm font-medium text-foreground">{legal.pan}</dd>
            </div>
            <div className="rounded-lg bg-muted/50 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                {legal.labels.urn80G}
              </dt>
              <dd className="mt-1 break-all font-mono text-sm font-medium text-foreground">{legal.urn80G}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-text-secondary sm:text-sm">{legal.donationNote}</p>
        </motion.div>

        <motion.p
          className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-text-secondary md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {donation.thankYouFooter}
        </motion.p>
      </div>
    </motion.section>
  );
}
