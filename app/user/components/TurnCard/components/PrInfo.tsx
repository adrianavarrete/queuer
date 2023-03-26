import React from 'react'

export default function PrInfo() {
	return (
		<div className="ml-4 flex h-full w-full max-w-sm flex-col gap-1  py-4 px-4  text-white">
			<span>#PR NAME</span>
			<span>#REPOSITORY NAME</span>
			<div className="flex flex-row gap-10">
				<span>#TAGS</span>
				<span>#TAGS</span>
			</div>
		</div>
	)
}
