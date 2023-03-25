import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { api } from '@/utils/api'
import TurnCard from './components/TurnCard/TurnCard'

const Home = () => {
	return (
		<>
			<main className="flex flex-col items-center justify-center gap-8 px-8 py-16">
				<TurnCard />
				<TurnCard />
				<TurnCard />
				<TurnCard />
			</main>
		</>
	)
}

export default Home
