// app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllBlogs, getAllHomepageCites, getAllServices } from "@/lib/jetApi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = "https://iovi-ink.pl";

	// Static pages - podstawowe strony
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0, // Najwyższy priorytet dla strony głównej
		},
		{
			url: `${baseUrl}/tatuazysta`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9, // Najwyższy priorytet dla strony głównej
		},
		{
			url: `${baseUrl}/uslugi`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9, // Bardzo wysoki priorytet dla usług
		},
		{
			url: `${baseUrl}/portfolio`,
			lastModified: new Date(),
			changeFrequency: "weekly", // Portfolio może się często aktualizować
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.7, // Bardzo wysoki priorytet dla usług
		},
		{
			url: `${baseUrl}/kontakt`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${baseUrl}/o-mnie`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${baseUrl}/polityka-prywatnosci`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];

	try {
		// Dynamic pages - pobierz wszystkie usługi z CMS
		const services = await getAllServices();
		const blogs = await getAllBlogs();
		const homePageCities1 = await getAllHomepageCites(
			"tatuazysta" as "tatuaze | tatuazysta",
		);
		const homePageCities2 = await getAllHomepageCites(
			"tatuaze" as "tatuaze | tatuazysta",
		);
		const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
			url: `${baseUrl}/uslugi/${service.slug}`,
			lastModified: new Date(), // Można dodać pole z CMS jeśli masz
			changeFrequency: "monthly" as const,
			priority: 0.8, // Wysokie priority dla stron usług - to główne landing pages
		}));
		const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
			url: `${baseUrl}/blog/${blog.slug}`,
			lastModified: blog.date, // Można dodać pole z CMS jeśli masz
			changeFrequency: "monthly" as const,
			priority: 0.7,
		}));
		const homePageCities1Pages: MetadataRoute.Sitemap = homePageCities1.map(
			(city) => ({
				url: `${baseUrl}/tatuazysta/${city.slug}`,
				lastModified: new Date(), // Można dodać pole z CMS jeśli masz
				changeFrequency: "monthly" as const,
				priority: 0.8,
			}),
		);
		const homePageCities2Pages: MetadataRoute.Sitemap = homePageCities2.map(
			(city) => ({
				url: `${baseUrl}/tatuaze/${city.slug}`,
				lastModified: new Date(), // Można dodać pole z CMS jeśli masz
				changeFrequency: "monthly" as const,
				priority: 0.8,
			}),
		);

		// Combine static + dynamic pages
		return [
			...staticPages,
			...servicePages,
			...blogPages,
			...homePageCities1Pages,
			...homePageCities2Pages,
		];
	} catch (error) {
		console.error("Error generating sitemap:", error);

		// Fallback - tylko statyczne strony jeśli API nie działa
		return staticPages;
	}
}
