// src/components/contact/ContactInfo.tsx
import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import {
	studioContactData,
	socialContactData,
	type ContactInfoType,
} from "@/lib/contactData";
import { containerVariants, cardVariants, itemVariants } from "@/lib/variants";

// ===========================================
// TYPES
// ===========================================

interface ContactInfoProps {
	className?: string;
}

interface ContactItemProps {
	contact: ContactInfoType;
	index: number;
}

// ===========================================
// CONTACT ITEM COMPONENT
// ===========================================

const ContactItem: React.FC<ContactItemProps> = ({ contact, index }) => {
	const isClickable = !!contact.href;

	const content = (
		<motion.div
			className="bg-background border-2 border-foreground rounded-md p-4 md:p-6 hover:bg-muted transition-colors"
			variants={cardVariants}
			whileHover={{
				scale: 1.02,
				y: -2,
				boxShadow: "4px 4px 0px 0px var(--accent)",
				transition: { duration: 0.3, ease: "easeInOut" },
			}}
			whileTap={isClickable ? { scale: 0.98 } : {}}
		>
			<div className="flex items-center gap-4">
				{/* Icon */}
				<motion.div
					className="flex-shrink-0"
					initial={{ scale: 0, rotate: -180 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{
						duration: 0.5,
						delay: index * 0.1,
						ease: "easeOut",
					}}
				>
					<Image
						src={contact.icon}
						alt={`${contact.label} ikona`}
						width={32}
						height={32}
						className="w-8 h-8"
					/>
				</motion.div>

				{/* Content */}
				<div className="flex-1 min-w-0">
					<motion.h3
						className="heading-secondary text-base md:text-lg mb-1"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.6,
							delay: index * 0.1 + 0.2,
						}}
					>
						{contact.label}
					</motion.h3>
					<motion.p
						className="paragraph-secondary text-sm md:text-base break-words"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.6,
							delay: index * 0.1 + 0.3,
						}}
					>
						{contact.value}
					</motion.p>
				</div>

				{/* External Link Indicator */}
				{isClickable && (
					<motion.div
						className="flex-shrink-0 text-primary"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.4,
							delay: index * 0.1 + 0.4,
						}}
					>
						{/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</motion.div>
				)}
			</div>
		</motion.div>
	);

	// Wrap in link if href exists
	if (isClickable) {
		return (
			<motion.a
				href={contact.href}
				{...(contact.isExternal
					? {
							target: "_blank",
							rel: "noopener noreferrer",
						}
					: {})}
				className="block group"
				whileHover={{ scale: 1.01 }}
			>
				{content}
			</motion.a>
		);
	}

	return content;
};

// ===========================================
// MAIN CONTACT INFO COMPONENT
// ===========================================

const ContactInfo: React.FC<ContactInfoProps> = ({ className = "" }) => {
	return (
		<motion.div
			className={`space-y-6 ${className}`}
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
		>
			{/* Header */}
			<motion.div variants={itemVariants}>
				<motion.h2
					className="heading-primary mb-2"
					whileHover={{ scale: 1.02 }}
				>
					Gotowy na pierwszą rozmowę?
				</motion.h2>
				<motion.p className="paragraph-secondary">
					Najszybciej odpisuję na instagramie.
				</motion.p>
			</motion.div>

			{/* Studio Contact Items */}
			<motion.div className="space-y-4" variants={itemVariants}>
				{studioContactData.map((contact, index) => (
					<ContactItem
						key={`${contact.type}-${index}`}
						contact={contact}
						index={index}
					/>
				))}
			</motion.div>

			{/* Social Media Section */}
			<motion.div variants={itemVariants} className="pt-4">
				<motion.h3
					className="heading-secondary-large mb-4"
					whileHover={{ scale: 1.02 }}
				>
					Social Media
				</motion.h3>
				<div className="space-y-3">
					{socialContactData.map((contact, index) => (
						<ContactItem
							key={`social-${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								index
							}`}
							contact={contact}
							index={index + studioContactData.length}
						/>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ContactInfo;
