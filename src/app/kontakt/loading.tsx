// src/app/kontakt/loading.tsx
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ContactLoading = () => {
	return (
		<div className="w-full">
			{/* Loading Hero */}
			<div className="w-full bg-background py-4 md:py-8">
				<div className="max-w-[1440px] mx-auto flex justify-center px-4 sm:px-8">
					<div className="w-full gap-4 md:gap-6 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFEDEA] to-[#FDDFD0] border-1 border-b-4 border-r-4 border-foreground rounded-md overflow-hidden p-4 md:p-6 relative">
						<div className="flex flex-col gap-3 md:gap-4 items-center text-center z-10 relative max-w-4xl">
							<Skeleton className="h-4 w-48" />
							<Skeleton className="h-8 w-80" />
							<Skeleton className="h-4 w-96" />
						</div>
					</div>
				</div>
			</div>

			{/* Loading Main Contact Section */}
			<div className="min-h-screen py-20">
				<div className="container">
					{/* Main Contact Layout Skeleton */}
					<div className="bg-transparent border-2 border-foreground rounded-md p-6 lg:p-12 mb-16">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
							{/* Left Side - Contact Form Skeleton */}
							<div className="order-2 lg:order-1 space-y-6">
								<div className="space-y-4">
									<Skeleton className="h-6 w-40" />
									<Skeleton className="h-4 w-64" />
								</div>

								{/* Form Fields Skeleton */}
								<div className="space-y-4">
									{/* Name & Email Row */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Skeleton className="h-4 w-24" />
											<Skeleton className="h-12 w-full" />
										</div>
										<div className="space-y-2">
											<Skeleton className="h-4 w-16" />
											<Skeleton className="h-12 w-full" />
										</div>
									</div>

									{/* Phone Field */}
									<div className="space-y-2">
										<Skeleton className="h-4 w-20" />
										<Skeleton className="h-12 w-full" />
									</div>

									{/* Description Field */}
									<div className="space-y-2">
										<Skeleton className="h-4 w-32" />
										<Skeleton className="h-32 w-full" />
									</div>

									{/* File Upload */}
									<div className="h-20 bg-muted border-2 border-foreground rounded-md flex items-center justify-center">
										<Skeleton className="h-4 w-32 bg-background" />
									</div>

									{/* Submit Button */}
									<Skeleton className="h-12 w-full bg-primary" />
								</div>
							</div>

							{/* Right Side - Contact Info Skeleton */}
							<div className="order-1 lg:order-2 space-y-6">
								{/* Header */}
								<div className="space-y-2">
									<Skeleton className="h-6 w-48" />
									<Skeleton className="h-4 w-40" />
								</div>

								{/* Contact Items */}
								<div className="space-y-4">
									{[1, 2].map((i) => (
										<div
											key={i}
											className="bg-background border-2 border-foreground rounded-md p-4 md:p-6"
										>
											<div className="flex items-center gap-4">
												<Skeleton className="w-8 h-8 flex-shrink-0" />
												<div className="flex-1 space-y-2">
													<Skeleton className="h-4 w-24" />
													<Skeleton className="h-4 w-32" />
												</div>
												<Skeleton className="w-4 h-4 flex-shrink-0" />
											</div>
										</div>
									))}
								</div>

								{/* Social Media Section */}
								<div className="pt-4 space-y-4">
									<Skeleton className="h-6 w-32" />
									<div className="space-y-3">
										{[1, 2].map((i) => (
											<div
												key={i}
												className="bg-background border-2 border-foreground rounded-md p-4 md:p-6"
											>
												<div className="flex items-center gap-4">
													<Skeleton className="w-8 h-8 flex-shrink-0" />
													<div className="flex-1 space-y-2">
														<Skeleton className="h-4 w-28" />
														<Skeleton className="h-4 w-24" />
													</div>
													<Skeleton className="w-4 h-4 flex-shrink-0" />
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Call to Action Section Skeleton */}
					<div className="text-center py-16 bg-muted border-2 border-foreground rounded-md mb-16">
						<div className="space-y-6">
							<Skeleton className="h-8 mx-auto w-64 bg-background" />
							<Skeleton className="h-4 mx-auto w-96 bg-background" />
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Skeleton className="h-12 w-32 bg-background" />
								<Skeleton className="h-12 w-32 bg-background" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Loading Maps Section */}
			<div className="py-16 bg-primary-foreground">
				<div className="container">
					{/* Maps Header Skeleton */}
					<div className="text-center mb-12 space-y-4">
						<Skeleton className="h-8 mx-auto w-48" />
						<Skeleton className="h-4 mx-auto w-80" />
					</div>

					{/* Maps Container Skeleton */}
					<div className="relative bg-background border-2 border-foreground rounded-md overflow-hidden mb-8">
						<div className="w-full h-96 md:h-[400px] bg-muted flex items-center justify-center">
							<div className="text-center space-y-4">
								<div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto animate-spin" />
								<Skeleton className="h-4 w-32 bg-background" />
							</div>
						</div>
					</div>

					{/* Action Buttons Skeleton */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<Skeleton className="h-12 w-48" />
						<Skeleton className="h-12 w-48" />
					</div>

					{/* Contact Info Below Map Skeleton */}
					<div className="p-6 bg-muted border-2 border-foreground rounded-md">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="space-y-2">
								<Skeleton className="h-5 w-32 bg-background" />
								<div className="space-y-1">
									<Skeleton className="h-4 w-48 bg-background" />
									<Skeleton className="h-4 w-40 bg-background" />
									<Skeleton className="h-4 w-32 bg-background" />
								</div>
							</div>
							<div className="space-y-2">
								<Skeleton className="h-5 w-28 bg-background" />
								<div className="space-y-1">
									<Skeleton className="h-4 w-52 bg-background" />
									<Skeleton className="h-4 w-44 bg-background" />
									<Skeleton className="h-4 w-48 bg-background" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactLoading;
