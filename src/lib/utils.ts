import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
	JetEngineUsluga,
	RawJetEngineUsluga,
	UslugiMeta,
} from "./jetPostTypes";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatPhoneNumber = (value: string) => {
	// Usuń wszystko co nie jest cyfrą
	const numbers = value.replace(/\D/g, "");

	// Ogranicz do 9 cyfr
	const limited = numbers.slice(0, 9);

	// Formatuj z spacjami: XXX XXX XXX
	if (limited.length >= 7) {
		return `${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(6)}`;
	} else if (limited.length >= 4) {
		return `${limited.slice(0, 3)} ${limited.slice(3)}`;
	} else {
		return limited;
	}
};

export const formatDate = (dateString: string) => {
	try {
		const date = new Date(dateString);
		return date.toLocaleDateString("pl-PL", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	} catch {
		return dateString;
	}
};

export function objectToSortedArray<T>(obj: Record<string, T>): T[] {
	if (!obj || typeof obj !== "object") {
		return [];
	}
	if (Array.isArray(obj)) {
		return obj;
	}
	return Object.keys(obj)
		.filter((key) => key.startsWith("item-"))
		.sort((a, b) => {
			const numA = parseInt(a.split("-")[1], 10);
			const numB = parseInt(b.split("-")[1], 10);
			return numA - numB;
		})
		.map((key) => obj[key])
		.filter(Boolean); // Usuń null/undefined
}
export function transformServiceData(
	rawData: RawJetEngineUsluga,
): JetEngineUsluga {
	const rawMeta = rawData.meta;

	// Przekształć wszystkie sekcje obiektowe na tablice
	const transformedMeta: UslugiMeta = {
		// Podstawowe pola - przepisz bez zmian
		type: rawMeta.type,
		name: rawMeta.name,
		seo_title: rawMeta.seo_title,
		seo_description: rawMeta.seo_description,
		seo_keyword: rawMeta.seo_keyword,
		hero_subheadline: rawMeta.hero_subheadline,
		hero_h1: rawMeta.hero_h1,
		hero_intro: rawMeta.hero_intro,

		// Sekcje - przekształć obiekty na tablice
		dla_kogo_subheadline: rawMeta.dla_kogo_subheadline,
		dla_kogo_h2: rawMeta.dla_kogo_h2,
		dla_kogo: objectToSortedArray(rawMeta.dla_kogo),

		rola_uslugi_subheadline: rawMeta.rola_uslugi_subheadline,
		rola_uslugi_h2: rawMeta.rola_uslugi_h2,
		rola_uslugi: objectToSortedArray(rawMeta.rola_uslugi),

		korzysci_subheadline: rawMeta.korzysci_subheadline,
		korzysci_h2: rawMeta.korzysci_h2,
		korzysci: objectToSortedArray(rawMeta.korzysci),

		// Wyróżnienie - obsłuż różne nazwy pól
		wyroznienie_subheadline:
			rawMeta.wyroznienie_subheadline ||
			rawMeta.punkt_wyrozniajacy_subheadline ||
			"",
		wyroznienie_h2:
			rawMeta.wyroznienie_h2 || rawMeta.punkt_wyrozniajacy_h2 || "",
		wyroznienie: objectToSortedArray(rawMeta.wyroznienie),

		specjalizacja_subheadline: rawMeta.specjalizacja_subheadline,
		specjalizacja_h2: rawMeta.specjalizacja_h2,
		specjalizacja_1: objectToSortedArray(rawMeta.specjalizacja), // API: specjalizacja -> Interface: specjalizacja_1

		proces_subheadline: rawMeta.proces_subheadline,
		proces_h2: rawMeta.proces_h2,
		proces: objectToSortedArray(rawMeta.proces),

		dlaczego_ja_subheadline: rawMeta.dlaczego_ja_subheadline,
		dlaczego_ja_h2: rawMeta.dlaczego_ja_h2,
		dlaczego_ja: objectToSortedArray(rawMeta.dlaczego_ja),

		cta_subheadline: rawMeta.cta_subheadline,
		cta_h2: rawMeta.cta_h2,
		cta: objectToSortedArray(rawMeta.cta),

		// Obrazy - przepisz bez zmian
		image_1: rawMeta.image_1,
		image_2: rawMeta.image_2,
		image_3: rawMeta.image_3,
		image_4: rawMeta.image_4,
		image_5: rawMeta.image_5,
		image_6: rawMeta.image_6,
	};

	return {
		id: rawData.id,
		slug: rawData.slug,
		type: rawData.type,
		title: rawData.title,
		meta: transformedMeta,
		attributes: rawData.attributes,
	};
}
