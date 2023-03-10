import { useState } from 'react'
import { Variant } from '../data/variants'
import Fight from './Fight'
import Picker from './Picker'
import Score from './Score'

const GamePanel = () => {
	const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>()
	const [houseVariant, setHouseVariant] = useState<Variant | undefined>()
	const [score, setScore] = useState(0)
	const [isShowRules, setIsShowRules] = useState(false)

	const reset = () => {
		setSelectedVariant(undefined)
		setHouseVariant(undefined)
	}

	return (
		<div className='flex flex-col items-center h-full font-main bg-gradient-to-b from-[#1f3756] to-[#141539] text-white overflow-hidden'>
			{isShowRules ? (
				<div
					className='w-full h-full flex justify-center items-center'
					onClick={() => setIsShowRules(false)}
				>
					<img src='src/assets/images/image-rules.svg' alt='rules' />
				</div>
			) : (
				<>
					<Score score={score} />
					{!selectedVariant ? (
						<Picker setSelectedVariant={setSelectedVariant} />
					) : (
						<Fight
							selectedVariant={selectedVariant}
							houseVariant={houseVariant}
							setHouseVariant={setHouseVariant}
							setScore={setScore}
							reset={reset}
						/>
					)}
					<div className='mb-10 mt-auto'>
						<button
							className='py-2 px-10 tracking-widest border rounded-lg uppercase'
							onClick={() => setIsShowRules(true)}
						>
							rules
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default GamePanel
