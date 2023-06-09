import '@/styles/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Queuer',
	description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="flex flex-col bg-[#2e026d]">
				<div className="flex items-center justify-center pt-3">
					<h1 className="text-7xl font-extrabold  text-white ">
						<span className="text-[#BAB500]">
							<Link href="/">Queuer</Link>
						</span>
					</h1>
				</div>
				<main className="flex h-screen  w-full flex-col">{children}</main>
			</body>
		</html>
	)
}
