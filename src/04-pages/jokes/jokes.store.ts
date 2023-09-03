import { EntityJokeType } from '@entities'
import { create } from 'zustand'

interface IsVisibleRange {
    startIndex: number
    endIndex: number
}

interface PageJokesStore {
    // шутка, которую ищет пользователь и вписывает в поле ввода
    joke: string
    setJoke: (joke: string) => void

    // кол-во шуток, которые были найдены после поиска
    foundJokes: number
    setFoundJokes: (foundJokes: number) => void

    // грузятся ли шутки
    jokes: EntityJokeType[]
    setJokes: (jokes: EntityJokeType[]) => void

    // Состояние загрузки
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void

    // была ли ошибка при загрузке шуток
    isError: boolean
    setIsError: (isError: boolean) => void

    // данные о позиции скролла виртуального списка с шутками
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
