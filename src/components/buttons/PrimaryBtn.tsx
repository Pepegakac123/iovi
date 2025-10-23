import * as motion from "motion/react-client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import PopupForm from "../forms/PopupForm";

const PrimaryBtn = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<motion.button
					className="cursor-pointer bg-primary border-1 border-foreground text-primary-foreground text-base md:text-lg w-full md:w-fit px-4 md:px-8 py-4 rounded-md font-primary uppercase hover:bg-accent hover:shadow-[6px_6px_0px_0px_theme(colors.foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex items-center justify-center gap-3 group "
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					Bezpłatna Konsultacja
				</motion.button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md border-2 border-foreground rounded-md shadow-[8px_8px_0px_0px_theme(colors.foreground)] bg-background">
				<DialogHeader>
					<DialogTitle className="text-foreground font-primary text-lg md:text-xl">
						Bezpłatna Konsultacja
					</DialogTitle>
					<DialogDescription className="text-muted-foreground font-text text-sm md:text-base">
						Napisz do mnie, a omówimy Twój pomysł na tatuaż. Najszybciej
						odpowiem na instagramie.
					</DialogDescription>
				</DialogHeader>
				<PopupForm />
			</DialogContent>
		</Dialog>
	);
};

export default PrimaryBtn;
