import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  preview?: boolean;
  maxPreviewItems?: number;
}

export interface GalleryItemType {
  id: string;
  src: string;
  localImage?: string;
  alt: string;
  caption: string;
  description?: string;
}

type GalleryItem = (typeof siteContent.gallery)[number];

export function getGalleryImageSrc(item: GalleryItemType) {
  return item.localImage ?? item.src;
}

function GalleryCard({
  item,
  index,
}: {
  item: GalleryItem;
  index: number;
}) {
  const itemTyped = item as GalleryItemType;
  const primarySrc = getGalleryImageSrc(itemTyped);
  const [src, setSrc] = useState(primarySrc);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (src === primarySrc && itemTyped.src !== primarySrc) setSrc(itemTyped.src);
    else setFailed(true);
  };

  if (failed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
      >
        <Link
          to={`/gallery/${item.id}`}
          className="group flex aspect-[4/3] w-full flex-col items-center justify-center rounded-xl border-2 border-border bg-secondary text-text-muted transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
        >
          <span className="text-sm">Image</span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <Link
        to={`/gallery/${item.id}`}
        className={cn(
          "group relative block overflow-hidden rounded-xl border-2 border-border bg-background shadow-card",
          "transition-all duration-300 ease-out",
          "hover:border-primary hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-1",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:border-primary"
        )}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
          <img
            src={src}
            alt={item.alt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            onError={handleError}
          />
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-2 bg-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
              "text-primary-foreground"
            )}
          >
            <span className="text-sm font-medium">View details</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
        {item.caption && (
          <p className="border-t border-border bg-background p-3 text-left text-sm font-medium text-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-muted/50">
            {item.caption}
          </p>
        )}
      </Link>
    </motion.div>
  );
}

export function GalleryGrid({ preview = false, maxPreviewItems = 6 }: GalleryGridProps) {
  const gallery = siteContent.gallery;
  const items = preview ? gallery.slice(0, maxPreviewItems) : gallery;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <GalleryCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
