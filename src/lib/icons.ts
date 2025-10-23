const BASE_URL = "https://cms.iovi-ink.pl/wp-content/uploads/2025/08";

// ===========================================
// GŁÓWNE IKONY SYSTEMOWE
// ===========================================

export const SYSTEM_ICONS = {
	// Najczęściej używane
	instagram: `${BASE_URL}/instagram_ikona.svg`,
	google: "https://cms.iovi-ink.pl/wp-content/uploads/2025/10/google.svg",
	googleAccent:
		"https://cms.iovi-ink.pl/wp-content/uploads/2025/10/google-accent.svg",
	tabletGraphic: `${BASE_URL}/Tablet-Graficzny.svg`,
	careForDetails: `${BASE_URL}/dbalosc_o-Detale_ikonka.svg`,

	plus: `${BASE_URL}/plus.svg`,
	minus: `${BASE_URL}/minus.svg`,

	// Ikony kontaktu
	envelope: `${BASE_URL}/envelope_icon_accent.svg`,
	instagramAccent: `${BASE_URL}/instagram_icon_accent.svg`,
	tattooMachine: `${BASE_URL}/tattoo_machine.svg`,
	tattooMachineAccent: `${BASE_URL}/tatto_machine_accent.svg`,
	locationAccent: `${BASE_URL}/location_accent.svg`,

	// Nowe ikony systemowe
	errorPage: `${BASE_URL}/error-page.svg`,
	ask: `${BASE_URL}/ask.svg`,
	cookie: `${BASE_URL}/cookie.svg`,
} as const;

// ===========================================
// IKONY PROCESÓW (używane w Assets/index.js)
// ===========================================

export const PROCESS_ICONS = {
	chat: `${BASE_URL}/Czat-1.svg`,
	tabletGraphic: `${BASE_URL}/Tablet-Graficzny.svg`,
	diamond: `${BASE_URL}/diamond.svg`,
	careForDetails: `${BASE_URL}/dbalosc_o-Detale_ikonka.svg`,
	bandage: `${BASE_URL}/bandage_icon.svg`,
} as const;

// ===========================================
// IKONY FEATURE CARD (Hero section)
// ===========================================

export const FEATURE_ICONS = {
	paletteBrush: `${BASE_URL}/pallete_brusj.svg`,
	tabletGraphic: `${BASE_URL}/tablet_graficzny.svg`,
	biceps: `${BASE_URL}/Biceps_icon.svg`,
} as const;

// ===========================================
// IKONY USŁUGOWE (Services & Benefits)
// ===========================================

export const SERVICE_ICONS = {
	// Precyzja i jakość
	precision: `${BASE_URL}/precision.svg`,
	loupe: `${BASE_URL}/loupe.svg`,
	tapeMeasure: `${BASE_URL}/tape-measure.svg`,

	// Szybkość i czas
	stopwatch: `${BASE_URL}/stopwatch.svg`,
	lightning: `${BASE_URL}/lightning.svg`,

	// Elegancja i premium
	crown: `${BASE_URL}/crown.svg`,
	feather: `${BASE_URL}/feather.svg`,
	heart: `${BASE_URL}/heart.svg`,

	// Bezpieczeństwo i pielęgnacja
	secureShield: `${BASE_URL}/secure-shield.svg`,
	glove: `${BASE_URL}/glove.svg`,
	eyeCare: `${BASE_URL}/eye-care.svg`,

	// Proces tatuowania
	ink: `${BASE_URL}/ink.svg`,
} as const;

export const TRAITS_ICONS = {
	cube: `https://cms.iovi-ink.pl/wp-content/uploads/2025/09/3d-model.svg`,
	fantasyBook:
		"https://cms.iovi-ink.pl/wp-content/uploads/2025/09/spell-book.svg",
} as const;
// ===========================================
// WSZYSTKIE IKONY W JEDNYM OBIEKCIE
// ===========================================

