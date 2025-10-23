// src/components/navbar/MobileNavbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import NavPrimaryBtn from "../buttons/NavPrimaryBtn";
import { menuItems, services, MenuItem, ServiceItem } from "@/lib/menuData";
import { images } from "@/lib/images";
import { InstagramGlimpse } from "../ui/InstagramGlimpse";

const MobileNavbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Body + documentElement scroll lock (safer across browsers)
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		};
	}, [isMenuOpen]);

	return (
		<>
			{/* Mobile Navbar - Fixed with bottom margin */}
			<nav className="lg:hidden fixed bottom-10 left-4 right-4 z-40">
				<div className="px-4">
					<div className="flex items-center justify-between h-16">
						{/* Mobile Menu Button */}
						<button
							className="p-3 rounded bg-muted border-2 border-foreground shadow-[0_4px_0px_0px_theme(colors.foreground)] hover:shadow-[0_6px_0px_0px_theme(colors.foreground)] hover:translate-y-[-2px] transition-all duration-200"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							type="button"
							name="mobile-menu-button"
							aria-label="Otwórz menu mobilne"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<HiOutlineMenuAlt2 className="w-6 h-6" />
							)}
						</button>

						{/* Instagram Glimpse (Mobile Variant) - zintegrowany z navbarem */}
						<div className="rounded bg-transparent">
							<InstagramGlimpse variant="mobile" />
						</div>

						{/* Logo */}
						<a href="/" className="flex items-center group">
							<Image
								src={images.logo.src}
								alt={images.logo.alt}
								width={80}
								height={68}
								className="w-[80px] h-[68px] object-contain"
							/>
						</a>
					</div>

					{/* Mobile Menu - Full Height with Scroll Lock */}
					{isMenuOpen && (
						<div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg lg:hidden min-h-screen h-[100dvh] overflow-hidden">
							{/* Close button - repositioned */}
							<button
								className="absolute top-4 right-4 p-2 rounded-full border-2 border-foreground hover:bg-accent transition-colors"
								onClick={() => setIsMenuOpen(false)}
								type="button"
							>
								<X className="w-5 h-5" />
							</button>

							{/* Menu content - Scrollable with proper constraints */}
							<div className="flex h-full w-full items-center justify-center px-4">
								<div className="text-center w-full max-w-xs max-h-[100dvh] overflow-y-auto py-8">
									{/* Main menu items - Reduced spacing */}
									<div className="flex flex-col gap-6 mb-4">
										{menuItems.map((item: MenuItem, index: number) => (
											<a
												key={item.name}
												href={item.href}
												className="block text-xl font-primary text-foreground hover:text-primary transition-colors py-1"
												onClick={() => setIsMenuOpen(false)}
											>
												{item.name}
											</a>
										))}
									</div>

									{/* Services section - Simplified */}
									<div className="py-4 border-t border-foreground/20 font-primary flex flex-col gap-2">
										<span className="text-xl font-primary text-foreground mb-4">
											Usługi
										</span>
										{/* Only show first 3 services to save space */}
										<div className="space-y-2">
											{services.tatuaze.items
												.slice(0, 3)
												.map((item: ServiceItem, index: number) => (
													<a
														key={item.name}
														href={item.href}
														className="flex items-center gap-2 text-sm font-medium font-text text-foreground hover:text-primary transition-colors py-1"
														onClick={() => setIsMenuOpen(false)}
													>
														<span className="text-accent">
															<item.icon className="w-3 h-3" />
														</span>
														{item.name}
													</a>
												))}
											{/* Show more link */}
											<a
												href="/uslugi"
												className="block text-sm text-primary hover:text-accent transition-colors mt-2 font-medium"
												onClick={() => setIsMenuOpen(false)}
											>
												Zobacz wszystkie usługi →
											</a>
										</div>
									</div>

									{/* CTA Button - Smaller */}
									<div className="pt-4">
										<NavPrimaryBtn />
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</nav>
		</>
	);
};

export default MobileNavbar;
