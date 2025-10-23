import { z } from "zod";

// ===========================================
// CONTACT FORM VALIDATION SCHEMAS
// ===========================================

/**
 * Walidacja numeru telefonu - opcjonalne pole
 */
const phoneValidation = z
	.string()
	.optional()
	.refine(
		(val) => {
			if (!val) return true; // Pole opcjonalne
			const numbersOnly = val.replace(/\s/g, "");
			return /^\d{9}$/.test(numbersOnly);
		},
		{
			message: "Numer telefonu musi mieć dokładnie 9 cyfr",
		},
	);

/**
 * Walidacja opisu projektu - wymagane minimum 10 znaków
 */
const projectDescriptionValidation = z
	.string()
	.min(10, "Opis musi mieć co najmniej 10 znaków")
	.max(1000, "Opis nie może przekraczać 1000 znaków");

// ===========================================
// GŁÓWNY SCHEMAT FORMULARZA
// ===========================================

export const contactFormSchema = z.object({
	name_surname: z
		.string()
		.min(1, "Imię i nazwisko są wymagane")
		.min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki")
		.max(100, "Imię i nazwisko nie może przekraczać 100 znaków"),

	email: z
		.string()
		.email("Nieprawidłowy adres email")
		.min(1, "Email jest wymagany"),

	phone_number: phoneValidation,

	project_description: projectDescriptionValidation,

	file_input: z.string().optional(),
});

// ===========================================
// TYPESCRIPT TYPES
// ===========================================

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Type dla danych przed walidacją (z API)
export type ContactFormRawData = {
	name_surname: string;
	email: string;
	phone_number?: string;
	project_description: string;
	file_input?: string;
	recaptcha_token: string;
};

// ===========================================
// VALIDATION HELPERS
// ===========================================

/**
 * Waliduje dane formularza i zwraca wynik
 */
export const validateContactForm = (data: unknown) => {
	return contactFormSchema.safeParse(data);
};

/**
 * Sprawdza czy email jest prawidłowy
 */
export const isValidEmail = (email: string): boolean => {
	const emailSchema = z.string().email();
	return emailSchema.safeParse(email).success;
};

/**
 * Sprawdza czy numer telefonu jest prawidłowy
 */
export const isValidPhone = (phone: string): boolean => {
	if (!phone) return true; // Opcjonalne
	return phoneValidation.safeParse(phone).success;
};

/**
 * Formatuje błędy walidacji do user-friendly messages
 */
export const formatValidationErrors = (errors: z.ZodError) => {
	return errors.issues.reduce(
		(acc, issue) => {
			const field = issue.path[0] as keyof ContactFormData;
			acc[field] = issue.message;
			return acc;
		},
		{} as Partial<Record<keyof ContactFormData, string>>,
	);
};

// ===========================================
// DEFAULT VALUES
// ===========================================

export const defaultFormValues: ContactFormData = {
	name_surname: "",
	email: "",
	phone_number: "",
	project_description: "",
	file_input: "",
};

// ===========================================
// FIELD CONFIGURATIONS
// ===========================================

export const fieldConfig = {
	name_surname: {
		label: "Imię i nazwisko*",
		placeholder: "Anna Kowalska",
		required: true,
		maxLength: 100,
		type: "text" as const,
	},
	email: {
		label: "E-mail*",
		placeholder: "anna@wp.pl",
		required: true,
		type: "email" as const,
		maxLength: 255, // Add maxLength for email too
	},
	phone_number: {
		label: "Nr Telefonu",
		placeholder: "123 456 789",
		required: false,
		helperText: "(Opcjonalne)",
		type: "tel" as const,
		maxLength: 15, // Add maxLength for phone
	},
	project_description: {
		label: "Jak mogę ci pomóc?*",
		placeholder:
			"Opisz swój projekt - styl, rozmiar, miejsce na ciele, inspiracje...",
		required: true,
		maxLength: 1000,
		minLength: 10,
		rows: 4,
		type: "textarea" as const,
	},
} as const;

export type FieldName = keyof typeof fieldConfig;
