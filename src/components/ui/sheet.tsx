import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface SheetContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

function useSheet() {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error("Sheet components must be used within Sheet");
  return ctx;
}

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

function Sheet({ open = false, onOpenChange, children }: SheetProps) {
  const [openState, setOpenState] = React.useState(open);
  const isControlled = open !== undefined && onOpenChange !== undefined;
  const isOpen = isControlled ? open : openState;
  const setOpen = isControlled ? onOpenChange! : setOpenState;

  React.useEffect(() => {
    if (isControlled) setOpenState(open);
  }, [open, isControlled]);

  return (
    <SheetContext.Provider value={{ open: isOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

function SheetTrigger({
  children,
  asChild,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { setOpen } = useSheet();
  const handleOpen = React.useCallback(() => setOpen(true), [setOpen]);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
      onClick: handleOpen,
    });
  }
  return (
    <button type="button" className={className} onClick={handleOpen} aria-label="Open menu" aria-haspopup="dialog" {...props}>
      {children}
    </button>
  );
}

function SheetContent({
  children,
  className,
  side = "right",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { side?: "left" | "right" }) {
  const { open, setOpen } = useSheet();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  if (!open || !mounted) return null;

  const content = (
    <>
      <div
        className="fixed inset-0 z-[100] bg-backdrop"
        aria-hidden
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-y-0 z-[101] w-[min(280px,85vw)] max-w-sm bg-background shadow-xl transition-transform duration-200 ease-out",
          side === "right" ? "right-0 top-0" : "left-0 top-0",
          className
        )}
        style={{ touchAction: "manipulation" }}
        {...props}
      >
        {children}
      </div>
    </>
  );

  return createPortal(content, document.body);
}

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)} {...props} />;
}

function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("font-heading text-lg font-semibold text-foreground", className)} {...props} />;
}

function SheetClose({
  children,
  className,
  asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const { setOpen } = useSheet();
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>, {
      onClick: (e: React.MouseEvent) => {
        setOpen(false);
        (children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>).props.onClick?.(e);
      },
    });
  }
  return (
    <button type="button" className={className} onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  );
}

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose };
