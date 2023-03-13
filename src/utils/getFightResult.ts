import { FightResult, fightResults } from '../components/Fight'
import { Variant, variants } from '../data/variants'

export const getFightResult = (
	selectedVariant: Variant,
	houseVariant: Variant
): FightResult => {
	if (
		(selectedVariant === variants.rock && houseVariant === variants.scissors) ||
		(selectedVariant === variants.scissors && houseVariant === variants.paper) ||
		(selectedVariant === variants.paper && houseVariant === variants.rock)
	) {
		return fightResults.win
	} else if (
		(selectedVariant === variants.rock && houseVariant === variants.paper) ||
		(selectedVariant === variants.paper && houseVariant === variants.scissors) ||
		(selectedVariant === variants.scissors && houseVariant === variants.rock)
	) {
		return fightResults.lose
	}
	return fightResults.tie
}
