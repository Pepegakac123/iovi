// src/app/kontakt/error.tsx
"use client";

import React from "react";
import SectionHero from "@/components/SectionHero";
import * as motion from "motion/react-client";
import { containerVariants, itemVariants } from "@/lib/variants";
import { socialLinks } from "@/lib/data";

interface ContactErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

const ContactError: React.FC<ContactErrorProps> = ({ error, reset }) => {
	return (
		<>
			{/* Hero z error message */}
			<SectionHero
				subTitle="Wystąpił problem"
				title="Nie udało się załadować strony kontakt"
				description="Przepraszamy za niedogodności. Spróbuj odświeżyć stronę lub skontaktuj się z nami bezpośrednio."
				className="bg-background"
			/>

			{/* Error details */}
			<motion.section
				className="w-full bg-primary-foreground py-16 md:py-20"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<motion.div
					className="container text-center max-w-2xl"
					variants={containerVariants}
				>
					<motion.div
						className="bg-background rounded-md border-2 border-foreground p-8 shadow-[4px_4px_0px_0px_var(--foreground)]"
						variants={itemVariants}
					>
						<h3 className="heading-secondary mb-4 text-destructive">
							Szczegóły błędu
						</h3>

						<p className="paragraph-small text-muted-foreground mb-6">
							{error.message ||
								"Nieznany błąd podczas ładowania formularza kontaktowego"}
						</p>

						{/* Retry button */}
						<motion.button
							onClick={reset}
							className="bg-primary border-2 border-foreground text-primary-foreground px-6 py-3 rounded-md font-primary uppercase transition-all duration-200 hover:bg-accent hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							Spróbuj ponownie
						</motion.button>
					</motion.div>

					{/* Direct contact options */}
					<motion.div className="mt-8 space-y-6" variants={itemVariants}>
						<p className="paragraph-secondary">
							W międzyczasie możesz skontaktować się z nami bezpośrednio:
						</p>

						{/* Direct contact methods */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<motion.a
								href="mailto:iovi@kontakt.pl"
								className="bg-secondary border-2 border-foreground text-foreground p-4 rounded-md font-primary uppercase text-sm transition-all duration-200 hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] flex items-center justify-center gap-2"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								📧 Napisz email
							</motion.a>

							<motion.a
								href={socialLinks.iovi.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-secondary border-2 border-foreground text-foreground p-4 rounded-md font-primary uppercase text-sm transition-all duration-200 hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] flex items-center justify-center gap-2"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								📱 Instagram @iovi.ink
							</motion.a>
						</div>

						{/* Alternative navigation */}
						<div className="flex flex-wrap justify-center gap-4 mt-8">
							<motion.a
								href="/"
								className="bg-muted border-2 border-foreground text-foreground px-4 py-2 rounded-md font-primary uppercase text-sm transition-all duration-200 hover:bg-background hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Strona główna
							</motion.a>

							<motion.a
								href="/portfolio"
								className="bg-muted border-2 border-foreground text-foreground px-4 py-2 rounded-md font-primary uppercase text-sm transition-all duration-200 hover:bg-background hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Portfolio
							</motion.a>

							<motion.a
								href="/o-mnie"
								className="bg-muted border-2 border-foreground text-foreground px-4 py-2 rounded-md font-primary uppercase text-sm transition-all duration-200 hover:bg-background hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								O Mnie
							</motion.a>
						</div>
					</motion.div>
				</motion.div>
			</motion.section>
		</>
	);
};

export default ContactError;
