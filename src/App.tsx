import { useState } from 'react'
import './App.css'
import Fight from './components/Fight'
import Picker from './components/Picker'
import Score from './components/Score'
import { Variant } from './data/variants'

function App() {
	const [selectedVariant, setSelectedVariant] = useState<Variant>()
	const [score, setScore] = useState(0)
	const [isShowRules, setIsShowRules] = useState(false)

	return (
		<div className='flex flex-col items-center h-full font-main main-background text-white overflow-hidden'>
			{isShowRules && (
				<div
					className='w-full h-full flex justify-center items-center absolute z-30 main-background'
					onClick={() => setIsShowRules(false)}
				>
					<img src='src/assets/images/image-rules.svg' alt='rules' />
				</div>
			)}
			<Score score={score} />
			{!selectedVariant ? (
				<Picker setSelectedVariant={setSelectedVariant} />
			) : (
				<Fight
					selectedVariant={selectedVariant}
					setSelectedVariant={setSelectedVariant}
					setScore={setScore}
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
		</div>
	)
}

export default App
