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
		<>
			<div className='flex gap-x-10 flex-wrap justify-center mt-12'>
				<div className='flex flex-col gap-5 items-center uppercase tracking-wider'>
					<Variant variant={selectedVariant} />
					<span className='w-32 text-center'>you picked</span>
				</div>
				<div className='flex flex-col gap-5 items-center uppercase tracking-wider'>
					{houseVariant ? (
						<Variant variant={houseVariant} />
					) : (
						<div className='w-32 h-32 border-10 border-transparent bg-[#14233c] rounded-full'></div>
					)}
					<span className='w-32 whitespace-nowrap -ml-4'>the house picked</span>
				</div>
			</div>
			<div className='w-4/6 h-28 mt-16'>
				{houseVariant && (
					<div className='h-28 flex flex-col items-center justify-between'>
						<span className='uppercase text-5xl font-bold'>you lose</span>
						<button className='rounded-lg tracking-wider uppercase bg-white text-black py-3 px-16'>
							play again
						</button>
					</div>
				)}
			</div>
		</>
	)
}

export default Fight
