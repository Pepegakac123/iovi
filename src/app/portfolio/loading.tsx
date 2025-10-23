import React from "react";
import * as motion from "motion/react-client";

const PortfolioLoading = () => {
	return (
		<div className="w-full">
			{/* Loading Hero */}
			<div className="w-full bg-background py-16 md:py-20">
				<div className="container text-center">
					<div className="space-y-4">
						<div className="h-6 bg-muted rounded animate-pulse mx-auto w-48" />
						<div className="h-12 bg-muted rounded animate-pulse mx-auto w-96" />
						<div className="h-4 bg-muted rounded animate-pulse mx-auto w-[600px]" />
					</div>
				</div>
			</div>

			{/* Loading Gallery */}
			<div className="w-full bg-primary-foreground py-16 md:py-20">
				<div className="container">
					{/* Loading Stats */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="bg-background rounded-md border-2 border-foreground p-6 text-center shadow-[4px_4px_0px_0px_var(--foreground)]"
							>
								<div className="h-8 bg-muted rounded animate-pulse mb-2" />
								<div className="h-4 bg-muted rounded animate-pulse w-32 mx-auto" />
							</div>
						))}
					</div>

					{/* Loading Tabs */}
					<div className="flex justify-center mb-8">
						<div className="bg-primary-foreground border-2 border-foreground rounded-md p-2 shadow-[4px_4px_0px_0px_var(--foreground)]">
							<div className="flex gap-2">
								{[1, 2, 3].map((i) => (
									<div
										key={i}
										className="h-12 w-32 bg-muted rounded animate-pulse"
									/>
								))}
							</div>
						</div>
					</div>

					{/* Loading Gallery Grid */}
					<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
						{Array.from({ length: 12 }).map((_, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={i} className="break-inside-avoid mb-4">
								<div className="rounded-md border-2 border-foreground bg-background overflow-hidden">
									<div
										className="w-full bg-muted animate-pulse"
										style={{
											aspectRatio: Math.random() * 0.5 + 0.75, // Random height between 0.75-1.25
										}}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioLoading;
