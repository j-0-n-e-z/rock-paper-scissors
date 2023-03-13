import { FightResult, fightResults } from '../components/Fight'
import { Variant } from '../data/variants'

export const getFightResult = (
	selectedVariant: Variant,
	houseVariant: Variant
): FightResult => {
	if (
		(selectedVariant === 'rock' && houseVariant === 'scissors') ||
		(selectedVariant === 'scissors' && houseVariant === 'paper') ||
		(selectedVariant === 'paper' && houseVariant === 'rock')
	) {
		return fightResults.win
	} else if (
		(selectedVariant === 'rock' && houseVariant === 'paper') ||
		(selectedVariant === 'paper' && houseVariant === 'scissors') ||
		(selectedVariant === 'scissors' && houseVariant === 'rock')
	) {
		return fightResults.lose
	}
	return fightResults.tie
}
