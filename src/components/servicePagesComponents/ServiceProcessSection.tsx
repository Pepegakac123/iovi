// src/components/servicePageComponents/ServiceProcessSection.tsx

import Image from "next/image";
import * as motion from "motion/react-client";
import Subheadline from "../Subheadline";
import ServiceProcessCard from "./ServiceProcessCard";
import { containerVariants, itemVariants, gridVariants } from "@/lib/variants";
import { ServiceProcessSectionProps } from "./servicePage";
import PrimaryBtn from "../buttons/PrimaryBtn";

const ServiceProcessSection = ({
	title,
	subtitle,
	processSteps,
}: ServiceProcessSectionProps) => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={containerVariants}
		>
			<div className="container flex flex-col gap-4 md:gap-8">
				{/* Header Section */}
				<div className="flex flex-col gap-4 items-start">
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
					{/* Process Cards - lewa strona */}
					<motion.div className="w-full" variants={containerVariants}>
						<motion.div
							className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
							variants={gridVariants}
						>
							{processSteps.map((step, index) => (
								<motion.div
									key={`step-${step.number}-${index}`}
									variants={itemVariants}
									whileHover={{
										y: -4,
										transition: { duration: 0.2, ease: "easeOut" },
									}}
								>
									<ServiceProcessCard
										number={step.number}
										title={step.title}
										description={step.description}
									/>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
				<div className="flex justify-center items-center">
					<PrimaryBtn />
				</div>
			</div>
		</motion.section>
	);
};

export default ServiceProcessSection;
