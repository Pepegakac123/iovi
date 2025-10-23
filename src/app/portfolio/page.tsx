// app/portfolio/page.tsx - Główna strona portfolio z poprawioną sekcją "zagojone"

import React from "react";
import SectionHero from "@/components/SectionHero";
import TattooGallery from "@/components/TattooGallery";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getAllTattooImages, getZagojone } from "@/lib/jetApi";
import * as motion from "motion/react-client";
import { containerVariants, itemVariants } from "@/lib/variants";
import Contact from "@/components/Sections/Contact";
import { contactHome } from "@/lib/data";
import { Metadata } from "next";
import { images } from "@/lib/images";
import { BreadcrumbJsonLd, ImageJsonLd } from "next-seo";
import { HealedTattooGallery } from "@/components/gallery";

export const metadata: Metadata = {
	title: "Portfolio tatuaże",
	description:
		"Portfolio Jowity - tatuażystka specjalizująca się w delikatne tatuaże damskie i minimalistyczne wzory. Galeria prac Mszana Dolna.",

	openGraph: {
		title: "Portfolio - Delikatne Tatuaże Damskie i Minimalistyczne | Jowita",
		description:
			"Zobacz portfolio tatuażystki Jowity - specjalistki od delikatnych tatuaży damskich i minimalistycznych wzorów. Mszana Dolna.",
		url: "https://iovi-ink.pl/portfolio",
		images: [
			{
				url: `${images.seoBaner.src}`,
				width: 1200,
				height: 630,
				alt: `${images.seoBaner.alt}`,
			},
		],
		type: "website",
	},

	alternates: {
		canonical: "https://iovi-ink.pl/portfolio",
	},

	keywords: [
		"delikatne tatuaże damskie", // 8,100 vol - MEGA HIGH
		"tatuaże minimalistyczne", // 1,300 vol - HIGH
		"tatuaże na ręce", // 14,800 vol - HIGH
		"tatuaże damskie na ręce", // 12,100 vol - HIGH
		"portfolio tatuażystka",
		"galeria tatuaży",
		"małe tatuaże damskie",
		"subtelne tatuaże",
		"tatuaże fine line",
		"tatuażystka mszana dolna portfolio",
		"zagojone tatuaże", // Nowe słowo kluczowe
		"efekt gojenia tatuaży", // Nowe słowo kluczowe
	],

	other: {
		"article:section": "Portfolio",
		"article:tag": "minimalistyczne,damskie,graficzne,kwiatowe,zagojone",
	},
};

