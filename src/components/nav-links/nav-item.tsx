"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItemProps = {
	label: string;
	href: string;
};

export function NavItem({ label, href }: NavItemProps) {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={cn(
				"text-zinc-400 flex items-center font-medium",
				isActive && "text-zinc-50 font-bold",
			)}
		>
			{label}
		</Link>
	);
}
