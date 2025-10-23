// src/components/PersonalShowcase/ExperienceCard.tsx
import * as motion from "motion/react-client";
import { cardVariants, itemVariants } from "@/lib/variants";
import { ExperienceCardProps } from "@/lib/dataTypes";

// ===========================================
// EXPERIENCE CARD COMPONENT
// ===========================================

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => (
	<motion.div
		className="mb-4 md:mb-6 last:mb-0"
		variants={cardVariants}
		custom={index}
	>
		<motion.div className="mb-2" variants={itemVariants}>
			<p className="text-sm text-muted-foreground font-primary">
				{experience.period}
			</p>
		</motion.div>

		<motion.h4
			className="font-primary text-base md:text-lg text-primary mb-1"
			variants={itemVariants}
		>
			{experience.position}
		</motion.h4>

		<motion.p
			className="font-text capitalize text-sm md:text-base text-foreground mb-1"
			variants={itemVariants}
		>
			{experience.company}
		</motion.p>
		{experience.description && (
			<motion.p className="text-sm text-foreground/80" variants={itemVariants}>
				{experience.description}
			</motion.p>
		)}
	</motion.div>
);

export default ExperienceCard;
