import { useQuery, useMutation } from '@tanstack/react-query'
import { useState, useCallback, ChangeEvent, useEffect } from 'react'
import type { JokesSearch } from './jokes.type'
import axios from 'axios'

async function getJokes(joke: string): Promise<JokesSearch> {
    const API = 'https://api.chucknorris.io'

    const params = {
        query: joke,
    }

    const response = await axios.get<JokesSearch>(`${API}/jokes/search`, {
        params,
    })

    return response.data
}

export function usePageJokes() {
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
        mutationFn: (debouncedJoke: string) => getJokes(debouncedJoke),
    })

    useEffect(() => {
        if (debouncedJoke.length > 3) {
            mutation.mutate(debouncedJoke)
        } else {
            mutation.reset()
        }
    }, [debouncedJoke])

    const foundJokes = mutation.data?.total || 0

    return { onChange, joke, foundJokes, mutation }
}
