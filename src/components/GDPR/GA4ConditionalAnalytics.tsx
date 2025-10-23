"use client";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Suspense } from "react";

const GoogleAnalyticsInner: React.FC = () => {
	const { hasConsent } = useCookieConsent();

	// Ładuj Google Analytics tylko jeśli user wyraził zgodę
	if (process.env.NODE_ENV !== "production" || !hasConsent) {
		return null;
	}

	return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />;
};

export default function ConditionalAnalytics() {
	return (
		<Suspense fallback={null}>
			<GoogleAnalyticsInner />
		</Suspense>
	);
}
