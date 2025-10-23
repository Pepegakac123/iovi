// src/components/servicePageComponents/ServiceDistinguishingCard.tsx

import * as motion from "motion/react-client";
import { cardVariantsFast } from "@/lib/variants";

interface ServiceDistinguishingCardProps {
	title: string;
	content: string;
	variant: "dark" | "light";
}

const ServiceDistinguishingCard = ({
	title,
	content,
	variant = "dark",
}: ServiceDistinguishingCardProps) => {
	return (
		<motion.div
			className={`w-full h-full bg-background rounded-md p-6 md:p-8 group cursor-default 
        border-2 ${variant === "dark" ? "border-accent" : "border-foreground"}`}
			whileHover={{
				scale: 1.02,
				boxShadow:
					variant === "dark"
						? "6px 6px 0px 0px var(--accent)"
						: "6px 6px 0px 0px var(--foreground)",
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
		>
			<motion.h3
				className="heading-secondary mb-4"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.1, duration: 0.4 }}
			>
				{title}
			</motion.h3>

			<motion.p
				className="paragraph-secondary leading-relaxed"
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2, duration: 0.5 }}
			>
				{content}
			</motion.p>
		</motion.div>
	);
};

export default ServiceDistinguishingCard;
