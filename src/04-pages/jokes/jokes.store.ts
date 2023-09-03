import { EntityJokeType } from '@entities'
import { create } from 'zustand'

interface IsVisibleRange {
    startIndex: number
    endIndex: number
}

interface PageJokesStore {
    joke: string
    setJoke: (joke: string) => void
    foundJokes: number
    setFoundJokes: (foundJokes: number) => void
    jokes: EntityJokeType[]
    setJokes: (jokes: EntityJokeType[]) => void
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
    isError: boolean
    setIsError: (isError: boolean) => void
    isVisibleRange: IsVisibleRange
    setIsVisibleRange: (isVisibleRange: IsVisibleRange) => void
}

export const usePageJokesStore = create<PageJokesStore>((set) => ({
    joke: '',
    setJoke: (joke) => set((s) => ({ ...s, joke })),
    foundJokes: 0,
    setFoundJokes: (foundJokes) => set((s) => ({ ...s, foundJokes })),
    jokes: [],
    setJokes: (jokes) => set((s) => ({ ...s, jokes })),
    isLoading: false,
    setIsLoading: (isLoading) => set((s) => ({ ...s, isLoading })),
    isError: false,
    setIsError: (isError) => set((s) => ({ ...s, isError })),
    isVisibleRange: { startIndex: 0, endIndex: 0 },
    setIsVisibleRange: (isVisibleRange) =>
        set((s) => ({ ...s, isVisibleRange })),
}))
