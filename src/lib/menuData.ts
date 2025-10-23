// src/lib/menuData.ts
import type { LucideIcon } from "lucide-react";
import {
	Palette,
	Layers3,
	Zap,
	Sparkles,
	Shapes,
	Flower2,
	Heart,
	Shield,
	PenTool,
} from "lucide-react";

// Types
export interface ServiceItem {
	name: string;
	desc: string;
	icon: LucideIcon;
	href: string;
}

export interface Service {
	title: string;
	icon: LucideIcon;
	items: ServiceItem[];
}

export interface MenuItem {
	name: string;
	href: string;
	hasDropdown?: boolean; // Nowe pole dla rozróżnienia
}

export interface ServiceDropdownProps {
	serviceKey: string;
	service: Service;
}

// Menu items data - ZMIENIONA KOLEJNOŚĆ
export const menuItems: MenuItem[] = [
	{ name: "Strona główna", href: "/" },
	{ name: "Portfolio", href: "/portfolio" },
	{ name: "O Mnie", href: "/o-mnie" },
	{ name: "Blog", href: "/blog" },
	{ name: "Kontakt", href: "/kontakt" },
];

// Pomocnicze tablice dla różnych części menu
export const menuItemsBeforeServices: MenuItem[] = [
	{ name: "Strona główna", href: "/" },
	{ name: "Portfolio", href: "/portfolio" },
];

export const menuItemsAfterServices: MenuItem[] = [
	{ name: "O Mnie", href: "/o-mnie" },
	{ name: "Blog", href: "/blog" },
	{ name: "Kontakt", href: "/kontakt" },
];

export const FooterMenuLinks = [
	{ name: "Strona główna", href: "/" },
	{ name: "Portfolio", href: "/portfolio" },
	{ name: "Usługi", href: "/uslugi" },
	{ name: "O Mnie", href: "/o-mnie" },
	{ name: "Blog", href: "/blog" },
	{ name: "Kontakt", href: "/kontakt" },
];

// Services data
export const services = {
	tatuaze: {
		title: "Tatuaże",
		icon: Zap, // np. "Zap" jako główna kategoria – energia, ekspresja
		items: [
			{
				name: "Minimalistyczne / Fine Line",
				desc: "Subtelne wzory, cienkie linie, idealne dla miłośników prostoty",
				icon: Sparkles, // Sparkles = lekkość, subtelność
				href: "/uslugi/tatuaze-minimalistyczne",
			},
			{
				name: "Tatuaże Graficzne",
				desc: "Ilustracyjne i artystyczne wzory o charakterze rysunkowym",
				icon: PenTool, // PenTool = kojarzy się z grafiką, rysunkiem
				href: "/uslugi/tatuaze-graficzne",
			},
			{
				name: "Kwiatowe",
				desc: "Motywy roślinne i kwiatowe o naturalnym charakterze",
				icon: Flower2, // Flower2 = idealnie pasuje
				href: "/uslugi/tatuaze-kwiatowe",
			},
			{
				name: "Delikatne Tatuaże Damskie",
				desc: "Subtelne i eleganckie wzory podkreślające kobiecość",
				icon: Heart, // Heart = kobiecość, emocje
				href: "/uslugi/delikatne-tatuaze-damskie",
			},
			{
				name: "Tatuaże Męskie",
				desc: "Wyraziste, mocne projekty o zdecydowanym stylu",
				icon: Shield, // Shield = siła, męskość, ochrona
				href: "/uslugi/tatuaze-meskie",
			},
		],
	},
};
