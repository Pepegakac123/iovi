// src/components/PersonalShowcase/SectionHeader.tsx
import * as motion from "motion/react-client";
import { headerVariants } from "@/lib/variants";
import { SectionHeaderProps } from "@/lib/dataTypes";

// ===========================================
// SECTION HEADER COMPONENT
// ===========================================

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => (
	<motion.h3
		className={`text-lg md:text-xl font-primary text-foreground mb-4 md:mb-6 ${className}`}
		variants={headerVariants}
		whileHover={{ scale: 1.02 }}
	>
		+ {title.toUpperCase()}
	</motion.h3>
);

export default SectionHeader;
