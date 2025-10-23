import * as motion from "motion/react-client";
const CarouselSkeleton = () => (
	<motion.div
		className="w-full bg-background py-20 md:py-24"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.5 }}
	>
		<div className="flex flex-col gap-4 md:gap-8 max-w-[1240px] mx-auto px-4 md:px-8 items-center">
			{/* Subheadline skeleton */}
			<div className="bg-muted border-1 border-accent rounded-md px-4 py-4 lg:px-8 w-fit">
				<div className="h-5 w-64 bg-muted-foreground/20 rounded animate-pulse" />
			</div>

			{/* Title skeleton */}
			<div className="h-8 w-80 bg-muted-foreground/20 rounded animate-pulse" />

			{/* Description skeleton */}
			<div className="space-y-2 text-center max-w-[600px]">
				<div className="h-4 w-full bg-muted-foreground/20 rounded animate-pulse" />
				<div className="h-4 w-4/5 bg-muted-foreground/20 rounded animate-pulse mx-auto" />
			</div>
		</div>

		{/* Carousel skeleton */}
		<div className="flex justify-center gap-4 mt-12 px-4">
			{[...Array(4)].map((_, i) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={i}
					className="w-[280px] h-[350px] bg-muted-foreground/10 rounded-md animate-pulse border-2 border-foreground"
					style={{
						animationDelay: `${i * 0.1}s`,
						transform: i === 1 ? "scale(1.05)" : "scale(0.9)", // Center active effect
					}}
				/>
			))}
		</div>
	</motion.div>
);

export default CarouselSkeleton;
