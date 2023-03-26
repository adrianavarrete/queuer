// 'use client'
import React from 'react'
// import * as AvatarRadix from '@radix-ui/react-avatar'

export default function Avatar() {
	return (
		<img
			className=" ml-4 h-[60px] w-[60px] rounded-full"
			src="https://avatars.githubusercontent.com/u/47567553?v=4"
			alt="Avatar"
		/>

		// <AvatarRadix.Root className="ml-4 h-[60px] w-[60px] rounded-full bg-red-400">
		// 	<AvatarRadix.Fallback className=" ">Edpuzzle</AvatarRadix.Fallback>
		// </AvatarRadix.Root>
	)
}
