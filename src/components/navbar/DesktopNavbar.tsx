// src/components/navbar/DesktopNavbar.tsx - FIXED: Poprawiony dropdown z hover

"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import NavPrimaryBtn from "../buttons/NavPrimaryBtn";
import ServiceDropdown from "./ServiceDropdown";
import { containerVariants, navItemVariants } from "@/lib/variants";
import {
	menuItemsBeforeServices,
	menuItemsAfterServices,
	services,
	type MenuItem,
} from "@/lib/menuData";
import { images } from "@/lib/images";

const DesktopNavbar: React.FC = () => {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	// ✅ FIXED: Używamy timeoutów do kontroli hover behavior
	const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		// ✅ Anuluj timeout jeśli istnieje
		if (hoverTimeout) {
			clearTimeout(hoverTimeout);
			setHoverTimeout(null);
		}
		setActiveDropdown("services");
	};

	const handleMouseLeave = () => {
		// ✅ Ustaw timeout przed zamknięciem - daje czas na przejście myszy do dropdown
		const timeout = setTimeout(() => {
			setActiveDropdown(null);
		}, 100); // 100ms opóźnienia
		setHoverTimeout(timeout);
	};

	return (
		<motion.nav
			className="hidden py-2 lg:block sticky top-0 z-40 w-full bg-background backdrop-blur-sm border-b-2 border-foreground shadow-[0_4px_0px_0px_theme(colors.foreground)]"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-20">
					<motion.a
						href="/"
						className="flex items-center group"
						variants={navItemVariants}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<Image
							src={images.logo.src}
							alt={images.logo.alt}
							width={120}
							height={102}
							className="object-cover"
						/>
					</motion.a>

					{/* Desktop Menu */}
					<div className="flex items-center gap-4 font-primary font-normal">
						{/* Menu items PRZED usługami */}
						{menuItemsBeforeServices.map((item: MenuItem, index: number) => (
							<motion.a
								key={item.name}
								href={item.href}
								className="text-foreground  hover:text-primary font-primary font-medium relative group px-3 py-2 rounded hover:bg-accent/20 hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px] border-2 border-transparent hover:border-foreground transition-all duration-200"
								variants={navItemVariants}
							>
								{item.name}
							</motion.a>
						))}

						{/* ✅ FIXED: Services Dropdown z lepszym hover handling */}
						{/** biome-ignore lint/a11y/noStaticElementInteractions: <explanation> */}
						<div
							className="relative"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<motion.button
								className="flex items-center gap-1 text-foreground hover:text-primary font-primary font-normal group px-3 py-2 rounded hover:bg-accent/20 hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px] border-2 border-transparent hover:border-foreground transition-all duration-200"
								variants={navItemVariants}
							>
								Usługi
								<motion.div
									animate={{
										rotate: activeDropdown === "services" ? 180 : 0,
									}}
									transition={{ duration: 0.2 }}
								>
									<ChevronDown className="w-4 h-4" />
								</motion.div>
							</motion.button>

							{/* ✅ FIXED: Dropdown z lepszym pozycjonowaniem */}
							<AnimatePresence>
								{activeDropdown === "services" && (
									<ServiceDropdown
										serviceKey="tatuaze"
										service={services.tatuaze}
										onMouseEnter={handleMouseEnter}
										onMouseLeave={handleMouseLeave}
									/>
								)}
							</AnimatePresence>
						</div>

						{/* Menu items PO usługach */}
						{menuItemsAfterServices.map((item: MenuItem, index: number) => (
							<motion.a
								key={item.name}
								href={item.href}
								className="text-foreground hover:text-primary font-primary font-normal relative group px-3 py-2 rounded hover:bg-accent/20 hover:shadow-[2px_2px_0px_0px_theme(colors.foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px] border-2 border-transparent hover:border-foreground transition-all duration-200"
								variants={navItemVariants}
							>
								{item.name}
							</motion.a>
						))}

						{/* CTA Button */}
						<motion.div variants={navItemVariants}>
							<NavPrimaryBtn />
						</motion.div>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default DesktopNavbar;
