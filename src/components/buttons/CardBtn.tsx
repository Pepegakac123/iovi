import Link from "next/link";
import * as motion from "motion/react-client";

const CardBtn = ({ text, slug }: { text: string; slug: string }) => {
	return (
		<motion.div
			className="mt-auto"
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: 0.4, duration: 0.3 }}
		>
			<Link href={`/uslugi/${slug}`}>
				<motion.button
					type="button"
					className="uppercase cursor-pointer font-primary text-sm md:text-base w-full bg-primary text-primary-foreground py-3 px-4 rounded-md font-medium border-2 border-foreground hover:bg-accent transition-colors duration-200 shadow-[2px_2px_0px_0px_theme(colors.foreground)]"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.4,
						ease: "easeOut",
					}}
					whileHover={{
						scale: 1.05,
						boxShadow: "4px 4px 0px 0px var(--foreground)",
						transition: { duration: 0.2 },
					}}
					whileTap={{
						scale: 0.98,
						transition: { duration: 0.1 },
					}}
				>
					{text}
				</motion.button>
			</Link>
		</motion.div>
	);
};
export default CardBtn;
