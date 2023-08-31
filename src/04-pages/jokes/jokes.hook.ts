import { useQuery } from '@tanstack/react-query'
import { useState, useCallback, ChangeEvent, useEffect } from 'react'
import type { JokesSearch } from './jokes.type'

async function getJokes(joke: string): Promise<JokesSearch> {
    const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${joke}`
    )

    if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    return response.json()
}

export function usePageJokes() {
    const [joke, setJoke] = useState<string>('')
    const [debouncedJoke, setDebouncedJoke] = useState<string>('')

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setJoke(e.target.value)
    }, [])

    useEffect(() => {
        console.log('Debounced joke updated:', debouncedJoke)

        const debounceTimer = setTimeout(() => {
            setDebouncedJoke(joke)
        }, 300)

        return () => {
            clearTimeout(debounceTimer)
        }
    }, [joke])

    const query = useQuery<JokesSearch>({
        queryKey: ['jokes', debouncedJoke],
        queryFn: () => getJokes(debouncedJoke),
        enabled: debouncedJoke.length > 3,
    })

    const foundJokes = query.data?.total || 0

    return { onChange, query, joke, foundJokes }
}
