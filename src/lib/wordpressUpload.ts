interface WordPressUploadResult {
	success: boolean;
	url?: string;
	error?: string;
}

export async function uploadToWordPress(
	buffer: Buffer,
	filename: string,
	mimeType: string = "image/webp",
): Promise<WordPressUploadResult> {
	try {
		// Przygotuj FormData dla WordPress
		const formData = new FormData();

		// Stwórz Blob z Buffer
		const uint8Array = new Uint8Array(buffer);
		const blob = new Blob([uint8Array], { type: mimeType });
		formData.append("file", blob, filename);

		// Dodatkowe meta dla WordPress
		formData.append("title", filename);
		formData.append("caption", `Plik od klienta: ${filename}`);

		// Basic Auth z Application Password
		const auth = Buffer.from(
			`${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`,
		).toString("base64");

		// Upload do WordPress REST API
		const response = await fetch(
			`${process.env.WORDPRESS_URL}wp-json/wp/v2/media`,
			{
				method: "POST",
				headers: {
					Authorization: `Basic ${auth}`,
				},
				body: formData,
			},
		);

		if (!response.ok) {
			const errorText = await response.text();
			console.error("WordPress upload error:", response.status, errorText);
			return {
				success: false,
				error: `WordPress upload failed: ${response.status}`,
			};
		}

		const result = await response.json();

		console.log("WordPress upload success:", {
			id: result.id,
			url: result.source_url,
			filename: result.source_url.split("/").pop(),
		});

		return {
			success: true,
			url: result.source_url, // URL do pliku w WordPress
		};
	} catch (error) {
		console.error("WordPress upload error:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Unknown error",
		};
	}
}
