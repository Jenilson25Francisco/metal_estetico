"use client";

import { NavItem } from "./nav-item";
import { Button } from "../ui/button";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

const NAV_ITEMS = [
	{ label: "Home", href: "/" },
	{ label: "Sobre", href: "/about" },
	{ label: "Serviços", href: "/services" },
	{ label: "Contato", href: "/contact" },
];

export function Navlink() {
	const [openMenu, setOpenMenu] = useState(false);

	function handleNavgation() {
		setOpenMenu(!openMenu);
	}

	return (
		<>
			<nav className="hidden sm:flex sm:items-center sm:gap-10">
				{NAV_ITEMS.map((item) => (
					<NavItem {...item} key={item.label} />
				))}
			</nav>
			<Button
				className="sm:hidden"
				onClick={handleNavgation}
				variant="secondary"
			>
				<MenuIcon className="size-4" />
			</Button>

			<div
				className={
					openMenu
						? "fixed left-0 top-0 w-[65%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500"
						: "fixed left-[-100%] top-0 p-10"
				}
			>
				<div className="relative py-2.5 w-full">
					<Button
						variant="secondary"
						onClick={handleNavgation}
						className="absolute top-2 right-2"
					>
						<X className="size-4" />
					</Button>

					<nav className="flex items-start flex-col mt-5 px-5 gap-10">
						{NAV_ITEMS.map((item) => (
							<NavItem {...item} key={item.label} />
						))}
					</nav>
				</div>
			</div>
		</>
	);
}
