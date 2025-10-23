import { ICONS, PROCESS_ICONS } from "@/lib/icons";
import { images } from "./images";
import {
	AboutMeProps,
	ContactProps,
	FaqProps,
	FaqQuestion,
	FeaturedBlogsProps,
	Proces,
	ProcessSectionProps,
	ServicesProps,
	TargetAudienceSectionProps,
	WhyMeProps,
} from "./dataTypes";

export const proces: Proces[] = [
	{
		id: 1,
		icon: PROCESS_ICONS.chat,
		bg_image: {
			mobile: images.proces.proces_1.mobile,
			desktop: images.proces.proces_1.desktop,
			alt: images.proces.proces_1.alt,
		},
		title: "Bezpłatna konsultacja",
		description:
			"Opowiadasz o swojej wizji, pokazujesz referencje, wyjaśniasz oczekiwania. Ja zadaję pytania, żeby zrozumieć istotę projektu.",
	},
	{
		id: 2,
		icon: PROCESS_ICONS.tabletGraphic,
		bg_image: {
			mobile: images.proces.proces_2.mobile,
			desktop: images.proces.proces_2.desktop,
			alt: images.proces.proces_2.alt,
		},
		title: "Szkicowanie autorskiego projektu",
		description:
			"Na podstawie rozmowy tworzę indywidualny wzór. Każdy szkic jest unikalny, dostosowany do Twoich potrzeb i anatomii.",
	},
	{
		id: 3,
		icon: PROCESS_ICONS.diamond,
		bg_image: {
			mobile: images.proces.proces_3.mobile,
			desktop: images.proces.proces_3.desktop,
			alt: images.proces.proces_3.alt,
		},
		title: "Dopracowanie szczegółów",
		description:
			"Pokazuję szkic, słucham uwag, wprowadzam zmiany. Dopracowujemy wszystko, aż będziesz pewny że to jest dokładnie to, czego chcesz.",
	},
	{
		id: 4,
		icon: PROCESS_ICONS.careForDetails,
		bg_image: {
			mobile: images.proces.proces_4.mobile,
			desktop: images.proces.proces_4.desktop,
			alt: images.proces.proces_4.alt,
		},
		title: "Profesjonalne wykonanie",
		description:
			"Sesja przebiega spokojnie i w Twoim tempie. Każda linia wykonana z maksymalną precyzją i troską o komfort.",
	},
	{
		id: 5,
		icon: PROCESS_ICONS.bandage,
		bg_image: {
			mobile: images.proces.proces_5.mobile,
			desktop: images.proces.proces_5.desktop,
			alt: images.proces.proces_5.alt,
		},
		title: "Wsparcie podczas gojenia",
		description:
			"Dostajesz instrukcje pielęgnacji a w razie pytań nie wachaj się napisać. To część usługi.",
	},
];
export const blogHome: FeaturedBlogsProps = {
	title: "Tatuaże - Porady i inspiracje",
	subheadline: "2 lata doświadczenia",
	description:
		"Odkryj porady o tatuażach, pielęgnacji i najnowsze trendy. Dowiedz się jak przygotować się do sesji i jak dbać o swoje tatuaże.",
};
export const faqHome: FaqProps = {
	subheadline: "FAQ",
	questions: [
		{
			id: 1,
			question: "Jak można się zapisać na tatuaż?",
			answer:
				"Możesz skontaktować się przez formularz na stronie internetowej albo wysyłając wiadomość na Instagramie iovi_ink. W zgłoszeniu warto dołączyć inspiracje graficzne, opis swojego pomysłu oraz informację o miejscu na ciele, które chcesz wytatuować.",
		},
		{
			id: 2,
			question: "Ile kosztuje tatuaż?",
			answer:
				"Cena tatuażu zależy przede wszystkim od jego wielkości, stylu, miejsca na ciele i stopnia skomplikowania wzoru. Dokładną wycenę podaję zawsze po zapoznaniu się z Twoim pomysłem.",
		},
		{
			id: 3,
			question: "Jak przygotować się do tatuażu?",
			answer:
				"Dobrze się wyśpij, zjedz posiłek przed wizytą i pij dużo wody. Unikaj alkoholu i środków rozrzedzających krew dzień wcześniej. Warto też założyć wygodne ubranie, które łatwo odsłoni tatuowaną część ciała.",
		},
		{
			id: 4,
			question: "Jak dbać o świeży tatuaż?",
			answer:
				"Po zakończeniu sesji otrzymasz szczegółowe instrukcje pielęgnacji, jednak podstawowe zasady są zawsze takie same. Przez pierwsze dni tatuaż trzeba delikatnie myć letnią wodą i łagodnym mydłem, a następnie smarować cienką warstwą kremu do tatuażu. Ważne jest, aby nie drapać ani nie zdrapywać strupków – to naturalna część procesu gojenia. Przez minimum dwa tygodnie należy unikać ekspozycji na słońce, solarium, basenu czy sauny. Odpowiednia pielęgnacja gwarantuje, że tatuaż zagoi się ładnie i zachowa intensywne kolory na lata.",
		},
	],
};

