// src/lib/personalData.ts
import { ICONS } from "@/lib/icons";
import { images } from "@/lib/images";
import { socialLinks } from "@/lib/data";
import {
	AboutMeProps,
	ContactQuick,
	ExperienceItem,
	HobbyItem,
	SkillTag,
	SpecializationItem,
} from "@/lib/dataTypes";

// ===========================================
// PERSONAL ABOUT ME DATA
// ===========================================

export const aboutMePersonal: AboutMeProps = {
	title: "Pasja do precyzji i detalu",
	subheadline: "Moja droga w tatuażu",
	image: images.zblizenie_na_twarz_patrzy_na_wprost,
	description: [
		"Artystyczne wykształcenie to fundament, ale prawdziwa nauka zaczęła się w studio. Każdy dzień to nowe wyzwania i możliwość doskonalenia techniki.",
		"Nie tworzę kopii z Pinterest - każdy projekt to autorska interpretacja Twojego pomysłu. Wierzę, że tatuaż to współpraca między artystą a klientem.",
		"Studio Lewus Ink pozwala mi oferować najwyższą jakość w sterylnych, komfortowych warunkach. To miejsce, gdzie mogę skupić się na sztuce.",
	],
};

// ===========================================
// PERSONAL SHOWCASE DATA
// ===========================================

export const experienceData: ExperienceItem[] = [
	{
		id: 1,
		period: "2024 - teraz",
		position: "TATUAŻYSTKA",
		company: "Studio Lewus Ink",
		description:
			"Specjalizacja w fine line, tatuażach minimalistycznych i delikatnych projektach damskich. Praca w studio z pełną odpowiedzialnością za projekty.",
	},
	{
		id: 2,
		period: "2023 - 2024",
		position: "NAUKA I PIERWSZE KROKI",
		company: "praktyka domowa",
		description:
			"Intensywna nauka na sztucznej skórze, pierwsze tatuaże na rodzinie. Rozwój technik fine line i projektowania autorskich kompozycji.",
	},
	{
		id: 3,
		period: "Od dziecka",
		position: "ARTYSTYCZNE PODSTAWY",
		company: "samokształcenie",
		description:
			"Rysowanie i malowanie od małego. Naturalne wyczucie kompozycji, proporcji i teorii kolorów - fundament dla wszystkich późniejszych umiejętności artystycznych.",
	},
];

export const specializationData: SpecializationItem[] = [
	{
		id: 1,
		name: "TATUAŻE GRAFICZNE",
		description:
			"Cienkie, precyzyjne linie to moja mocna strona. W tatuażach graficznych każda kreska musi być idealna - nie ma miejsca na błędy ani poprawki.",
	},
	{
		id: 2,
		name: "DELIKATNE TATUAŻE DAMSKIE",
		description:
			"Subtelne kompozycje dopasowane do kobiecych form. Rozumiem potrzebę dyskretności i elegancji - tworzę tatuaże, które podkreślają, nie przytłaczają.",
	},
	{
		id: 3,
		name: "PROJEKTY MINIMALISTYCZNE",
		description:
			"Czyste linie, przemyślane proporcje. Mniej znaczy więcej - każdy element ma swoje miejsce i cel.",
	},
	{
		id: 4,
		name: "AUTORSKIE KOMPOZYCJE",
		description:
			"Każdy tatuaż projektuję od zera - tworzę unikalne kompozycje dopasowane do Twojego ciała i historii.",
	},
	{
		id: 5,
		name: "TATUAŻE KWIATOWE",
		description:
			"Stylizowane motywy roślinne zredukowane do najczystszej formy. Potrafię zachować rozpoznawalność kwiatu przy maksymalnej redukcji detali.",
	},
];

export const hobbiesData: HobbyItem[] = [
	{
		id: 1,
		name: "Rysowanie",
		icon: ICONS.paletteBrush,
	},
	{
		id: 2,
		name: "Grafika 3D",
		icon: ICONS.cube,
	},
	{
		id: 3,
		name: "Gaming",
		icon: ICONS.tabletGraphic,
	},
	{
		id: 4,
		name: "Fantastyka",
		icon: ICONS.fantasyBook,
	},
	{
		id: 5,
		name: "DIY",
		icon: ICONS.tapeMeasure,
	},
];

export const skillsData: SkillTag[] = [
	// Style tatuażowe
	{ id: 1, name: "MINIMALISTYCZNE", category: "style" },
	{ id: 2, name: "TATUAŻE GRAFICZNE", category: "style" },
	{ id: 3, name: "KWIATOWE", category: "style" },
	{ id: 4, name: "DELIKATNE DAMSKIE", category: "style" },
	{ id: 5, name: "TATUAŻE MĘSKIE", category: "style" },

	// Techniki
	{ id: 6, name: "PRECYZYJNE LINIE", category: "technique" },
	{ id: 7, name: "CIENKIE KRESKI", category: "technique" },
	{ id: 8, name: "KOMPOZYCJA", category: "technique" },
	{ id: 9, name: "SZKICOWANIE", category: "technique" },
	{ id: 10, name: "PROJEKTOWANIE", category: "technique" },

	// Software/narzędzia
	{ id: 11, name: "PROCREATE", category: "software" },
	{ id: 12, name: "RYSOWANIE RĘCZNE", category: "software" },
	{ id: 13, name: "SKETCHING", category: "software" },
];

export const quickContactData: ContactQuick[] = [
	{
		id: 1,
		type: "instagram",
		icon: ICONS.instagramAccent,
		value: "@iovi.ink",
		href: socialLinks.iovi.instagram,
	},
	{
		id: 2,
		type: "email",
		icon: ICONS.envelope,
		value: process.env.EMAIL_TO || "hello@iovi-ink.pl",
		href: `mailto:${process.env.EMAIL_TO || "hello@iovi-ink.pl"}`,
	},
];
