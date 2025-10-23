// src/app/kontakt/page.tsx
import React from "react";
import * as motion from "motion/react-client";
import ContactForm from "@/components/forms/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMapsEmbed from "@/components/contact/GoogleMapsEmbed";
import { containerVariants, itemVariants } from "@/lib/variants";
import SectionHero from "@/components/SectionHero";
import { Metadata } from "next";
import { images } from "@/lib/images";
import { BreadcrumbJsonLd } from "next-seo";

export const metadata: Metadata = {
	title: "Kontakt",
	description:
		"Skontaktuj się ze mną. Studio Lewus Ink. Instagram @iovi.ink - najszybsza odpowiedź.",

	openGraph: {
		title: "Kontakt - Jowita Artystka Tatuażu | Studio Lewus Ink Mszana Dolna",
		description:
			"Umów bezpłatną konsultację z artystką tatuażu. Studio Lewus Ink w Mszanie Dolnej. Najszybciej odpisuję na Instagramie.",
		url: "https://iovi-ink.pl/kontakt",
		images: [
			{
				url: `${images.seoBaner.src}`,
				width: 1200,
				height: 630,
				alt: `${images.seoBaner.alt}`,
			},
		],
	},

	alternates: {
		canonical: "https://iovi-ink.pl/kontakt",
	},

	// Dodatkowe keywords dla kontaktu
	keywords: [
		"kontakt artystka tatuażu",
		"umów tatuaż mszana dolna",
		"studio lewus ink kontakt",
		"tatuażystka mszana dolna telefon",
		"konsultacja tatuaż",
		"jowita tatuażystka kontakt",
	],
};

// ===========================================
// MAIN CONTACT PAGE COMPONENT
// ===========================================

const ContactPage: React.FC = () => {
	return (
		<>
			<BreadcrumbJsonLd
				useAppDir={true}
				itemListElements={[
					{
						position: 1,
						name: "Strona główna",
						item: "https://iovi-ink.pl",
					},
					{
						position: 2,
						name: "Kontakt",
						item: "https://iovi-ink.pl/kontakt",
					},
				]}
			/>
			<SectionHero
				subTitle="Napisz – pogadamy o szczegółach"
				title="Skontaktuj się z nami"
				description="Marzysz o unikalnym tatuażu? Jestem tutaj, żeby tchnąć życie w Twoje pomysły. Pierwsza rozmowa jest zawsze bezpłatna."
			/>
			{/* Main Contact Section */}
			<motion.main
				className="min-h-screen py-20"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<div className="container px-4 md:px-8">
					{/* Main Contact Layout */}
					<motion.section
						className="bg-transparent border-2 border-foreground rounded-md p-6 lg:p-12 mb-16"
						variants={itemVariants}
						whileHover={{
							boxShadow: "6px 6px 0px 0px var(--foreground)",
							scale: 1.005,
							transition: { duration: 0.3 },
						}}
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
							{/* Left Side - Contact Form */}
							<motion.div
								className="order-2 lg:order-1"
								variants={itemVariants}
							>
								<motion.div
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.2 }}
								>
									<ContactForm />
								</motion.div>
							</motion.div>

							{/* Right Side - Contact Information */}
							<motion.div
								className="order-1 lg:order-2 lg:sticky lg:top-8"
								variants={itemVariants}
							>
								<motion.div
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.4 }}
								>
									<ContactInfo />
								</motion.div>
							</motion.div>
						</div>
					</motion.section>
				</div>
			</motion.main>

			{/* Google Maps Section */}
			<GoogleMapsEmbed className="bg-primary-foreground" />
		</>
	);
};

export default ContactPage;
