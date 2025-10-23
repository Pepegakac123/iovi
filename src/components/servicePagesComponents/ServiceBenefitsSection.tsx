// src/components/servicePageComponents/ServiceBenefitsSection.tsx

import Image from "next/image";
import * as motion from "motion/react-client";
import Subheadline from "../Subheadline";
import ServiceBenefitsCard from "./ServiceBenefitsCard";
import { containerVariants, itemVariants, gridVariants } from "@/lib/variants";
import { ServiceBenefitsSectionProps } from "./servicePage";

const ServiceBenefitsSection = ({
	title,
	subtitle,
	benefits,
	image,
}: ServiceBenefitsSectionProps) => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={containerVariants}
		>
			<div className="container">
				{/* Header Section */}
				<div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-16 items-start">
					<motion.div variants={itemVariants}>
						<Subheadline title={subtitle} />
					</motion.div>

					<motion.h2
						className="heading-primary max-w-2xl"
						variants={itemVariants}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
					>
						{title}
					</motion.h2>
				</div>

				{/* Content Layout - Cards po lewej, sticky obraz po prawej */}
				<div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:items-start">
					{/* Benefits Cards - lewa strona */}
					<motion.div className="lg:w-1/2 lg:pr-8" variants={containerVariants}>
						<motion.div
							className="grid grid-cols-1 gap-6 md:gap-8"
							variants={gridVariants}
						>
							{benefits.map((benefit, index) => (
								<motion.div
									key={`benefit-${benefit.h3}-${index}`}
									variants={itemVariants}
									whileHover={{
										y: -4,
										transition: { duration: 0.2, ease: "easeOut" },
									}}
								>
									<ServiceBenefitsCard
										title={benefit.h3}
										description={benefit.description}
										ikona={benefit.ikona}
									/>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Sticky Image - prawa strona */}
					<motion.div
						className="lg:w-1/2 lg:sticky lg:top-[120px] lg:self-start"
						variants={itemVariants}
					>
						<motion.div
							className="relative w-full rounded-md overflow-hidden group max-h-[500px]"
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.4 },
							}}
							style={{ aspectRatio: "3/4", maxHeight: "500px" }}
						>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-105"
								sizes="(max-width: 1024px) 100vw, 828px"
								loading="lazy"
								quality={95}
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default ServiceBenefitsSection;
