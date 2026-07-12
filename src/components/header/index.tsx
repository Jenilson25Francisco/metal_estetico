import Image from "next/image";
import Link from "next/link";
import { Navlink } from "@/components/nav-links";

export function Header() {
	return (
		<header className="absolute top-0 sticky z-10 w-full flex items-center justify-center">
			<div className="flex items-center justify-between w-full px-5 mx-auto  sm:max-w-[1200px]">
				<Link href="/">
					<Image
						src="/logo.jpg"
						alt="Logo"
						width={100}
						height={100}
						loading="eager"
					/>
				</Link>
				<Navlink />
			</div>
		</header>
	);
}
