import { containerVariants, itemVariants } from "@/lib/variants";
import * as motion from "motion/react-client";
import BlogCard from "./blog/BlogCard";
import Subheadline from "./Subheadline";
import { FeaturedBlogsProps } from "@/lib/dataTypes";
import { getFeaturedBlogs } from "@/lib/jetApi";

const FeaturedBlogs = async ({
	title,
	subheadline,
	description,
}: FeaturedBlogsProps) => {
	const blogs = await getFeaturedBlogs();
	return (
		<motion.div
			className="container flex flex-col gap-4 md:gap-8 justify-center items-center"
			variants={containerVariants}
		>
			<motion.div variants={itemVariants}>
				<Subheadline title={subheadline} />
			</motion.div>

			<motion.h2
				className="heading-primary-center"
				variants={itemVariants}
				whileHover={{
					scale: 1.02,
					transition: { duration: 0.2 },
				}}
			>
				{title}
			</motion.h2>

			<motion.p
				className="paragraph-center-constrained"
				variants={itemVariants}
			>
				{description}
			</motion.p>
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
	);
};
export default FeaturedBlogs;
