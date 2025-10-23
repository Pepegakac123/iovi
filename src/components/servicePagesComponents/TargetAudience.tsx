import Image from "next/image";
import * as motion from "motion/react-client";
import {
	containerVariants,
	imageVariantsRight,
	itemVariants,
} from "@/lib/variants";
import { ServiceTargetAudienceSectionProps } from "./servicePage";
import Subheadline from "../Subheadline";

const TargetAudience = ({
	title,
	subtitle,
	targetAudienceDsc,
	image,
}: ServiceTargetAudienceSectionProps) => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={containerVariants}
		>
			<motion.div
				className="container flex flex-col gap-8 md:gap-16"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				variants={containerVariants}
			>
				{/* Header Section - Subheadline i H2 osobno */}
				<div className="flex flex-col gap-6 md:gap-8">
					<Subheadline title={subtitle} />
					<motion.h2
						className="heading-primary"
						variants={itemVariants}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
					>
						{title}
					</motion.h2>
				</div>

				{/* Content Section - Paragraphs + Image razem */}
				<motion.div
					className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center"
					variants={containerVariants}
				>
					{/* Paragraphs Section */}
					<motion.div
						className="flex flex-col gap-8 flex-1 lg:w-1/2 lg:pr-8"
						variants={containerVariants}
					>
						{targetAudienceDsc.map((item, index) => (
							<motion.div
								key={item.h3}
								className="flex flex-col gap-2"
								variants={itemVariants}
								whileHover={{
									scale: 1.02,
									y: -2,
									transition: { duration: 0.2 },
								}}
							>
								<motion.h3 className="heading-secondary">{item.h3}</motion.h3>
								<motion.p className="paragraph-secondary">
									{item.content}
								</motion.p>
							</motion.div>
						))}
					</motion.div>

					{/* Image Section - wyśrodkowany względem paragrafów */}
					<motion.div
						className="flex justify-center items-center w-full lg:flex-1"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.6,
								ease: "easeOut",
							},
						}}
						viewport={{ once: true }}
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
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default TargetAudience;
