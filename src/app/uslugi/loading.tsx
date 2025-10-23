// src/app/uslugi/loading.tsx
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ServicesLoading = () => {
	return (
		<div className="w-full">
			{/* ✅ Loading Hero Section */}
			<div className="w-full bg-background py-4 md:py-8">
				<div className="max-w-[1440px] mx-auto flex justify-center px-4 sm:px-8">
					<div className="w-full gap-4 md:gap-6 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFEDEA] to-[#FDDFD0] border-1 border-b-4 border-r-4 border-foreground rounded-md overflow-hidden p-4 md:p-6 relative">
						<div className="flex flex-col gap-3 md:gap-4 items-center text-center z-10 relative max-w-4xl">
							{/* Subheadline skeleton */}
							<Skeleton className="h-4 w-48" />
							{/* Title skeleton */}
							<Skeleton className="h-8 w-64" />
							{/* Description skeleton */}
							<Skeleton className="h-4 w-96" />
							<Skeleton className="h-4 w-80" />
						</div>
					</div>
				</div>
			</div>

			{/* ✅ Loading Services Grid */}
			<div className="w-full bg-primary-foreground py-16 md:py-20">
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Generate 6 service card skeletons */}
						{Array.from({ length: 6 }).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: Loading skeleton items
							<div key={index} className="w-full">
								<div className="bg-background border-2 border-foreground rounded-md overflow-hidden shadow-lg">
									{/* Image skeleton */}
									<div className="w-full h-[200px] bg-muted animate-pulse" />

									{/* Content skeleton */}
									<div className="p-4 flex flex-col gap-4 min-h-[250px]">
										{/* Title skeleton */}
										<Skeleton className="h-6 w-3/4" />

										{/* Description skeletons */}
										<div className="flex-grow space-y-2">
											<Skeleton className="h-4 w-full" />
											<Skeleton className="h-4 w-5/6" />
											<Skeleton className="h-4 w-4/5" />
											<Skeleton className="h-4 w-3/4" />
										</div>

										{/* Button skeleton */}
										<Skeleton className="h-12 w-full mt-4" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ✅ Loading Contact Section */}
			<div className="w-full bg-background py-16 md:py-20">
				<div className="container">
					{/* Contact header skeleton */}
					<div className="text-center mb-12 space-y-4">
						<Skeleton className="h-6 w-40 mx-auto" />
						<Skeleton className="h-8 w-64 mx-auto" />
						<Skeleton className="h-4 w-96 mx-auto" />
					</div>

					{/* Contact form and info grid skeleton */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						{/* Form skeleton */}
						<div className="space-y-6">
							<div className="space-y-4">
								<Skeleton className="h-4 w-32" />
								<Skeleton className="h-4 w-48" />
							</div>

							<div className="space-y-4">
								{/* Name & Email fields */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Skeleton className="h-4 w-16" />
										<Skeleton className="h-12 w-full" />
									</div>
									<div className="space-y-2">
										<Skeleton className="h-4 w-12" />
										<Skeleton className="h-12 w-full" />
									</div>
								</div>

								{/* Phone field */}
								<div className="space-y-2">
									<Skeleton className="h-4 w-20" />
									<Skeleton className="h-12 w-full" />
								</div>

								{/* Message field */}
								<div className="space-y-2">
									<Skeleton className="h-4 w-24" />
									<Skeleton className="h-32 w-full" />
								</div>

								{/* Submit button */}
								<Skeleton className="h-12 w-full" />
							</div>
						</div>

						{/* Contact info skeleton */}
						<div className="space-y-6">
							<div className="space-y-2">
								<Skeleton className="h-6 w-40" />
								<Skeleton className="h-4 w-32" />
							</div>

							<div className="space-y-4">
								{Array.from({ length: 3 }).map((_, i) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: Loading skeleton items
									<div
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={i}
										className="bg-background border-2 border-foreground rounded-md p-4 md:p-6"
									>
										<div className="flex items-center gap-4">
											<Skeleton className="w-8 h-8 flex-shrink-0" />
											<div className="flex-1 space-y-2">
												<Skeleton className="h-4 w-24" />
												<Skeleton className="h-4 w-32" />
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesLoading;
