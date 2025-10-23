import Image from "next/image";
import * as motion from "motion/react-client";
import {
	cardVariantsProcess,
	contentVariants,
	iconVariantsSimple,
} from "@/lib/variants";

interface ProcessCardProps {
	id: number;
	icon: string;
	bg_image: {
		mobile: string;
		desktop: string;
		alt: string;
	};
	title: string;
	description: string;
}

const ProcessCard = ({
	id,
	icon,
	bg_image,
	title,
	description,
}: ProcessCardProps) => {
	return (
		<motion.div
			className="w-full h-full flex flex-col relative bg-background border-2 border-foreground border-b-4 border-r-4 rounded-md overflow-hidden group cursor-default"
			variants={cardVariantsProcess}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
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
			{/* Background Image */}
			<div className="absolute inset-0 w-full h-full overflow-hidden">
				{/* Mobile Background */}
				<motion.div
					className="absolute inset-0 lg:hidden"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.4, ease: "easeOut" }}
				>
					<Image
						src={bg_image.mobile}
						alt={bg_image.alt}
						fill
						className="object-cover object-right"
						sizes="(max-width: 1024px) 100vw, 50vw"
					/>
				</motion.div>

				{/* Desktop Background */}
				<motion.div
					className="absolute inset-0 hidden lg:block"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.4, ease: "easeOut" }}
				>
					<Image
						src={bg_image.desktop}
						alt={bg_image.alt}
						fill
						className="object-cover object-right"
						sizes="(max-width: 1024px) 100vw, 50vw"
					/>
				</motion.div>
			</div>

			{/* Animated overlay for text readability */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"
				initial={{ opacity: 0.8 }}
				whileHover={{
					opacity: 0.9,
					transition: { duration: 0.3 },
				}}
			/>

			{/* Content */}
			<div className="relative z-10 flex flex-col p-4 md:p-8 max-w-[65%]">
				{/* Animated Icon */}
				<motion.div
					className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex-shrink-0"
					variants={iconVariantsSimple}
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
						<motion.div
							whileHover={{ scale: 1.2 }}
							transition={{ duration: 0.2 }}
						>
							<Image
								src={icon}
								alt={`${title} - ikona`}
								width={24}
								height={24}
								className="w-6 h-6 md:w-8 md:h-8"
							/>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Animated Content */}
				<motion.div variants={contentVariants}>
					{/* Animated Title */}
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

					{/* Animated Description */}
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

			{/* Subtle hover indicator */}
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

export default ProcessCard;
