"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { cn } from "@/lib/utils";

function Tabs({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn("w-full", className)}
			{...props}
		/>
	);
}

function TabsList({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				// ✅ Brutalist container styling
				"inline-flex h-auto items-center justify-center rounded-md border-2 border-foreground bg-primary-foreground p-2 text-foreground gap-2",
				// ✅ Brutalist shadow effect
				"shadow-[4px_4px_0px_0px_var(--foreground)]",
				// ✅ Responsive: vertical na mobile, horizontal na desktop
				"flex-col lg:flex-row w-full md:w-auto",
				className,
			)}
			{...props}
		/>
	);
}

function TabsTrigger({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(
				// ✅ Base styling - brutalist design
				"inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-foreground px-4 py-3 gap-1.5",
				// ✅ Typography - używa font-primary jak buttony
				"text-sm md:text-base font-primary uppercase",
				// ✅ Colors - inactive state
				"bg-secondary text-foreground",
				// ✅ Responsive width - full na mobile, auto na desktop
				"w-full md:w-auto",
				// ✅ Transitions and interactions
				"transition-all duration-200 cursor-pointer",
				// ✅ Focus states
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
				// ✅ Disabled state
				"disabled:pointer-events-none disabled:opacity-50",
				// ✅ Hover state - brutalist transform + shadow
				"hover:bg-accent hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]",
				// ✅ Active state - primary colors + larger shadow
				"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-foreground",
				"data-[state=active]:shadow-[6px_6px_0px_0px_var(--foreground)] data-[state=active]:translate-x-[-2px] data-[state=active]:translate-y-[-2px]",
				className,
			)}
			{...props}
		/>
	);
}

function TabsContent({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={cn(
				// ✅ Content styling z responsive margins
				"mt-4 md:mt-6 rounded-md border-2 border-foreground bg-background p-4 md:p-6",
				// ✅ Focus states
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
				// ✅ Brutalist shadow for content
				"shadow-[4px_4px_0px_0px_var(--foreground)]",
				className,
			)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
