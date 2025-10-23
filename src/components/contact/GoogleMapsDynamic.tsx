"use client";
import React, { useState, useEffect } from "react";
import { googleMapsConfig } from "@/lib/contactData";

export default function GoogleMapsDynamic() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoaded(true), 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="relative bg-background border-2 border-foreground rounded-md overflow-hidden">
			{/* Loading Overlay */}
			{!isLoaded && (
				<div className="absolute inset-0 bg-muted flex items-center justify-center z-10">
					<div className="text-center">
						<div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4 animate-spin" />
						<p className="paragraph-secondary">Ładowanie mapy...</p>
					</div>
				</div>
			)}

			{/* Google Maps Iframe */}
			<iframe
				src={googleMapsConfig.embedUrl}
				width="100%"
				height="400"
				style={{ border: 0 }}
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title={googleMapsConfig.title}
				className="w-full h-96 md:h-[400px]"
				onLoad={() => setIsLoaded(true)}
			/>
		</div>
	);
}
