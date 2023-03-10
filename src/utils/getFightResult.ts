import { FightResult } from '../components/Fight'
import { Variant } from '../data/variants'

export const getFightResult = (
	selectedVariant: Variant,
	houseVariant: Variant
): FightResult => {
	console.log(selectedVariant)
	console.log(houseVariant)
	if (
		(selectedVariant === 'rock' && houseVariant === 'scissors') ||
		(selectedVariant === 'scissors' && houseVariant === 'paper') ||
		(selectedVariant === 'paper' && houseVariant === 'rock')
	) {
		return 'you win'
	} else if (
		(selectedVariant === 'rock' && houseVariant === 'paper') ||
		(selectedVariant === 'paper' && houseVariant === 'scissors') ||
		(selectedVariant === 'scissors' && houseVariant === 'rock')
	) {
		return 'you lose'
	}
	return 'tie'
}
