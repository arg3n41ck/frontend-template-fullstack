import { createLoader, createParser, createSerializer, parseAsStringLiteral, type inferParserType } from 'nuqs/server'

// Starter bounds; match these to the real API when creating a feature schema.
export const MAX_PAGE = 1_000_000
export const MAX_QUERY_LENGTH = 200
const positiveInteger = createParser({
  parse(value) {
    if (!/^[1-9]\d*$/.test(value)) return null
    const number = Number(value)
    return Number.isSafeInteger(number) && number <= MAX_PAGE ? number : null
  },
  serialize: String,
})
const pageSize = createParser({
  parse(value) {
    return ['10', '20', '50', '100'].includes(value) ? Number(value) : null
  },
  serialize: String,
})
const query = createParser({
  parse: value => value.length <= MAX_QUERY_LENGTH ? value.trim() : null,
  serialize: String,
})

export const searchParsers = {
  q: query.withDefault(''),
  page: positiveInteger.withDefault(1),
  limit: pageSize.withDefault(20),
  order: parseAsStringLiteral(['asc', 'desc']).withDefault('asc'),
}
export type SearchState = inferParserType<typeof searchParsers>
export const loadSearchParams = createLoader(searchParsers)
export const serializeSearchParams = createSerializer(searchParsers)
