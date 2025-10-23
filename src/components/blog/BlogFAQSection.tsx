// src/components/blog/BlogFAQSection.tsx

import * as motion from "motion/react-client";
import { HelpCircle } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { itemVariants } from "@/lib/variants";

interface BlogFAQItem {
	pytanie: string;
	odpowiedz: string;
}

interface BlogFAQSectionProps {
	faq: BlogFAQItem[];
}

const BlogFAQSection: React.FC<BlogFAQSectionProps> = ({ faq }) => {
	if (!faq || faq.length === 0) {
		return null;
	}

	return (
		<motion.div
			className="bg-background border-2 border-accent rounded-md p-6 md:p-8"
			variants={itemVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			whileHover={{
				boxShadow: "4px 4px 0px 0px var(--accent)",
				transition: { duration: 0.2 },
			}}
		>
			{/* FAQ Header */}
			<motion.div
				className="flex items-center gap-3 mb-8"
				variants={itemVariants}
			>
				<HelpCircle className="w-6 h-6 text-primary" />
				<h2 className="heading-secondary">Często zadawane pytania</h2>
			</motion.div>

			{/* FAQ Accordion */}
			<Accordion type="single" collapsible className="w-full">
				{faq.map((item, index) => (
					<AccordionItem value={item.pytanie} key={`faq-${item.pytanie}`}>
						<AccordionTrigger className="text-left">
							{item.pytanie}
						</AccordionTrigger>
						<AccordionContent className="paragraph-secondary leading-relaxed">
							{item.odpowiedz}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</motion.div>
	);
};

export default BlogFAQSection;
