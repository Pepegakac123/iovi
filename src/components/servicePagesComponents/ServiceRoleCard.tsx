// ================================================================
// SERVICE ROLE CARD COMPONENT
// ================================================================
import { cardVariantsFast } from "@/lib/variants";
import * as motion from "motion/react-client";
import Image from "next/image";
interface ServiceRoleCardProps {
	title: string;
	content: string;
	image: {
		src: string;
		alt: string;
	};
}

const ServiceRoleCard = ({ title, content, image }: ServiceRoleCardProps) => {
	return (
		<motion.div
			className="w-full h-full bg-background border-2 border-accent rounded-md overflow-hidden group cursor-default"
			variants={cardVariantsFast}
			whileHover={{
				scale: 1.02,
				boxShadow: "6px 6px 0px 0px var(--accent)",
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
		>
			{/* Image Section */}
			<div className="w-full h-[250px] md:h-[300px] relative overflow-hidden">
				<motion.div
					className="relative w-full h-full"
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.4, ease: "easeOut" },
					}}
				>
					<Image
						src={image.src}
						alt={image.alt}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-105"
						sizes="(max-width: 1024px) 100vw, 828px"
						loading="lazy"
						quality={95}
					/>
				</motion.div>
			</div>

			{/* Content Section */}
			<motion.div
				className="p-6 md:p-8 flex flex-col gap-4"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.1, duration: 0.4 }}
			>
				<motion.h3
					className="heading-secondary"
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.3 }}
				>
					{title}
				</motion.h3>

				<motion.p
					className="paragraph-secondary leading-relaxed"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.4 }}
				>
					{content}
				</motion.p>
			</motion.div>
		</motion.div>
	);
};

export default ServiceRoleCard;
