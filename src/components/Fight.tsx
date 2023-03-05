import React, { FC, useEffect } from 'react'
import { getRandomVariant } from '../utils/getRandomVariant'
import Variant from './Variant'

type FightProps = {
	selectedVariant: string
	houseVariant: string | undefined
	setHouseVariant: (variant: string | undefined) => void
}

const Fight: FC<FightProps> = ({
	selectedVariant,
	houseVariant,
	setHouseVariant
}) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			setHouseVariant(getRandomVariant())
		}, 1000)

		return () => clearTimeout(timeout)
	}, [])

	return (
		<div className='flex gap-x-10 gap-y-4 flex-wrap justify-center'>
			<div className='flex flex-col gap-5 items-center uppercase tracking-wider'>
				<Variant variant={selectedVariant} />
			</div>
			<div className='flex flex-col gap-5 items-center uppercase tracking-wider'>
				{houseVariant ? (
					<Variant variant={houseVariant} />
				) : (
					<div className='w-32 h-32 border-10 border-transparent bg-[#14233c] rounded-full'></div>
				)}
			</div>
			<div className='flex h-32 w-full justify-around uppercase'>
				<span className='w-1/2 text-center pl-4'>you picked</span>
				<span className='w-1/2 text-center pr-4'>the house picked</span>
			</div>
		</div>
	)
}

export default Fight
