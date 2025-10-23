"use client";

import { useState, useEffect, useCallback } from "react";

// ===========================================
// TYPES (unchanged)
// ===========================================

export interface GalleryImage {
	src: string;
	alt: string;
}

export interface UseGalleryModalOptions {
	wrapAround?: boolean; // Allow navigation past first/last image
	preloadCount?: number; // Number of images to preload around current
}

export interface UseGalleryModalReturn {
	// Modal state
	isOpen: boolean;
	currentIndex: number;
	images: GalleryImage[];

	// Navigation state
	canGoPrev: boolean;
	canGoNext: boolean;

	// Actions
	openModal: (index: number) => void;
	closeModal: () => void;
	nextImage: () => void;
	prevImage: () => void;
	goToImage: (index: number) => void;

	// Current image info
	currentImage: GalleryImage | null;
	totalCount: number;
}

// ===========================================
// 🔧 SIMPLE IMPROVED HOOK
// ===========================================

/**
 * ✅ SIMPLE FIX: Hook do zarządzania stanem modalnej galerii obrazów
 * 🔧 Fixed: Better preloading without complex state management
 * 🔧 Fixed: More predictable behavior
 * ✅ Preserved: All existing working functionality
 */
export function useGalleryModal(
	galleryImages: GalleryImage[] = [],
	options: UseGalleryModalOptions = {},
): UseGalleryModalReturn {
	const { wrapAround = true, preloadCount = 5 } = options; // 🆕 Default to 2 for better UX

	// ===========================================
	// STATE MANAGEMENT (unchanged)
	// ===========================================

	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [images] = useState<GalleryImage[]>(galleryImages);

	// ===========================================
	// COMPUTED VALUES (unchanged)
	// ===========================================

	const totalCount = images.length;
	const currentImage = images[currentIndex] || null;

	const canGoPrev = wrapAround ? totalCount > 1 : currentIndex > 0;
	const canGoNext = wrapAround ? totalCount > 1 : currentIndex < totalCount - 1;

	// ===========================================
	// NAVIGATION FUNCTIONS (unchanged)
	// ===========================================

	const openModal = useCallback(
		(index: number) => {
			if (index >= 0 && index < totalCount) {
				setCurrentIndex(index);
				setIsOpen(true);
			}
		},
		[totalCount],
	);

	const closeModal = useCallback(() => {
		setIsOpen(false);
	}, []);

	const goToImage = useCallback(
		(index: number) => {
			if (index >= 0 && index < totalCount) {
				setCurrentIndex(index);
			}
		},
		[totalCount],
	);

	const nextImage = useCallback(() => {
		if (!canGoNext) return;

		if (wrapAround) {
			setCurrentIndex((prev) => (prev + 1) % totalCount);
		} else {
			setCurrentIndex((prev) => Math.min(prev + 1, totalCount - 1));
		}
	}, [canGoNext, wrapAround, totalCount]);

	const prevImage = useCallback(() => {
		if (!canGoPrev) return;

		if (wrapAround) {
			setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount);
		} else {
			setCurrentIndex((prev) => Math.max(prev - 1, 0));
		}
	}, [canGoPrev, wrapAround, totalCount]);

	// ===========================================
	// KEYBOARD NAVIGATION (unchanged)
	// ===========================================

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			// Prevent default behavior for navigation keys
			if (["Escape", "ArrowLeft", "ArrowRight"].includes(e.key)) {
				e.preventDefault();
			}

			switch (e.key) {
				case "Escape":
					closeModal();
					break;
				case "ArrowLeft":
					prevImage();
					break;
				case "ArrowRight":
					nextImage();
					break;
				default:
					break;
			}
		};

		// Add event listener
		window.addEventListener("keydown", handleKeyDown);

		// Cleanup
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, nextImage, prevImage, closeModal]);

	// ===========================================
	// 🆕 IMPROVED PRELOADING EFFECT
	// ===========================================

	useEffect(() => {
		if (!isOpen || preloadCount <= 0 || totalCount <= 1) return;

		// 🔧 Simple but effective preloading
		const preloadImages = () => {
			const imagesToPreload: string[] = [];

			// Preload images around current index
			for (let i = 1; i <= preloadCount; i++) {
				// Next images
				const nextIndex = (currentIndex + i) % totalCount;
				if (images[nextIndex]) {
					imagesToPreload.push(images[nextIndex].src);
				}

				// Previous images
				const prevIndex = (currentIndex - i + totalCount) % totalCount;
				if (images[prevIndex]) {
					imagesToPreload.push(images[prevIndex].src);
				}
			}

			// 🆕 IMPROVED: Create Image objects for preloading with error handling
			imagesToPreload.forEach((src) => {
				const img = new Image();

				// 🆕 Add error handling to prevent console errors
				img.onerror = () => {
					console.warn(`Failed to preload image: ${src}`);
				};

				// 🆕 Optional: Add onload for debugging (remove in production)
				// img.onload = () => console.log(`Preloaded: ${src}`);

				img.src = src;
			});
		};

		// 🆕 Small delay to avoid preloading during rapid navigation
		const preloadTimeout = setTimeout(preloadImages, 100);

		return () => {
			clearTimeout(preloadTimeout);
		};
	}, [isOpen, currentIndex, images, preloadCount, totalCount]);

	// ===========================================
	// BODY SCROLL LOCK (unchanged)
	// ===========================================

	useEffect(() => {
		if (isOpen) {
			// Prevent body scroll when modal is open
			const originalStyle = window.getComputedStyle(document.body).overflow;
			document.body.style.overflow = "hidden";

			return () => {
				document.body.style.overflow = originalStyle;
			};
		}
	}, [isOpen]);

	// ===========================================
	// RETURN OBJECT (unchanged)
	// ===========================================

	return {
		// Modal state
		isOpen,
		currentIndex,
		images,

		// Navigation state
		canGoPrev,
		canGoNext,

		// Actions
		openModal,
		closeModal,
		nextImage,
		prevImage,
		goToImage,

		// Current image info
		currentImage,
		totalCount,
	};
}
