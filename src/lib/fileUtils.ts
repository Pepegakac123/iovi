import sharp from "sharp";

export async function convertFileToWebP(
	file: File,
	email: string,
): Promise<{ buffer: Buffer; filename: string }> {
	const arrayBuffer = await file.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);

	const webpBuffer = await sharp(buffer)
		.webp({ quality: 80 })
		.resize(1920, 1080, { fit: "inside", withoutEnlargement: true })
		.toBuffer();

	const timestamp = new Date().toISOString().slice(0, 16).replace(/[:.]/g, "-");
	const safeEmail = email.replace(/[^a-zA-Z0-9]/g, "-");
	const originalName = file.name.split(".")[0];
	const filename = `client-${timestamp}-${safeEmail}-${originalName}.webp`;

	return { buffer: webpBuffer, filename };
}
