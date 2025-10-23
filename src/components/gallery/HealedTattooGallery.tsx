// src/components/Gallery/HealedTattooGallery.tsx
import React from "react";
import * as motion from "motion/react-client";
import { containerVariants } from "@/lib/variants";
import { cn } from "@/lib/utils";
import HealedTattooCard from "./HealedTattooCard";
import { JetEngineZagojone } from "@/lib/jetPostTypes";
import HealedTattooHeader from "./HealedTattoHeader";

interface HealedTattooGalleryProps {
	zagojone: JetEngineZagojone[];
	className?: string;
}

const HealedTattooGallery: React.FC<HealedTattooGalleryProps> = ({
	zagojone,
	className,
}) => {
	if (!zagojone || zagojone.length === 0) {
		return (
			<motion.div
				className="text-center py-12"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<p className="paragraph-secondary text-muted-foreground">
					Brak dostępnych porównań zagojonych tatuaży
				</p>
			</motion.div>
		);
	}

	return (
		<motion.div
			className={cn("space-y-8 md:space-y-12", className)}
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			{/* Header Section */}
			<HealedTattooHeader />

			{/* Gallery Grid */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
				variants={containerVariants}
			>
				{zagojone.map((item, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<HealedTattooCard key={index} item={item} index={index} />
				))}
			</motion.div>
		</motion.div>
	);
};

export default HealedTattooGallery;
