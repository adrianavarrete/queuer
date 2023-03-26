'use client'
import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Timer() {
	return (
		<div className="mr-8">
			<CountdownCircleTimer
				isPlaying
				duration={60}
				colors={['#BAB500', '#F7B801', '#A30000', '#A30000']}
				colorsTime={[7, 5, 2, 0]}
				size={80}
				strokeWidth={6}
			>
				{({ remainingTime }) => {
					if (remainingTime === 0) return <span className="text-white">😢</span>
					return <span className="text-white">{`${remainingTime} sec`}</span>
				}}
			</CountdownCircleTimer>
		</div>
	)
}
