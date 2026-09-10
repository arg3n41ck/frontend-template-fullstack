"use client"

import { useQueryStates } from 'nuqs'
import { searchParsers, type SearchState } from '@/shared/libs/search-params'

// Applied state lives in the URL. Debounced text drafts belong in the feature UI.
export function useListSearch(options: { serverDriven?: boolean } = {}) {
  const [state, setState] = useQueryStates(searchParsers, {
    history: 'replace',
    shallow: !options.serverDriven,
    scroll: false,
    clearOnDefault: true,
  })
  const setFilters = (patch: Partial<Omit<SearchState, 'page'>>) => {
    const normalized: Partial<SearchState> = {}
    if (patch.q !== undefined) normalized.q = searchParsers.q.parse(patch.q) ?? ''
    if (patch.limit !== undefined) normalized.limit = searchParsers.limit.parse(String(patch.limit)) ?? 20
    if (patch.order !== undefined) normalized.order = searchParsers.order.parse(patch.order) ?? 'asc'
    return setState({ ...normalized, page: 1 })
  }
  const setPage = (page: number) => setState(
    { page: searchParsers.page.parse(String(page)) ?? 1 }, { history: 'push' },
  )
  // Only these owned keys are cleared, unrelated params and hash are preserved.
  const reset = () => setState(null)
  return { state, setFilters, setPage, reset }
}
