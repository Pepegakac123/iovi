import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				// Base styles with brutal design
				"placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
				"flex field-sizing-content min-h-24 w-full rounded-md bg-background px-4 py-3 text-base font-text resize-none",
				// Brutal border and shadow styles
				"border-2 border-foreground",
				"transition-all duration-200 outline-none",
				// Hover and focus states
				"hover:border-accent hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px]",
				"focus:border-primary focus:ring-2 focus:ring-primary/50 focus:shadow-[4px_4px_0px_0px_theme(colors.foreground)] focus:translate-x-[-2px] focus:translate-y-[-2px]",
				// States
				"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none",
				"aria-invalid:border-destructive aria-invalid:ring-destructive/20",
				className,
			)}
			{...props}
		/>
	);
}

export { Textarea };
