import { ValueOf } from '../types'

export const variants = {
	paper: 'paper',
	scissors: 'scissors',
	rock: 'rock'
} as const

export type Variant = ValueOf<typeof variants>
