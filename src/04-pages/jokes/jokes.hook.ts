import { useQuery } from '@tanstack/react-query'
import { useState, useCallback, ChangeEvent } from 'react'

interface Joke {
    id: string
    value: string
    created_at: string
    updated_at: string
    icon_url: string
    url: string
}

interface JokesSearch {
    total: number
    result: Joke[]
}

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

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setJoke(e.target.value)
    }, [])

    const query = useQuery<JokesSearch>({
        queryKey: ['jokes', joke],
        queryFn: () => getJokes(joke),
        enabled: joke.length > 3,
    })

    return { onChange, query, joke }
}
