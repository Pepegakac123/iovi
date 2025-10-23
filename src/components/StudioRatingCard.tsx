// src/components/StudioRatingCard.tsx
import { Star } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { ICONS, SYSTEM_ICONS } from "@/lib/icons"; // Używamy już istniejącej ikony
import Image from "next/image";
import {
	Glimpse,
	GlimpseContent,
	GlimpseTitle,
	GlimpseTrigger,
} from "./kibo-ui/glimpse";

interface StudioRatingCardProps {
	className?: string;
	rating?: number;
	reviewCount?: number;
}

const StudioRatingCard: React.FC<StudioRatingCardProps> = ({
	className = "",
	rating = 5,
	reviewCount = 59,
}) => {
	// Funkcja do renderowania gwiazdek
	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<Star
					key={i}
					className={`w-4 h-4 ${
						i < Math.floor(rating)
							? "fill-primary text-primary"
							: "fill-muted text-muted-foreground"
					}`}
				/>,
			);
		}
		return stars;
	};

	return (
		<div
			className={`p-2 md:p-4 flex flex-row gap-4 bg-background border-foreground border-1 border-b-4 border-r-4 rounded-md cursor-pointer items-center hover:bg-muted hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-150 ${className}`}
		>
			{/* Ikona Google z SYSTEM_ICONS */}
			<div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
				<div className="w-full h-full bg-transparent border-1 border-foreground rounded-full flex items-center justify-center hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:scale-110 transition-all duration-200">
					<Image
						src={SYSTEM_ICONS.google}
						alt="Google"
						width={24}
						height={24}
						className="w-6 h-6"
					/>
				</div>
			</div>

			{/* Content - zmodyfikowany tekst */}
			<div className="flex flex-col">
				<div className="text-xs md:text-sm text-foreground mb-1">
					Pracuję w topowym studiu{" "}
					<Glimpse openDelay={200} closeDelay={100}>
						<GlimpseTrigger asChild>
							<span className="font-primary underline text-primary cursor-pointer hover:underline">
								LewusInk
							</span>
						</GlimpseTrigger>
						<GlimpseContent className="border-2 border-foreground bg-background p-2 md:p-4 rounded-md shadow-[4px_4px_0px_0px_var(--foreground)] w-64 z-50">
							<div className="flex flex-col gap-3">
								{/* Adres */}
								<div className="flex items-start gap-2">
									<Image
										src={ICONS.locationAccent}
										alt="Lokalizacja"
										width={16}
										height={16}
										className="w-4 h-4 mt-0.5"
									/>
									<span className="text-xs text-foreground">
										ul. Orkana 17, 34-730 Mszana Dolna
									</span>
								</div>

								{/* Link do Google */}
								<a
									href={socialLinks.lewus.googleMaps}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-xs text-primary hover:text-accent transition-colors"
								>
									<Image
										src={SYSTEM_ICONS.googleAccent}
										alt="Google"
										width={16}
										height={16}
										className="w-4 h-4"
									/>
									<span>Zobacz wizytówkę Google</span>
								</a>

								{/* Instagram Lewus */}
								<a
									href={socialLinks.lewus.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-xs text-primary hover:text-accent transition-colors"
								>
									<Image
										src={ICONS.instagramAccent}
										alt="Instagram"
										width={16}
										height={16}
										className="w-4 h-4"
									/>
									<span>@lewus_ink na Instagramie</span>
								</a>
							</div>
						</GlimpseContent>
					</Glimpse>
				</div>

				<div className="flex items-center gap-1.5">
					{renderStars()}
					<span className="text-foreground font-primary text-sm ml-1">
						{rating.toFixed(1)}
					</span>
				</div>

				<p className="text-xs text-foreground/80 font-text">
					<span className="font-semibold">
						Na podstawie {reviewCount} opinii
					</span>
				</p>
			</div>
		</div>
	);
};

export default StudioRatingCard;
