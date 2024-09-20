import MainHeader from "@/components/main-header";
import "./globals.css";

export const metadata = {
	title: "Dev Showcase",
	description: "Next.js app for showcasing anything and everything!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<MainHeader />
				{children}
			</body>
		</html>
	);
}
