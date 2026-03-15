import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { getGalleryImageSrc, type GalleryItemType } from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";

export function GalleryDetail() {
  const { id } = useParams<{ id: string }>();
  const gallery = siteContent.gallery;
  const item = (id ? gallery.find((i) => i.id === id) : undefined) as GalleryItemType | undefined;

  const primarySrc = item ? getGalleryImageSrc(item) : "";
  const fallbackSrc = item ? item.src : "";
  const [imageSrc, setImageSrc] = useState(primarySrc);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    if (!id) return;
    const currentItem = gallery.find((i) => i.id === id);
    if (currentItem) {
      setImageSrc(getGalleryImageSrc(currentItem));
      setImageFailed(false);
    }
  }, [id, gallery]);

  const handleImageError = () => {
    if (imageSrc === primarySrc && fallbackSrc && fallbackSrc !== primarySrc) {
      setImageSrc(fallbackSrc);
    } else {
      setImageFailed(true);
    }
  };

  if (!item) {
    return (
      <div className="bg-background py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-2xl font-bold text-foreground">Image not found</h1>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/gallery">Back to Gallery</Link>
          </Button>
        </div>
      </div>
    );
  }

  const description = item.description ?? item.caption ?? "";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button asChild variant="secondary" size="sm" className="mb-6 -ml-2">
            <Link to="/gallery" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Link>
          </Button>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="overflow-hidden rounded-2xl border border-border bg-background shadow-card"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted sm:aspect-video">
            {imageFailed ? (
              <div className="flex h-full w-full items-center justify-center text-text-muted">
                <span>Image unavailable</span>
              </div>
            ) : (
              <img
                src={imageSrc}
                alt={item.alt ?? "Gallery image"}
                className="h-full w-full object-cover"
                onError={handleImageError}
              />
            )}
          </div>
          <div className="border-t border-border p-6 md:p-8">
            {item.caption && (
              <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                {item.caption}
              </h1>
            )}
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {description}
              </p>
            )}
          </div>
        </motion.article>
      </div>
    </div>
  );
}
