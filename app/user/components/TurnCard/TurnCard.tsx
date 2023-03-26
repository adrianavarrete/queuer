import React from 'react'
import Avatar from './components/Avatar'
import PrInfo from './components/PrInfo'
import Timer from './components/Timer'

export default function TurnCard() {
	return (
		<div className="flex h-[110px] max-h-[110px] w-full max-w-[574px] flex-row items-center rounded-lg border  border-[#BAB500] bg-[#5B16BA]">
			{/* Avatar */}
			<Avatar />
			{/* PR info */}
			<PrInfo />
			{/* timer */}
			<Timer />
		</div>
	)
}
