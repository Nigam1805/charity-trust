import { motion } from "framer-motion";
import { siteContent } from "@/content/siteContent";

export function DonationSection() {
  const { donation } = siteContent;
  const L = donation.bankFieldLabels;

  return (
    <motion.section
      className="bg-secondary py-16 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-center text-2xl font-bold text-foreground md:text-3xl">
          {donation.sectionTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-text-secondary">
          {donation.message}
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-center text-text-secondary">
          {donation.instructions}
        </p>

        <div className="mx-auto mt-10 max-w-2xl space-y-8">
          <motion.div
            className="rounded-lg border border-border bg-background p-6 shadow-sm"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-heading text-lg font-semibold text-foreground">{donation.bankHeading}</h3>
            <dl className="mt-4 space-y-2 text-base">
              <div className="flex justify-between gap-4">
                <dt className="text-text-secondary">{L.bankName}</dt>
                <dd className="max-w-[55%] break-words text-right font-medium text-foreground">
                  {donation.bankName}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-secondary">{L.accountName}</dt>
                <dd className="max-w-[55%] break-words text-right font-medium text-foreground">
                  {donation.accountName}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="shrink-0 text-text-secondary">{L.accountNumber}</dt>
                <dd className="max-w-[55%] break-all text-right font-mono font-medium text-foreground">
                  {donation.accountNumber}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-secondary">{L.ifsc}</dt>
                <dd className="max-w-[55%] break-all text-right font-mono font-medium text-foreground">
                  {donation.ifsc}
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            className="rounded-lg border border-border bg-background p-6 shadow-sm"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3 className="font-heading text-lg font-semibold text-foreground">{donation.upiHeading}</h3>
            <p className="mt-2 text-text-secondary">
              {donation.upiIdLabel}{" "}
              <span className="break-all font-mono font-medium text-foreground">{donation.upiId}</span>
            </p>
            <div className="mt-4 flex min-w-0 flex-col items-center gap-4 sm:flex-row sm:items-start">
              <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted p-1.5 sm:h-52 sm:w-52">
                <img
                  src={donation.qrCodeImage}
                  alt={donation.qrAlt}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent && !parent.querySelector(".qr-placeholder")) {
                      const span = document.createElement("span");
                      span.className = "qr-placeholder text-center text-sm text-text-secondary";
                      span.textContent = donation.qrLoadFailed;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
              <p className="min-w-0 flex-1 text-center text-sm text-text-secondary sm:pt-1 sm:text-left">
                {donation.upiSideTextBeforeId}{" "}
                <span className="break-all font-mono font-medium text-foreground">{donation.upiId}</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-center text-text-secondary"
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
