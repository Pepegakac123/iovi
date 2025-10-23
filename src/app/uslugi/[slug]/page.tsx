export const dynamic = "force-dynamic";

import SectionHero from "@/components/SectionHero";
import ServiceProcessSection from "@/components/servicePagesComponents/ServiceProcessSection";
import ServiceDistinguishingSection from "@/components/servicePagesComponents/ServiceDistinguishingSection";
import ServiceRoleSection from "@/components/servicePagesComponents/ServiceRoleSelection";
import TargetAudience from "@/components/servicePagesComponents/TargetAudience";
import {
	getAllServices,
	getServiceBySlug,
	getServiceImages,
	JETEngineAPIError,
	mapImagesWithWordPressAlt,
} from "@/lib/jetApi";
import ServiceBenefitsSection from "@/components/servicePagesComponents/ServiceBenefitsSection";
import ServiceWhyMeSection from "@/components/servicePagesComponents/ServiceWhyMeSection";
import ServiceCta from "@/components/servicePagesComponents/serviceCta";
import * as motion from "motion/react-client";
import { containerVariants } from "@/lib/variants";
import Services from "@/components/Sections/Services";
import { servicesHome } from "@/lib/data";
import CarouselSections from "@/components/Sections/CarouselSections";
import ServiceHero from "@/components/servicePagesComponents/ServiceHero";
import { ServicePageProps } from "@/components/servicePagesComponents/servicePage";
import { Metadata } from "next";
import { images } from "@/lib/images";
import { BreadcrumbJsonLd, ImageJsonLd } from "next-seo";
import { notFound } from "next/navigation"; // 🔥 Import notFound

export async function generateMetadata({
	params,
}: ServicePageProps): Promise<Metadata> {
	try {
		const { slug } = await params;
		const service = await getServiceBySlug(slug);

		// jeśli jednak zwracasz null w getServiceBySlug
		if (!service) {
			return {
				title: "Usługa nie została znaleziona - iovi-ink",
				description: "Przepraszamy, nie można znaleźć tej usługi tatuażu.",
				robots: "noindex, nofollow",
			};
		}

		const { meta } = service;
		const serviceTitle = service.title.rendered;

		const seoTitle =
			serviceTitle || `${serviceTitle} - Jowita Tatuażystka | IOVI INK`;
		const seoDescription =
			meta.seo_description ||
			`${serviceTitle} - profesjonalne usługi tatuażu. Minimalistyczne i graficzne wzory dostosowane do anatomii.`;

		const keywords = [meta.seo_keyword, "tatuażysta", "tatuaże"];

		return {
			title: seoTitle,
			description: seoDescription,
			keywords: keywords,
			openGraph: {
				title: seoTitle,
				description: seoDescription,
				url: `https://iovi-ink.pl/uslugi/${slug}`,
				type: "website",
				images: [
					{
						url: images.seoBaner.src,
						width: 1200,
						height: 630,
						alt: `${serviceTitle} - ${seoDescription}`,
					},
				],
				siteName: "Iovi-Ink",
			},
			twitter: {
				card: "summary_large_image",
				title: seoTitle,
				description: seoDescription,
				images: images.seoBaner.src,
			},
			alternates: {
				canonical: `https://iovi-ink.pl/uslugi/${slug}`,
			},
			other: {
				"og:locale": "pl_PL",
				"article:author": "Jowita Potaczek",
				"article:section": "Tatuaże",
			},
		};
	} catch (error) {
		if (error instanceof JETEngineAPIError && error.status === 404) {
			return {
				title: "Usługa nie została znaleziona - iovi-ink",
				description: "Przepraszamy, nie można znaleźć tej usługi tatuażu.",
				robots: "noindex, nofollow",
			};
		}
		return {
			title: "Błąd ładowania usługi - iovi-ink",
			description: "Wystąpił problem z załadowaniem tej usługi tatuażu.",
			robots: "noindex, nofollow",
		};
	}
}

export async function generateStaticParams() {
	try {
		const services = await getAllServices();
		return services.map((service) => ({ slug: service.slug }));
	} catch (error) {
		console.error("Error in generateStaticParams:", error);
		return []; // Zwróć pustą tablicę przy błędzie
	}
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
	try {
		const { slug } = await params;
		const service = await getServiceBySlug(slug);
		const { id, meta, title } = service;
		const images = await mapImagesWithWordPressAlt(getServiceImages(service));

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
						{
							position: 3,
							name: title.rendered,
							item: `https://iovi-ink.pl/uslugi/${slug}`,
						},
					]}
				/>
				<ImageJsonLd
					useAppDir={true}
					images={images.map((img) => ({
						contentUrl: img.src,
						creator: {
							"@type": "Person",
							name: "Jowita Potaczek",
						},
						creditText: "Jowita Potaczek - IOVI INK",
						copyrightNotice: "© Jowita Potaczek",
					}))}
				/>

				<ServiceHero
					subTitle={meta.hero_subheadline}
					title={meta.hero_h1}
					description={meta.hero_intro}
					image={images[0]}
				></ServiceHero>
				<TargetAudience
					title={meta.dla_kogo_h2}
					subtitle={meta.dla_kogo_subheadline}
					targetAudienceDsc={meta.dla_kogo}
					image={images[1]}
				/>
				<ServiceRoleSection
					title={meta.rola_uslugi_h2}
					subtitle={meta.rola_uslugi_subheadline}
					roleItems={meta.rola_uslugi}
					images={[
						images[2] || images[0], // Trzeci obraz lub fallback
						images[3] || images[1], // Czwarty obraz lub fallback
					]}
				/>
				<ServiceBenefitsSection
					title={meta.korzysci_h2}
					subtitle={meta.korzysci_subheadline}
					benefits={meta.korzysci}
					image={images[4] || images[0]}
				/>
				<ServiceDistinguishingSection
					title={meta.wyroznienie_h2}
					subtitle={meta.wyroznienie_subheadline}
					distinguishingItems={meta.wyroznienie}
					bgVariant="dark"
				/>
				<ServiceProcessSection
					title={meta.proces_h2}
					subtitle={meta.proces_subheadline}
					processSteps={meta.proces}
				/>
				<ServiceDistinguishingSection
					title={meta.specjalizacja_h2}
					subtitle={meta.specjalizacja_subheadline}
					distinguishingItems={meta.specjalizacja_1}
					bgVariant="light"
				/>
				<ServiceWhyMeSection
					title={meta.dlaczego_ja_h2}
					subtitle={meta.dlaczego_ja_subheadline}
					whyMeItems={meta.dlaczego_ja}
					image={images[5] || images[0]}
				/>
				<ServiceCta
					title={meta.cta_h2}
					subtitle={meta.cta_subheadline}
					ctaItems={meta.cta}
				/>
				<motion.section
					className="bg-foreground"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={containerVariants}
				>
					<Services {...servicesHome} />
				</motion.section>
				<CarouselSections />
			</>
		);
	} catch (error) {
		if (error instanceof JETEngineAPIError && error.status === 404) {
			notFound(); // ładnie przełączy na 404
		}
		throw error; // inne błędy -> faktyczny 500
	}
}

export default Page;
