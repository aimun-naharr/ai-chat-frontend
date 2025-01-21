import { cn } from "@/lib/utils";
import * as React from "react";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  submitButton?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, submitButton, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex min-h-[100px] w-full rounded-md px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-indigo-50/50",
            {
              "pr-36": submitButton,
            },
            className
          )}
          ref={ref}
          {...props}
        />
        {submitButton && (
          <div className="absolute right-2 top-2">{submitButton}</div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
