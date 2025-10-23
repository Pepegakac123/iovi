// src/components/Sections/Hero.tsx - Wersja ze zintegrowaną oceną studia
import Image from "next/image";
import { Suspense, lazy } from "react";
import Subheadline from "../Subheadline";
import { ICONS } from "@/lib/icons";
import FeatureCard from "../FeatureCard";
import FloatingElements from "../FloatingElements";
import StudioRatingCard from "../StudioRatingCard";

interface HeroProps {
	subTitle: string;
	title: string;
	description: React.ReactNode | string;
	image: {
		src: string;
		alt: string;
	};
}

const Hero = ({ subTitle, title, description, image }: HeroProps) => {
	return (
		<div className="max-w-[1440px] mx-auto flex justify-center px-4 sm:px-8 py-4 pb-20 md:pb-24 lg:py-8">
			<div className="w-full gap-8 flex flex-col items-center bg-gradient-to-b from-[#FFEDEA] to-[#FDDFD0] border-1 border-b-4 border-r-4 border-foreground rounded-md overflow-hidden p-4 md:p-8 relative h-[570px] sm:h-[600px] md:h-[800px] lg:h-[1000px] hover:shadow-[4px_4px_0px_0px_var(--foreground)] transition-shadow duration-300">
				{/* Critical content - natychmiastowy render */}
				<div className="flex flex-col gap-4 md:gap-8 items-center z-10 relative max-w-4xl">
					<Subheadline title={subTitle} />

					<h1 className="font-primary text-2xl sm:text-4xl lg:text-6xl text-foreground text-center">
						{title}
					</h1>

					<div className="relative">
						{/* Mobile backdrop */}
						<div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-md -m-3 sm:hidden" />

						{/* Opis bez animacji */}
						<p className="paragraph-hero text-center relative z-10 px-3 sm:px-0">
							{description}
						</p>
					</div>
				</div>

				{/* Hero Image - Fixed positioning */}
				<div
					className="absolute left-0 right-0 bottom-0"
					style={{
						top: "clamp(280px, 35vh, 420px)",
					}}
				>
					<div className="relative w-full h-full">
						<Image
							fill
							src={image.src}
							alt={image.alt}
							priority
							quality={70}
							sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
							style={{
								objectFit: "contain",
								objectPosition: "bottom center",
							}}
							fetchPriority="high"
							referrerPolicy="no-referrer"
						/>
					</div>
				</div>

				{/* Non-critical: Lazy loaded components */}
				<div className="hidden lg:flex flex-row gap-5 max-w-4xl justify-center align-stretch z-10">
					<FeatureCard
						text="Precyzyjne linie i przemyślane detale"
						icon={ICONS.paletteBrush}
						delay={0}
					/>
					<FeatureCard
						text="Od szkicu po finalny projekt"
						icon={ICONS.tabletGraphic}
						delay={0}
					/>
					<FeatureCard
						text="Robię to co lubię, i robię to dobrze"
						icon={ICONS.biceps}
						delay={0}
					/>
				</div>
				{/* Dodany komponent oceny studia - widoczny na wszystkich rozmiarach ekranów */}
				<div className="w-fit-content max-w-md mx-auto z-10">
					<StudioRatingCard />
				</div>
				<FloatingElements variant="hero" />
			</div>
		</div>
	);
};

export default Hero;
