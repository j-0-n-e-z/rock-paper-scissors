import { useState } from 'react'
import { variants } from '../data/variants'
import Fight from './Fight'
import Picker from './Picker'
import Score from './Score'

const GamePanel = () => {
	const [selectedVariant, setSelectedVariant] = useState<string | undefined>()
	const [houseVariant, setHouseVariant] = useState<string | undefined>()
	const [score, setScore] = useState(0)

	return (
		<div className='flex flex-col justify-between items-center h-full font-main bg-gradient-to-b from-[#1f3756] to-[#141539] text-white'>
			<Score score={score} />
			{!selectedVariant ? (
				<Picker setSelectedVariant={setSelectedVariant} />
			) : (
				<Fight
					selectedVariant={selectedVariant}
					houseVariant={houseVariant}
					setHouseVariant={setHouseVariant}
				/>
			)}
			<div className='mb-10'>
				<button className='py-2 px-10 tracking-widest border rounded-lg uppercase'>
					rules
				</button>
			</div>
		</div>
	)
}

export default GamePanel
