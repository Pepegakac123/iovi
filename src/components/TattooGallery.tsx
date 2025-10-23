// src/components/TattooGallery.tsx - FIXED for instant popup display

"use client";

import React, { lazy, Suspense } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
const GalleryModal = lazy(() => import("@/components/gallery/GalleryModal"));

interface TattooGalleryProps {
	images: Array<{ src: string; alt: string }>;
	className?: string;
}

const TattooGallery: React.FC<TattooGalleryProps> = ({
	images,
	className = "",
}) => {
	if (!images || images.length === 0) {
		return (
			<div className="text-center py-12">
				<p className="paragraph-secondary text-muted-foreground">
					Brak zdjęć w tej kategorii
				</p>
			</div>
		);
	}

	return (
		<div className={`w-full ${className}`}>
			{/* ✅ Gallery Modal - wraps całą galerię */}
			<Suspense
				fallback={<div className="h-96 bg-muted animate-pulse rounded-md" />}
			>
				<GalleryModal images={images} wrapAround={true}>
					{/* ✅ Responsive grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
						{images.map((image, index) => (
							<BlurFade
								key={`${image.src}-${index}`}
								delay={0.05 * index}
								duration={0.6}
								direction="up"
								offset={20}
								blur="8px"
								className="w-full"
							>
								{/* ✅ Gallery item */}
								<div
									data-gallery-index={index}
									className="group relative overflow-hidden rounded-md border-2 border-foreground bg-primary-foreground transition-all duration-300 cursor-pointer hover:border-primary hover:shadow-[4px_4px_0px_0px_var(--primary)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								>
									{/* ✅ Image container */}
									<div
										className="relative w-full"
										style={{ aspectRatio: "4/5" }}
									>
										<Image
											src={image.src}
											alt={image.alt}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
											// ✅ FIX #1: Preload pierwszych 16 obrazów
											priority={index < 16}
											loading={index < 16 ? "eager" : "lazy"}
											// ✅ FIX #2: IDENTYCZNE sizes jak w popup - eliminuje re-fetch!
											sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
											// ✅ FIX #3: Wysoka jakość dla cache
											quality={90}
											// ✅ FIX #4: Wysokie priorytety dla pierwszych
											fetchPriority={index < 8 ? "high" : "auto"}
											// ✅ FIX #5: Async decoding
											decoding="async"
										/>

										{/* ✅ Overlay z alt text na hover */}
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end opacity-0 group-hover:opacity-100">
											<div className="p-3 md:p-4 text-white">
												<p className="text-xs md:text-sm font-text leading-relaxed mb-2">
													{image.alt}
												</p>
												<p className="text-xs text-white/80 font-primary">
													Kliknij aby powiększyć
												</p>
											</div>
										</div>
									</div>
								</div>
							</BlurFade>
						))}
					</div>
				</GalleryModal>
			</Suspense>
		</div>
	);
};

export default TattooGallery;
