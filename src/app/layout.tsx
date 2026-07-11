import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Metal Estético",
	description: "Serviços de serralharia",
	keywords: ["serralharia", "fechadura", "portão", "metal estético"],
	openGraph: {
		title: "Metal Estético",
		description: "Serviços de serralharia",
		locale: "pt_AO",
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
	twitter: {
		card: "summary_large_image",
		title: "metal estético",
		description: "Serviços de serralharia",
		images: ["/logo.jpg"],
		creator: "@metalestetico",
	},
	facebook: {
		appId: "1234567890",
	}
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
