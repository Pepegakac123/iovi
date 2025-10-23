// src/components/servicePageComponents/ServiceDistinguishingSection.tsx

import * as motion from "motion/react-client";
import Subheadline from "../Subheadline";
import ServiceDistinguishingCard from "./ServiceDistinguishingCard";
import { containerVariants, itemVariants } from "@/lib/variants";
import { ServiceDistinguishingSectionProps } from "./servicePage";

const ServiceDistinguishingSection = ({
	title,
	subtitle,
	distinguishingItems,
	bgVariant = "dark",
}: ServiceDistinguishingSectionProps) => {
	return (
		<motion.section
			className={`w-full py-16 md:py-20 ${bgVariant === "dark" ? "bg-foreground" : "bg-background"}`}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={containerVariants}
		>
			<motion.div
				className="container flex flex-col gap-8 md:gap-12 justify-start items-start"
				variants={containerVariants}
			>
				{/* Header */}
				<div className="flex flex-col gap-6 md:gap-8">
					<motion.div variants={itemVariants}>
						<Subheadline title={subtitle} />
					</motion.div>

					<motion.h2
						className={` ${bgVariant === "dark" ? "heading-primary-inverted" : "heading-primary"} max-w-[600px]`}
						variants={itemVariants}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
					>
						{title}
					</motion.h2>
				</div>

				{/* Simple Cards Grid */}
				<div className="w-full">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full"
						variants={containerVariants}
					>
						{distinguishingItems.map((item, index) => (
							<motion.div
								key={`${item.h3}-${index}`}
								variants={itemVariants}
								whileHover={{
									y: -4,
									transition: { duration: 0.2, ease: "easeOut" },
								}}
							>
								<ServiceDistinguishingCard
									title={item.h3}
									content={item.content}
									variant={bgVariant}
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default ServiceDistinguishingSection;
