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
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tatuażysta",
	description:
		"Tatuażysta specjalizujący w delikatnych, minimalistycznych i graficznych - iovi-ink. Artystyczne projekty, precyzyjne wykonanie, bezpłatna konsultacja. Wykonanie w Studio Lewus Ink ",

	openGraph: {
		title:
			"Tatuażysta |  Delikatne i Graficzne Tatuaże | Bezpłatna konsultacja Mszana Dolna",
		description:
			"Tatuażysta specjalizujący w delikatnych, minimalistycznych i graficznych - iovi-ink. Artystyczne projekty, precyzyjne wykonanie, bezpłatna konsultacja. Wykonanie w Studio Lewus Ink ",
		url: "https://iovi-ink.pl/tatuazysta",
		images: [
			{
				url: `${images.seoBaner.src}`,
				width: 1200,
				height: 630,
				alt: `${images.seoBaner.alt}`,
			},
		],
		type: "profile",
	},

	alternates: {
		canonical: "https://iovi-ink.pl/tatuazysta",
	},

	// Keywords dla strony o mnie
	keywords: ["tatuażysta", "tatuażystka"],

	// Dodatkowe schema.org metadata dla profilu
	other: {
		"profile:first_name": "Jowita",
		"profile:username": "iovi.ink",
		"article:author": "Jowita - iovi-ink",
	},
};
export default async function TatuazystaPage() {
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
			<SocialProfileJsonLd
				useAppDir={true}
				type="Person"
				name="Jowita Potaczek"
				url="https://www.iovi-ink.pl"
				sameAs={[socialLinks.iovi.instagram]}
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
						name: "Tatuażysta",
						item: "https://iovi-ink.pl/tatuazysta",
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
				subTitle="Profesjonalne tatuaże z charakterem"
				title="Tatuażysta z Pasją do Perfekcji"
				description={
					<>
						Jestem tatuażystką, która traktuje każdy projekt jako wyzwanie
						artystyczne. Specjalizuję się w tatuażach graficznych,
						minimalistycznych i fine line. Pracuję w studiu{" "}
						<motion.a
							href={socialLinks.lewus.googleMaps}
							rel="noopener noreferrer"
							target="_blank"
							className=" text-primary hover:text-accent transition-colors duration-300"
							whileHover={{ scale: 1.02 }}
						>
							Lewus Ink
						</motion.a>{" "}
						w Mszanie Dolnej, gdzie mam idealne warunki do realizacji Twoich
						pomysłów z maksymalną precyzją.
					</>
				}
				image={images.bab_z_maszynkom}
			/>

			<CarouselSections />

			<section>
				<AboutMe
					title="Moja Droga jako Tatuażysta"
					subheadline="2 lata praktyki i ciągłego rozwoju"
					image={images.zblizenie_na_twarz_patrzy_na_wprost}
					description={[
						"Zostać tatuażystą to było naturalne rozwinięcie mojej pasji do sztuki. Od dziecka rysowałam, ale dopiero w studio odkryłam jak fascynujące jest przenoszenie sztuki na skórę.",
						"Jako tatuażysta uczę się czegoś nowego każdego dnia - różne typy skóry, nowe techniki, sposoby na osiąganie coraz lepszych efektów. To zawód, który wymaga ciągłego doskonalenia.",
						"Praca w studio Lewus Ink daje mi możliwość skupienia się na tym, co najważniejsze - tworzeniu pięknych tatuaży. Mam dostęp do najlepszego sprzętu i sterylnych warunków.",
					]}
				/>
			</section>

			<section className="bg-foreground mt-16">
				<Services
					servicesType="featured"
					title="Czym zajmuje się tatuażysta?"
					subheadline="Moje specjalizacje jako tatuażysty"
					description="Każdy tatuaż tworzę jako unikalną kompozycję dostosowaną do Twoich potrzeb i mojej wizji artystycznej."
				/>
			</section>

			<section className="bg-primary-foreground">
				<TargetAudienceSection
					title="Dla Kogo Pracuję Jako Tatuażysta"
					image={images.karty_tatuazy}
					targetAudienceDsc={[
						{
							title: "Osoby szukające profesjonalnego tatuażysty",
							description:
								"Jeśli szukasz tatuażysty, który potraktuje Twój pomysł poważnie i wykona go precyzyjnie, to dobrze trafiłeś. Oferuję uczciwy stosunek jakości do ceny i pełne zaangażowanie w każdy projekt.",
						},
						{
							title: "Miłośnicy przemyślanego designu",
							description:
								"Jako tatuażysta specjalizuję się w stylach wymagających precyzji - fine line, minimalizm, grafika. Jeśli cenisz czyste linie i przemyślane kompozycje, rozumiemy się.",
						},
						{
							title: "Klienci z konkretną wizją",
							description:
								"Najlepiej współpracuje mi się z osobami, które mają pomysł na swój tatuaż. Jako doświadczony tatuażysta pomogę Ci dopracować szczegóły i zrealizować projekt idealnie.",
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
					title="Tatuażysta - Porady i inspiracje"
					subheadline="2 lata doświadczenia"
					description="Odkryj porady o tatuażach, pielęgnacji i najnowsze trendy od tatuażysty. Dowiedz się jak przygotować się do sesji i jak dbać o swoje dzieło."
				/>
			</section>
			<section>
				<Faq {...faqData} />
			</section>

			<section>
				<Contact
					subheadline="Szukasz profesjonalnego tatuażysty?"
					title="Porozmawiajmy o Twoim Projekcie"
					description="Jako doświadczony tatuażysta chętnie przedyskutuję Twoje pomysły i opowiem jak można je najlepiej zrealizować. Pierwsza konsultacja jest zawsze bezpłatna."
				/>
			</section>
		</>
	);
}
