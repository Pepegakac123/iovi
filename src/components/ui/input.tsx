import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				// Base styles with brutal design
				"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
				"flex h-12 w-full min-w-0 rounded-md bg-background px-4 py-3 text-base font-text",
				// Brutal border and shadow styles
				"border-2 border-foreground",
				"transition-all duration-200 outline-none",
				// Hover and focus states
				"hover:border-accent hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px]",
				"focus:border-primary focus:ring-2 focus:ring-primary/50 focus:shadow-[4px_4px_0px_0px_theme(colors.foreground)] focus:translate-x-[-2px] focus:translate-y-[-2px]",
				// States
				"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none",
				"aria-invalid:border-destructive aria-invalid:ring-destructive/20",
				// File input styles
				"file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
