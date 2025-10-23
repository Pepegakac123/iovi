import type { NextConfig } from "next";

// 💡 Dodajemy import dla analizatora paczek
// Pamiętaj, aby go zainstalować: npm install @next/bundle-analyzer -D
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

// Używamy nowej domeny CMS (domyślnie iovi.pl), zgodnie z planem
const wordpressUrl = process.env.WORDPRESS_URL || "https://cms.iovi.pl/";
const wordpressHostname = new URL(wordpressUrl).hostname;
const wordpressIconsHostname = new URL(
	process.env.PUBLIC_ICONS_CMS_HOSTNAME || "https://cms.iovi-ink.pl/",
).hostname;

// 🔥 Usunięto/Zakomentowano konfigurację Cloudflare CDN / R2
// const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || "";
// const cdnHostname = cdnUrl ? new URL(cdnUrl).hostname : null;

const nextConfig: NextConfig = {
	// output: "standalone", // Pozostało zakomentowane (do decyzji)

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

	// 🔥 IMAGES - Tylko WordPress (używamy standardowego loader'a Next.js)
	images: {
		// Usunięto niestandardowy loader Cloudflare:
		// loader: "custom",
		// loaderFile: "./src/lib/cloudflare-loader.ts",
		unoptimized: false,
		remotePatterns: [
			// Usunięto konfigurację Cloudflare R2 CDN (PRIORYTET!):
			// ...(cdnHostname
			//  ? [
			//          {
			//              protocol: "https" as const,
			//              hostname: cdnHostname, // cdn.iovi-ink.pl
			//              port: "",
			//              pathname: "/**",
			//          },
			//      ]
			//  : []),
			// ✅ WordPress (teraz główne źródło)
			{
				protocol: "https" as const,
				hostname: wordpressHostname,
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https" as const,
				hostname: wordpressIconsHostname,
				port: "",
				pathname: "/**",
			},
		],
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000, // 1 rok (Next.js będzie cache'ował na serwerze/domenie)
	},

	async redirects() {
		// Pozostawiamy redirecty, bo dotyczą domeny, a nie CDN
		return [
			{
				source: "/:path*",
				has: [
					{
						type: "host",
						value: "www.iovi.pl",
					},
				],
				destination: "https://iovi.pl/:path*",
				permanent: true, // 301 redirect (SEO-friendly)
			},
		];
	},

	// ✅ NAJLEPSZA PRAKTYKA: Next.js + Webpack (bez zmian)
	webpack: (config, { isServer }) => {
		// Usunięto niestandardową logikę 'config.optimization' dla czystości.
		return config;
	},

	// 🔥 CACHE HEADERS - Zakomentowano, ponieważ były dedykowane dla Cloudflare cache
	// Jeśli nie używasz Cloudflare jako CDN/proxy, te headery nie są potrzebne
	// lub powinny być konfigurowane na Twoim nowym serwerze/platformie hostingowej.
	// async headers() {
	//  return [
	//      // Next.js statyczne assety - cache przez Cloudflare
	//      {
	//          source: "/_next/static/:path*",
	//          headers: [
	//              {
	//                  key: "Cache-Control",
	//                  value: "public, max-age=31536000, immutable",
	//              },
	//              {
	//                  key: "CDN-Cache-Control",
	//                  value: "public, max-age=31536000",
	//              },
	//          ],
	//      },
	//      // ... reszta konfiguracji headers
	//  ];
	// },

	compress: true,
	poweredByHeader: false,
};

// 💡 Zawijamy cały eksport w 'withBundleAnalyzer'
export default withBundleAnalyzer(nextConfig);
