import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm outline-none transition placeholder:text-white/35 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
