// src/components/ui/instagram-glimpse/InstagramGlimpse.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ICONS } from "@/lib/icons";
import { socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
	Glimpse,
	GlimpseContent,
	GlimpseTrigger,
	GlimpseTitle,
	GlimpseDescription,
} from "@/components/kibo-ui/glimpse";

interface InstagramGlimpseProps {
	className?: string;
	variant?: "fixed" | "mobile";
}

const InstagramGlimpse: React.FC<InstagramGlimpseProps> = ({
	className,
	variant = "fixed", // domyślnie fixed dla kompatybilności wstecznej
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const iconRef = useRef<HTMLDivElement>(null);

	// Efekt animacji ruchu poziomego samej ikonki
	useEffect(() => {
		if (!iconRef.current) return;

		const animateIcon = () => {
			if (!isHovered && iconRef.current) {
				const randomX = Math.random() * 6 - 3; // Wartość od -3px do 3px
				iconRef.current.style.transform = `translateX(${randomX}px)`;
			} else if (iconRef.current) {
				// Reset pozycji gdy hover
				iconRef.current.style.transform = "translateX(0)";
			}
		};

		// Początkowa animacja
		animateIcon();

		// Ustawienie interwału dla animacji
		const interval = setInterval(animateIcon, 2000);

		return () => clearInterval(interval);
	}, [isHovered]);

	// Klasy dla wersji fixed (widocznej na dużych ekranach)
	const fixedClasses = "fixed bottom-8 left-8 z-40 hidden! lg:flex!";

	// Klasy dla wersji zintegrowanej z mobile navbar
	const mobileClasses = "p-3"; // Prostsze style, bo reszta pochodzi z MobileNavbar

	// Wybór klas bazowych w zależności od wariantu
	const baseClasses = variant === "fixed" ? fixedClasses : mobileClasses;

	return (
		<Glimpse openDelay={200} closeDelay={100}>
			<GlimpseTrigger asChild>
				<button
					type="button"
					aria-label="Instagram"
					className={cn(
						// Klasy bazowe zależne od wariantu
						baseClasses,
						// Styl podstawowy
						"bg-background text-foreground rounded-full",
						"border-2 border-foreground",
						variant === "fixed" ? "shadow-lg" : "",
						// Wymiary i padding (tylko dla fixed, mobile ma mniejszy padding)
						variant === "fixed" ? "p-3 md:p-4" : "",
						"flex items-center justify-center",
						// Efekty hover
						variant === "fixed"
							? "hover:shadow-[4px_4px_0px_0px_var(--foreground)]"
							: "",
						variant === "fixed"
							? "hover:translate-x-[-2px] hover:translate-y-[-2px]]"
							: "",
						// Tranzycje
						"transition-all duration-200",
						"cursor-pointer",
						// Dodatkowe klasy
						className,
					)}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{/* Ikona Instagrama - tylko ikona się porusza */}
					<div
						ref={iconRef}
						className="relative flex items-center justify-center transition-transform duration-500"
					>
						<Image
							src={ICONS.instagram}
							alt="Instagram"
							width={24}
							height={24}
							className={cn(
								"w-6 h-6",
								// Większa ikona w wersji fixed na większych ekranach
								variant === "fixed" ? "md:w-7 md:h-7" : "",
							)}
						/>
					</div>
				</button>
			</GlimpseTrigger>

			<GlimpseContent
				className="border-2 border-foreground bg-background p-4 rounded-md shadow-[4px_4px_0px_0px_var(--foreground)] w-64 z-50"
				side="top"
				align="center"
				sideOffset={12}
			>
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-3">
						<Image
							src={ICONS.instagramAccent}
							alt="Instagram"
							width={36}
							height={36}
							className="w-8 h-8"
						/>
						<div>
							<GlimpseTitle className="font-primary text-base">
								@iovi.ink
							</GlimpseTitle>
							<p className="text-xs text-muted-foreground">Instagram</p>
						</div>
					</div>

					<GlimpseDescription className="text-sm mt-1">
						Mój Instagram, Projekty, Inspiracje i Kontakt
					</GlimpseDescription>

					<a
						href={socialLinks.iovi.instagram}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-2 bg-primary text-primary-foreground border-2 border-foreground font-primary text-sm py-2 px-3 rounded-md text-center uppercase hover:bg-accent hover:shadow-[2px_2px_0px_0px_var(--foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
					>
						Zobacz Instagram
					</a>
				</div>
			</GlimpseContent>
		</Glimpse>
	);
};

export { InstagramGlimpse };
