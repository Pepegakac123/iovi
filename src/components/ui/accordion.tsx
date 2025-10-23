import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";
import { ICONS } from "@/lib/icons";

function Accordion({
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
	return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
	className,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn(
				"rounded-md overflow-hidden border-1 border-foreground mb-4 transition-all duration-300 hover:shadow-[2px_2px_0px_0px_var(--foreground)] hover:scale-102",
				className,
			)}
			{...props}
		/>
	);
}

function AccordionTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cn(
					"group flex flex-1 items-center justify-between text-left text-base md:text-xl text-foreground bg-secondary border-foreground font-primary px-2 py-2 sm:px-4 lg:py-4 lg:px-8 transition-all hover:bg-muted data-[state=open]:rounded-b-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					className,
				)}
				{...props}
			>
				<span className="transition-all duration-300">{children}</span>

				{/* CSS-only Icon Container */}
				<div className="relative w-8 h-8 flex items-center justify-center">
					{/* Plus icon - visible when closed */}
					<div
						className="absolute w-8 h-8  transition-all duration-200 group-data-[state=open]:opacity-0 group-data-[state=open]:scale-75 group-data-[state=closed]:opacity-100 group-data-[state=closed]:scale-100"
						style={{
							backgroundImage: `url(${ICONS.plus})`,
							backgroundSize: "32px 32px",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
						}}
						aria-hidden="true"
					/>

					{/* Minus icon - visible when open */}
					<div
						className="absolute w-8 h-8  transition-all duration-200 group-data-[state=closed]:opacity-0 group-data-[state=closed]:scale-75 group-data-[state=open]:opacity-100 group-data-[state=open]:scale-100"
						style={{
							backgroundImage: `url(${ICONS.minus})`,
							backgroundSize: "32px 32px",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
						}}
						aria-hidden="true"
					/>
				</div>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
	return (
		<AccordionPrimitive.Content
			data-slot="accordion-content"
			className="overflow-hidden rounded-b-md bg-secondary text-base text-foreground transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
			{...props}
		>
			<div
				className={cn(
					"px-2 py-2 sm:px-4 lg:py-4 lg:px-8 animate-in fade-in-0 slide-in-from-top-1 duration-300",
					className,
				)}
			>
				{children}
			</div>
		</AccordionPrimitive.Content>
	);
}

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
