// src/components/blog/BlogContent.tsx

import * as motion from "motion/react-client";
import { containerVariants, itemVariants } from "@/lib/variants";
import Image from "next/image";
import { getImageWithAltText } from "@/lib/jetApi";

interface BlogContentProps {
	image: string;
	content: string;
}

const BlogContent: React.FC<BlogContentProps> = async ({ content, image }) => {
	console.log(image);
	const imageWithAlt = await getImageWithAltText(image);
	console.log(imageWithAlt);
	return (
		<motion.div
			className="bg-primary-foreground border-2 border-foreground rounded-md p-6 md:p-8 lg:p-12"
			variants={itemVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			whileHover={{
				boxShadow: "4px 4px 0px 0px var(--foreground)",
				transition: { duration: 0.2 },
			}}
		>
			<motion.div
				className="relative w-full rounded-md overflow-hidden group max-h-[500px]"
				whileHover={{
					scale: 1.02,
					transition: { duration: 0.4 },
				}}
				style={{ aspectRatio: "3/4", maxHeight: "400px" }}
			>
				<Image
					src={imageWithAlt.src}
					alt={imageWithAlt.alt}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(max-width: 1024px) 100vw, 828px"
					loading="lazy"
					quality={95}
				/>
			</motion.div>
			{/* Blog HTML Content */}
			<div
				className="blog-content"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</motion.div>
	);
};

export default BlogContent;
