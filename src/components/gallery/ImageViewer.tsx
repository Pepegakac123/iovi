// src/components/gallery/ImageViewer.tsx
"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { type GalleryImage } from "@/hooks/useGalleryModal";
import { RefreshCw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// ===========================================
// TYPES
// ===========================================

interface ImageViewerProps {
	image: GalleryImage;
	onNext?: () => void;
	onPrev?: () => void;
	className?: string;
}

// ===========================================
// IMAGE VIEWER WITH ERROR HANDLING
// ===========================================

const ImageViewer: React.FC<ImageViewerProps> = ({
	image,
	onNext,
	onPrev,
	className = "",
}) => {
	// ===========================================
	// STATE
	// ===========================================

	const [imageError, setImageError] = useState(false);
	const [retryKey, setRetryKey] = useState(0);
	const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
		null,
	);
	const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(
		null,
	);

	// ===========================================
	// ERROR HANDLING
	// ===========================================

	const handleImageError = useCallback(() => {
		console.error(`Failed to load image: ${image.src}`);
		setImageError(true);
	}, [image.src]);

	const handleRetry = useCallback(() => {
		setImageError(false);
		setRetryKey((prev) => prev + 1); // Force re-render with new key
	}, []);

	// Reset error state when image changes
	React.useEffect(() => {
		setImageError(false);
		setRetryKey(0);
	}, [image.src]);

	// ===========================================
	// TOUCH HANDLING
	// ===========================================

	const handleTouchStart = useCallback((e: React.TouchEvent) => {
		const touch = e.touches[0];
		setTouchStart({ x: touch.clientX, y: touch.clientY });
		setTouchEnd(null);
	}, []);

	const handleTouchMove = useCallback((e: React.TouchEvent) => {
		const touch = e.touches[0];
		setTouchEnd({ x: touch.clientX, y: touch.clientY });
	}, []);

	const handleTouchEnd = useCallback(() => {
		if (!touchStart || !touchEnd) return;

		const deltaX = touchStart.x - touchEnd.x;
		const deltaY = Math.abs(touchStart.y - touchEnd.y);
		const minSwipeDistance = 50;

		// Only horizontal swipes
		if (Math.abs(deltaX) > minSwipeDistance && deltaY < 100) {
			if (deltaX > 0 && onNext) {
				onNext(); // Swipe left -> next
			} else if (deltaX < 0 && onPrev) {
				onPrev(); // Swipe right -> prev
			}
		}

		setTouchStart(null);
		setTouchEnd(null);
	}, [touchStart, touchEnd, onNext, onPrev]);

	// ===========================================
	// RENDER
	// ===========================================

	return (
		<motion.div
			className={cn("relative w-full h-full", className)}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{/* ✅ ERROR STATE */}
			{imageError ? (
				<motion.div
					className={cn(
						"relative w-full h-full flex flex-col items-center justify-center gap-6",
						"p-8 md:p-12",
					)}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3 }}
				>
					{/* Error Icon */}
					<motion.div
						className={cn(
							"w-20 h-20 rounded-full",
							"bg-destructive/10 border-2 border-destructive",
							"flex items-center justify-center",
						)}
						initial={{ rotate: -10 }}
						animate={{ rotate: 0 }}
						transition={{ duration: 0.5, type: "spring" }}
					>
						<AlertCircle className="w-10 h-10 text-destructive" />
					</motion.div>

					{/* Error Message */}
					<div className="text-center space-y-2">
						<h3 className="font-primary text-lg md:text-xl text-foreground">
							Nie udało się załadować zdjęcia
						</h3>
						<p className="text-sm text-muted-foreground max-w-md">
							Wystąpił problem podczas ładowania obrazu. Sprawdź połączenie z
							internetem i spróbuj ponownie.
						</p>
					</div>

					{/* Retry Button */}
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button
							variant="outline"
							size="lg"
							onClick={handleRetry}
							className={cn(
								"flex items-center gap-3 px-6 py-3",
								"border-2 border-foreground font-primary uppercase",
								"bg-background text-foreground",
								"hover:bg-accent hover:shadow-[4px_4px_0px_0px_var(--foreground)]",
								"hover:translate-x-[-2px] hover:translate-y-[-2px]",
								"transition-all duration-200",
							)}
						>
							<RefreshCw className="h-5 w-5" />
							Spróbuj ponownie
						</Button>
					</motion.div>

					{/* Navigation Hint */}
					{(onNext || onPrev) && (
						<p className="text-xs text-muted-foreground mt-4">
							Możesz przejść do{" "}
							{onNext && onPrev
								? "poprzedniego lub następnego"
								: onNext
									? "następnego"
									: "poprzedniego"}{" "}
							zdjęcia
						</p>
					)}
				</motion.div>
			) : (
				/* ✅ NORMAL STATE - IMAGE DISPLAY */
				<motion.div
					className={cn(
						"relative w-full h-full flex items-center justify-center",
						"p-4 md:p-6 lg:p-8",
					)}
					key={`${image.src}-${retryKey}`} // Force re-render on retry
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{
						duration: 0.4,
						ease: "easeOut",
					}}
				>
					{/* Image wrapper */}
					<div
						className={cn(
							"relative flex items-center justify-center",
							"w-full h-full max-w-full max-h-full",
						)}
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							className={cn(
								"object-contain",
								"rounded-md border-2 border-foreground",
								"shadow-[4px_4px_0px_0px_var(--foreground)]",
							)}
							priority={true}
							loading="eager"
							quality={90}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
							onError={handleImageError}
							fetchPriority="high"
							decoding="async"
							unoptimized={false}
						/>
					</div>
				</motion.div>
			)}

			{/* Touch Indicator */}
			{touchStart && touchEnd && (
				<motion.div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 0.6 }}
					exit={{ scale: 0, opacity: 0 }}
				>
					<div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
						<span className="text-2xl text-primary">
							{touchStart.x > touchEnd.x ? "→" : "←"}
						</span>
					</div>
				</motion.div>
			)}
		</motion.div>
	);
};

export default ImageViewer;