// src/components/SectionHero.tsx - Reusable mini hero dla sekcji

import React from "react";
import * as motion from "motion/react-client";
import Subheadline from "./Subheadline";
import FloatingElements from "./FloatingElements";
import {
	containerVariants,
	titleVariants,
	descriptionVariants,
} from "@/lib/variants";

interface SectionHeroProps {
	subTitle: string;
	title: string;
	description: string;
	className?: string;
}

const SectionHero: React.FC<SectionHeroProps> = ({
	subTitle,
	title,
	description,
	className = "",
}) => {
	return (
		<motion.section
			className={`w-full bg-background py-4 md:py-8 ${className}`}
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			{/* ✅ Container podobny do Hero.tsx */}
			<motion.div
				className="max-w-[1440px] mx-auto flex justify-center"
				variants={containerVariants}
			>
				<motion.div
					className="w-full gap-4 md:gap-6 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFEDEA] to-[#FDDFD0] border-1 border-b-4 border-r-4 border-foreground rounded-md overflow-hidden p-4 md:p-6 relative"
					initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
					animate={{ opacity: 1, scale: 1, rotateX: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					whileHover={{
						boxShadow: "4px 4px 0px 0px var(--foreground)",
						transition: { duration: 0.3 },
					}}
				>
					{/* ✅ Content Section z z-index */}
					<motion.div
						className="flex flex-col gap-3 md:gap-4 items-center text-center z-10 relative max-w-4xl"
						variants={containerVariants}
					>
						{/* Subheadline */}
						<motion.div variants={titleVariants}>
							<Subheadline title={subTitle} />
						</motion.div>

						{/* Main Title */}
						<motion.h1
							className="font-primary text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground text-center"
							variants={titleVariants}
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.2 },
							}}
						>
							{title}
						</motion.h1>

						{/* Description */}
						<motion.p
							className="paragraph-secondary text-center max-w-[600px]"
							variants={descriptionVariants}
						>
							{description}
						</motion.p>
					</motion.div>

					{/* ✅ Floating Elements jak w Hero */}
					<FloatingElements variant="section" />
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default SectionHero;
