import { JetEngineUsluga } from "@/lib/jetPostTypes";
import Image from "next/image";
import * as motion from "motion/react-client";
import CardBtn from "./buttons/CardBtn";
import { cardVariantsFast } from "@/lib/variants";

const ServicesCard = ({
	service,
}: {
	service: JetEngineUsluga & {
		imageWithAlt: {
			src: string;
			alt: string;
		};
	};
}) => {
	return (
		<motion.div
			key={service.id}
			className="w-full h-full  bg-background border-2 border-foreground rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
			variants={cardVariantsFast}
			whileHover={{
				scale: 1.02,
				y: -4,
				boxShadow: "6px 6px 0px 0px var(--foreground)",
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
		>
			<div className="w-full h-[200px] relative overflow-hidden group">
				<Image
					src={service.imageWithAlt.src}
					alt={service.imageWithAlt.alt}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>

			{/* Content container */}
			<motion.div
				className="p-4 flex flex-col gap-4 h-[calc(100%-200px)] min-h-[250px]"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.1, duration: 0.4 }}
			>
				<motion.h2
					className="heading-secondary"
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.3 }}
				>
					{service.title.rendered}
				</motion.h2>

				<motion.p
					className="paragraph-small-muted flex-grow leading-relaxed"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3, duration: 0.4 }}
				>
					{service.meta.hero_intro ||
						"Profesjonalne wykonanie tatuaży w najwyższej jakości. Każdy projekt to unikalna realizacja dostosowana do Twoich potrzeb."}
				</motion.p>
				<CardBtn text="Zobacz Więcej" slug={service.slug} />
			</motion.div>
		</motion.div>
	);
};
export default ServicesCard;
