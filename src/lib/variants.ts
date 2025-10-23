// src/lib/variants.ts - ZOPTYMALIZOWANE DLA LCP PERFORMANCE

import { Variants } from "motion";

// ==========================================
// PODSTAWOWE WARIANTY KONTENERÓW
// ==========================================

export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05, // ZREDUKOWANE z 0.1 na 0.05
			delayChildren: 0.1, // ZREDUKOWANE z 0.2 na 0.1
		},
	},
} as Variants;

export const containerVariantsFast = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.03,
			delayChildren: 0.05,
		},
	},
} as Variants;

export const containerVariantsLong = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
} as Variants;

// ==========================================
// NOWE - VARIANTS BEZ DELAY DLA LCP
// ==========================================

export const containerVariantsImmediate = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.2,
			staggerChildren: 0.02,
			delayChildren: 0, // BEZ DELAY!
		},
	},
} as Variants;

export const lcpVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.1, // BARDZO SZYBKIE
			delay: 0, // BEZ DELAY!
		},
	},
} as Variants;

// ==========================================
// PODSTAWOWE WARIANTY ELEMENTÓW
// ==========================================

export const itemVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.98 }, // ZREDUKOWANE y z 30 na 20
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.4, // ZREDUKOWANE z 0.6 na 0.4
			ease: "easeOut",
		},
	},
} as Variants;

export const itemVariantsFast = {
	hidden: { opacity: 0, y: 8 }, // ZREDUKOWANE z 12 na 8
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 150, // ZWIĘKSZONE z 120
			damping: 12,
		},
	},
} as Variants;

export const itemVariantsForm = {
	hidden: { opacity: 0, y: 15 }, // ZREDUKOWANE z 20 na 15
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 120,
			damping: 15,
		},
	},
} as Variants;

export const contentVariants = {
	hidden: { opacity: 0, y: 15 }, // ZREDUKOWANE z 30 na 15
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4, // ZREDUKOWANE z 0.6 na 0.4
			ease: "easeOut",
		},
	},
} as Variants;

// ==========================================
// WARIANTY NAGŁÓWKÓW I TEKSTÓW - ZOPTYMALIZOWANE
// ==========================================

export const titleVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 }, // ZREDUKOWANE y z 50 na 20
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.4, // ZREDUKOWANE z 0.8 na 0.4
			ease: "easeOut",
		},
	},
} as Variants;

export const titleVariantsLCP = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.1, // BARDZO SZYBKIE DLA LCP
			delay: 0,
		},
	},
} as Variants;

export const headerVariants = {
	hidden: {
		opacity: 0,
		y: 20, // ZREDUKOWANE z 30 na 20
		scale: 0.98, // ZREDUKOWANE z 0.95 na 0.98
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.4, // ZREDUKOWANE z 0.6 na 0.4
			ease: "easeOut",
		},
	},
} as Variants;

// ==========================================
// NAJWAŻNIEJSZE - NOWE LCP VARIANTS
// ==========================================

export const descriptionVariants = {
	hidden: { opacity: 0, y: 15 }, // ZREDUKOWANE z 30 na 15
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3, // ZREDUKOWANE z 0.6 na 0.3
			delay: 0.1, // ZREDUKOWANE z 0.3 na 0.1
		},
	},
} as Variants;

export const descriptionVariantsLCP = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.1, // BARDZO SZYBKIE
			delay: 0, // BEZ DELAY - KRYTYCZNE DLA LCP!
		},
	},
} as Variants;

export const paragraphVariants = {
	hidden: { opacity: 0, y: 10 }, // ZREDUKOWANE z 20 na 10
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3, // ZREDUKOWANE z 0.5 na 0.3
			ease: "easeOut",
		},
	},
} as Variants;

// ==========================================
// WARIANTY KART I KOMPONENTÓW
// ==========================================

export const cardVariants = {
	hidden: {
		opacity: 0,
		y: 30, // ZREDUKOWANE z 50 na 30
		scale: 0.95, // ZWIĘKSZONE z 0.9 na 0.95
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.4, // ZREDUKOWANE z 0.6 na 0.4
			ease: "easeOut",
		},
	},
} as Variants;

export const cardVariantsFast = {
	hidden: { opacity: 0, y: 20, scale: 0.95 }, // ZREDUKOWANE z 40 na 20
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.3, // ZREDUKOWANE z 0.5 na 0.3
			ease: "easeOut",
		},
	},
} as Variants;

export const cardVariantsProcess = {
	hidden: {
		opacity: 0,
		y: 25, // ZREDUKOWANE z 40 na 25
		scale: 0.97, // ZWIĘKSZONE z 0.95 na 0.97
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.4, // ZREDUKOWANE z 0.6 na 0.4
			ease: "easeOut",
		},
	},
} as Variants;

// ==========================================
// WARIANTY MEDIÓW
// ==========================================

export const imageVariants = {
	hidden: { opacity: 0, scale: 0.95, x: 10 }, // ZREDUKOWANE x z 20 na 10
	visible: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: {
			duration: 0.5, // ZREDUKOWANE z 0.8 na 0.5
			ease: "easeOut",
		},
	},
} as Variants;

export const imageVariantsLeft = {
	hidden: { opacity: 0, x: -30 }, // ZREDUKOWANE z -50 na -30
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5, // ZREDUKOWANE z 0.8 na 0.5
			ease: "easeOut",
			delay: 0.1, // ZREDUKOWANE z 0.2 na 0.1
		},
	},
} as Variants;

