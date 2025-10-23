import Image from "next/image";
import * as motion from "motion/react-client";
import {
	containerVariants,
	imageVariantsRight,
	itemVariants,
} from "@/lib/variants";
import { TargetAudienceSectionProps } from "@/lib/dataTypes";

const TargetAudienceSection = ({
	title,
	targetAudienceDsc,
	image,
}: TargetAudienceSectionProps) => {
	return (
		<motion.div
			className="container flex flex-col lg:flex-row gap-8 md:gap-12 items-start lg:items-center relative"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={containerVariants}
		>
			<motion.div
				className="flex flex-col gap-8 md:gap-14"
				variants={itemVariants}
			>
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

				<motion.div
					className="flex flex-col gap-8"
					variants={containerVariants}
				>
					{targetAudienceDsc.map((item, index) => (
						<motion.div
							key={item.title}
							className="flex flex-col gap-2"
							variants={itemVariants}
							whileHover={{
								scale: 1.02,
								y: -2,
								transition: { duration: 0.2 },
							}}
						>
							<motion.h3 className="heading-secondary">{item.title}</motion.h3>
							<motion.p className="paragraph-secondary">
								{item.description}
							</motion.p>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			<motion.div
				className="w-full justify-center flex lg:justify-end"
				variants={imageVariantsRight}
			>
				<motion.div
					whileHover={{
						scale: 1.03,
						rotate: -1,
						transition: { duration: 0.4 },
					}}
					whileTap={{ scale: 0.98 }}
				>
					<Image
						src={image.src}
						alt={image.alt}
						width={600}
						height={400}
						className="object-cover rounded-md"
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default TargetAudienceSection;
