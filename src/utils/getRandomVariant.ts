import { variants } from '../data/variants'

export function getRandomVariant() {
	return Object.values(variants)[~~(Math.random() * 2.99)]
}
