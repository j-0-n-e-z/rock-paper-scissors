import { Variant } from '../data/variants'

export function getRandomVariant(): Variant {
	return ['rock', 'paper', 'scissors'][~~(Math.random() * 2.99)] as Variant
}
