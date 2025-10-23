import Image from "next/image";
import Subheadline from "../Subheadline";
import * as motion from "motion/react-client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	containerVariants,
	contentVariants,
	imageVariants,
	itemVariants,
} from "@/lib/variants";
import FloatingElements from "../FloatingElements";
import { ServiceWhyMeSectionProps } from "./servicePage";

const ServiceWhyMeSection = ({
	title,
	subtitle,
	whyMeItems,
	image,
}: ServiceWhyMeSectionProps) => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={containerVariants}
		>
			<motion.div
				className="container"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={containerVariants}
			>
				<motion.div
					className="bg-transparent border-1 border-foreground rounded-md px-4 py-4 lg:py-8 lg:px-8 flex flex-col lg:flex-row gap-6 lg:gap-12 w-full relative overflow-hidden"
					whileHover={{
						boxShadow: "6px 6px 0px 0px var(--foreground)",
						transition: { duration: 0.3 },
					}}
					variants={contentVariants}
				>
					{/* ✅ FAQ SEKCJA - 50% szerokości */}
					<motion.div
						className="flex flex-col gap-4 lg:gap-6 lg:flex-1"
						variants={contentVariants}
					>
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
						<Accordion type="single" collapsible className="w-full">
							{whyMeItems.map((item) => {
								return (
									<AccordionItem value={item.h3} key={item.h3}>
										<AccordionTrigger>{item.h3}</AccordionTrigger>
										<AccordionContent>{item.content}</AccordionContent>
									</AccordionItem>
								);
							})}
						</Accordion>
					</motion.div>

					{/* ✅ KONTENER ZDJĘCIA - 50% szerokości, zdjęcie wyrównane do prawej */}
					<motion.div
						className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end"
						variants={imageVariants}
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

					{/* Decorative floating elements */}
					<FloatingElements variant="card" />
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default ServiceWhyMeSection;
