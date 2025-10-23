// src/components/PersonalShowcase/HobbyCard.tsx
import Image from "next/image";
import * as motion from "motion/react-client";
import { cardVariants, itemVariants } from "@/lib/variants";
import { HobbyCardProps } from "@/lib/dataTypes";

// ===========================================
// HOBBY CARD COMPONENT
// ===========================================

const HobbyCard = ({ hobby, index }: HobbyCardProps) => (
	<motion.div
		className="flex flex-col items-center text-center"
		variants={cardVariants}
		custom={index}
		whileHover={{
			scale: 1.05,
			transition: { duration: 0.2 },
		}}
	>
		{/* Ikona - z osobnym hover bez variants */}
		<motion.div
			className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center bg-background border-2 border-foreground rounded-full"
			whileHover={{
				boxShadow: "4px 4px 0px 0px var(--foreground)",
				translateX: -2,
				translateY: -2,
				scale: 1.1,
				transition: { duration: 0.2 },
			}}
		>
			<motion.div
				whileHover={{
					scale: 1.2,
					transition: { duration: 0.2 },
				}}
			>
				<Image
					src={hobby.icon}
					alt={`${hobby.name} icon`}
					width={32}
					height={32}
					className="w-8 h-8"
				/>
			</motion.div>
		</motion.div>

		<motion.p
			className="font-primary text-sm md:text-base text-foreground"
			variants={itemVariants}
		>
			{hobby.name}
		</motion.p>
	</motion.div>
);

export default HobbyCard;
