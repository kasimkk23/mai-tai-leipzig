import de from './locales/de'

/** Same key structure as the German canonical file, but every leaf widened to `string`. */
type DeepString<T> = T extends string ? string : { [K in keyof T]: DeepString<T[K]> }

export type Translation = DeepString<typeof de>
