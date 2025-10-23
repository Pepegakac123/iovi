import { DropzoneOptions } from "react-dropzone";

// ===========================================
// FORM CONFIGURATIONS
// ===========================================

/**
 * Konfiguracje dla różnych wariantów formularza
 */
export const formVariants = {
	/**
	 * Główny formularz kontaktowy (pełna funkcjonalność)
	 */
	main: {
		files: {
			maxFiles: 5,
			maxSize: 1024 * 1024 * 10, // 10MB
			multiple: true,
			accept: {
				"image/jpeg": [".jpg", ".jpeg"],
				"image/png": [".png"],
				"image/webp": [".webp"],
				"image/tiff": [".tiff", ".tif"],
				"image/bmp": [".bmp"],
				"application/pdf": [".pdf"],
			},
		} satisfies DropzoneOptions,

		ui: {
			inputHeight: "h-12", // Większe pola
			spacing: "space-y-6", // Więcej przestrzeni
			containerPadding: "p-6 md:p-8",
			gridCols: "md:grid-cols-2 xl:grid-cols-3", // ZMIENIONE: 2 kolumny od 768px, 3 kolumny od 1280px
		},

		animations: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
			containerDuration: 0.5,
		},
	},

	/**
	 * Formularz popup (BARDZO kompaktowy)
	 */
	popup: {
		files: {
			maxFiles: 2, // Zmniejszone z 3 na 2
			maxSize: 1024 * 1024 * 5, // 5MB
			multiple: true,
			accept: {
				"image/jpeg": [".jpg", ".jpeg"],
				"image/png": [".png"],
				"image/webp": [".webp"],
				"application/pdf": [".pdf"],
			},
		} satisfies DropzoneOptions,

		ui: {
			inputHeight: "h-8", // Zmniejszone z h-9 na h-8
			spacing: "space-y-2", // Zmniejszone z space-y-3 na space-y-2
			containerPadding: "p-2", // Zmniejszone z p-4 na p-2
			gridCols: "grid-cols-1", // 1 kolumna
		},

		animations: {
			staggerChildren: 0.05, // Zmniejszone z 0.06 na 0.05
			delayChildren: 0.05, // Zmniejszone z 0.1 na 0.05
			containerDuration: 0.2, // Zmniejszone z 0.3 na 0.2
		},
	},
} as const;

// ===========================================
// SHARED CONFIGURATIONS
// ===========================================

/**
 * Wspólne style CSS dla różnych elementów
 */
export const sharedStyles = {
	input: {
		base: "bg-secondary/70 border-2 border-foreground hover:border-accent focus:border-primary font-text rounded-md transition-all duration-200 hover:bg-secondary focus:bg-background focus:placeholder-transparent",
		popup: "placeholder-transition text-sm", // Dodane text-sm dla mniejszej czcionki
		main: "placeholder-transition transform translate-x-0 translate-y-0 hover:translate-x-0 hover:translate-y-0",
	},

	label: {
		base: "text-foreground font-primary text-sm font-bold uppercase inline-block",
		required: "",
		optional: "whitespace-nowrap",
	},

	textarea: {
		base: "bg-secondary/70 border-2 border-foreground font-text resize-none rounded-md transition-all duration-200 hover:bg-secondary focus:bg-background",
		popup: "min-h-12 max-h-16 text-sm", // Zmniejszone z min-h-16 max-h-24 + dodane text-sm
		main: "min-h-28",
	},

	container: {
		main: "bg-background border-2 border-b-4 border-r-4 border-foreground rounded-xl shadow-[4px_4px_0px_0px_theme(colors.foreground)] transition-all duration-200 hover:shadow-[6px_6px_0px_0px_theme(colors.foreground)] relative overflow-hidden",
		popup: "w-full", // Prostszy styl dla popup
	},
} as const;

// ===========================================
// ANIMATION PRESETS
// ===========================================

/**
 * Gotowe motion variants dla formularzy
 */
export const formMotionPresets = {
	container: {
		main: {
			hidden: { opacity: 0, y: 20 },
			visible: {
				opacity: 1,
				y: 0,
				transition: { duration: 0.5 },
			},
			hover: { scale: 1.005 },
		},

		popup: {
			hidden: { opacity: 0, y: 10 },
			visible: {
				opacity: 1,
				y: 0,
				transition: { duration: 0.2 }, // Zmniejszone z domyślnego
			},
		},
	},

	form: {
		main: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: 0.1,
					delayChildren: 0.2,
				},
			},
		},
		popup: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					staggerChildren: 0.05, // Szybsze animacje
					delayChildren: 0.05,
				},
			},
		},
	},

	field: {
		main: {
			hidden: { opacity: 0, y: 20 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					type: "spring",
					stiffness: 100,
					damping: 15,
				},
			},
		},

		popup: {
			hidden: { opacity: 0, y: 8 }, // Zmniejszone z y: 12
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					type: "spring",
					stiffness: 150, // Zwiększone dla szybszych animacji
					damping: 15,
				},
			},
		},
	},

	button: {
		main: {
			hidden: { opacity: 0, y: 20 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.5,
					ease: "easeOut",
				},
			},
		},
		popup: {
			hidden: { opacity: 0, y: 8 }, // Zmniejszone z y: 10
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.2, // Zmniejszone z 0.3
					ease: "easeOut",
				},
			},
		},
	},

	span: {
		main: {
			hidden: { scale: 0 },
			visible: {
				scale: 1,
				transition: {
					delay: 0.9,
					type: "spring",
					stiffness: 200,
				},
			},
		},
		popup: {
			hidden: { scale: 0 },
			visible: {
				scale: 1,
				transition: {
					delay: 0.3, // Zmniejszone z 0.5
					type: "spring",
					stiffness: 200,
				},
			},
		},
	},

	div: {
		main: {
			hidden: { y: 20, opacity: 0 },
			visible: {
				y: 0,
				opacity: 1,
				transition: {
					delay: 1.0,
					type: "spring",
					stiffness: 200,
				},
			},
		},
		popup: {
			hidden: { y: 8, opacity: 0 }, // Zmniejszone z y: 10
			visible: {
				y: 0,
				opacity: 1,
				transition: {
					delay: 0.2, // Zmniejszone z 0.3
					type: "spring",
					stiffness: 200,
				},
			},
		},
	},
} as const;

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Pobiera konfigurację dla określonego wariantu formularza
 */
export const getFormConfig = (variant: keyof typeof formVariants) => {
	return formVariants[variant];
};

/**
 * Pobiera style dla określonego wariantu
 */
export const getFormStyles = (variant: keyof typeof formVariants) => {
	const config = formVariants[variant];

	return {
		input: `${sharedStyles.input.base} ${config.ui.inputHeight} ${sharedStyles.input[variant] || ""}`,
		textarea: `${sharedStyles.textarea.base} ${sharedStyles.textarea[variant] || ""}`,
		container: `${sharedStyles.container[variant] || ""} ${config.ui.containerPadding}`,
		spacing: config.ui.spacing,
		gridCols: `grid ${config.ui.gridCols}`,
		button: `${config.ui.inputHeight}`,
	};
};

/**
 * Pobiera motion variants dla określonego wariantu
 */
export const getFormMotion = (variant: keyof typeof formVariants) => {
	return formMotionPresets;
};

// ===========================================
// TYPE EXPORTS
// ===========================================

export type FormVariant = keyof typeof formVariants;
export type FormConfig = (typeof formVariants)[FormVariant];
export type FormStyles = ReturnType<typeof getFormStyles>;
