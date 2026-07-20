import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Metal Estético",
	description: "Serviços de serralharia",
	keywords: ["serralharia", "fechadura", "portão", "metal estético"],
	metadataBase: new URL("http://localhost:3000"),
	openGraph: {
		title: "Metal Estético",
		description: "Serviços de serralharia",
		locale: "pt_PT",
		images: [
			{
				url: "/logo.jpg",
				width: 1200,
				height: 630,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt"
			className={cn("font-sans dark antialiased", ubuntu.variable)}
		>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
