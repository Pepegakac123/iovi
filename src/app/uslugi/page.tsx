// src/app/uslugi/page.tsx
import * as motion from "motion/react-client";
import SectionHero from "@/components/SectionHero";
import ServicesCard from "@/components/ServicesCard";
import Contact from "@/components/Sections/Contact";
import { getServicesWithAltText } from "@/lib/jetApi";
import { containerVariants, itemVariants } from "@/lib/variants";
import { contactHome, procesHome } from "@/lib/data";
import type { Metadata } from "next";
import { images } from "@/lib/images";

import { BreadcrumbJsonLd } from "next-seo";

export const metadata: Metadata = {
	title: "Usługi tatuażu", // zostanie: "Usługi tatuażystka - bezpłatna konsultacja - iovi-ink"
	description:
		"Specjalizuję się w delikatne tatuaże damskie, minimalistyczne i graficzne wzory. Autorskie projekty dostosowane do anatomii.",

	keywords: [
		"delikatne tatuaże damskie", // 8,100 vol - MEGA HIGH
		"tatuaże minimalistyczne", // 1,300 vol - HIGH
		"tatuaże fine line", // HIGH from database
		"graficzne tatuaże",
		"autorskie projekty tatuaże",
		"usługi tatuażystka",
		"tatuażystka mszana dolna usługi",
	],

	openGraph: {
		title: "Usługi - Delikatne Tatuaże Damskie i Minimalistyczne | Jowita",
		description:
			"Autorskie projekty tatuaży - minimalistyczne, graficzne, fine line. Każdy wzór dostosowany do Twojej anatomii.",
		url: "https://iovi-ink.pl/uslugi",
		images: [
			{
				url: `${images.seoBaner.src}`,
				width: 1200,
				height: 630,
				alt: `${images.seoBaner.alt}`,
			},
		],
	},

	alternates: {
		canonical: "https://iovi-ink.pl/uslugi",
	},
};

// ===========================================
// MAIN SERVICES PAGE COMPONENT
// ===========================================

const ServicesPage = async () => {
	const services = await getServicesWithAltText("main");

	return (
		<>
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
						name: "Usługi",
						item: "https://iovi-ink.pl/uslugi",
					},
				]}
			/>
			{/* ✅ Mini Hero Section */}
			<SectionHero
				subTitle="Profesjonalne usługi tatuażu"
				title="Moje Usługi"
				description="Specjalizuję się w minimalistycznych / subtelnych i graficznych tatuażach oraz indywidualnych projektach. Każdy tatuaż to przemyślana realizacja dostosowana do anatomii i Twoich potrzeb."
			/>

			{/* ✅ Main Services Section */}
			<motion.main
				className="w-full bg-primary-foreground py-16 md:py-20"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={containerVariants}
			>
				<motion.div
					className="container px-4 md:px-8"
					variants={containerVariants}
				>
					{/* Services Grid - 4 kolumny na dużych ekranach + stretch items */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch"
						variants={containerVariants}
					>
						{services.map((service) => (
							<motion.div
								key={service.id}
								variants={itemVariants}
								whileHover={{
									y: -4,
									transition: { duration: 0.2, ease: "easeOut" },
								}}
							>
								<ServicesCard service={service} />
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</motion.main>

			{/* ✅ Process Section */}
			<section>
				<Contact {...contactHome} />
			</section>
		</>
	);
};

export default ServicesPage;