export const aboutMeHome: AboutMeProps = {
	title: "Moje Doświadczenie w Tworzeniu Tatuaży",
	subheadline: "2 lata doświadczenia",
	image: images.zblizenie_na_twarz_patrzy_na_wprost,
	description: [
		"Zaczynałam od nauki w domu, prawdziwe doświadczenie przyszło w studio. Każdy dzień to nowe wyzwania – różne typy skóry, różne oczekiwania klientów, różne techniki do opanowania.",
		"Praca w studio Lewus Ink pozwala mi oferować tatuaże na najwyższym poziomie. Sterylne środowisko, profesjonalny sprzęt, komfortowe warunki. Mogę skupić się na sztuce, bo wszystko inne jest załatwione.",
		"Każdy tatuaż traktuję jak wyzwanie artystyczne. Nie ma rutyny – jest ciągłe doskonalenie techniki i poszukiwanie najlepszych rozwiązań.",
	],
};

export const servicesHome: ServicesProps = {
	servicesType: "featured" as "main" | "featured",
	title: "Co mogę ci zaoferować?",
	subheadline: "Style którymi się zajmuję",
	description:
		"Każdy projekt to unikalna realizacja dostosowana do Twoich potrzeb i mojej wizji artystycznej.",
};

export const targetAudienceHome: TargetAudienceSectionProps = {
	title: "Dla Kogo Są Moje Tatuaże",
	image: images.karty_tatuazy,
	targetAudienceDsc: [
		{
			title: "Osoby ceniące uczciwy stosunek jakości do ceny",
			description:
				"Płacisz za umiejętności i czas, który w to wkładam. Dostajesz tatuaż wykonany precyzyjnie, który będzie wyglądał dobrze przez lata, w cenie która ma sens.",
		},
		{
			title: "Miłośnicy przemyślanego designu",
			description:
				"Tatuaże graficzne, fine line, minimalizm, – specjalizuję się w stylach wymagających precyzji. Jeśli lubisz czyste linie i przemyślane proporcje – rozumiemy się.",
		},
		{
			title: "Osoby z konkretnym pomysłem",
			description:
				"Jeśli przychodzisz z konkretną ideą - świetnie się dogadamy. Lubię klientów, którzy wiedzą w którym kierunku iść. Wspólnie dopracujemy szczegóły i zrobimy to jak należy.",
		},
	],
};

export const whyMeHome: WhyMeProps = {
	title: "Co wyróżnia moje tatuaże?",
	cards: {
		left: {
			title: "Autorskie projekty bez kopii",
			description: `Każdy szkic rysuję od zera. Oferuje tylko przemyślane, autorskie kompozycje.`,
			icon: ICONS.tabletGraphic,
		},
		centerTop: {
			title: "Precyzja na poziomie obsesji",
			description: `Doświadczenie i praktyka. Każda linia musi być dokładnie tam, gdzie zaplanowałam.`,
			icon: ICONS.diamond,
		},
		centerBottom: {
			title: "Studio Lewus Ink jako gwarancja",
			description: `Jeden z najlepszych adresów w regionie. Najwyższe standardy higieny, profesjonalny sprzęt.`,
			icon: ICONS.tattooMachine,
		},
		right: {
			title: "Artystyczny fundament",
			description: `Pasja do rysowania od dziecka dała mi oko do tego co współgra ze sobą wizualnie. Po prostu wiem co zrobić aby tatauż prezentował się dobrze na skórze`,
			icon: ICONS.paletteBrush,
		},
	},
};

export const procesHome: ProcessSectionProps = {
	title: "Tatuaże - Proces Tworzenia",
	subheadline: "Od pierwszego szkicu do gojenia",
	description: "Jestem z Tobą na każdym etapie współpracy.",
	proces: proces,
};

export const contactHome: ContactProps = {
	subheadline: "Napisz – pogadamy o szczegółach",
	title: "Gotowy na Rozmowę o Twoim Projekcie?",
	description:
		"Marzysz o unikalnym tatuażu? Jestem tutaj, żeby tchnąć życie w Twoje pomysły. Pierwsza rozmowa jest zawsze bezpłatna. Na instagramie odpisuję najszybciej.",
};

export const socialLinks = {
	iovi: {
		instagram: "https://www.instagram.com/iovi.ink/",
	},
	lewus: {
		googleMaps: "https://share.google/lc156tUkL2CVSgy2m",
		googleMapsView: "https://maps.app.goo.gl/kBFjCk4v8GGxi3mM9",
		instagram: "https://www.instagram.com/lewus_ink/",
	},
};
