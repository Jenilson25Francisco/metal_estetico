import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-9xl font-bold text-primary">404</h1>
			<h2 className="text-3xl font-medium mb-4">
				{" "}
				Ops! esta pagina não existe, volte para a página inicial
			</h2>
			<Link
				href="/"
				className="flex items-center p-3 bg-primary rounded-lg gap-1.5"
			>
				<MoveLeftIcon className="size-5" />
				Voltar para a página inicial
			</Link>
		</div>
	);
}
