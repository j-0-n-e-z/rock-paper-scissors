import { FC, SetStateAction, useEffect, useState } from 'react'
import { getRandomVariant } from '../utils/getRandomVariant'
import { getFightResult } from '../utils/getFightResult'
import Variant from './Variant'
import { Variant as TVariant } from '../data/variants'
import { ValueOf } from '../types'

type FightProps = {
	selectedVariant: TVariant | undefined,
	setSelectedVariant: (variant: TVariant | undefined) => void
	setScore: React.Dispatch<SetStateAction<number>>
}

export const fightResults = {
	win: 'you win',
	lose: 'you lose',
	tie: 'tie'
} as const

export type FightResult = ValueOf<typeof fightResults>

const Fight: FC<FightProps> = ({
	selectedVariant,
	setSelectedVariant,
	setScore
}) => {
	const [houseVariant, setHouseVariant] = useState<TVariant>()
	const [fightResult, setFightResult] = useState<FightResult>()

	useEffect(() => {
		const houseVariantTimeout = setTimeout(() => {
			setHouseVariant(getRandomVariant())
		}, 1000)

		return () => clearTimeout(houseVariantTimeout)
	}, [])

	useEffect(() => {
		let fightResultTimeout: any

		if (houseVariant) {
			fightResultTimeout = setTimeout(() => {
				const result = getFightResult(
					selectedVariant as TVariant,
					houseVariant as TVariant
				)
				setFightResult(result)
				setScore(prev =>
					result === 'you win'
						? prev + 1
						: result === 'you lose'
						? prev - 1
						: prev
				)
			}, 500)
		}

		return () => clearTimeout(fightResultTimeout)
	}, [houseVariant])

	function reset() {
		setSelectedVariant(undefined)
		setHouseVariant(undefined)
	}

	return (
		<>
			<div className='flex gap-x-10 flex-wrap justify-center mt-20'>
				<div className='picked-variant'>
					{fightResult === fightResults.win && (
						<div className='winner-circle'></div>
					)}
					<Variant variant={selectedVariant as TVariant} />
					<span className='w-32 text-center z-10'>you picked</span>
				</div>
				<div className='picked-variant'>
					{fightResult === fightResults.lose && (
						<div className='winner-circle'></div>
					)}
					{houseVariant ? (
						<Variant variant={houseVariant} />
					) : (
						<div className='w-32 h-32 border-10 border-transparent bg-[#14233c] rounded-full'></div>
					)}
					<span className='w-32 whitespace-nowrap -ml-4 z-10'>
						the house picked
					</span>
				</div>
			</div>
			<div className='w-4/6 h-28 mt-12'>
				{houseVariant && fightResult && (
					<div className='h-28 flex flex-col items-center justify-between'>
						<span className='uppercase text-5xl font-bold'>{fightResult}</span>
						<button
							className='rounded-lg tracking-wider uppercase bg-white text-black py-3 px-16'
							onClick={reset}
						>
							play again
						</button>
					</div>
				)}
			</div>
		</>
	)
}

export default Fight
