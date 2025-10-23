import ProcessCard from "../ProcessCard";
import Subheadline from "../Subheadline";
import * as motion from "motion/react-client";
import {
	cardVariants,
	containerVariants,
	descriptionVariants,
	gridVariants,
	headerVariants,
	titleVariants,
} from "@/lib/variants";
import { Proces, ProcessSectionProps } from "@/lib/dataTypes";

const Process = ({
	subheadline,
	title,
	description,
	proces,
}: ProcessSectionProps) => {
	return (
		<motion.div
			className="container flex flex-col gap-12 md:gap-14"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
		>
			{/* Header Section */}
			<motion.div
				className="flex flex-col gap-6 md:gap-8"
				variants={headerVariants}
			>
				{/* Animated Subheadline */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<Subheadline title={subheadline} />
				</motion.div>

				{/* Content */}
				<div className="flex flex-col gap-2 md:gap-4">
					{/* Animated Title */}
					<motion.h2
						className="heading-primary"
						variants={titleVariants}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
					>
						{title}
					</motion.h2>

					{/* Animated Description */}
					<motion.p
						className="paragraph-constrained"
						variants={descriptionVariants}
					>
						{description}
					</motion.p>
				</div>
			</motion.div>

			{/* Animated Grid */}
			<motion.div
				className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch"
				variants={gridVariants}
			>
				{proces.map((item, index) => (
					<motion.div
						key={item.id}
						variants={cardVariants}
						whileHover={{
							y: -8,
							transition: { duration: 0.2, ease: "easeOut" },
						}}
						style={
							{
								// Dodatkowy delay dla różnorodności
								"--motion-delay": `${index * 0.1}s`,
							} as React.CSSProperties
						}
					>
						<ProcessCard {...item} />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Process;
