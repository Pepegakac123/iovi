// src/components/servicePageComponents/ServiceProcessCard.tsx

import Image from "next/image";
import * as motion from "motion/react-client";
import { cardVariantsProcess, contentVariants } from "@/lib/variants";
import { images } from "@/lib/images";

interface ServiceProcessCardProps {
	number: string;
	title: string;
	description: string;
}

const ServiceProcessCard = ({
	number,
	title,
	description,
}: ServiceProcessCardProps) => {
	return (
		<motion.div
			className="w-full h-full flex flex-col relative bg-background border-2 border-foreground border-b-4 border-r-4 rounded-md overflow-hidden group cursor-default"
			variants={cardVariantsProcess}
			whileHover={{
				scale: 1.02,
				y: -4,
				boxShadow: "6px 6px 0px 0px var(--foreground)",
				transition: { duration: 0.2, ease: "easeOut" },
			}}
			whileTap={{
				scale: 0.98,
				transition: { duration: 0.1 },
			}}
		>
			{/* Background Image - jednolity dla wszystkich kart */}
			<div className="absolute inset-0 w-full h-full overflow-hidden">
				<motion.div
					className="absolute inset-0"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.4, ease: "easeOut" }}
				>
					<Image
						src={images.plain_proces_card.src}
						alt="Tło karty procesu"
						fill
						className="object-cover object-right"
						sizes="(max-width: 1024px) 100vw, 50vw"
					/>
				</motion.div>
			</div>

			{/* Content */}
			<div className="relative z-10 flex flex-col p-4 md:p-8 ">
				{/* Number Badge */}
				<motion.div
					className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex-shrink-0"
					initial={{ scale: 0.8, rotate: -10 }}
					whileInView={{ scale: 1, rotate: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					whileHover={{
						scale: 1.1,
						rotate: 5,
						transition: { duration: 0.2 },
					}}
				>
					<motion.div
						className="w-full h-full bg-muted border-1 border-foreground rounded-full flex items-center justify-center"
						whileHover={{
							boxShadow: "4px 4px 0px 0px var(--foreground)",
							translateX: -2,
							translateY: -2,
							transition: { duration: 0.2 },
						}}
					>
						<motion.span
							className="text-lg md:text-2xl font-primary text-foreground"
							whileHover={{ scale: 1.2 }}
							transition={{ duration: 0.2 }}
						>
							{number}
						</motion.span>
					</motion.div>
				</motion.div>

				{/* Content */}
				<motion.div variants={contentVariants}>
					{/* Title */}
					<motion.h3
						className="heading-secondary-large mb-3 md:mb-4 leading-tight"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.4 }}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.2 },
						}}
					>
						{title}
					</motion.h3>

					{/* Description */}
					<motion.p
						className="paragraph-process"
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.5 }}
					>
						{description}
					</motion.p>
				</motion.div>
			</div>

			{/* Hover indicator */}
			<motion.div
				className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"
				initial={{ scaleX: 0 }}
				whileHover={{
					scaleX: 1,
					transition: { duration: 0.3, ease: "easeOut" },
				}}
				style={{ transformOrigin: "left" }}
			/>
		</motion.div>
	);
};

export default ServiceProcessCard;
