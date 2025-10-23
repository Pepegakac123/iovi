export function generateImageGalleryData(
	images: Array<{ src: string; alt: string }>,
) {
	return {
		images: images.slice(0, 20).map((image, index) => ({
			url: image.src,
			name: image.alt,
			description: `${image.alt} - Portfolio tatuaży IOVI INK wykonany przez Jowitę`,
			contentUrl: image.src,
			thumbnailUrl: image.src,
			creator: "Jowita - IOVI INK",
			copyrightHolder: "IOVI INK",
			license: "https://iovi-ink.pl/polityka-prywatnosci",
			acquireLicensePage: "https://iovi-ink.pl/kontakt",
			position: index + 1,
		})),
		name: "Portfolio Tatuaży - IOVI INK",
		description:
			"Galeria tatuaży wykonanych przez Jowitę - specjalistę od minimalistycznych i graficznych wzorów",
		url: "https://iovi-ink.pl/portfolio",
		creator: {
			"@type": "Person",
			name: "Jowita",
			jobTitle: "Tatuażystka",
		},
		numberOfItems: images.length,
	};
}
