import { cn } from "@/utils/cn";
import * as React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "w-full px-6 py-4 font-medium border rounded-xl border-neutral-400",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
