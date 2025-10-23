// src/components/PersonalShowcase/SkillTag.tsx
import * as motion from "motion/react-client";
import { itemVariants } from "@/lib/variants";
import { SkillTagProps, SkillTag as SkillTagType } from "@/lib/dataTypes";

// ===========================================
// SKILL TAG COLOR HELPER
// ===========================================

const getTagColor = (category: SkillTagType["category"]) => {
	switch (category) {
		case "style":
			return "bg-primary text-primary-foreground border-primary";
		case "technique":
			return "bg-accent text-accent-foreground border-accent";
		case "software":
			return "bg-secondary text-foreground border-foreground";
		default:
			return "bg-muted text-foreground border-foreground";
	}
};

// ===========================================
// SKILL TAG COMPONENT
// ===========================================

const SkillTag = ({ skill, index }: SkillTagProps) => (
	<motion.span
		className={`inline-block px-3 py-1 rounded-md border-2 text-sm font-primary ${getTagColor(skill.category)}`}
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, delay: index * 0.05 }}
		whileHover={{
			scale: 1.05,
			boxShadow: "2px 2px 0px 0px var(--foreground)",
			translateX: -1,
			translateY: -1,
			transition: { duration: 0.2 },
		}}
	>
		{skill.name}
	</motion.span>
);

export default SkillTag;
