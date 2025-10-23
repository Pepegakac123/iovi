"use client";
import { useState, useEffect } from "react";

export const useCookieConsent = () => {
	const [hasConsent, setHasConsent] = useState<boolean | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		// Sprawdź localStorage tylko po mount
		const consent = localStorage.getItem("cookie-consent");
		setHasConsent(
			consent === "accepted" ? true : consent === "declined" ? false : null,
		);
	}, []);

	const acceptCookies = () => {
		localStorage.setItem("cookie-consent", "accepted");
		setHasConsent(true);
	};

	const declineCookies = () => {
		localStorage.setItem("cookie-consent", "declined");
		setHasConsent(false);
	};

	return {
		hasConsent,
		acceptCookies,
		declineCookies,
		// TUTAJ: isLoading zależy tylko od mounted
		isLoading: !mounted,
	};
};
