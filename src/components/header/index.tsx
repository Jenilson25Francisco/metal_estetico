import { Navlink } from "@/components/nav-links";
import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className="absolute bg-zinc-900 top-0 sticky z-100 w-full flex items-center justify-center">
			<div className="flex items-center justify-between w-full px-5 mx-auto  sm:max-w-[1200px]">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="Logo"
						width={84}
						height={84}
						loading="eager"
					/>
				</Link>
				<Navlink />
			</div>
		</header>
	);
}
