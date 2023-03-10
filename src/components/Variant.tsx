import { FC } from 'react'
import { variantColors } from '../data/variantColors'
import { Variant as TVariant } from '../data/variants'

type VariantProps = {
	variant: TVariant
	setSelectedVariant?: (variant: TVariant) => void
}

const Variant: FC<VariantProps> = ({
	variant,
	setSelectedVariant = () => {}
}) => {
	return (
		<div
			key={variant}
			className={`flex justify-center items-center z-20 w-32 h-32 rounded-full ${variantColors[variant!]}`}
			onClick={() => setSelectedVariant(variant)}
		>
			<div className='w-24 h-24 bg-white rounded-full flex shadow-[inset_0_5px_#ccc] justify-center items-center'>
				<img
					className='w-10 h-12'
					src={`src/assets/images/icon-${variant}.svg`}
					alt={`${variant}`}
				/>
			</div>
		</div>
	)
}

export default Variant
