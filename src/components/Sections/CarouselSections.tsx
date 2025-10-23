// src/components/Sections/CarouselSections.tsx - Wersja bez animacji + lazy carousel
import { Suspense, lazy } from "react";
import {
	getImageCarouselBySlug,
	mapImagesWithWordPressAlt,
} from "@/lib/jetApi";
import Subheadline from "../Subheadline";
import CTASection from "./CTASection";

// Lazy load carousel - nie jest krytyczny na początku
const CardCarousel = lazy(() =>
	import("@/components/ui/card-carousel").then((module) => ({
		default: module.CardCarousel,
	})),
);

export default async function CarouselSections() {
	const rawImages = await getImageCarouselBySlug("tatuaze");
	const images = await mapImagesWithWordPressAlt(rawImages.meta.zdjecia);

	return (
		<div className="w-full bg-background py-20 md:py-24 flex flex-col gap-12">
			<div className="flex flex-col gap-4 md:gap-8 max-w-[1240px] mx-auto px-4 md:px-8 items-center justify-center">
				<div>
					<Subheadline title="Każdy projekt to unikalna historia" />
				</div>

				<h2 className="heading-primary-center">Portfolio Moich Tatuaży</h2>

				<p className="paragraph-center-constrained">
					W portfolio znajdziesz różnorodność stylów i technik – od delikatnych
					kobiecych wzorów po bardziej wyraziste tatuaże. Specjalizuję się w
					fine line, minimalistycznych kompozycjach i graficznych wzorach.
				</p>
			</div>

			<Suspense
				fallback={
					<div className="h-96 bg-muted animate-pulse rounded-md mx-auto max-w-6xl" />
				}
			>
				<CardCarousel
					images={images}
					autoplayDelay={2000}
					showPagination={true}
				/>
			</Suspense>

			<div>
				<CTASection />
			</div>
		</div>
	);
}
