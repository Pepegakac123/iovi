// src/lib/contactData.ts
import { ICONS } from "@/lib/icons";
import { socialLinks } from "./data";

// ===========================================
// CONTACT DATA STRUCTURE
// ===========================================

export interface ContactInfoType {
	type: "phone" | "email" | "address" | "nip" | "instagram";
	icon: string;
	label: string;
	value: string;
	href?: string;
	isExternal?: boolean;
}

// ===========================================
// STUDIO CONTACT DATA
// ===========================================

export const studioContactData: ContactInfoType[] = [
	{
		type: "email",
		icon: ICONS.envelope,
		label: "E-mail",
		value: process.env.EMAIL_TO as string,
		href: `mailto:${process.env.EMAIL_TO}`,
	},
	{
		type: "address",
		icon: ICONS.locationAccent,
		label: "Adres studia",
		value: "Studio Tatuażu LewusInk, Mszana Dolna", // Zastąp dokładnym adresem
		href: socialLinks.lewus.googleMaps,
		isExternal: true,
	},
];

// ===========================================
// SOCIAL LINKS DATA
// ===========================================

export const socialContactData: ContactInfoType[] = [
	{
		type: "instagram",
		icon: ICONS.instagramAccent,
		label: "Instagram Iovi",
		value: "@iovi.ink",
		href: socialLinks.iovi.instagram,
		isExternal: true,
	},
	{
		type: "instagram",
		icon: ICONS.instagramAccent,
		label: "Instagram Lewus",
		value: "@lewus_ink", //
		href: socialLinks.lewus.instagram,
		isExternal: true,
	},
];
// ===========================================
// GOOGLE MAPS CONFIGURATION
// ===========================================

export const googleMapsConfig = {
	embedUrl:
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.8753814507672!2d20.0798427768095!3d49.67548604285895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47160defd529190f%3A0xb9ccd9cc4627d98!2sLewus%20INK%20Tattoo%26Piercing%20Mszana%20Dolna!5e0!3m2!1spl!2spl!4v1755850214828!5m2!1spl!2spl",
	linkUrl: socialLinks.lewus.googleMapsView,
	title: "Lokalizacja Studio Tatuażu LewusInk w Mszanie Dolnej",
};
