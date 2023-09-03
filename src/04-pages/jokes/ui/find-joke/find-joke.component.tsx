import { S } from './find-joke.styled'
import { useUiFindJoke } from './find-joke.hook'

export const UiFindJokeComponent = () => {
    const { pageJokesStore, onChange } = useUiFindJoke()

    return (
        <S.FindJoke>
            <S.JokeSearchField
                value={pageJokesStore.joke}
                onChange={onChange}
                placeholder="Search jokes..."
                autoFocus
            />
            <S.FoundJokesNumber>
                Found jokes:{' '}
                {pageJokesStore.isLoading
                    ? 'Loading...'
                    : pageJokesStore.foundJokes}
            </S.FoundJokesNumber>
        </S.FindJoke>
    )
}
