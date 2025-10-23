// src/components/servicePageComponents/ServiceRoleSection.tsx

import * as motion from "motion/react-client";
import Subheadline from "../Subheadline";
import { containerVariants, itemVariants } from "@/lib/variants";
import { ServiceRoleSectionProps } from "./servicePage";
import ServiceRoleCard from "./ServiceRoleCard";
import PrimaryBtn from "../buttons/PrimaryBtn";

const ServiceRoleSection = ({
	title,
	subtitle,
	roleItems,
	images,
}: ServiceRoleSectionProps) => {
	return (
		<motion.section
			className="bg-foreground"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={containerVariants}
		>
			<motion.div
				className="container flex flex-col gap-8 md:gap-12 justify-center items-center"
				variants={containerVariants}
			>
				{/* Header Section */}
				<div className="flex flex-col gap-6 md:gap-8 text-center items-center w-full">
					<motion.div variants={itemVariants}>
						<Subheadline title={subtitle} />
					</motion.div>

					<motion.h2
						className="heading-primary-inverted-center"
						variants={itemVariants}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
					>
						{title}
					</motion.h2>
				</div>

				{/* Cards Grid */}
				<div className="w-full max-w-[1100px] flex justify-center">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full"
						variants={containerVariants}
					>
						{roleItems.map((item, index) => {
							const imageIndex = index % images.length;
							const image = images[imageIndex];

							return (
								<motion.div
									key={`${item.h3}-${index}`}
									variants={itemVariants}
									whileHover={{
										y: -4,
										transition: { duration: 0.2, ease: "easeOut" },
									}}
								>
									<ServiceRoleCard
										title={item.h3}
										content={item.content}
										image={image}
									/>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
				<PrimaryBtn />
			</motion.div>
		</motion.section>
	);
};
export default ServiceRoleSection;
