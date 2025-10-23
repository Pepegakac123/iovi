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
} from "@/lib/variants";
import FloatingElements from "../FloatingElements";
import { images } from "@/lib/images";
import { FaqProps } from "@/lib/dataTypes";

const Faq = ({ subheadline, questions }: FaqProps) => {
	return (
		<motion.div
			className="container"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={containerVariants}
		>
			<motion.div
				className="bg-transparent border-1 border-foreground rounded-md px-4 py-4 lg:py-8 lg:px-8 flex flex-col lg:flex-row gap-6 lg:gap-8 w-full relative overflow-hidden"
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
					<Subheadline title="FAQ" />
					<Accordion type="single" collapsible className="w-full">
						{questions.map((item) => {
							return (
								<AccordionItem value={item.question} key={item.id}>
									<AccordionTrigger>{item.question}</AccordionTrigger>
									<AccordionContent>{item.answer}</AccordionContent>
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
						whileHover={{
							scale: 1.03,
							transition: { duration: 0.4 },
						}}
						whileTap={{ scale: 0.98 }}
						className="relative"
					>
						<Image
							src={images.bab_stoi.src}
							alt={images.bab_stoi.alt}
							width={380}
							height={380}
							className="object-cover rounded-md max-w-[380px] h-auto"
							sizes="380px"
						/>
					</motion.div>
				</motion.div>

				{/* Decorative floating elements */}
				<FloatingElements variant="card" />
			</motion.div>
		</motion.div>
	);
};

export default Faq;
