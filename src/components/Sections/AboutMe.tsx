import Image from "next/image";
import Subheadline from "../Subheadline";
import * as motion from "motion/react-client";
import {
	containerVariantsLong,
	contentVariants,
	imageVariants,
	paragraphVariants,
} from "@/lib/variants";
import FloatingElements from "../FloatingElements";
import { images } from "@/lib/images";
import { AboutMeProps } from "@/lib/dataTypes";

const AboutMe = ({ title, description, image, subheadline }: AboutMeProps) => {
	return (
		<motion.div
			className="container"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={containerVariantsLong}
		>
			<motion.div
				className="bg-transparent border-1 border-foreground rounded-md px-4 pt-4 lg:py-8 lg:px-8 flex flex-col lg:flex-row gap-4 w-full lg:items-center relative overflow-hidden"
				whileHover={{
					boxShadow: "6px 6px 0px 0px var(--foreground)",
					transition: { duration: 0.3 },
				}}
				variants={contentVariants}
			>
				{/* Content Section */}
				<motion.div
					className="gap-4 flex flex-col lg:flex-1"
					variants={contentVariants}
				>
					<motion.div variants={paragraphVariants}>
						<Subheadline title={subheadline} />
					</motion.div>

					<motion.h2
						className="heading-primary"
						variants={paragraphVariants}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
					>
						{title}
					</motion.h2>
					{description.map((paragraph, index) => (
						<motion.p
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className="paragraph-base"
							variants={paragraphVariants}
						>
							{paragraph}
						</motion.p>
					))}

					{/* Mobile Image - positioned at bottom right */}
					<motion.div
						className="flex justify-end lg:hidden"
						variants={imageVariants}
					>
						<motion.div
							whileHover={{
								scale: 1.05,
								rotate: 1,
								transition: { duration: 0.3 },
							}}
							whileTap={{ scale: 0.98 }}
						>
							<Image
								src={image.src}
								alt={image.alt}
								width={189}
								height={189}
								className="object-cover rounded-md"
							/>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Desktop Image - positioned on the right side */}
				<motion.div
					className="hidden lg:flex lg:flex-1 lg:items-start lg:justify-end"
					variants={imageVariants}
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
							width={440}
							height={428}
							className="object-cover rounded-md"
						/>
					</motion.div>
				</motion.div>

				{/* Decorative floating elements - podobne do Hero */}
				<FloatingElements variant="card" />
			</motion.div>
		</motion.div>
	);
};

export default AboutMe;
