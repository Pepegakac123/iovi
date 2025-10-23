import { ICONS } from "@/lib/icons";
import * as motion from "motion/react-client";
import Image from "next/image";

interface InstagramBtnProps {
	text: string;
	link: string;
	className?: string;
}

const InstagramBtn = ({ text, link, className = "" }: InstagramBtnProps) => {
	return (
		<motion.div
			className={`w-full${className}`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.4,
				ease: "easeOut",
			}}
		>
			<motion.a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block w-full"
			>
				<motion.button
					type="button"
					className="bg-secondary hover:bg-muted cursor-pointer text-foreground font-primary text-base md:text-lg w-full px-4 md:px-8 py-4 uppercase border-2 border-foreground rounded-md flex items-center justify-center gap-3 group transition-colors duration-200"
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
					<span>{text}</span>
					<motion.div
						className="flex items-center justify-center"
						whileHover={{
							rotate: 10,
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
					>
						<Image
							src={ICONS.instagram}
							alt="Instagram"
							width={32}
							height={32}
							className="group-hover:filter group-hover:brightness-110"
						/>
					</motion.div>
				</motion.button>
			</motion.a>
		</motion.div>
	);
};

export default InstagramBtn;
