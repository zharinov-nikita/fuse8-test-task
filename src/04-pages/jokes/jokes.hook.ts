import { EntityJokesApi } from '@entities'
import { useMutation } from '@tanstack/react-query'
import { useState, useCallback, ChangeEvent, useEffect } from 'react'

export function usePageJokes() {
    const [visibleRange, setVisibleRange] = useState({
        startIndex: 0,
        endIndex: 0,
    })

    function backToSearch() {
        window.scrollTo(0, 0)
    }

    const [joke, setJoke] = useState<string>('')
    const [debouncedJoke, setDebouncedJoke] = useState<string>('')

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setJoke(e.target.value)
    }, [])

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebouncedJoke(joke)
        }, 300)

        return () => {
            clearTimeout(debounceTimer)
        }
    }, [joke])

    const mutation = useMutation({
        mutationFn: (debouncedJoke: string) =>
            new EntityJokesApi().searchJokes(debouncedJoke),
    })

    useEffect(() => {
        if (debouncedJoke.length > 3) {
            mutation.mutate(debouncedJoke)
        } else {
            mutation.reset()
        }
    }, [debouncedJoke])

    const foundJokes = mutation.data?.total || 0

    useEffect(() => {
        console.log(visibleRange)
    }, [visibleRange])

    return {
        onChange,
        joke,
        foundJokes,
        mutation,
        visibleRange,
        setVisibleRange,
        backToSearch,
    }
}
