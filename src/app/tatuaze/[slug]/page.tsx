import Hero from "@/components/Sections/Hero";
import CarouselSections from "@/components/Sections/CarouselSections";
import AboutMe from "@/components/Sections/AboutMe";
import Services from "@/components/Sections/Services";
import TargetAudienceSection from "@/components/Sections/TargetAudienceSection";
import Process from "@/components/Sections/Process";
import WhyMe from "@/components/Sections/WhyMe";
import Faq from "@/components/Sections/Faq";
import Contact from "@/components/Sections/Contact";
import * as motion from "motion/react-client";
import { images } from "@/lib/images";
import { ICONS, PROCESS_ICONS } from "@/lib/icons";
import { socialLinks } from "@/lib/data";
import { BreadcrumbJsonLd, FAQPageJsonLd, SocialProfileJsonLd } from "next-seo";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import {
	getAllHomepageCites,
	getCityHomepageBySlug,
	JETEngineAPIError,
} from "@/lib/jetApi";
import { JetHomepageProps } from "@/lib/jetPostTypes";
import { Metadata } from "next";
import { notFound } from "next/navigation"; // 🔥 Import notFound

export async function generateStaticParams() {
	try {
		const type = "tatuaze";
		const cities = await getAllHomepageCites(type as "tatuaze | tatuazysta");
		console.log(cities);
		return cities.map((cities) => ({ slug: cities.slug }));
	} catch (error) {
		console.error("Error in generateStaticParams:", error);
		return []; // Zwróć pustą tablicę przy błędzie
	}
}

export async function generateMetadata({
	params,
}: JetHomepageProps): Promise<Metadata> {
	try {
		const { slug } = await params;
		const service = await getCityHomepageBySlug(
			slug,
			"tatuaze" as "tatuaze | tatuazysta",
		);

		// jeśli jednak zwracasz null w getCityHomepageBySlug
		if (!service) {
			return {
				title: "Strona nie została znaleziona - iovi-ink",
				description: "Przepraszamy, nie można znaleźć tej strony o tatuażach.",
				robots: "noindex, nofollow",
			};
		}

		const { meta } = service;
		const serviceTitle = service.title.rendered;

		// Wykorzystaj gotowe SEO z CMS lub fallback
		const seoTitle =
			serviceTitle || `${serviceTitle} - Jowita Tatuażystka | IOVI INK`;
		const seoDescription =
			meta.seo_description ||
			`${serviceTitle} - profesjonalne usługi tatuażu. Minimalistyczne i graficzne wzory dostosowane do anatomii.`;

		// Keywords z CMS + dodatkowe lokalne
		const keywords = [meta.seo_keyword, "tatuażysta", "tatuaże"];

		return {
			title: seoTitle,
			description: seoDescription,
			keywords: keywords,
			openGraph: {
				title: seoTitle,
				description: seoDescription,
				url: `https://iovi-ink.pl/tatuaze/${slug}`,
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
				canonical: `https://iovi-ink.pl/tatuaze/${slug}`,
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
				title: "Strona nie została znaleziona - iovi-ink",
				description: "Przepraszamy, nie można znaleźć tej strony o tatuażach.",
				robots: "noindex, nofollow",
			};
		}
		return {
			title: "Błąd ładowania strony - iovi-ink",
			description: "Wystąpił problem z załadowaniem tej strony o tatuażach.",
			robots: "noindex, nofollow",
		};
	}
}

