import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive" }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variant === "default" ? "border-white/10 bg-white/10 text-white" : "border-red-400/30 bg-red-500/10 text-red-200",
        className
      )}
      {...props}
    />
  );
}
