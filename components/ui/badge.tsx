import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary-foreground",
        secondary: "bg-secondary/70 text-secondary-foreground",
        destructive: "bg-red-500/10 text-red-500",
        outline: "bg-accent/10 text-accent-foreground",
        green: "bg-green-500/10 text-green-500",
        blue: "bg-blue-500/10 text-blue-500",
        yellow: "bg-yellow-500/10 text-yellow-500",
        red: "bg-red-500/10 text-red-500",
        purple: "bg-purple-500/10 text-purple-500",
        orange: "bg-orange-500/10 text-orange-500",
        pink: "bg-pink-500/10 text-pink-500",
        gray: "bg-gray-500/10 text-gray-500",
        teal: "bg-teal-500/10 text-teal-500",
        lime: "bg-lime-500/10 text-lime-500",
        cyan: "bg-cyan-500/10 text-cyan-500",
        indigo: "bg-indigo-500/10 text-indigo-500",
        violet: "bg-violet-500/10 text-violet-500",
        rose: "bg-rose-500/10 text-rose-500",
        emerald: "bg-emerald-500/10 text-emerald-500",
        fuchsia: "bg-fuchsia-500/10 text-fuchsia-500",
        sky: "bg-sky-500/10 text-sky-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>["variant"];

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
