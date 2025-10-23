// src/components/Gallery/HealedTattooHeader.tsx
import React from "react";
import * as motion from "motion/react-client";
import { cardVariants } from "@/lib/variants";

const HealedTattooHeader: React.FC = () => {
	return (
		<motion.div className="text-center mb-8 md:mb-12" variants={cardVariants}>
			<motion.h3
				className="heading-secondary mb-4"
				whileHover={{ scale: 1.02 }}
			>
				Efekt Gojenia - Przed i Po
			</motion.h3>
			<motion.p className="paragraph-secondary text-muted-foreground max-w-2xl mx-auto">
				Zobacz jak wyglądają tatuaże po okresie gojenia. Przeciągnij suwak lub
				najechaj myszką, aby porównać świeży tatuaż z zgojoną wersją.
			</motion.p>
		</motion.div>
	);
};

export default HealedTattooHeader;
