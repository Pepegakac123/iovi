import { ContactFormData } from "@/lib/schemas/contact-form-schema";

// ===========================================
// API RESPONSE TYPES
// ===========================================

export interface ContactApiResponse {
	success: boolean;
	message?: string;
	filesProcessed?: number;
	error?: string;
}

export interface ContactSubmissionData extends ContactFormData {
	recaptcha_token: string;
	files?: File[];
}

// ===========================================
// API ERROR TYPES
// ===========================================

export class ContactApiError extends Error {
	constructor(
		message: string,
		public status?: number,
		public details?: any,
	) {
		super(message);
		this.name = "ContactApiError";
	}
}

export class RecaptchaError extends Error {
	constructor(
		message: string,
		public score?: number,
	) {
		super(message);
		this.name = "RecaptchaError";
	}
}

export class ValidationError extends Error {
	constructor(
		message: string,
		public details?: any,
	) {
		super(message);
		this.name = "ValidationError";
	}
}

// ===========================================
// CORE API FUNCTIONS
// ===========================================

/**
 * Wysyła formularz kontaktowy do API
 * @param data - Dane formularza wraz z tokenem reCAPTCHA
 * @returns Promise z odpowiedzią API
 */
export async function submitContactForm(
	data: ContactSubmissionData,
): Promise<ContactApiResponse> {
	try {
		// Przygotuj FormData
		const formData = new FormData();

		// Dodaj pola formularza
		formData.append("name_surname", data.name_surname);
		formData.append("email", data.email);
		formData.append(
			"phone_number",
			data.phone_number ? data.phone_number.replace(/\s/g, "") : "",
		);
		formData.append("project_description", data.project_description);
		formData.append("file_input", data.file_input || "");
		formData.append("recaptcha_token", data.recaptcha_token);

		// Dodaj pliki (jeśli są)
		if (data.files && data.files.length > 0) {
			data.files.forEach((file) => {
				formData.append("files", file);
			});
		}

		// Wykonaj request
		const response = await fetch("/api/contact", {
			method: "POST",
			body: formData,
		});

		const result = await response.json();

		// Sprawdź czy response jest OK
		if (!response.ok) {
			throw new ContactApiError(
				result.error || "Wystąpił błąd podczas wysyłania",
				response.status,
				result.details,
			);
		}

		return {
			success: true,
			message: result.message,
			filesProcessed: result.filesProcessed,
		};
	} catch (error) {
		// Re-throw nasze custom errors
		if (error instanceof ContactApiError) {
			throw error;
		}

		// Network errors, parsing errors, etc.
		if (error instanceof Error) {
			throw new ContactApiError(`Błąd połączenia: ${error.message}`, 0, {
				originalError: error.message,
			});
		}

		// Unknown errors
		throw new ContactApiError("Nieznany błąd podczas wysyłania formularza");
	}
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Formatuje dane formularza przed wysyłką
 * @param formData - Surowe dane z formularza
 * @param recaptchaToken - Token reCAPTCHA
 * @param files - Lista plików (opcjonalne)
 */
export function prepareSubmissionData(
	formData: ContactFormData,
	recaptchaToken: string,
	files?: File[],
): ContactSubmissionData {
	return {
		...formData,
		recaptcha_token: recaptchaToken,
		files: files || [],
	};
}

/**
 * Sprawdza czy błąd jest związany z walidacją
 */
export function isValidationError(error: Error): error is ValidationError {
	return error.name === "ValidationError";
}

/**
 * Sprawdza czy błąd jest związany z reCAPTCHA
 */
export function isRecaptchaError(error: Error): error is RecaptchaError {
	return error.name === "RecaptchaError";
}

/**
 * Sprawdza czy błąd jest związany z API
 */
export function isApiError(error: Error): error is ContactApiError {
	return error.name === "ContactApiError";
}

/**
 * Formatuje błąd do user-friendly wiadomości
 */
export function formatApiError(error: Error): string {
	if (isValidationError(error)) {
		return `Błąd walidacji: ${error.message}`;
	}

	if (isRecaptchaError(error)) {
		return `Błąd weryfikacji: ${error.message}`;
	}

	if (isApiError(error)) {
		// Sprawdź status code dla bardziej precyzyjnej wiadomości
		switch (error.status) {
			case 400:
				return `Nieprawidłowe dane: ${error.message}`;
			case 429:
				return "Zbyt wiele prób. Spróbuj ponownie za chwilę.";
			case 500:
				return "Błąd serwera. Spróbuj ponownie później.";
			default:
				return error.message;
		}
	}

	return "Wystąpił nieoczekiwany błąd. Spróbuj ponownie.";
}

// ===========================================
// SUCCESS MESSAGES
// ===========================================

/**
 * Generuje wiadomość sukcesu na podstawie liczby plików
 */
export function getSuccessMessage(filesProcessed: number = 0): {
	title: string;
	description: string;
} {
	return {
		title: "Sukces!",
		description:
			filesProcessed > 0
				? `Wiadomość wysłana z ${filesProcessed} plikami!`
				: "Wiadomość została wysłana. Odezwę się wkrótce!",
	};
}

/**
 * Generuje wiadomość dla procesu przetwarzania plików
 */
export function getProcessingMessage(fileCount: number): {
	title: string;
	description: string;
} {
	return {
		title: "Przetwarzanie plików...",
		description: `Konwertowanie ${fileCount} plików na mniejszy rozmiar...`,
	};
}

// ===========================================
// API HEALTH CHECK
// ===========================================

/**
 * Sprawdza czy API endpoint jest dostępny
 */
export async function checkApiHealth(): Promise<boolean> {
	try {
		const response = await fetch("/api/health", { method: "HEAD" });
		return response.ok;
	} catch {
		return false;
	}
}
