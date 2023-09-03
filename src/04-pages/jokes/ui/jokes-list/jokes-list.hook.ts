import { usePageJokesStore } from '../../jokes.store'
import { useEffect, useState } from 'react'
import css from './jokes-list.module.css'
import { useMutation } from '@tanstack/react-query'
import { EntityJokesApi } from '@entities'

export function useUiJokesList() {
    const pageJokesStore = usePageJokesStore((s) => s)

    const [{ startIndex, endIndex }, setVisibleRange] = useState({
        startIndex: 0,
        endIndex: 0,
    })

    const listClassName = startIndex === 0 ? css.listPrimary : css.listSecondary
    const itemClassName = startIndex === 0 ? css.itemPrimary : css.itemSecondary

    useEffect(() => {
        pageJokesStore.setIsVisibleRange({ startIndex, endIndex })
    }, [startIndex, endIndex])

    const mutation = useMutation({
        mutationFn: (joke: string) => {
            return new EntityJokesApi().searchJokes(joke)
        },
    })

    useEffect(() => {
        if (pageJokesStore.joke.length > 3) {
            mutation.mutate(pageJokesStore.joke)
        } else {
            mutation.reset()
        }
    }, [pageJokesStore.joke])

    useEffect(() => {
        pageJokesStore.setIsLoading(mutation.isLoading)
        pageJokesStore.setIsError(mutation.isError)
        pageJokesStore.setJokes(mutation.data?.result || [])
        pageJokesStore.setFoundJokes(mutation.data?.result.length || 0)
    }, [mutation.isLoading, mutation.isError, mutation.data])

    return {
        pageJokesStore,
        listClassName,
        itemClassName,
        setVisibleRange,
    }
}
