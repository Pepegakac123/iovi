// src/components/gallery/GalleryCounter.tsx
"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// ===========================================
// TYPES
// ===========================================

interface GalleryCounterProps {
	current: number;
	total: number;
	className?: string;
	variant?: "default" | "compact";
}

// ===========================================
// MAIN COMPONENT
// ===========================================

/**
 * Komponent licznika pozycji w galerii
 * Wyświetla aktualne zdjęcie i total w brutalist stylu
 */
const GalleryCounter: React.FC<GalleryCounterProps> = ({
	current,
	total,
	className = "",
	variant = "default",
}) => {
	// ===========================================
	// RENDER LOGIC
	// ===========================================

	if (variant === "compact") {
		return (
			<motion.div
				className={cn("flex items-center", className)}
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3 }}
			>
				<Badge
					variant="outline"
					className={cn(
						"border-2 border-foreground bg-background text-foreground",
						"font-primary text-sm px-3 py-1",
						"shadow-[2px_2px_0px_0px_var(--foreground)]",
					)}
				>
					{current} / {total}
				</Badge>
			</motion.div>
		);
	}

	return (
		<motion.div
			className={cn("flex items-center gap-2 font-primary", className)}
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Current Number - wyróżniony */}
			<motion.span
				className={cn(
					"text-xl md:text-2xl font-primary text-primary",
					"bg-background px-3 py-1 rounded-md border-2 border-foreground",
					"shadow-[2px_2px_0px_0px_var(--foreground)]",
				)}
				key={current} // Force re-animation on change
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
			>
				{current}
			</motion.span>

			{/* Separator */}
			<span className="text-lg md:text-xl text-muted-foreground font-primary">
				/
			</span>

			{/* Total Number */}
			<span className="text-lg md:text-xl text-foreground font-primary">
				{total}
			</span>
		</motion.div>
	);
};

export default GalleryCounter;
