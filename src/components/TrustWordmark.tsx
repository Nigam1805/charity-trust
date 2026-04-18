import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";

/** Trust logo in a circular frame — footer and anywhere else a round badge is needed. */
export function TrustWordmark({ className }: { className?: string }) {
  const { logoUrl, trustName } = siteContent;
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/35 bg-white p-1.5 shadow-md",
        className
      )}
    >
      <img
        src={logoUrl}
        alt={trustName}
        decoding="async"
        className="h-full w-full object-contain object-center"
      />
    </div>
  );
}
