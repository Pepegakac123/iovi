import Subheadline from "../Subheadline";
import ContactForm from "../forms/ContactForm";
import * as motion from "motion/react-client";
import {
	containerVariants,
	formVariants,
	itemVariants,
	stickyContentVariants,
} from "@/lib/variants";
import { ServiceCtaSectionProps } from "./servicePage";

const ServiceCta = ({ title, subtitle, ctaItems }: ServiceCtaSectionProps) => {
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
				animate="visible"
				variants={containerVariants}
			>
				<motion.div
					className="bg-transparent border-1 border-foreground rounded-md px-4 py-8 lg:py-8 lg:px-8 w-full relative transition-shadow duration-300 flex flex-col gap-12 md:gap-16"
					variants={itemVariants}
					whileHover={{
						boxShadow: "6px 6px 0px 0px var(--foreground)",
						scale: 1.01,
						transition: { duration: 0.2 },
					}}
				>
					{/* Header Section - Nagłówek i podtytuł */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.6,
								delay: 0.2,
								ease: "easeOut",
							},
						}}
					>
						<div className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left">
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
							>
								<Subheadline title={subtitle} />
							</motion.div>

							<motion.h2
								className="heading-primary max-w-[600px] capitalize mx-auto lg:mx-0"
								initial={{ opacity: 0, y: 30 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.8,
										delay: 0.4,
										ease: "easeOut",
									},
								}}
							>
								{title}
							</motion.h2>
						</div>
					</motion.div>

					{/* Content i Form Section */}
					<div className="flex flex-col lg:flex-row gap-8 lg:items-start">
						{/* Content Column - ctaItems */}
						<motion.div
							className="lg:w-1/2 lg:pr-8 lg:sticky lg:top-30 self-start"
							variants={stickyContentVariants}
						>
							<motion.div
								className="flex flex-col gap-8"
								variants={containerVariants}
								initial={{ opacity: 0, x: -30 }}
								animate={{
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.6,
										delay: 0.5,
										ease: "easeOut",
									},
								}}
							>
								{ctaItems.map((item, index) => (
									<motion.div
										key={item.h3}
										className="flex flex-col gap-2"
										initial={{ opacity: 0, y: 20 }}
										animate={{
											opacity: 1,
											y: 0,
											transition: {
												duration: 0.5,
												delay: 0.6 + index * 0.1,
												ease: "easeOut",
											},
										}}
									>
										<motion.h3 className="heading-secondary">
											{item.h3}
										</motion.h3>
										<motion.p className="paragraph-secondary">
											{item.content}
										</motion.p>
									</motion.div>
								))}
							</motion.div>
						</motion.div>

						{/* Form Section */}
						<motion.div
							className="lg:w-1/2 lg:flex-shrink-0"
							variants={formVariants}
						>
							<motion.div
								initial={{ opacity: 0, scale: 0.9, x: 30 }}
								animate={{
									opacity: 1,
									scale: 1,
									x: 0,
									transition: {
										duration: 0.8,
										delay: 0.6,
										ease: "easeOut",
									},
								}}
							>
								<ContactForm />
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default ServiceCta;
