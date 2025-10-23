import { ArticleJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "next-seo";
import { getAllBlogs, getBlogBySlug, JETEngineAPIError } from "@/lib/jetApi";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Contact from "@/components/Sections/Contact";
import { contactHome } from "@/lib/data";
import * as motion from "motion/react-client";
import { containerVariants, itemVariants } from "@/lib/variants";
import BlogContent from "@/components/blog/BlogContent";
import BlogFAQSection from "@/components/blog/BlogFAQSection";
import { images } from "@/lib/images";
import { formatDate } from "@/lib/utils";
import { services } from "@/lib/menuData";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import NotFound from "@/app/not-found";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	try {
		const { slug } = await params;
		const blog = await getBlogBySlug(slug);

		if (!blog) {
			return {
				title: "Blog nie znaleziony - iovi-ink",
				description: "Szukany artykuł nie istnieje.",
				robots: "noindex, nofollow",
			};
		}

		return {
			title: blog.title,
			description: blog.excerpt,
			keywords: blog.keywords,
			openGraph: {
				title: blog.title,
				description: blog.excerpt,
				url: `https://iovi-ink.pl/blog/${slug}`,
				type: "article",
			},
			alternates: {
				canonical: `https://iovi-ink.pl/blog/${slug}`,
			},
		};
	} catch (error) {
		if (error instanceof JETEngineAPIError && error.status === 404) {
			return {
				title: "Blog nie znaleziony - iovi-ink",
				description: "Szukany artykuł nie istnieje.",
				robots: "noindex, nofollow",
			};
		}
		return {
			title: "Błąd ładowania wpisu - iovi-ink",
			description: "Wystąpił problem z załadowaniem tego blogu.",
			robots: "noindex, nofollow",
		};
	}
}

export async function generateStaticParams() {
	const blogs = await getAllBlogs();
	return blogs.map((blog) => ({ slug: blog.slug }));
}

async function BlogSinglePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	try {
		const { slug } = await params;
		const blog = await getBlogBySlug(slug);
		console.log(blog.title);

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
						{
							position: 3,
							name: blog.title,
							item: `https://iovi-ink.pl/blog/${slug}`,
						},
					]}
				/>
				{blog.faq && blog.faq.length > 0 && (
					<FAQPageJsonLd
						useAppDir={true}
						mainEntity={blog.faq.map((item) => ({
							questionName: item.pytanie,
							acceptedAnswerText: item.odpowiedz,
						}))}
					/>
				)}
				<ArticleJsonLd
					useAppDir={true}
					url={`https://iovi-ink.pl/blog/${slug}`}
					title={blog.title}
					images={[blog.thumbnail]}
					datePublished={blog.date}
					dateModified={blog.date}
					authorName="Jowita Potaczek"
					publisherName="IOVI INK"
					publisherLogo={images.logo.src}
					description={blog.excerpt}
					isAccessibleForFree={true}
				/>

				{/* ✅ Main Blog Layout */}
				<motion.main
					className="w-full py-16 md:py-20"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					variants={containerVariants}
				>
					<div className="container px-4 md:px-8">
						<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
							{/* ✅ Left Sidebar - Sticky */}
							<motion.aside
								className="w-full lg:w-1/3 lg:sticky lg:top-[120px] lg:self-start order-1"
								variants={itemVariants}
							>
								<BlogSidebar title={blog.title} date={formatDate(blog.date)} />
							</motion.aside>

							{/* ✅ Right Content */}
							<motion.article
								className="w-full lg:w-2/3 order-2 space-y-8 md:space-y-12"
								variants={itemVariants}
							>
								{/* Main Blog Content */}
								<BlogContent content={blog.content} image={blog.thumbnail} />

								{/* FAQ Section */}
								<BlogFAQSection faq={blog.faq} />
								<motion.div
									className="bg-background border-2 border-accent rounded-md p-6 md:p-8 block lg:hidden"
									variants={itemVariants}
									whileHover={{
										boxShadow: "4px 4px 0px 0px var(--accent)",
										transition: { duration: 0.2 },
									}}
								>
									<motion.h3
										className="heading-small mb-6 text-center"
										variants={itemVariants}
									>
										Moje Usługi
									</motion.h3>

									<motion.div
										className="space-y-4"
										variants={containerVariants}
									>
										{Object.values(services).map((category) => (
											<motion.div key={category.title} variants={itemVariants}>
												{/* Category Title */}
												<motion.div
													className="flex items-center gap-2 mb-3 text-primary"
													whileHover={{ x: 2 }}
													transition={{ duration: 0.2 }}
												>
													<category.icon className="w-4 h-4" />
													<span className="text-sm font-primary uppercase font-semibold">
														{category.title}
													</span>
												</motion.div>

												{/* Service Items */}
												<motion.ul
													className="space-y-2 ml-6"
													variants={containerVariants}
												>
													{category.items.map((item) => (
														<motion.li key={item.href} variants={itemVariants}>
															<Link href={item.href} className="block group">
																<motion.div
																	className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200 py-1"
																	whileHover={{ x: 2 }}
																	transition={{ duration: 0.2 }}
																>
																	<item.icon className="w-3 h-3 mt-0.5 flex-shrink-0 group-hover:text-primary" />
																	<span className="font-text leading-tight">
																		{item.name}
																	</span>
																</motion.div>
															</Link>
														</motion.li>
													))}
												</motion.ul>
											</motion.div>
										))}
									</motion.div>

									{/* CTA Link */}
									<motion.div
										className="mt-8 pt-6 border-t border-muted"
										variants={itemVariants}
									>
										<Link href="/uslugi" className="block w-full text-center">
											<motion.div
												className="bg-secondary text-foreground font-primary text-sm px-4 py-3 uppercase border-1 border-foreground rounded-md hover:bg-muted transition-colors duration-200"
												whileHover={{
													scale: 1.02,
													boxShadow: "3px 3px 0px 0px var(--foreground)",
													translateX: -1,
													translateY: -1,
												}}
												whileTap={{ scale: 0.98 }}
											>
												Zobacz wszystkie usługi
											</motion.div>
										</Link>
									</motion.div>
								</motion.div>
							</motion.article>
						</div>
					</div>
				</motion.main>

				{/* ✅ Contact Section */}
				<section>
					<Contact {...contactHome} />
				</section>
			</>
		);
	} catch (error) {
		if (error instanceof JETEngineAPIError && error.status === 404) {
			notFound(); // ładnie przełączy na 404
		}
		throw error; // inne błędy -> faktyczny 500
	}
}
export default BlogSinglePage;
