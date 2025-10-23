"use client";

import React from "react";
import DesktopNavbar from "./navbar/DesktopNavbar";
import MobileNavbar from "./navbar/MobileNavbar";

const Navbar: React.FC = () => {
	return (
		<>
			<DesktopNavbar />
			<MobileNavbar />
		</>
	);
};

export default Navbar;
