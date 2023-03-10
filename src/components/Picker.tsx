import { FC } from 'react'
import { Variant as TVariant, variants } from '../data/variants'
import Variant from './Variant'

type PickerProps = {
	setSelectedVariant: (value: TVariant | undefined) => void
}

const Picker: FC<PickerProps> = ({ setSelectedVariant }) => {
	return (
		<div className='flex gap-x-10 gap-y-4 flex-wrap justify-center relative mt-20'>
			<img
				className='absolute top-14 w-60 z-10'
				src='src/assets/images/bg-triangle.svg'
				alt='triangle'
			/>
			{Object.values(variants).map(variant => (
				<Variant
					key={variant}
					variant={variant}
					setSelectedVariant={setSelectedVariant}
				/>
			))}
		</div>
	)
}

export default Picker
