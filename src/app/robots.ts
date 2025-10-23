// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: [
					"/",
					"/uslugi/",
					"/portfolio/",
					"/kontakt/",
					"/o-mnie/",
					"/uslugi/*", // Dynamic service pages
					"/blog/",
					"/blog/*",
					"/tatuazysta/",
					"/tatuazysta/*",
					"/tatuaze/*",
				],
				disallow: [
					"/api/", // API endpoints - prywatne
					"/_next/", // Next.js internals
					"/admin/", // Jeśli masz admin panel
					"/*?*", // Query parameters (opcional - może być za restrykcyjne)
					"/search*", // Search results (jeśli masz)
					"/thank-you/", // Thank you pages (jeśli masz)
					"/404/",
					"/500/",
				],
			},
			// Specjalnie dla Google Images - pozwól na wszystkie obrazy
			{
				userAgent: "Googlebot-Image",
				allow: ["/"],
				disallow: ["/api/"],
			},
		],
		sitemap: [
			"https://iovi-ink.pl/sitemap.xml", // Next.js auto-generuje
		],
		host: "https://iovi-ink.pl", // Preferred domain
	};
}
