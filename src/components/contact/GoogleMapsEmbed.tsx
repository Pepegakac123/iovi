import React, { Suspense } from "react";
import * as motion from "motion/react-client";
import { googleMapsConfig } from "@/lib/contactData";
import { containerVariants, itemVariants } from "@/lib/variants";
import GoogleMapsDynamic from "./GoogleMapsDynamic";

// ===========================================
// DYNAMIC IMPORT FOR PPR
// ===========================================

// ===========================================
// TYPES
// ===========================================

interface GoogleMapsEmbedProps {
	className?: string;
}

// ===========================================
// MAIN COMPONENT WITH PPR
// ===========================================

const GoogleMapsEmbed: React.FC<GoogleMapsEmbedProps> = ({
	className = "",
}) => {
	return (
		<motion.section
			className={`py-16 ${className}`}
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			<div className="container">
				{/* Section Header - Static (PPR) */}
				<motion.div className="text-center mb-12" variants={itemVariants}>
					<motion.h2
						className="heading-primary-center mb-4"
						whileHover={{ scale: 1.02 }}
					>
						Znajdź nasze studio
					</motion.h2>
					<motion.p className="paragraph-center-constrained mx-auto">
						Studio Tatuażu LewusInk znajduje się w malowniczej Mszanie Dolnej.
						Zapraszamy na bezpłatną konsultację!
					</motion.p>
				</motion.div>

				{/* Maps Container - Dynamic (PPR) */}
				<motion.div variants={itemVariants}>
					<Suspense
						fallback={
							<div className="bg-muted border-2 border-foreground rounded-md h-96 md:h-[400px] flex items-center justify-center">
								<p className="paragraph-secondary">Ładowanie mapy...</p>
							</div>
						}
					>
						<GoogleMapsDynamic />
					</Suspense>
				</motion.div>

				<motion.div
					className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
					variants={itemVariants}
				>
					{/* Open in Google Maps */}
					<motion.a
						href={googleMapsConfig.linkUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-block"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
					>
						<motion.button
							type="button"
							className="bg-primary text-primary-foreground font-primary px-6 py-3 rounded-md border-2 border-foreground uppercase hover:bg-accent hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer w-full sm:w-fit"
						>
							Otwórz w Google Maps
						</motion.button>
					</motion.a>

					{/* Get Directions */}
					<motion.a
						href={`https://www.google.com/maps/dir//${encodeURIComponent("Studio Tatuażu LewusInk, Mszana Dolna")}`}
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-block"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.98 }}
					>
						<motion.button
							type="button"
							className="bg-secondary text-foreground font-primary px-6 py-3 rounded-md border-2 border-foreground uppercase hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer w-full sm:w-fit"
						>
							Wyznacz trasę
						</motion.button>
					</motion.a>
				</motion.div>

				{/* Contact Info Below Map - Static (PPR) */}
				<motion.div
					className="mt-8 p-6 bg-muted border-2 border-foreground rounded-md"
					variants={itemVariants}
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
						<div>
							<h3 className="heading-secondary mb-2">Godziny otwarcia</h3>
							<p className="paragraph-secondary">
								Poniedziałek - Piątek: 9:00 - 16:00
								<br />
								Sobota, Niedziela: Zamknięte
							</p>
						</div>
						<div>
							<h3 className="heading-secondary mb-2">Jak dojechać</h3>
							<p className="paragraph-secondary">
								Studio znajduje się w centrum Mszany Dolnej.
								<br />
								Dostępny parking dla klientów.
								<br />
								Dojazd komunikacją publiczną możliwy.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default GoogleMapsEmbed;