export const imageVariantsRight = {
	hidden: { opacity: 0, x: 20, scale: 0.97 }, // ZREDUKOWANE x z 30 na 20
	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: {
			duration: 0.4, // ZREDUKOWANE z 0.6 na 0.4
			ease: "easeOut",
		},
	},
} as Variants;

// ==========================================
// WARIANTY IKON I MAŁYCH ELEMENTÓW
// ==========================================

export const iconVariants = {
	hidden: {
		opacity: 0,
		scale: 0.7, // ZWIĘKSZONE z 0.5 na 0.7
		rotate: -90, // ZREDUKOWANE z -180 na -90
	},
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 0.3, // ZREDUKOWANE z 0.5 na 0.3
			ease: "easeOut",
			delay: 0.1, // ZREDUKOWANE z 0.2 na 0.1
		},
	},
} as Variants;

export const iconVariantsSimple = {
	hidden: { opacity: 0, scale: 0.9, rotate: -5 }, // ZREDUKOWANE rotate z -10 na -5
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 0.3, // ZREDUKOWANE z 0.4 na 0.3
			ease: "easeOut",
		},
	},
} as Variants;

// ==========================================
// WARIANTY PRZYCISKÓW
// ==========================================

export const buttonVariants = {
	hidden: { opacity: 0, y: 20 }, // ZREDUKOWANE z 30 na 20
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4, // ZREDUKOWANE z 0.6 na 0.4
			ease: "easeOut",
			delay: 0.3, // ZREDUKOWANE z 0.8 na 0.3
		},
	},
} as Variants;

export const buttonVariantsSimple = {
	hidden: { opacity: 0, y: 15, scale: 0.98 }, // ZREDUKOWANE y z 20 na 15
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.3, // ZREDUKOWANE z 0.5 na 0.3
			ease: "easeOut",
		},
	},
} as Variants;

// ==========================================
// WARIANTY FORMULARZY
// ==========================================

export const labelVariants = {
	rest: { y: 0, color: "hsl(var(--foreground))" },
	hover: {
		y: -2,
		color: "hsl(var(--primary))",
		transition: { type: "spring", stiffness: 400, damping: 30 },
	},
} as Variants;

export const labelVariantsFast = {
	rest: { y: 0, color: "hsl(var(--foreground))" },
	hover: {
		y: -1,
		color: "hsl(var(--primary))",
		transition: { type: "spring", stiffness: 400, damping: 30 },
	},
} as Variants;

export const inputVariants = {
	rest: {
		scale: 1,
		borderColor: "hsl(var(--foreground))",
	},
	hover: {
		scale: 1.02,
		borderColor: "hsl(var(--primary))",
		transition: { type: "spring", stiffness: 400, damping: 30 },
	},
	focus: {
		scale: 1.02,
		borderColor: "hsl(var(--primary))",
		boxShadow: "0 0 0 2px hsl(var(--primary) / 0.2)",
		transition: { type: "spring", stiffness: 400, damping: 30 },
	},
} as Variants;

export const inputVariantsFast = {
	rest: {
		scale: 1,
		borderColor: "hsl(var(--foreground))",
	},
	hover: {
		scale: 1.01,
		borderColor: "hsl(var(--primary))",
		transition: { type: "spring", stiffness: 400, damping: 30 },
	},
	focus: {
		scale: 1.01,
		borderColor: "hsl(var(--primary))",
		boxShadow: "0 0 0 2px hsl(var(--primary) / 0.2)",
		transition: { type: "spring", stiffness: 400, damping: 30 },
	},
} as Variants;

// ==========================================
// WARIANTY NAWIGACJI
// ==========================================

export const dropdownVariants = {
	hidden: {
		opacity: 0,
		scale: 0.95,
		y: -10,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.2,
			ease: "easeOut",
		},
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		y: -10,
		transition: {
			duration: 0.15,
			ease: "easeIn",
		},
	},
} as Variants;

export const navItemVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0 },
} as Variants;

// ==========================================
// WARIANTY SPECJALNE
// ==========================================

export const gridVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3, // ZREDUKOWANE z 0.4 na 0.3
			staggerChildren: 0.08, // ZREDUKOWANE z 0.15 na 0.08
			delayChildren: 0.2, // ZREDUKOWANE z 0.3 na 0.2
		},
	},
} as Variants;

export const carouselVariants = {
	hidden: { opacity: 0, y: 25 }, // ZREDUKOWANE z 40 na 25
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5, // ZREDUKOWANE z 0.8 na 0.5
			ease: "easeOut",
		},
	},
} as Variants;

export const stickyContentVariants = {
	hidden: {
		opacity: 0,
		x: -30, // ZREDUKOWANE z -50 na -30
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5, // ZREDUKOWANE z 0.8 na 0.5
			ease: "easeOut",
			delay: 0.1, // ZREDUKOWANE z 0.2 na 0.1
		},
	},
} as Variants;

export const formVariants = {
	hidden: {
		opacity: 0,
		x: 30, // ZREDUKOWANE z 50 na 30
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5, // ZREDUKOWANE z 0.8 na 0.5
			ease: "easeOut",
			delay: 0.2, // ZREDUKOWANE z 0.4 na 0.2
		},
	},
} as Variants;

// ==========================================
// WARIANTY CTA I SEKCJI
// ==========================================

export const ctaContainerVariants = {
	hidden: { opacity: 0, y: 20 }, // ZREDUKOWANE z 30 na 20
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4, // ZREDUKOWANE z 0.6 na 0.4
			ease: "easeOut",
			staggerChildren: 0.1, // ZREDUKOWANE z 0.2 na 0.1
			delayChildren: 0.05, // ZREDUKOWANE z 0.1 na 0.05
		},
	},
} as Variants;
