import { usePageJokesStore } from '../../jokes.store'
import { useCallback, ChangeEvent } from 'react'

export function useUiFindJoke() {
    const pageJokesStore = usePageJokesStore((s) => s)

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        pageJokesStore.setJoke(e.target.value)
    }, [])

    return {
        onChange,
        pageJokesStore,
    }
}
