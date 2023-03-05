import React, { FC } from 'react'
import logo from '../assets/images/logo.svg'

type ScoreProps = {
	score: number
}

const Score: FC<ScoreProps> = ({ score }) => {
	return (
		<div className='flex justify-between items-center  w-5/6 h-24 border-[3px] border-[#606e85] rounded-md mt-7'>
			<img className='h-14 ml-4' src={logo} alt='logo' />
			<div className='flex flex-col justify-center items-center rounded text-black mr-3 w-20 h-[70px] bg-white'>
				<small className='uppercase text-[10px] font-bold text-[#2a46c0] tracking-wider'>
					score
				</small>
				<div className='text-4xl text-[#3b4363] font-bold'>{score}</div>
			</div>
		</div>
	)
}

export default Score