export const ICONS = {
	// Instagram - używane w 6+ miejscach
	instagram: SYSTEM_ICONS.instagram,
	instagramAccent: SYSTEM_ICONS.instagramAccent,
	google: SYSTEM_ICONS.google,
	googleAccent: SYSTEM_ICONS.googleAccent,

	// Tablet/Design - używane w 3+ miejscach
	tabletGraphic: SYSTEM_ICONS.tabletGraphic,
	paletteBrush: FEATURE_ICONS.paletteBrush,
	biceps: FEATURE_ICONS.biceps,

	// Kontakt
	envelope: SYSTEM_ICONS.envelope,
	tattooMachine: SYSTEM_ICONS.tattooMachine,
	tattooMachineAccent: SYSTEM_ICONS.tattooMachineAccent,
	locationAccent: SYSTEM_ICONS.locationAccent,

	// Proces
	chat: PROCESS_ICONS.chat,
	diamond: PROCESS_ICONS.diamond,
	bandage: PROCESS_ICONS.bandage,

	// Detale
	careForDetails: SYSTEM_ICONS.careForDetails,

	// Inne systemowe
	plus: SYSTEM_ICONS.plus,
	minus: SYSTEM_ICONS.minus,
	errorPage: SYSTEM_ICONS.errorPage,
	ask: SYSTEM_ICONS.ask,
	cookie: SYSTEM_ICONS.cookie,

	// === NOWE IKONY USŁUGOWE ===

	// Precyzja i jakość
	precision: SERVICE_ICONS.precision,
	loupe: SERVICE_ICONS.loupe,
	tapeMeasure: SERVICE_ICONS.tapeMeasure,

	// Szybkość i efektywność
	stopwatch: SERVICE_ICONS.stopwatch,
	lightning: SERVICE_ICONS.lightning,

	// Elegancja i premium
	crown: SERVICE_ICONS.crown,
	feather: SERVICE_ICONS.feather,
	heart: SERVICE_ICONS.heart,

	// Bezpieczeństwo i opieka
	secureShield: SERVICE_ICONS.secureShield,
	glove: SERVICE_ICONS.glove,
	eyeCare: SERVICE_ICONS.eyeCare,

	// Proces tatuowania
	ink: SERVICE_ICONS.ink,

	//Traits
	cube: TRAITS_ICONS.cube,
	fantasyBook: TRAITS_ICONS.fantasyBook,
} as const;

// ===========================================
// HELPER TYPES DLA TYPESCRIPT
// ===========================================

export type IconName = keyof typeof ICONS;
export type SystemIconName = keyof typeof SYSTEM_ICONS;
export type ProcessIconName = keyof typeof PROCESS_ICONS;
export type FeatureIconName = keyof typeof FEATURE_ICONS;
export type ServiceIconName = keyof typeof SERVICE_ICONS;

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Pobiera URL ikony po nazwie z walidacją
 */
export const getIcon = (name: IconName): string => {
	const iconUrl = ICONS[name];
	if (!iconUrl) {
		console.warn(`Icon "${name}" not found in ICONS object`);
		return "";
	}
	return iconUrl;
};

/**
 * Sprawdza czy ikona istnieje
 */
export const hasIcon = (name: string): name is IconName => {
	return name in ICONS;
};

/**
 * Wszystkie dostępne nazwy ikon
 */
export const getAvailableIcons = (): IconName[] => {
	return Object.keys(ICONS) as IconName[];
};

/**
 * Pobiera ikony z konkretnej kategorii
 */
export const getServiceIcons = (): ServiceIconName[] => {
	return Object.keys(SERVICE_ICONS) as ServiceIconName[];
};

// ===========================================
// DEPRECATED - do usunięcia po migracji
// ===========================================

/**
 * @deprecated Użyj ICONS.instagram zamiast tego
 */
export const INSTAGRAM_ICON = ICONS.instagram;

/**
 * @deprecated Użyj ICONS.tabletGraphic zamiast tego
 */
export const TABLET_ICON = ICONS.tabletGraphic;
