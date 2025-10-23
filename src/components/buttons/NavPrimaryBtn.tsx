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

const NavPrimaryBtn = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<motion.button
					className="cursor-pointer bg-primary border-4 border-foreground text-primary-foreground px-6 py-3 rounded-md font-primary uppercase hover:bg-accent hover:shadow-[6px_6px_0px_0px_theme(colors.foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 shadow-[4px_4px_0px_0px_theme(colors.foreground)]"
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

export default NavPrimaryBtn;
