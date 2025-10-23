import type { NextConfig } from "next";

// 💡 Dodajemy import dla analizatora paczek
// Pamiętaj, aby go zainstalować: npm install @next/bundle-analyzer -D
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const wordpressUrl = process.env.WORDPRESS_URL || "https://cms.iovi-ink.pl/";
const wordpressHostname = new URL(wordpressUrl).hostname;

// 🔥 MIKR.US CONFIG: Główna domena z Cloudflare cache
const isProd = process.env.NODE_ENV === "production";

const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || "";
const cdnHostname = cdnUrl ? new URL(cdnUrl).hostname : null;

const nextConfig: NextConfig = {
	// output: "standalone", // Uncomment jeśli chcesz standalone

	experimental: {
		optimizePackageImports: [
			"lucide-react",
			"motion",
			"@radix-ui/react-accordion",
			"@radix-ui/react-dialog",
			"@radix-ui/react-form",
		],
		serverComponentsHmrCache: false,
	},

	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},

	// 🔥 IMAGES - Tylko WordPress (bez CDN subdomain)
	images: {
		loader: "custom",
		loaderFile: "./src/lib/cloudflare-loader.ts",
		unoptimized: false,
		remotePatterns: [
			// ✅ Cloudflare R2 CDN (PRIORYTET!)
			...(cdnHostname
				? [
						{
							protocol: "https" as const,
							hostname: cdnHostname, // cdn.iovi-ink.pl
							port: "",
							pathname: "/**",
						},
					]
				: []),
			// WordPress (backup/fallback podczas migracji)
			{
				protocol: "https" as const,
				hostname: wordpressHostname,
				port: "",
				pathname: "/**",
			},
		],
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000, // 1 rok
	},

	async redirects() {
		return [
			{
				source: "/:path*",
				has: [
					{
						type: "host",
						value: "www.iovi-ink.pl",
					},
				],
				destination: "https://iovi-ink.pl/:path*",
				permanent: true, // 301 redirect (SEO-friendly)
			},
		];
	},

	// ✅ NAJLEPSZA PRAKTYKA: Zaufaj domyślnej strategii Next.js
	webpack: (config, { isServer }) => {
		// W 99% przypadków domyślna strategia Next.js 'splitChunks'
		// jest bardziej wydajna niż ręczne dzielenie paczek.
		// Usuwamy całą niestandardową logikę 'config.optimization'.

		// Optymalizacje takie jak 'mergeDuplicateChunks' czy 'removeEmptyChunks'
		// są już domyślnie włączone w trybie produkcyjnym przez Next.js.

		// Jeśli w przyszłości będziesz chciał dodać coś specyficznego,
		// np. obsługę SVG, zrób to tutaj. Na razie zostawiamy czysto.

		return config;
	},

	// 🔥 CACHE HEADERS - działają z głównej domeny przez Cloudflare
	async headers() {
		return [
			// Next.js statyczne assety - cache przez Cloudflare
			{
				source: "/_next/static/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
					{
						key: "CDN-Cache-Control",
						value: "public, max-age=31536000",
					},
				],
			},
			// Next.js optymalizowane obrazy
			{
				source: "/_next/image/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, stale-while-revalidate=86400",
					},
					{
						key: "CDN-Cache-Control",
						value: "public, max-age=2592000",
					},
				],
			},
			// Public folder assets
			{
				source: "/icons/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=2592000, stale-while-revalidate=86400",
					},
				],
			},
			// Fonty - z CORS headers dla Cloudflare
			{
				source: "/:path*.{woff,woff2,ttf,eot}",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
					{
						key: "Access-Control-Allow-Origin",
						value: "*",
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET, OPTIONS",
					},
				],
			},
			// Inne statyczne pliki
			{
				source: "/:path*.{ico,png,jpg,jpeg,gif,webp,svg}",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=2592000, stale-while-revalidate=86400",
					},
				],
			},
			{
				source: "/images/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=2592000, stale-while-revalidate=86400",
					},
				],
			},
		];
	},

	compress: true,
	poweredByHeader: false,
};

// 💡 Zawijamy cały eksport w 'withBundleAnalyzer'
export default withBundleAnalyzer(nextConfig);
