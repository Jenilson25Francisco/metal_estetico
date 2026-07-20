export default function Home() {
	return (
		<main className="">
			<section className="bg-[url(/backgroundImage.png)] bg-cover bg-center max-h-screen overflow-hidden">
				<div className="space-y-5 min-h-screen flex flex-col justify-center items-start mt-3 w-full px-5 mx-auto  sm:max-w-[1200px]">
					<h1 className="font-bold text-6xl text-primary">Metal Estético</h1>
					<p className="font-medium text-md text-accent-foreground w-2xl">
						A harmonia perfeita entre engenharia de alta performance e a pura
						expressão da arte em metalurgia e arquitetura de luxo
					</p>
				</div>
			</section>
		</main>
	);
}
