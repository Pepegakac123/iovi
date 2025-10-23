/**
 * Konwertuje WordPress URL na Cloudflare R2 CDN URL
 * Zachowuje całą ścieżkę - tylko zmienia domenę
 */
export function getCDNUrl(wordpressUrl: string | undefined | null): string {
	// Handle empty/null/undefined
	if (!wordpressUrl) return "";

	// Jeśli już jest CDN URL, zwróć bez zmian
	const cdnDomain = process.env.NEXT_PUBLIC_CDN_URL || "";
	if (wordpressUrl.startsWith(cdnDomain)) {
		return wordpressUrl;
	}

	// WordPress domain (z env lub hardcoded)
	const wpDomain =
		process.env.WORDPRESS_URL || "https://cms.iovi-ink.pl";

	// Zamień domenę WordPress na CDN
	return wordpressUrl.replace(wpDomain, cdnDomain);
}

/**
 * Batch conversion dla tablic URL-i
 */
export function getCDNUrls(urls: string[]): string[] {
	return urls.map((url) => getCDNUrl(url));
}

/**
 * Helper dla obiektów z alt text
 */
export function convertImageToCDN(image: {
	src: string;
	alt: string;
}): { src: string; alt: string } {
	return {
		src: getCDNUrl(image.src),
		alt: image.alt,
	};
}

/**
 * Batch conversion dla obiektów
 */
export function convertImagesToCDN(
	images: Array<{ src: string; alt: string }>,
): Array<{ src: string; alt: string }> {
	return images.map(convertImageToCDN);
}