import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-gradient text-white shadow-md hover:brightness-[1.06] hover:shadow-lg hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:opacity-95 hover:shadow-card hover:-translate-y-0.5",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent-hover hover:scale-[1.02] hover:shadow-lg hover:-translate-y-0.5 shadow-card",
        outline:
          "border-2 border-primary bg-background/80 text-primary backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-xl",
        sm: "h-9 rounded-xl px-4",
        lg: "h-12 rounded-xl px-8 text-lg",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const mergedClassName = cn(buttonVariants({ variant, size, className }));
    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, { className: cn(mergedClassName, child.props.className) });
    }
    return <button className={mergedClassName} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
