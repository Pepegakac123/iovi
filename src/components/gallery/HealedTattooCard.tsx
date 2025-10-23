// src/components/Gallery/HealedTattooCard.tsx
import React from "react";
import * as motion from "motion/react-client";

import { cardVariants } from "@/lib/variants";
import { JetEngineZagojone } from "@/lib/jetPostTypes";
import {
	ImageComparison,
	ImageComparisonImage,
	ImageComparisonSlider,
} from "../ui/ImageComparision";

interface HealedTattooCardProps {
	item: JetEngineZagojone;
	index: number;
}

const HealedTattooCard: React.FC<HealedTattooCardProps> = ({ item, index }) => {
	return (
		<motion.div className="group flex " variants={cardVariants}>
			<div className="relative w-full">
				{/* Image Comparison Container */}
				<div className="max-h-[500px] aspect-square md:aspect-[4/5] relative">
					<ImageComparison
						enableHover
						className="h-full w-full rounded-md border-2 border-foreground"
						springOptions={{
							bounce: 0.1,
							duration: 0.8,
						}}
					>
						{/* Fresh Tattoo - Left Side */}
						<ImageComparisonImage
							src={item.meta.swiezy}
							alt={`Świeży tatuaż ${item.meta.nazwa ? `- ${item.meta.nazwa}` : item.title?.rendered ? `- ${item.title.rendered}` : ""}`}
							position="left"
						/>

						{/* Healed Tattoo - Right Side */}
						<ImageComparisonImage
							src={item.meta.zagojony}
							alt={`Zagojony tatuaż ${item.meta.nazwa ? `- ${item.meta.nazwa}` : item.title?.rendered ? `- ${item.title.rendered}` : ""}`}
							position="right"
						/>

						{/* Simple Slider like in BundUI docs */}
						<ImageComparisonSlider className="w-0.5 bg-primary/60 backdrop-blur-xs">
							<div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-2 border-foreground shadow-[2px_2px_0px_0px_var(--foreground)]" />
						</ImageComparisonSlider>
					</ImageComparison>

					{/* Labels */}
					<div className="absolute top-2 left-2 right-2 flex justify-between z-20 pointer-events-none">
						<motion.div
							className="bg-background/90 backdrop-blur-sm border-1 border-foreground px-2 py-1 rounded text-xs font-primary"
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 + 0.3 }}
						>
							Świeży
						</motion.div>
						<motion.div
							className="bg-background/90 backdrop-blur-sm border-1 border-foreground px-2 py-1 rounded text-xs font-primary"
							initial={{ opacity: 0, x: 10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 + 0.3 }}
						>
							Zagojony
						</motion.div>
					</div>
				</div>

				{/* Card Footer */}
				{(item.meta.nazwa || item.title?.rendered) && (
					<motion.div
						className="mt-4 text-center"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 + 0.4 }}
					>
						<h4 className="heading-secondary text-sm md:text-base">
							{item.meta.nazwa || item.title?.rendered}
						</h4>
					</motion.div>
				)}
			</div>
		</motion.div>
	);
};

export default HealedTattooCard;
