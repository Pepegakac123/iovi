// src/components/gallery/index.ts
/**
 * Gallery Components Export Index
 * Centralizuje eksport wszystkich komponentów galerii
 */

// Main components
export { default as GalleryModal } from "./GalleryModal";
export { default as ImageViewer } from "./ImageViewer";
export { default as GalleryNavigation } from "./GalleryNavigation";
export { default as GalleryCounter } from "./GalleryCounter";
// src/components/Gallery/index.ts
export { default as HealedTattooGallery } from "./HealedTattooGallery";
export { default as HealedTattooCard } from "./HealedTattooCard";
export { default as HealedTattooHeader } from "./HealedTattoHeader";

// Re-export hook types for convenience
export type {
	GalleryImage,
	UseGalleryModalOptions,
	UseGalleryModalReturn,
} from "@/hooks/useGalleryModal";

// Re-export hook
export { useGalleryModal } from "@/hooks/useGalleryModal";
