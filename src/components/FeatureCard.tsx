// src/components/FeatureCard.tsx - Wersja bez animacji (KRYTYCZNA OPTYMALIZACJA)
import Image from "next/image";

interface FeatureProps {
	icon: string;
	text: string;
	delay?: number; // Zachowane dla kompatybilności
}

const FeatureCard = ({ icon, text, delay = 0 }: FeatureProps) => {
	return (
		<div className="p-4 flex flex-row gap-4 bg-background border-foreground border-1 border-b-4 border-r-4 rounded-md cursor-pointer items-center hover:bg-muted hover:shadow-[6px_6px_0px_0px_var(--foreground)] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-150">
			{/* Ikona - bez motion wrapper */}
			<div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0">
				<div className="w-full h-full bg-transparent border-1 border-foreground rounded-full flex items-center justify-center hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:scale-110 transition-all duration-200">
					<div className="hover:scale-120 transition-transform duration-200">
						<Image
							src={icon}
							alt={`${text} - ikona`}
							width={24}
							height={24}
							className="w-5 h-5 md:w-6 md:h-6"
						/>
					</div>
				</div>
			</div>

			{/* Tekst - bez motion */}
			<div className="paragraph-base font-text">{text}</div>
		</div>
	);
};

export default FeatureCard;
