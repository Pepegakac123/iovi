// src/components/servicePagesComponents/ServiceSectionHero.tsx - Hero dla stron usługowych z tłem-zdjęciem

import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import Subheadline from "@/components/Subheadline";
import FloatingElements from "@/components/FloatingElements";
import {
	containerVariants,
	titleVariants,
	descriptionVariants,
} from "@/lib/variants";
import { ServiceSectionHeroProps } from "./servicePage";

// ===========================================
// SERVICE SECTION HERO COMPONENT
// ===========================================

const ServiceSectionHero: React.FC<ServiceSectionHeroProps> = ({
	subTitle,
	title,
	description,
	image,
	className = "",
}) => {
	return (
		<motion.section
			className={`w-full bg-background py-4 md:py-8 ${className}`}
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			{/* Container podobny do oryginalnego SectionHero */}
			<motion.div
				className="max-w-[1440px] w-full mx-auto flex justify-center"
				variants={containerVariants}
			>
				<motion.div
					className="w-full gap-4 md:gap-6 flex flex-col items-center justify-center border-1 border-b-4 border-r-4 border-foreground rounded-md overflow-hidden p-4 md:p-6 relative min-h-[650px]"
					initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
					animate={{ opacity: 1, scale: 1, rotateX: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					whileHover={{
						boxShadow: "4px 4px 0px 0px var(--foreground)",
						transition: { duration: 0.3 },
					}}
				>
					{/* Background Image */}
					<div className="absolute inset-0 z-0">
						<Image
							fill
							src={image.src}
							alt={image.alt}
							priority={true}
							loading="eager"
							quality={65} // ← Zmniejsz z 90 na 65
							sizes="(max-width: 768px) 100vw, (max-width: 1024px) 1024px, 1200px"
							className="object-cover"
							fetchPriority="high"
							decoding="async" // ← Dodaj to
							placeholder="blur" // ← Dodaj blur placeholder
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
						/>
						{/* Overlay - delikatny czarny gradient liniowy 120 stopni */}
						<div
							className="absolute inset-0"
							style={{
								backgroundImage:
									"linear-gradient(120deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.1) 100%)",
							}}
						/>
					</div>

					{/* Content Section z wyższym z-index */}
					<motion.div
						className="flex flex-col gap-3 md:gap-4 items-center text-center z-10 relative max-w-4xl"
						variants={containerVariants}
					>
						{/* Subheadline */}
						<motion.div variants={titleVariants}>
							<Subheadline title={subTitle} />
						</motion.div>

						{/* Main Title */}
						<motion.h1
							className="font-primary text-2xl sm:text-4xl lg:text-6xl text-background text-center leading-normal"
							variants={titleVariants}
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.2 },
							}}
						>
							{title}
						</motion.h1>

						{/* Description */}
						<motion.p
							className="paragraph-hero-inverted text-center max-w-[800px]"
							variants={descriptionVariants}
						>
							{description}
						</motion.p>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default ServiceSectionHero;
