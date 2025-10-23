// src/components/BlogCard.tsx

import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { cardVariantsFast } from "@/lib/variants";
import { formatDate } from "@/lib/utils";
import { ProcessedBlogPost } from "@/lib/jetPostTypes";

interface BlogCardProps {
	blog: ProcessedBlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
	// Format date to Polish format

	return (
		<motion.article
			className="w-full h-full bg-background border-2 border-accent rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
			variants={cardVariantsFast}
			whileHover={{
				scale: 1.02,
				y: -4,
				boxShadow: "6px 6px 0px 0px var(--accent)",
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
		>
			<Link href={`/blog/${blog.slug}`} className="block h-full">
				{/* Image Section with Date Badge */}
				<div className="w-full h-[220px] relative overflow-hidden">
					<motion.div
						className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-2 rounded-md border-1 border-foreground flex items-center justify-center"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.3 }}
					>
						<span className="text-sm font-primary uppercase">
							{formatDate(blog.date)}
						</span>
					</motion.div>

					<motion.div
						className="relative w-full h-full"
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.4, ease: "easeOut" },
						}}
					>
						<Image
							src={blog.thumbnail}
							alt={blog.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
							loading="lazy"
							quality={95}
						/>
					</motion.div>
				</div>

				{/* Content Section */}
				<motion.div
					className="p-4 md:p-6 flex flex-col gap-3 md:gap-4  justify-between"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 0.4 }}
				>
					{/* Title */}
					<motion.h2
						className="heading-secondary leading-tight line-clamp-2"
						initial={{ opacity: 0, x: -10 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.3 }}
					>
						{blog.title}
					</motion.h2>

					{/* Excerpt */}
					<motion.p
						className="paragraph-small-muted flex-grow leading-relaxed line-clamp-3"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.4 }}
					>
						{blog.excerpt}
					</motion.p>

					{/* Read More Link */}
					<motion.div
						className="mt-auto pt-2"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4, duration: 0.3 }}
					>
						<div className="text-primary font-text text-sm uppercase font-semibold group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
							Czytaj więcej
							<motion.span
								className="inline-block"
								whileHover={{ x: 2 }}
								transition={{ duration: 0.2 }}
							>
								→
							</motion.span>
						</div>
					</motion.div>
				</motion.div>
			</Link>
		</motion.article>
	);
};

export default BlogCard;
