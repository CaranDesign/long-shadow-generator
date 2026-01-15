
import * as React from "react";
import { cn } from "@/lib/utils";

// defining type and not interface because no need of other props
type WbColorInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function LsColorPicker({ className, ...props }: WbColorInputProps) {
  return (
    <input
      type="color"
      {...props}
      className={cn(
        "h-10 w-10 cursor-pointer rounded-md border border-white/20 bg-transparent p-0",
        className
      )}
    />
  );
}
