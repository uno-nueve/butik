import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "tertiary" | "destructive";
    classname?: string;
};

export const Button = ({ variant, className, ...props }: ButtonProps) => {
    return <button {...props} className={cn(buttonVariants({ variant }), className)} />;
};

const buttonVariants = cva(
    "px-6 py-4 font-medium rounded-xl hover:shadow-lg focus:outline-none focus:ring focus:ring-neutral-500 aria-disabled:text-neutral-500",
    {
        variants: {
            variant: {
                primary:
                    "text-white bg-black hover:bg-neutral-800 active:bg-neutral-700 aria-disabled:bg-neutral-200",
                secondary:
                    "text-black bg-transparent border border-black aria-disabled:border-neutral-200",
                tertiary: "text-black bg-transparent",
                destructive:
                    "text-white bg-red-500 focus:ring-red-700 aria-disabled:bg-neutral-200",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
