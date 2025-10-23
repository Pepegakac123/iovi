"use client";

import React from "react";
import SectionHero from "@/components/SectionHero";
import * as motion from "motion/react-client";
import { containerVariants, itemVariants } from "@/lib/variants";

interface PortfolioErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

const PortfolioError: React.FC<PortfolioErrorProps> = ({ error, reset }) => {
	return (
		<>
			{/* Hero z error message */}
			<SectionHero
				subTitle="Wystąpił problem"
				title="Nie udało się załadować portfolio"
				description="Przepraszamy za niedogodności. Spróbuj odświeżyć stronę lub wróć za chwilę."
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
							{error.message || "Nieznany błąd"}
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

					{/* Alternative actions */}
					<motion.div className="mt-8 space-y-4" variants={itemVariants}>
						<p className="paragraph-secondary">
							Lub skorzystaj z innych sekcji:
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							<motion.a
								href="/"
								className="bg-secondary border-2 border-foreground text-foreground px-4 py-2 rounded-md font-primary uppercase text-sm transition-all duration-200 hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Strona główna
							</motion.a>

							<motion.a
								href="/uslugi"
								className="bg-secondary border-2 border-foreground text-foreground px-4 py-2 rounded-md font-primary uppercase text-sm transition-all duration-200 hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Usługi
							</motion.a>

							<motion.a
								href="/kontakt"
								className="bg-secondary border-2 border-foreground text-foreground px-4 py-2 rounded-md font-primary uppercase text-sm transition-all duration-200 hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Kontakt
							</motion.a>
						</div>
					</motion.div>
				</motion.div>
			</motion.section>
		</>
	);
};

export default PortfolioError;
