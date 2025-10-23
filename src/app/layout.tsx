import type { Metadata } from "next";
import "./globals.css";
import { RecaptchaProvider } from "@/components/providers/RecaptchaProvider";
import { Toaster } from "sonner";
import Footer from "@/components/Sections/Footer";
import Navbar from "@/components/Navbar";
import { images } from "@/lib/images";
import localFont from "next/font/local";
import ConditionalAnalytics from "@/components/GDPR/GA4ConditionalAnalytics";
import CookieConsent from "@/components/GDPR/CookieConsent";
import { InstagramGlimpse } from "@/components/ui/InstagramGlimpse";
export const metadata: Metadata = {
	title: {
		template: "%s - bezpłatna konsultacja - iovi-ink",
		default: "Tatuaże - bezpłatna konsultacja - iovi-ink",
	},
	description:
		"Tatuaże graficzne i minimalistyczne w Mszanie Dolnej. Autorskie projekty, precyzja wykonania, - Bezpłatna konsultacja",
	keywords: ["tatuaże", "tatuażystka"],
	authors: [{ name: "Jowita - iovi-ink" }],

	openGraph: {
		title:
			"Jowita - Tatuaże graficzne i minimalistyczne | Lewus Ink Mszana Dolna",
		description:
			"Tatuaże graficzne i minimalistyczne w Mszanie Dolnej. Autorskie projekty, precyzja wykonania, - Bezpłatna konsultacja",
		url: "https://iovi-ink.pl",
		siteName: "iovi-ink",
		locale: "pl_PL",
		type: "website",
		images: [
			{
				url: `${images.seoBaner.src}`,
				width: 1200,
				height: 630,
				alt: `${images.seoBaner.alt}`,
			},
		],
	},
	// Geo targeting - KLUCZOWE dla Local SEO
	other: {
		"geo.region": "PL-12", // Małopolskie
		"geo.placename": "Mszana Dolna",
		"geo.position": "49.6754860;20.0798428", // Współrzędne Lewus Ink
		ICBM: "49.6754860, 20.0798428",
		robots: "index, follow, max-image-preview:large, max-snippet:140",
	},

	// Canonical URL
	metadataBase: new URL("https://iovi-ink.pl"),
	alternates: {
		canonical: "https://iovi-ink.pl",
	},

	// Additional meta tags
	category: "Art & Design",
	classification: "Tattoo Artist",
};
const inter = localFont({
	src: "../fonts/Inter-VariableFont.woff2", // <- ważne: jedna kropka + ukośnik, ścieżka RELATYWNA
	display: "swap",
	variable: "--font-inter",
});

const alfa = localFont({
	src: "../fonts/AlfaSlabOne-Regular.woff2",
	display: "swap",
	variable: "--font-alfa",
});

const heroImageSrc = images.bab_z_maszynkom.src;
const preloadUrl = `https://iovi-ink.pl/cdn-cgi/image/width=640,quality=80,format=auto/${heroImageSrc}`;
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl" className={`${inter.variable} ${alfa.variable}`}>
			<head>
				{/* ✅ CRITICAL: Preload hero image dla LCP optimization */}
				<link rel="preload" as="image" href={preloadUrl} fetchPriority="high" />

				{/* ✅ CRITICAL: DNS prefetch dla external resources */}
				<link rel="dns-prefetch" href="//cms.iovi-ink.pl" />

				{/* ✅ CRITICAL: Resource hints */}
				<link rel="preconnect" href="https://cms.iovi-ink.pl" />

				{/* ✅ CRITICAL: Viewport meta dla mobile optimization */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				{/* ✅ Theme color dla mobile browsers */}
				<meta name="theme-color" content="#FFEDEA" />

				<meta
					name="google-site-verification"
					content="pgfKgu3zF-biRKDMRNuyarlDOJaE1Og1jYlP7tFj4V4"
				/>
			</head>
			<body className="bg-background font-text">
				<RecaptchaProvider>
					<Navbar /> {/* ← DODANE: Wrapper dla reCAPTCHA */}
					{children}
					<Footer />
					{/* <CookieConsent /> */}
					<Toaster
						position="top-right"
						duration={5000}
						expand={true}
						richColors={false}
						closeButton={true}
						toastOptions={{
							duration: 5000,
							style: {
								background: "var(--background)",
								border: "2px solid var(--foreground)",
								borderBottomWidth: "4px",
								borderRightWidth: "4px",
								borderRadius: "0.5rem",
								padding: "1rem",
								fontFamily: "var(--font-text)",
								color: "var(--foreground)",
								boxShadow: "4px 4px 0px 0px var(--foreground)",
								fontSize: "0.875rem",
								fontWeight: "500",
							},
							classNames: {
								toast: "group toast group-[.toaster]:shadow-lg",
								title:
									"text-foreground font-primary font-bold text-sm uppercase tracking-wide",
								description: "text-foreground font-text text-xs opacity-90",
								actionButton:
									"group-[.toast]:bg-primary group-[.toast]:text-background group-[.toast]:border-2 group-[.toast]:border-foreground group-[.toast]:rounded-md group-[.toast]:px-3 group-[.toast]:py-2 group-[.toast]:font-primary group-[.toast]:font-bold group-[.toast]:uppercase group-[.toast]:text-xs group-[.toast]:hover:bg-accent group-[.toast]:hover:shadow-[2px_2px_0px_0px_var(--foreground)]",
								cancelButton:
									"group-[.toast]:bg-secondary group-[.toast]:text-foreground group-[.toast]:border-2 group-[.toast]:border-foreground group-[.toast]:rounded-md group-[.toast]:px-3 group-[.toast]:py-2 group-[.toast]:font-primary group-[.toast]:font-bold group-[.toast]:uppercase group-[.toast]:text-xs group-[.toast]:hover:bg-muted group-[.toast]:hover:shadow-[2px_2px_0px_0px_var(--foreground)]",
								closeButton:
									"group-[.toast]:bg-secondary group-[.toast]:text-foreground group-[.toast]:border-2 group-[.toast]:border-foreground group-[.toast]:rounded group-[.toast]:hover:bg-muted group-[.toast]:hover:shadow-[2px_2px_0px_0px_var(--foreground)]",
								success:
									"group-[.toaster]:border-primary group-[.toaster]:shadow-[4px_4px_0px_0px_var(--primary)]",
								error:
									"group-[.toaster]:border-destructive group-[.toaster]:shadow-[4px_4px_0px_0px_var(--destructive)]",
								warning:
									"group-[.toaster]:border-accent group-[.toaster]:shadow-[4px_4px_0px_0px_var(--accent)]",
								info: "group-[.toaster]:border-accent group-[.toaster]:shadow-[4px_4px_0px_0px_var(--accent)]",
							},
						}}
						// Custom styling for different types
						style={{
							fontFamily: "var(--font-text)",
						}}
					/>
				</RecaptchaProvider>
				<ConditionalAnalytics />
				<InstagramGlimpse variant="fixed" />
			</body>
		</html>
	);
}
