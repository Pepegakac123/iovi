// src/app/blog/page.tsx
import * as motion from "motion/react-client";
import SectionHero from "@/components/SectionHero";
import BlogCard from "@/components/blog/BlogCard";
import Contact from "@/components/Sections/Contact";
import { getAllBlogs } from "@/lib/jetApi";
import { containerVariants, itemVariants } from "@/lib/variants";
import { contactHome } from "@/lib/data";
import type { Metadata } from "next";
import { images } from "@/lib/images";

import { BreadcrumbJsonLd } from "next-seo";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Porady o tatuażach, pielęgnacji i stylizacji. Odkryj najnowsze trendy i dowiedz się jak dbać o swoje tatuaże.",

	keywords: [
		"blog o tatuażach",
		"porady tatuażowe",
		"pielęgnacja tatuaży",
		"trendy tatuażowe",
		"jak dbać o tatuaż",
		"inspiracje tatuaże",
		"poradnik tatuażysty",
	],

	openGraph: {
		title: "Blog - Porady o Tatuażach i Pielęgnacji | Jowita",
		description:
			"Porady o tatuażach, pielęgnacji i stylizacji. Odkryj najnowsze trendy w świecie tatuażu.",
		url: "https://iovi-ink.pl/blog",
		images: [
			{
				url: `${images.seoBaner.src}`,
				width: 1200,
				height: 630,
				alt: `${images.seoBaner.alt}`,
			},
		],
	},

	alternates: {
		canonical: "https://iovi-ink.pl/blog",
	},
};

// ===========================================
// MAIN BLOG PAGE COMPONENT
// ===========================================

const BlogPage = async () => {
	const blogs = await getAllBlogs();
	return (
		<>
			<BreadcrumbJsonLd
				useAppDir={true}
				itemListElements={[
					{
						position: 1,
						name: "Strona główna",
						item: "https://iovi-ink.pl",
					},
					{
						position: 2,
						name: "Blog",
						item: "https://iovi-ink.pl/blog",
					},
				]}
			/>

			{/* ✅ Mini Hero Section */}
			<SectionHero
				subTitle="Porady i inspiracje tatuażowe"
				title="Blog"
				description="Odkryj porady o tatuażach, pielęgnacji i najnowsze trendy. Dowiedz się jak przygotować się do sesji i jak dbać o swoje dzieło."
			/>

			{/* ✅ Main Blog Section */}
			<motion.main
				className="w-full bg-primary-foreground py-16 md:py-20"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={containerVariants}
			>
				<motion.div
					className="container px-4 md:px-8"
					variants={containerVariants}
				>
					{/* Blog Grid - 3 kolumny na dużych ekranach */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
						variants={containerVariants}
					>
						{blogs.map((blog) => (
							<motion.div
								key={blog.slug}
								variants={itemVariants}
								whileHover={{
									y: -4,
									transition: { duration: 0.2, ease: "easeOut" },
								}}
							>
								<BlogCard blog={blog} />
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</motion.main>

			{/* ✅ Contact Section */}
			<section>
				<Contact {...contactHome} />
			</section>
		</>
	);
};

export default BlogPage;
