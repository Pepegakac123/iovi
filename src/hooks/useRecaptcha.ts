"use client";

import { useCallback, useEffect, useState } from "react";

declare global {
	interface Window {
		grecaptcha: any;
	}
}

export const useRecaptcha = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [scriptAdded, setScriptAdded] = useState(false);

	// Funkcja pomocnicza do sprawdzenia czy reCAPTCHA jest już wczytana
	const checkIfRecaptchaLoaded = useCallback(() => {
		return (
			typeof window !== "undefined" &&
			window.grecaptcha &&
			window.grecaptcha.ready
		);
	}, []);

	// Dodajemy skrypt reCAPTCHA, jeśli jeszcze nie został załadowany
	useEffect(() => {
		if (typeof window === "undefined") return;

		// Jeśli reCAPTCHA jest już załadowana, ustaw stan
		if (checkIfRecaptchaLoaded()) {
			setIsLoaded(true);
			return;
		}

		// Jeśli skrypt nie jest dodany i nie ma załadowanej reCAPTCHA
		if (!scriptAdded && !document.querySelector('script[src*="recaptcha"]')) {
			const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

			if (!siteKey) {
				console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined");
				return;
			}

			// Dodaj skrypt reCAPTCHA
			const script = document.createElement("script");
			script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
			script.async = true;
			script.defer = true;

			script.onload = () => {
				console.log("reCAPTCHA script loaded successfully");
				setIsLoaded(true);
			};

			script.onerror = (error) => {
				console.error("Error loading reCAPTCHA script:", error);
			};

			document.head.appendChild(script);
			setScriptAdded(true);
		}
	}, [checkIfRecaptchaLoaded, scriptAdded]);

	// Wykonaj reCAPTCHA z lepszą obsługą błędów i debuggingiem
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const executeRecaptcha = useCallback(
		async (action: string = "submit"): Promise<string> => {
			return new Promise((resolve, reject) => {
				if (typeof window === "undefined") {
					reject(new Error("reCAPTCHA cannot run on the server"));
					return;
				}

				if (!window.grecaptcha) {
					reject(
						new Error("reCAPTCHA not loaded - window.grecaptcha is undefined"),
					);
					return;
				}

				if (!window.grecaptcha.ready) {
					reject(
						new Error(
							"reCAPTCHA not fully initialized - grecaptcha.ready missing",
						),
					);
					return;
				}

				const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
				if (!siteKey) {
					reject(
						new Error(
							"NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined in environment",
						),
					);
					return;
				}

				console.log("Executing reCAPTCHA with action:", action);
				console.log("Using site key:", siteKey);

				try {
					window.grecaptcha.ready(() => {
						window.grecaptcha
							.execute(siteKey, { action })
							.then((token: string) => {
								if (!token) {
									reject(new Error("reCAPTCHA returned empty token"));
									return;
								}
								console.log("reCAPTCHA token generated successfully");
								resolve(token);
							})
							.catch((error: any) => {
								console.error("reCAPTCHA execution error:", error);
								reject(error);
							});
					});
				} catch (error) {
					console.error("Error executing reCAPTCHA:", error);
					reject(error);
				}
			});
		},
		[isLoaded],
	);

	// Dodajemy nowe funkcje pomocnicze
	const checkRecaptchaStatus = useCallback(() => {
		if (typeof window === "undefined")
			return { loaded: false, error: "Server-side rendering" };

		const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
		const hasGrecaptcha = !!window.grecaptcha;
		const hasReady = hasGrecaptcha && !!window.grecaptcha.ready;

		return {
			loaded: hasGrecaptcha && hasReady,
			siteKeyPresent: !!siteKey,
			siteKey: siteKey || "missing",
			scriptAdded,
			hasGrecaptcha,
			hasReady,
		};
	}, [scriptAdded]);

	return {
		executeRecaptcha,
		isRecaptchaLoaded: isLoaded,
		checkRecaptchaStatus,
	};
};
