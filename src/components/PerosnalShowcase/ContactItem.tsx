// src/components/PersonalShowcase/ContactItem.tsx
import Image from "next/image";
import * as motion from "motion/react-client";
import { cardVariants } from "@/lib/variants";
import { ContactItemProps } from "@/lib/dataTypes";

// ===========================================
// CONTACT ITEM COMPONENT
// ===========================================

const ContactItem = ({ contact, index }: ContactItemProps) => {
	const content = (
		<motion.div
			className="flex items-center gap-3 p-3 bg-background border-2 border-foreground rounded-md hover:bg-muted transition-colors"
			variants={cardVariants}
			custom={index}
			whileHover={{
				scale: 1.02,
				boxShadow: "3px 3px 0px 0px var(--accent)",
				translateX: -1,
				translateY: -1,
			}}
		>
			<Image
				src={contact.icon}
				alt={`${contact.type} icon`}
				width={20}
				height={20}
				className="w-5 h-5 flex-shrink-0"
			/>
			<span className="text-sm font-primary text-foreground truncate">
				{contact.value}
			</span>
		</motion.div>
	);

	if (contact.href) {
		return (
			<a
				href={contact.href}
				target="_blank"
				rel="noopener noreferrer"
				className="block"
			>
				{content}
			</a>
		);
	}

	return content;
};

export default ContactItem;
