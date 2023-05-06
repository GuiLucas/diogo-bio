import type * as Core from "./core"

export const EntryTypes = [
	'ARCHITECTURAL LIGHTING DESIGN',
	'INSTALLATION',
	'LIVE AV PERFORMANCE',
	'SET DESIGN',
	'SCENOGRAPHY',
	'LIGHT AND STAGE DESIGN',
	'LIGHT DESIGN TO THEATER / PERFORMANCE'
] as const

export type EntryType = Core.ValueOf<typeof EntryTypes, number>

export type Entry = {
	name: string
	year: string
	location: Core.Optional<string>
	team: Core.Optional<string>
	type: EntryType
	city: string
	balance?: boolean
}