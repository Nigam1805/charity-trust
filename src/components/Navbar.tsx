import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = useLocation().pathname;
  const { trustName, siteTitleMarkUrl, nav } = siteContent;
  const navLinks = nav.links;

  return (
    <header className="sticky top-0 z-30 w-full border-b-2 border-primary bg-primary shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-xl font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary-foreground/35 bg-white p-1 shadow-sm">
            <img
              src={siteTitleMarkUrl}
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain object-center"
              decoding="async"
            />
          </span>
          <span className="leading-tight">{trustName}</span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-1" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            const isDonate = href === "/donate";
            return (
              <Link
                key={href}
                to={href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  isDonate
                    ? "ml-2 bg-accent text-accent-foreground hover:bg-accent-hover"
                    : isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Sheet>
          <SheetTrigger
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground hover:bg-primary-foreground/20 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[280px] flex-col border-l-2 border-primary bg-secondary sm:w-[300px]"
          >
            <SheetHeader className="flex flex-row items-center justify-between space-y-0 border-b border-primary/20 pb-4">
              <SheetTitle className="flex items-center gap-2 text-left text-primary">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary/25 bg-white p-0.5 shadow-sm">
                  <img
                    src={siteTitleMarkUrl}
                    alt=""
                    width={36}
                    height={36}
                    className="h-full w-full object-contain object-center"
                    decoding="async"
                  />
                </span>
                <span className="font-heading text-base font-semibold">{trustName}</span>
              </SheetTitle>
              <SheetClose className="rounded-lg p-2 text-text-secondary hover:bg-primary-light hover:text-primary" aria-label="Close menu">
                <X className="h-5 w-5" />
              </SheetClose>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 overflow-y-auto" aria-label="Mobile navigation">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                const isDonate = href === "/donate";
                return (
                  <SheetClose asChild key={href}>
                    <Link
                      to={href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        isDonate
                          ? "mt-2 bg-accent text-accent-foreground hover:bg-accent-hover hover:scale-105 transition-all"
                          : isActive
                            ? "bg-primary-light text-primary"
                            : "text-secondary-foreground hover:bg-primary-light/50"
                      )}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
