"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SYSTEM_ICONS } from "@/lib/icons";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const CookieConsent: React.FC = () => {
	const { hasConsent, acceptCookies, declineCookies, isLoading } =
		useCookieConsent();

	const [isVisible, setIsVisible] = useState(true);

	// Ukryj komponent jeśli consent już został dany
	if (isLoading || hasConsent !== null) {
		return null;
	}

	const handleAccept = () => {
		setIsVisible(false);
		// Delay żeby animacja się skończyła (dopasowane do exit.transition.duration)P
		setTimeout(() => {
			acceptCookies();
		}, 420);
	};

	const handleDecline = () => {
		setIsVisible(false);
		// Delay żeby animacja się skończyła
		setTimeout(() => {
			declineCookies();
		}, 420);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					key="cookie-consent-popup"
					className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto z-50 bg-background border-2 border-foreground rounded-md p-4 md:p-6 shadow-[4px_4px_0px_0px_theme(colors.foreground)] max-w-sm md:max-w-sm mx-auto md:mx-0"
					initial={{
						y: 400,
						opacity: 0,
						scale: 0.95,
					}}
					animate={{
						y: 0,
						opacity: 1,
						scale: 1,
					}}
					exit={{
						// unikamy dużych wartości X — przesunięcie w osi Y i zanikanie nie powoduje poziomego scrolla
						y: 40,
						opacity: 0,
						scale: 0.98,
						transition: {
							duration: 0.4,
							ease: "easeInOut",
						},
					}}
					transition={{
						duration: 0.5,
						ease: "easeOut",
						type: "spring",
						stiffness: 300,
						damping: 30,
					}}
					style={{ willChange: "transform, opacity" }}
				>
					{/* Header with Cookie Icon */}
					<motion.div
						className="flex items-center gap-3 mb-3 md:mb-4"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.4 }}
					>
						<div className="w-7 h-7 md:w-8 md:h-8 bg-primary rounded-md flex items-center justify-center border-2 border-foreground">
							<img
								src={SYSTEM_ICONS.cookie}
								alt="Cookie"
								className="w-4 h-4 md:w-5 md:h-5"
							/>
						</div>
						<h3 className="heading-secondary text-base md:text-lg">
							Używamy plików cookies
						</h3>
					</motion.div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.4 }}
					>
						<p className="text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
							Nasza strona używa plików cookies w celu analizy ruchu i poprawy
							doświadczeń użytkowników.
						</p>

						<motion.a
							href="/polityka-prywatnosci"
							className="cursor-pointer text-xs md:text-sm text-primary hover:text-accent underline font-primary transition-colors"
							whileHover={{ scale: 1.02 }}
						>
							Dowiedz się więcej
						</motion.a>
					</motion.div>

					{/* Action Buttons */}
					<motion.div
						className="flex flex-col gap-2 mt-4 md:mt-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.4 }}
					>
						<motion.button
							type="button"
							onClick={handleAccept}
							className="cursor-pointer bg-primary text-primary-foreground px-4 py-3 md:py-2 rounded-md font-primary text-sm border-2 border-foreground hover:bg-accent hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200 touch-manipulation"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.95 }}
						>
							Akceptuj wszystkie
						</motion.button>

						<motion.button
							type="button"
							onClick={handleDecline}
							className="cursor-pointer bg-transparent text-foreground px-4 py-3 md:py-2 rounded-md font-primary text-sm border-2 border-foreground hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] hover:border-foreground transition-all duration-200 touch-manipulation"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.95 }}
						>
							Tylko niezbędne
						</motion.button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CookieConsent;
