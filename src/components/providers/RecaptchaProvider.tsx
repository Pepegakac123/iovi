// src/components/providers/RecaptchaProvider.tsx
// --- REKOMENDOWANA WERSJA Z next/script ---
"use client";

import React from "react";
import Script from "next/script";

interface RecaptchaProviderProps {
	children: React.ReactNode;
}

// Upewnij się, że klucz jest poprawnie odczytywany
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const RecaptchaProvider: React.FC<RecaptchaProviderProps> = ({
	children,
}) => {
	if (!siteKey) {
		console.error(
			"BŁĄD: Brak klucza NEXT_PUBLIC_RECAPTCHA_SITE_KEY w .env. Formularz kontaktowy nie będzie działać poprawnie.",
		);
		// Zwracamy children, aby reszta aplikacji działała, ale reCAPTCHA nie będzie aktywna.
		return <>{children}</>;
	}

	return (
		<>
			{/*
			 * Używamy next/script do załadowania API Google reCAPTCHA.
			 * Strategia 'beforeInteractive' ładuje skrypt wcześnie,
			 * ale po załadowaniu krytycznych zasobów strony.
			 * async/defer są domyślnie dodawane przez strategię.
			 */}
			{/** biome-ignore lint/correctness/useUniqueElementIds: <explanation> */}
			<Script
				id="google-recaptcha-script" // Unikalne ID dla skryptu
				src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
				strategy="beforeInteractive"
				onLoad={() => {
					console.log("✅ Skrypt Google reCAPTCHA załadowany pomyślnie.");
				}}
				onError={(e) => {
					console.error("❌ Krytyczny błąd ładowania skryptu reCAPTCHA:", e);
				}}
			/>
			{children}
		</>
	);
};
