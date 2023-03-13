import { FightResult, fightResults } from '../components/Fight'
import { Variant, variants } from '../data/variants'

export const getFightResult = (
	selectedVariant: Variant,
	houseVariant: Variant
): FightResult => {
	const variantsValues = Object.values(variants)
	const selectedVariantIndex = variantsValues.findIndex(
		x => x === selectedVariant
	)
	const houseVariantIndex = variantsValues.findIndex(x => x === houseVariant)

	if (
		selectedVariantIndex ===
		(houseVariantIndex + 1) % variantsValues.length
	) {
		return fightResults.win
	} else if (
		selectedVariantIndex ===
		(houseVariantIndex + 2) % variantsValues.length
	) {
		return fightResults.lose
	}
	return fightResults.tie
}
