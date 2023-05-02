export type Either<T, U> = T | U
export type Key = string | number | symbol
export type Optional<T> = Either<T, undefined>
export type Options<T> = Optional<Partial<T>>;
export type ReadonlyOrMutable<T> = Readonly<T> | T;
export type DictionaryRecord<K extends Key, T> = Partial<Record<K, T>>
export type Dictionary<T> = DictionaryRecord<string, T>

export type KeyOf<T> = keyof T;

export type ValueOf<R extends {} | [], K extends keyof R = keyof R> = R extends ReadonlyOrMutable<any[]> ? R[number] : R[K];

export const ExhibitionTypes = [
	'ARCHITECTURAL LIGHTING DESIGN',
	'INSTALLATION',
	'LIVE AV PERFORMANCE',
	'SET DESIGN',
	'SCENOGRAPHY',
	'LIGHT AND STAGE DESIGN',
	'LIGHT DESIGN TO THEATER / PERFORMANCE'
] as const

export type ExhibitionType = ValueOf<typeof ExhibitionTypes, number>

export type Exhibition = {
	name: string
	year: string
	location: Optional<string>
	team: Optional<string>
	type: ExhibitionType
	city: string
}