import * as motion from "motion/react-client";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";
import { buttonVariantsSimple, ctaContainerVariants } from "@/lib/variants";

const CTASection = () => {
	return (
		<motion.div
			className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center px-4 md:px-8"
			initial="hidden"
			animate="visible"
			variants={ctaContainerVariants}
		>
			<motion.div variants={buttonVariantsSimple} className="w-full md:w-fit">
				<SecondaryBtn text="Zobacz Portfolio" link="/portfolio" />
			</motion.div>
			<motion.div variants={buttonVariantsSimple} className="w-full md:w-fit">
				<PrimaryBtn />
			</motion.div>
		</motion.div>
	);
};

export default CTASection;
