// src/app/error.tsx
"use client";

import React, { useEffect } from "react";
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
// TYPES
// ===========================================

interface GlobalErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

// ===========================================
// GLOBAL ERROR COMPONENT
// ===========================================

const GlobalError: React.FC<GlobalErrorProps> = ({ error, reset }) => {
	useEffect(() => {
		// Log błędu do konsoli (możesz dodać zewnętrzny serwis logowania)
		console.error("Global error occurred:", error);
	}, [error]);

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
				{/* Error Hero Section */}
				<motion.div className="mb-12" variants={itemVariants}>
					{/* Decorative Icon - Bandage dla błędów */}
					<motion.div
						className="inline-block mb-8"
						variants={itemVariants}
						whileHover={{
							rotate: [0, -10, 10, -10, 0],
							transition: { duration: 0.5 },
						}}
					>
						<img
							src={ICONS.bandage}
							alt="Wystąpił błąd"
							className="w-16 h-16 md:w-20 md:h-20 mx-auto"
						/>
					</motion.div>

					{/* Error Title */}
					<motion.h1
						className="heading-primary text-destructive mb-4"
						variants={itemVariants}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.3 },
						}}
					>
						Ups! Wystąpił błąd
					</motion.h1>

					{/* Subtitle */}
					<motion.h2 className="heading-small mb-6" variants={itemVariants}>
						Nie martw się - zaraz to naprawimy
					</motion.h2>

					{/* Description */}
					<motion.p
						className="paragraph-center-constrained mx-auto text-muted-foreground"
						variants={itemVariants}
					>
						Przepraszam za niedogodności. Wystąpił nieoczekiwany błąd, ale już
						nad tym pracuję. Spróbuj odświeżyć stronę lub wróć za chwilę.
					</motion.p>
				</motion.div>

				{/* Error Details Card (tylko w trybie development) */}
				{process.env.NODE_ENV === "development" && (
					<motion.div
						className="bg-destructive/10 border-2 border-destructive/20 rounded-md p-6 mb-8 text-left"
						variants={cardVariants}
					>
						<h3 className="heading-secondary text-destructive mb-4">
							Szczegóły błędu (tryb deweloperski)
						</h3>
						<pre className="paragraph-small text-destructive/80 whitespace-pre-wrap break-words font-mono">
							{error.message}
						</pre>
						{error.digest && (
							<p className="paragraph-small-muted mt-2">
								Digest: {error.digest}
							</p>
						)}
					</motion.div>
				)}

				{/* Quick Actions Grid */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
					variants={containerVariants}
				>
					{/* Retry Card */}
					<motion.div
						className="bg-primary-foreground border-2 border-foreground rounded-md p-8 group cursor-pointer"
						variants={cardVariants}
						whileHover={{
							scale: 1.02,
							y: -2,
							boxShadow: "6px 6px 0px 0px var(--primary)",
							transition: { duration: 0.3 },
						}}
						onClick={reset}
					>
						<div className="mb-4">
							<img
								src={ICONS.careForDetails}
								alt="Spróbuj ponownie"
								className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform duration-200"
							/>
						</div>
						<h3 className="heading-secondary text-center mb-3">
							Spróbuj ponownie
						</h3>
						<p className="paragraph-secondary text-center text-sm">
							Odśwież stronę i spróbuj wykonać akcję jeszcze raz
						</p>
					</motion.div>

					{/* Home Card */}
					<motion.div
						className="bg-primary-foreground border-2 border-foreground rounded-md p-8 group"
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
								src={ICONS.instagram}
								alt="Strona główna"
								className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform duration-200"
							/>
						</div>
						<h3 className="heading-secondary text-center mb-3">
							Bezpieczna przystań
						</h3>
						<p className="paragraph-secondary text-center text-sm">
							Wróć na stronę główną i zacznij od nowa
						</p>
					</motion.div>
				</motion.div>

				{/* Action Buttons */}
				<motion.div
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					variants={containerVariants}
				>
					{/* Primary CTA - Retry */}
					<motion.div variants={buttonVariants}>
						<motion.button
							onClick={reset}
							className="bg-primary border-2 border-foreground text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-md font-primary uppercase transition-all duration-200 hover:bg-accent hover:shadow-[6px_6px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							Spróbuj ponownie
						</motion.button>
					</motion.div>

					{/* Secondary CTA - Home */}
					<motion.div variants={buttonVariants}>
						<Link href="/">
							<motion.button
								className="bg-secondary border-2 border-foreground text-foreground px-6 md:px-8 py-3 md:py-4 rounded-md font-primary uppercase transition-all duration-200 hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Strona główna
							</motion.button>
						</Link>
					</motion.div>

					{/* Tertiary CTA - Contact */}
					<motion.div variants={buttonVariants}>
						<Link href="/kontakt">
							<motion.button
								className="bg-secondary border-2 border-foreground text-foreground px-6 md:px-8 py-3 md:py-4 rounded-md font-primary uppercase transition-all duration-200 hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Kontakt
							</motion.button>
						</Link>
					</motion.div>
				</motion.div>

				{/* Error Report Section */}
				<motion.div
					className="mt-12 pt-8 border-t border-foreground/20"
					variants={itemVariants}
				>
					<p className="paragraph-small-muted mb-4">
						Jeśli problem będzie się powtarzał, daj mi znać
					</p>

					<motion.div
						className="inline-flex items-center gap-2 bg-muted/30 border border-foreground/20 rounded-md px-4 py-2"
						whileHover={{
							backgroundColor: "var(--muted)",
							transition: { duration: 0.2 },
						}}
					>
						<img src={ICONS.envelope} alt="Email" className="w-4 h-4" />
						<Link
							href="/kontakt"
							className="paragraph-small text-foreground hover:text-primary font-medium"
						>
							Zgłoś problem
						</Link>
					</motion.div>
				</motion.div>

				{/* Additional Help */}
				<motion.div className="mt-8" variants={itemVariants}>
					<p className="paragraph-small-muted">
						Możesz także skorzystać z innych sekcji mojej strony:
					</p>
					<div className="flex flex-wrap justify-center gap-2 mt-3">
						<Link
							href="/uslugi"
							className="text-primary hover:text-accent text-sm underline"
						>
							Moje usługi
						</Link>
						<span className="text-muted-foreground">•</span>
						<Link
							href="/portfolio"
							className="text-primary hover:text-accent text-sm underline"
						>
							Portfolio
						</Link>
						<span className="text-muted-foreground">•</span>
						<Link
							href="/kontakt"
							className="text-primary hover:text-accent text-sm underline"
						>
							Kontakt
						</Link>
					</div>
				</motion.div>
			</motion.div>
		</motion.main>
	);
};

export default GlobalError;
