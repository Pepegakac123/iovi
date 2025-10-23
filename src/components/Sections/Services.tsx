import SecondaryBtn from "../buttons/SecondaryBtn";
import Subheadline from "../Subheadline";
import * as motion from "motion/react-client";
import ServicesCard from "../ServicesCard";
import { containerVariants, itemVariants } from "@/lib/variants";
import { getServicesWithAltText } from "@/lib/jetApi";
import { ServicesProps } from "@/lib/dataTypes";

const Services = async ({
	servicesType,
	title,
	subheadline,
	description,
}: ServicesProps) => {
	const services = await getServicesWithAltText(servicesType);

	return (
		<motion.div
			className="container flex flex-col gap-4 md:gap-8 justify-center items-center"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			variants={containerVariants}
		>
			<motion.div variants={itemVariants}>
				<Subheadline title={subheadline} />
			</motion.div>

			<motion.h2
				className="heading-primary-inverted-center"
				variants={itemVariants}
				whileHover={{
					scale: 1.02,
					transition: { duration: 0.2 },
				}}
			>
				{title}
			</motion.h2>

			<motion.p
				className="paragraph-center-small-constrained"
				variants={itemVariants}
			>
				{description}
			</motion.p>

			{/* Cards container - tylko ten kontener ma 80% szerokości */}
			<div className="w-[100%] max-w-[1200px] flex justify-center">
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch"
					variants={containerVariants}
				>
					{services.map((service) => (
						<motion.div
							key={service.id}
							variants={itemVariants}
							whileHover={{
								y: -4,
								transition: { duration: 0.2, ease: "easeOut" },
							}}
						>
							<ServicesCard service={service} />
						</motion.div>
					))}
				</motion.div>
			</div>

			<motion.div
				variants={itemVariants}
				whileInView="visible"
				viewport={{ once: true }}
			>
				<div className="mt-8">
					<SecondaryBtn
						text="Zobacz wszystkie rodzaje tatuaży"
						link="/uslugi"
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
