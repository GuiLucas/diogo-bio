export type Either<T, U> = T | U
export type Key = string | number | symbol
export type Optional<T> = Either<T, undefined>
export type Options<T> = Optional<Partial<T>>;
export type ReadonlyOrMutable<T> = Readonly<T> | T;
export type DictionaryRecord<K extends Key, T> = Partial<Record<K, T>>
export type Dictionary<T> = DictionaryRecord<string, T>
export type KeyOf<T> = keyof T;
export type ValueOf<R extends {} | [], K extends keyof R = keyof R> = R extends ReadonlyOrMutable<any[]> ? R[number] : R[K];