export default async function TatuazePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	try {
		const { slug } = await params;
		const service = await getCityHomepageBySlug(
			slug,
			"tatuaze" as "tatuaze | tatuazysta",
		);

		if (!service) {
			notFound(); // Jeśli getCityHomepageBySlug zwraca null
		}

		const { meta, title } = service;

		// FAQ Data
		const faqData = {
			subheadline: "FAQ",
			questions: [
				{
					id: 1,
					question: "Jak wybrać dobrego tatuażystę?",
					answer:
						"Sprawdź portfolio, przeczytaj opinie klientów i zwróć uwagę na warunki w studio. Dobry tatuażysta zawsze chętnie opowie o swojej pracy i pokaże przykłady wcześniejszych realizacji. Ważne też, żeby czuć się komfortowo podczas pierwszej rozmowy.",
				},
				{
					id: 2,
					question: "Co wyróżnia dobrego tatuażystę?",
					answer:
						"Przede wszystkim umiejętności techniczne, artystyczne oko i dbałość o higienę. Dobry tatuażysta słucha klienta, ale też potrafi doradzić co będzie najlepsze. Ważne są też doświadczenie i ciągłe doskonalenie swoich umiejętności.",
				},
				{
					id: 3,
					question: "Jak długo pracujesz jako tatuażysta?",
					answer:
						"Tatuuję od 2 lat, ale moja przygoda ze sztuką trwa od dziecka. Stale rozwijam swoje umiejętności i uczę się nowych technik. Każdy tatuaż to dla mnie lekcja i możliwość doskonalenia warsztatu.",
				},
				{
					id: 4,
					question: "W jakim stylu wykonujesz tatuaże?",
					answer:
						"Specjalizuję się w tatuażach graficznych, minimalistycznych i fine line. Lubię czyste linie, przemyślane kompozycje i precyzyjne wykonanie. Każdy projekt dostosowuję do anatomii klienta i jego indywidualnych potrzeb.",
				},
			],
		};

		// Process Data
		const procesData = [
			{
				id: 1,
				icon: PROCESS_ICONS.chat,
				bg_image: {
					mobile: images.proces.proces_1.mobile,
					desktop: images.proces.proces_1.desktop,
					alt: images.proces.proces_1.alt,
				},
				title: "Pierwsza rozmowa z tatuażystą",
				description:
					"Opowiadasz o swojej wizji, pokazujesz inspiracje. Jako tatuażysta zadaję pytania, żeby w pełni zrozumieć Twoje oczekiwania i możliwości realizacji.",
			},
			{
				id: 2,
				icon: PROCESS_ICONS.tabletGraphic,
				bg_image: {
					mobile: images.proces.proces_2.mobile,
					desktop: images.proces.proces_2.desktop,
					alt: images.proces.proces_2.alt,
				},
				title: "Tworzenie autorskiego projektu",
				description:
					"Na podstawie naszej rozmowy projektuję unikalny wzór. Jako tatuażysta dbam o to, żeby każdy szkic był dopasowany do Twojego ciała i stylu.",
			},
			{
				id: 3,
				icon: PROCESS_ICONS.diamond,
				bg_image: {
					mobile: images.proces.proces_3.mobile,
					desktop: images.proces.proces_3.desktop,
					alt: images.proces.proces_3.alt,
				},
				title: "Dopracowanie z tatuażystą",
				description:
					"Pokazuję projekt, słucham Twoich uwag i wprowadzam poprawki. Dopracowujemy wszystkie szczegóły, aż będziesz pewny, że to dokładnie to czego chcesz.",
			},
			{
				id: 4,
				icon: PROCESS_ICONS.careForDetails,
				bg_image: {
					mobile: images.proces.proces_4.mobile,
					desktop: images.proces.proces_4.desktop,
					alt: images.proces.proces_4.alt,
				},
				title: "Profesjonalna sesja tatuażysty",
				description:
					"Wykonuję tatuaż spokojnie i precyzyjnie. Jako doświadczony tatuażysta dbam o Twój komfort i bezpieczeństwo podczas całej sesji.",
			},
			{
				id: 5,
				icon: PROCESS_ICONS.bandage,
				bg_image: {
					mobile: images.proces.proces_5.mobile,
					desktop: images.proces.proces_5.desktop,
					alt: images.proces.proces_5.alt,
				},
				title: "Wsparcie po sesji",
				description:
					"Otrzymujesz szczegółowe instrukcje pielęgnacji. Jako Twój tatuażysta jestem dostępna w razie pytań podczas gojenia - to część mojej usługi.",
			},
		];

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
							name: "Tatuaże",
							item: "https://iovi-ink.pl/tatuaze",
						},
						{
							position: 3,
							name: title.rendered,
							item: `https://iovi-ink.pl/tatuaze/${slug}`,
						},
					]}
				/>
				<FAQPageJsonLd
					useAppDir={true}
					mainEntity={faqData.questions.map(({ question, answer }) => ({
						questionName: question,
						acceptedAnswerText: answer,
					}))}
				/>

				<Hero
					subTitle={meta.hero_subtitle}
					title={meta.hero_title}
					description={meta.hero_description}
					image={{
						src: images.bab_z_maszynkom.src,
						alt: `${title.rendered} - Iovi-Ink`,
					}}
				/>

				<CarouselSections />

				<section>
					<AboutMe
						title={meta.about_me_title}
						subheadline={meta.about_me_subheadline}
						image={images.zblizenie_na_twarz_patrzy_na_wprost}
						description={[
							meta.about_me_description_1,
							meta.about_me_description_2,
							meta.about_me_description_3,
						]}
					/>
				</section>

				<section className="bg-foreground mt-16">
					<Services
						servicesType="featured"
						title={meta.services_title}
						subheadline={meta.services_subheadline}
						description={meta.services_description}
					/>
				</section>

				<section className="bg-primary-foreground">
					<TargetAudienceSection
						title={meta.target_audience_title}
						image={images.karty_tatuazy}
						targetAudienceDsc={[
							{
								title: meta.target_audience_item_1_title,
								description: meta.target_audience_item_1_description,
							},
							{
								title: meta.target_audience_item_2_title,
								description: meta.target_audience_item_2_description,
							},
							{
								title: meta.target_audience_item_3_title,
								description: meta.target_audience_item_3_description,
							},
						]}
					/>
				</section>

				<section>
					<Process
						title="Jak Pracuje Profesjonalny Tatuażysta"
						subheadline="Mój proces tworzenia tatuaży"
						description="Jako tatuażysta prowadzę Cię przez każdy etap - od pierwszej rozmowy do pełnego wygojenia."
						proces={procesData}
					/>
				</section>

				<section className="bg-foreground mt-16">
					<WhyMe
						title="Co wyróżnia mnie jako tatuażystę?"
						cards={{
							left: {
								title: "Artystyczne wykształcenie",
								description:
									"Jako tatuażysta mam solidne podstawy - rysowanie od dziecka, zrozumienie kompozycji i proporcji. To daje mi przewagę w projektowaniu.",
								icon: ICONS.paletteBrush,
							},
							centerTop: {
								title: "Precyzja na poziomie obsesji",
								description:
									"Każda linia musi być dokładnie tam gdzie zaplanowałam. To moja dewiza jako tatuażysty - zero kompromisów w kwestii jakości wykonania.",
								icon: ICONS.diamond,
							},
							centerBottom: {
								title: "Studio Lewus Ink",
								description:
									"Pracuję w jednym z najlepszych studiów w regionie. To gwarantuje najwyższe standardy higieny i profesjonalny sprzęt do każdego tatuażu.",
								icon: ICONS.tattooMachine,
							},
							right: {
								title: "Autorskie projekty",
								description:
									"Jako tatuażysta tworzę tylko unikalne wzory. Każdy szkic rysuje od zera, dostosowując go do Twojej anatomii i stylu życia.",
								icon: ICONS.tabletGraphic,
							},
						}}
					/>
				</section>
				<section className="bg-primary-foreground ">
					<FeaturedBlogs
						title={meta.blog_title}
						subheadline={meta.blog_subheadline}
						description={meta.blog_description}
					/>
				</section>
				<section>
					<Faq {...faqData} />
				</section>

				<section>
					<Contact
						subheadline={meta.contact_subheadline}
						title={meta.contact_title}
						description={meta.contact_description}
					/>
				</section>
			</>
		);
	} catch (error) {
		if (error instanceof JETEngineAPIError && error.status === 404) {
			notFound(); // ładnie przełączy na 404
		}
		throw error; // inne błędy -> faktyczny 500
	}
}
