// src/components/PersonalShowcase/SpecializationCard.tsx
import * as motion from "motion/react-client";
import { cardVariants, itemVariants } from "@/lib/variants";
import { SpecializationCardProps } from "@/lib/dataTypes";

// ===========================================
// SPECIALIZATION CARD COMPONENT
// ===========================================

const SpecializationCard = ({
	specialization,
	index,
}: SpecializationCardProps) => (
	<motion.div
		className="mb-4 md:mb-6 last:mb-0"
		variants={cardVariants}
		custom={index}
	>
		<motion.h4
			className="font-primary text-base md:text-lg text-primary mb-1"
			variants={itemVariants}
		>
			{specialization.name}
		</motion.h4>

		<motion.p className="text-sm text-foreground/80" variants={itemVariants}>
			{specialization.description}
		</motion.p>
	</motion.div>
);

export default SpecializationCard;
