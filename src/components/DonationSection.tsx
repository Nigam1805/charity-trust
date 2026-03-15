import { motion } from "framer-motion";
import { siteContent } from "@/content/siteContent";

export function DonationSection() {
  const { donation } = siteContent;

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
          Support Our Cause
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
            <h3 className="font-heading text-lg font-semibold text-foreground">Bank Transfer</h3>
            <dl className="mt-4 space-y-2 text-base">
              <div className="flex justify-between gap-4">
                <dt className="text-text-secondary">Bank Name</dt>
                <dd className="font-medium text-foreground">{donation.bankName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-secondary">Account Name</dt>
                <dd className="font-medium text-foreground">{donation.accountName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-secondary">Account Number</dt>
                <dd className="font-mono font-medium text-foreground">{donation.accountNumber}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-text-secondary">IFSC Code</dt>
                <dd className="font-mono font-medium text-foreground">{donation.ifsc}</dd>
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
            <h3 className="font-heading text-lg font-semibold text-foreground">UPI</h3>
            <p className="mt-2 text-text-secondary">UPI ID: {donation.upiId}</p>
            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <div className="flex h-40 w-40 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted">
                <img
                  src={donation.qrCodeImage}
                  alt="UPI QR Code for donations"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent && !parent.querySelector(".qr-placeholder")) {
                      const span = document.createElement("span");
                      span.className = "qr-placeholder text-center text-sm text-text-secondary";
                      span.textContent = "QR code image";
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
              <p className="text-sm text-text-secondary">
                Scan with any UPI app to donate. Or use UPI ID: {donation.upiId}
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
          Thank you for your generosity. Every contribution helps us serve more meals.
        </motion.p>
      </div>
    </motion.section>
  );
}
