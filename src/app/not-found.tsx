// src/app/not-found.tsx

import React from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { ICONS } from "@/lib/icons";
import {
	containerVariants,
	cardVariants,
	itemVariants,
	buttonVariants,
} from "@/lib/variants";

// ===========================================
// GLOBAL NOT FOUND COMPONENT
// ===========================================

const NotFound: React.FC = () => {
	return (
		<motion.main
			className="min-h-screen bg-background flex items-center justify-center py-20"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<motion.div
				className="container max-w-4xl text-center px-4 md:px-8"
				variants={containerVariants}
			>
				{/* 404 Hero Section */}
				<motion.div className="mb-12" variants={itemVariants}>
					{/* Decorative Icon */}
					<motion.div
						className="inline-block mb-8"
						variants={itemVariants}
						whileHover={{
							rotate: [0, -10, 10, -10, 0],
							transition: { duration: 0.5 },
						}}
					>
						<img
							src={ICONS.errorPage}
							alt="404 - Strona nie znaleziona"
							className="w-16 h-16 md:w-20 md:h-20 mx-auto"
						/>
					</motion.div>

					{/* 404 Number */}
					<motion.h1
						className="text-6xl md:text-8xl lg:text-9xl font-primary text-primary mb-4"
						variants={itemVariants}
						whileHover={{
							scale: 1.05,
							textShadow: "4px 4px 0px var(--accent)",
							transition: { duration: 0.3 },
						}}
					>
						404
					</motion.h1>

					{/* Title */}
					<motion.h2 className="heading-primary mb-6" variants={itemVariants}>
						Strona nie została znaleziona
					</motion.h2>

					{/* Description */}
					<motion.p
						className="paragraph-center-constrained mx-auto text-muted-foreground"
						variants={itemVariants}
					>
						Ups! Strona, której szukasz nie istnieje. Być może została
						przeniesiona, usunięta lub wpisałeś nieprawidłowy adres URL.
					</motion.p>
				</motion.div>

				{/* Action Cards Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
					variants={containerVariants}
				>
					{/* Home Card - Now Clickable */}
					<Link href="/">
						<motion.div
							className="bg-primary-foreground border-2 border-foreground rounded-md p-6 group cursor-pointer h-full"
							variants={cardVariants}
							whileHover={{
								scale: 1.02,
								y: -2,
								boxShadow: "6px 6px 0px 0px var(--accent)",
								transition: { duration: 0.3 },
							}}
						>
							<div className="mb-4">
								<img
									src={ICONS.instagramAccent}
									alt="Strona główna"
									className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-200"
								/>
							</div>
							<h3 className="heading-secondary text-center mb-3">
								Strona główna
							</h3>
							<p className="paragraph-secondary text-center text-sm">
								Wróć na stronę główną i poznaj moje portfolio tatuaży
							</p>
						</motion.div>
					</Link>

					{/* Services Card - Now Clickable */}
					<Link href="/uslugi">
						<motion.div
							className="bg-primary-foreground border-2 border-foreground rounded-md p-6 group cursor-pointer h-full"
							variants={cardVariants}
							whileHover={{
								scale: 1.02,
								y: -2,
								boxShadow: "6px 6px 0px 0px var(--accent)",
								transition: { duration: 0.3 },
							}}
						>
							<div className="mb-4">
								<img
									src={ICONS.tattooMachineAccent}
									alt="Moje usługi"
									className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-200"
								/>
							</div>
							<h3 className="heading-secondary text-center mb-3">
								Moje usługi
							</h3>
							<p className="paragraph-secondary text-center text-sm">
								Zobacz pełną ofertę moich specjalizacji i stylów tatuaży
							</p>
						</motion.div>
					</Link>

					{/* Contact Card - Now Clickable */}
					<Link href="/kontakt">
						<motion.div
							className="bg-primary-foreground border-2 border-foreground rounded-md p-6 group cursor-pointer md:col-span-2 lg:col-span-1 h-full"
							variants={cardVariants}
							whileHover={{
								scale: 1.02,
								y: -2,
								boxShadow: "6px 6px 0px 0px var(--accent)",
								transition: { duration: 0.3 },
							}}
						>
							<div className="mb-4">
								<img
									src={ICONS.envelope}
									alt="Kontakt"
									className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform duration-200"
								/>
							</div>
							<h3 className="heading-secondary text-center mb-3">Kontakt</h3>
							<p className="paragraph-secondary text-center text-sm">
								Skontaktuj się ze mną i umów wizytę na konsultację
							</p>
						</motion.div>
					</Link>
				</motion.div>

				{/* Navigation Buttons */}
				<motion.div
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					variants={containerVariants}
				>
					{/* Primary CTA - Home */}
					<motion.div variants={buttonVariants}>
						<Link href="/">
							<motion.button
								className="hover:cursor-pointer bg-primary border-2 border-foreground text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-md font-primary uppercase transition-all duration-200 hover:bg-accent hover:shadow-[6px_6px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Strona główna
							</motion.button>
						</Link>
					</motion.div>

					{/* Secondary CTA - Portfolio */}
					<motion.div variants={buttonVariants}>
						<Link href="/portfolio">
							<motion.button
								className="hover:cursor-pointer bg-secondary border-2 border-foreground text-foreground px-6 md:px-8 py-3 md:py-4 rounded-md font-primary uppercase transition-all duration-200 hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Portfolio
							</motion.button>
						</Link>
					</motion.div>

					{/* Tertiary CTA - Services */}
					<motion.div variants={buttonVariants}>
						<Link href="/uslugi">
							<motion.button
								className="hover:cursor-pointer bg-secondary border-2 border-foreground text-foreground px-6 md:px-8 py-3 md:py-4 rounded-md font-primary uppercase transition-all duration-200 hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Moje usługi
							</motion.button>
						</Link>
					</motion.div>
				</motion.div>

				{/* Additional Help Text */}
				<motion.div
					className="mt-12 pt-8 border-t border-foreground/20"
					variants={itemVariants}
				>
					<p className="paragraph-small-muted">
						Jeśli problem będzie się powtarzał, skontaktuj się ze mną przez{" "}
						<Link
							href="/kontakt"
							className="text-primary hover:text-accent font-medium underline"
						>
							formularz kontaktowy
						</Link>
					</p>
				</motion.div>
			</motion.div>
		</motion.main>
	);
};

export default NotFound;
