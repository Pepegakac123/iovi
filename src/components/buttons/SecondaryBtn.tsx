import * as motion from "motion/react-client";
import Link from "next/link";

const SecondaryBtn = ({ text, link }: { text: string; link: string }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.4,
				ease: "easeOut",
			}}
		>
			<Link href={link}>
				<motion.button
					className="bg-secondary hover:bg-muted cursor-pointer text-foreground font-primary text-base md:text-lg w-full md:w-fit px-4 md:px-8 py-3 md:py-4 uppercase border-1 border-foreground rounded-md transition-colors duration-200"
					whileHover={{
						scale: 1.05,
						boxShadow: "4px 4px 0px 0px var(--foreground)",
					}}
					whileTap={{
						scale: 0.98,
					}}
					transition={{
						duration: 0.2,
					}}
				>
					{text}
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default SecondaryBtn;
