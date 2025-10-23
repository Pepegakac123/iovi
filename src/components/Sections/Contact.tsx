import Subheadline from "../Subheadline";
import ContactForm from "../forms/ContactForm";
import * as motion from "motion/react-client";
import {
	containerVariants,
	formVariants,
	itemVariants,
	stickyContentVariants,
} from "@/lib/variants";
import { ContactProps } from "@/lib/dataTypes";

const Contact = ({ title, subheadline, description }: ContactProps) => {
	return (
		<motion.div
			className="container"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<motion.div
				className="bg-transparent border-1 border-foreground rounded-md px-4 py-8 lg:py-8 lg:px-8 w-full relative"
				variants={itemVariants}
				// ✅ FIXED: Bardziej subtelna animacja container - nie koliduje z Subheadline
				whileHover={{
					boxShadow: "6px 6px 0px 0px var(--foreground)",
					// ✅ Usunięto scale - konflik z Subheadline
					transition: { duration: 0.3 },
				}}
			>
				{/* Flex layout z items-start */}
				<div className="flex flex-col lg:flex-row gap-8 lg:items-start">
					{/* Content Column - sticky content */}
					<motion.div
						className="lg:w-1/2 lg:pr-8 lg:sticky lg:top-30 self-start"
						variants={stickyContentVariants}
					>
						<div className="gap-4 flex flex-col">
							{/* ✅ FIXED: Subheadline bez dodatkowych wrapper animacji */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{
									opacity: 1,
									scale: 1,
									transition: {
										duration: 0.6,
										delay: 0.3,
										ease: "easeOut",
									},
								}}
								// ✅ Usunięto whileHover - konflikt z Subheadline hover
							>
								{/* ✅ Subheadline z wyłączonym hover bo parent container ma hover */}
								<Subheadline title={subheadline} disableHover={false} />
							</motion.div>

							{/* ✅ FIXED: Uproszczona animacja content - bez scale conflicts */}
							<motion.div
								className="flex flex-col gap-4"
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.6,
										delay: 0.5,
										ease: "easeOut",
									},
								}}
								// ✅ Usunięto whileHover ze scale - konflikt z container
								whileHover={{
									y: -2, // Tylko lekkie przesunięcie
									transition: { duration: 0.2 },
								}}
							>
								<motion.h2
									className="heading-primary max-w-[600px] capitalize"
									initial={{ opacity: 0, y: 30 }}
									animate={{
										opacity: 1,
										y: 0,
										transition: {
											duration: 0.6,
											delay: 0.7,
											ease: "easeOut",
										},
									}}
								>
									{title}
								</motion.h2>

								<motion.p
									className="paragraph-constrained"
									initial={{ opacity: 0, y: 30 }}
									animate={{
										opacity: 1,
										y: 0,
										transition: {
											duration: 0.6,
											delay: 0.9,
											ease: "easeOut",
										},
									}}
								>
									{description}
								</motion.p>
							</motion.div>
						</div>
					</motion.div>

					{/* Form Column */}
					<motion.div className="lg:w-1/2" variants={formVariants}>
						<ContactForm />
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Contact;
