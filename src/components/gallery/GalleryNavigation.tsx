"use client";

import React from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ===========================================
// TYPES - SIMPLIFIED
// ===========================================

interface GalleryNavigationProps {
	canGoPrev: boolean;
	canGoNext: boolean;
	onPrev: () => void;
	onNext: () => void;
	currentIndex: number;
	totalCount: number;
	className?: string;
	// 🔧 REMOVED: isDisabled prop (uproszczone)
}

// ===========================================
// 🔧 SIMPLIFIED GALLERY NAVIGATION
// ===========================================

/**
 * ✅ SIMPLIFIED: Komponent nawigacji galerii
 * 🔧 Removed: isDisabled complexity
 * ✅ Preserved: All core functionality and styling
 */
const GalleryNavigation: React.FC<GalleryNavigationProps> = ({
	canGoPrev,
	canGoNext,
	onPrev,
	onNext,
	currentIndex,
	totalCount,
	className = "",
}) => {
	// ===========================================
	// RENDER LOGIC
	// ===========================================

	return (
		<motion.div
			className={cn(
				"flex items-center justify-center gap-4 p-4",
				"border-t-2 border-foreground bg-primary-foreground",
				className,
			)}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Previous Button */}
			<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
				<Button
					variant="outline"
					size="lg"
					onClick={onPrev}
					disabled={!canGoPrev}
					className={cn(
						"flex items-center gap-2 px-6 py-3",
						"border-2 border-foreground font-primary uppercase",
						"bg-background text-foreground",
						"hover:bg-accent hover:shadow-[4px_4px_0px_0px_var(--foreground)]",
						"hover:translate-x-[-2px] hover:translate-y-[-2px]",
						"transition-all duration-200",
						"disabled:opacity-50 disabled:cursor-not-allowed",
						"disabled:hover:transform-none disabled:hover:shadow-none",
					)}
					aria-label="Poprzednie zdjęcie"
				>
					<ChevronLeft className="h-4 w-4" />
					<span className="hidden sm:inline">Poprzednie</span>
				</Button>
			</motion.div>

			{/* Progress Indicator */}
			<motion.div
				className="flex items-center gap-2 px-4"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.1, duration: 0.3 }}
			>
				{/* Dots indicator */}
				<div className="flex items-center gap-1">
					{Array.from({ length: Math.min(totalCount, 5) }, (_, index) => {
						const dotIndex =
							totalCount <= 5 ? index : Math.floor((index * totalCount) / 5);

						const isActive =
							totalCount <= 5
								? currentIndex === index
								: Math.abs(currentIndex - dotIndex) <= totalCount / 10;

						return (
							<motion.div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className={cn(
									"w-2 h-2 rounded-full transition-all duration-200",
									isActive ? "bg-primary w-3 h-3" : "bg-muted-foreground/40",
								)}
								whileHover={isActive ? { scale: 1.2 } : { scale: 1.1 }}
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.2 + index * 0.05 }}
							/>
						);
					})}
				</div>

				{/* Text indicator - Only show on larger screens */}
				<motion.span
					className="hidden md:block text-sm font-primary text-muted-foreground"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					{currentIndex + 1} z {totalCount}
				</motion.span>
			</motion.div>

			{/* Next Button */}
			<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
				<Button
					variant="outline"
					size="lg"
					onClick={onNext}
					disabled={!canGoNext}
					className={cn(
						"flex items-center gap-2 px-6 py-3",
						"border-2 border-foreground font-primary uppercase",
						"bg-background text-foreground",
						"hover:bg-accent hover:shadow-[4px_4px_0px_0px_var(--foreground)]",
						"hover:translate-x-[-2px] hover:translate-y-[-2px]",
						"transition-all duration-200",
						"disabled:opacity-50 disabled:cursor-not-allowed",
						"disabled:hover:transform-none disabled:hover:shadow-none",
					)}
					aria-label="Następne zdjęcie"
				>
					<span className="hidden sm:inline">Następne</span>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</motion.div>
		</motion.div>
	);
};

export default GalleryNavigation;