const PortfolioPage = async () => {
	const groupedImages = await getAllTattooImages();
	const zagojone = await getZagojone();

	return (
		<>
			<ImageJsonLd
				useAppDir={true}
				images={groupedImages.allImages.slice(0, 10).map((img) => ({
					contentUrl: img.src,
					creator: {
						"@type": "Person",
						name: "Jowita Potaczek",
					},
					creditText: "Jowita Potaczek - IOVI INK",
					copyrightNotice: "© Jowita Potaczek",
				}))}
			/>

			<BreadcrumbJsonLd
				useAppDir={true}
				itemListElements={[
					{
						position: 1,
						name: "Strona główna",
						item: "https://iovi-ink.pl",
					},
					{
						position: 2,
						name: "Portfolio",
						item: "https://iovi-ink.pl/portfolio",
					},
				]}
			/>

			{/* Mini Hero Section */}
			<SectionHero
				subTitle="Każdy projekt to unikalna historia"
				title="Moje Portfolio Tatuaży"
				description="Odkryj różnorodność stylów i technik - od graficznych kompozycji po precyzyjne i subtelne tatuaże minimalistyczne. Każdy tatuaż to przemyślany projekt dostosowany do indywidualnych potrzeb i anatomii."
			/>

			{/* Main Portfolio Section */}
			<motion.section
				className="w-full bg-primary-foreground"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={containerVariants}
			>
				<motion.div
					className="container flex flex-col gap-12 md:gap-16"
					variants={containerVariants}
				>
					{/* Tabs z Galerią */}
					<motion.div variants={itemVariants}>
						<Tabs defaultValue="wszystkie" className="w-full">
							{/* Tabs Navigation */}
							<div className="flex justify-center md:justify-center mb-6 md:mb-8">
								<TabsList className="w-full lg:w-auto">
									<TabsTrigger value="wszystkie">
										<span className="block md:inline">Wszystkie</span>
										<span className="block md:inline">
											({groupedImages.allImages.length})
										</span>
									</TabsTrigger>
									<TabsTrigger value="damskie">
										<span className="block md:inline">Damskie</span>
										<span className="block md:inline">
											({groupedImages.damskie.length})
										</span>
									</TabsTrigger>
									<TabsTrigger value="kwiatowe">
										<span className="block md:inline">Kwiatowe</span>
										<span className="block md:inline">
											({groupedImages.kwiatowe.length})
										</span>
									</TabsTrigger>
									<TabsTrigger value="minimalistyczne">
										<span className="block md:inline">Minimalistyczne</span>
										<span className="block md:inline">
											({groupedImages.minimalistyczne.length})
										</span>
									</TabsTrigger>
									<TabsTrigger value="graficzne">
										<span className="block md:inline">Graficzne</span>
										<span className="block md:inline">
											({groupedImages.graficzne.length})
										</span>
									</TabsTrigger>
									{zagojone && zagojone.length > 0 && (
										<TabsTrigger value="zagojone">
											<span className="block md:inline">Zagojone</span>
											<span className="block md:inline">
												({zagojone.length})
											</span>
										</TabsTrigger>
									)}
								</TabsList>
							</div>

							{/* Tabs Content - wszystkie kategorie */}
							<TabsContent
								value="wszystkie"
								className="border-0 bg-transparent p-0 shadow-none"
							>
								<TattooGallery
									images={groupedImages.allImages}
									className="animate-in fade-in-50 duration-500"
								/>
							</TabsContent>

							<TabsContent
								value="damskie"
								className="border-0 bg-transparent p-0 shadow-none"
							>
								<TattooGallery
									images={groupedImages.damskie}
									className="animate-in fade-in-50 duration-500"
								/>
							</TabsContent>

							<TabsContent
								value="minimalistyczne"
								className="border-0 bg-transparent p-0 shadow-none"
							>
								<TattooGallery
									images={groupedImages.minimalistyczne}
									className="animate-in fade-in-50 duration-500"
								/>
							</TabsContent>

							<TabsContent
								value="kwiatowe"
								className="border-0 bg-transparent p-0 shadow-none"
							>
								<TattooGallery
									images={groupedImages.kwiatowe}
									className="animate-in fade-in-50 duration-500"
								/>
							</TabsContent>

							<TabsContent
								value="graficzne"
								className="border-0 bg-transparent p-0 shadow-none"
							>
								<TattooGallery
									images={groupedImages.graficzne}
									className="animate-in fade-in-50 duration-500"
								/>
							</TabsContent>

							{/* Zagojone Tab Content - Nowy komponent */}
							{zagojone && zagojone.length > 0 && (
								<TabsContent
									value="zagojone"
									className="border-0 bg-transparent p-0 shadow-none"
								>
									<HealedTattooGallery
										zagojone={zagojone}
										className="animate-in fade-in-50 duration-500"
									/>
								</TabsContent>
							)}
						</Tabs>
					</motion.div>

					{/* Portfolio Stats */}
					<motion.div
						className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
						variants={containerVariants}
					>
						<motion.div
							className="bg-background rounded-md border-2 border-foreground p-4 md:p-6 text-center shadow-[4px_4px_0px_0px_var(--foreground)]"
							variants={itemVariants}
							whileHover={{
								scale: 1.02,
								y: -2,
								transition: { duration: 0.3 },
							}}
						>
							<h3 className="text-lg md:text-xl lg:text-2xl font-primary text-foreground mb-1 md:mb-2">
								{groupedImages.allImages.length}+
							</h3>
							<p className="text-xs md:text-sm text-muted-foreground">
								Wszystkich projektów
							</p>
						</motion.div>

						<motion.div
							className="bg-background rounded-md border-2 border-foreground p-4 md:p-6 text-center shadow-[4px_4px_0px_0px_var(--foreground)]"
							variants={itemVariants}
							whileHover={{
								scale: 1.02,
								y: -2,
								transition: { duration: 0.3 },
							}}
						>
							<h3 className="text-2xl lg:text-4xl font-primary text-foreground mb-1 md:mb-2">
								∞
							</h3>
							<p className="text-xs md:text-sm text-muted-foreground">
								Autorskich szkiców
							</p>
						</motion.div>

						<motion.div
							className="bg-background rounded-md border-2 border-foreground p-4 md:p-6 text-center shadow-[4px_4px_0px_0px_var(--foreground)]"
							variants={itemVariants}
							whileHover={{
								scale: 1.02,
								y: -2,
								transition: { duration: 0.3 },
							}}
						>
							<h3 className="text-lg md:text-xl lg:text-2xl font-primary text-foreground mb-1 md:mb-2">
								100%
							</h3>
							<p className="text-xs md:text-sm text-muted-foreground">
								Sterylne warunki
							</p>
						</motion.div>

						<motion.div
							className="bg-background rounded-md border-2 border-foreground p-4 md:p-6 text-center shadow-[4px_4px_0px_0px_var(--foreground)]"
							variants={itemVariants}
							whileHover={{
								scale: 1.02,
								y: -2,
								transition: { duration: 0.3 },
							}}
						>
							<h3 className="text-lg md:text-xl lg:text-2xl font-primary text-foreground mb-1 md:mb-2">
								0
							</h3>
							<p className="text-xs md:text-sm text-muted-foreground">
								Ukrytych kosztów
							</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>

			<section>
				<Contact {...contactHome} />
			</section>
		</>
	);
};

export default PortfolioPage;
