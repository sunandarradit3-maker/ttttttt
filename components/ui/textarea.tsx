import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-white/35 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
