import Hero from "@/components/Sections/Hero";
// Bez dynamic, importujemy bezpośrednio
import AboutMe from "@/components/Sections/AboutMe";
import Services from "@/components/Sections/Services";
import TargetAudience from "@/components/Sections/TargetAudienceSection";
import Process from "@/components/Sections/Process";
import WhyMe from "@/components/Sections/WhyMe";
import Faq from "@/components/Sections/Faq";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import Contact from "@/components/Sections/Contact"; // Zostawiamy dynamic Contact

import * as motion from "motion/react-client";
import { images } from "@/lib/images";
import {
	aboutMeHome,
	blogHome,
	contactHome,
	faqHome,
	procesHome,
	servicesHome,
	socialLinks,
	targetAudienceHome,
	whyMeHome,
} from "@/lib/data";
import { BreadcrumbJsonLd, FAQPageJsonLd, SocialProfileJsonLd } from "next-seo";
import CarouselSkeleton from "@/components/skeletons/CarouselSkeleton";
import dynamic from "next/dynamic";

// Załóżmy, że masz też prosty szkielet dla bloku
const SectionSkeleton = () => <div className="h-96 w-full bg-muted/50" />;

// ✅ 1. CAROUSEL SECTION - Zostawiamy jako dynamiczne ładowanie
const DynamicCarousel = dynamic(
	() => import("@/components/Sections/CarouselSections"),
	{
		// Użyj swojego szkieletu karuzeli
		loading: () => <CarouselSkeleton />,
		// Opcjonalnie: nie ładuj na serwerze, jeśli to tylko klient
		// ssr: false,
	},
);

// ✅ 2. CONTACT SECTION - Zostawiamy jako dynamiczne ładowanie (często formularze są ciężkie)
const DynamicContact = dynamic(() => import("@/components/Sections/Contact"), {
	loading: () => <SectionSkeleton />,
});

// 🔥 USUNIĘTO Dynamic dla Faq, FeaturedBlogs, AboutMe, Services, TargetAudience, Process, WhyMe.
// Te komponenty będą teraz ładowane statycznie na serwerze (SSR).

export default async function Home() {
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
				]}
			/>
			<FAQPageJsonLd
				useAppDir={true}
				mainEntity={faqHome.questions.map(({ question, answer }) => ({
					questionName: question,
					acceptedAnswerText: answer,
					// Dodaj odpowiedni typ jeśli jest używany w FAQ
				}))}
			/>
			<Hero
				subTitle="Od minimalistycznych lini po złożone kompozycje"
				title="Tatuaże z charakterem i głową"
				description={
					<>
						Każdy projekt tworzę jako autorską kompozycję. Moje tatuaże to
						przemyślane dzieła dostosowane do Twojej anatomii, stylu i tego, jak
						chcesz się czuć ze swoim tatuażem przez następne lata. Pracuję w
						studiu{" "}
						<motion.a
							href={socialLinks.lewus.googleMaps}
							rel="noopener noreferrer"
							target="_blank"
							className=" text-primary hover:text-accent transition-colors duration-300"
							whileHover={{ scale: 1.02 }}
						>
							Lewus Ink
						</motion.a>{" "}
						w Mszanie Dolnej, gdzie mam idealne warunki do precyzyjnej
						realizacji każdego projektu.
					</>
				}
				image={images.bab_stoi}
			/>
			{/* ✅ DYNAMIC CAROUSEL */}
			<DynamicCarousel />

			<section className="visibility-auto">
				{/* 🔥 STATIC RENDER */}
				<AboutMe {...aboutMeHome} />
			</section>
			<section className="bg-foreground mt-16 visibility-auto">
				{/* 🔥 STATIC RENDER */}
				<Services {...servicesHome} />
			</section>
			<section className="bg-primary-foreground visibility-auto">
				{/* 🔥 STATIC RENDER */}
				<TargetAudience {...targetAudienceHome} />
			</section>
			<section className="visibility-auto">
				{/* 🔥 STATIC RENDER */}
				<Process {...procesHome} />
			</section>
			<section className="bg-foreground mt-16 visibility-auto">
				{/* 🔥 STATIC RENDER */}
				<WhyMe {...whyMeHome} />
			</section>
			<section className="bg-primary-foreground visibility-auto">
				{/* 🔥 STATIC RENDER */}
				<FeaturedBlogs {...blogHome} />
			</section>
			<section className="visibility-auto">
				{/* 🔥 STATIC RENDER */}
				<Faq {...faqHome} />
			</section>

			<section className="visibility-auto">
				{/* ✅ DYNAMIC CONTACT */}
				<DynamicContact {...contactHome} />
			</section>
		</>
	);
}
