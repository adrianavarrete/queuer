import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { api } from '@/utils/api'

const Home = () => {
	return (
		<>
			<main className="flex flex-col items-center justify-center gap-8 px-8 py-16">
				<button className="w-24 rounded-full bg-[#BAB500]">
					<Link href="/user">Log in!</Link>
				</button>
			</main>
		</>
	)
}

export default Home
