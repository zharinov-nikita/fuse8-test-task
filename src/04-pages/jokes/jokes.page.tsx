import { utilFormatDate, utilGenerateArrayWithUniqueIds } from '@shared'
import { S } from './jokes.styled'
import { usePageJokes } from './jokes.hook'
import type { Joke } from './jokes.type'
import { memo } from 'react'

const Jokes = memo((props: { jokes: Joke[] }) => {
    return props.jokes.map(({ id, value, created_at, url }) => (
        <S.JokeItem
            target='_blank'
            to={url}
            title={value}
            key={id + value}
            id={id}
            date={utilFormatDate(created_at)}
        />
    ))
})

const JokesSkeleton = () => {
    return (
        <S.JokesListSkeleton>
            <S.PrimaryJokesListSkeleton>
                {utilGenerateArrayWithUniqueIds(2).map(({ id }) => (
                    <S.JokeItemSkeleton key={id} />
                ))}
            </S.PrimaryJokesListSkeleton>
            <S.SecondaryJokesListSkeleton>
                {utilGenerateArrayWithUniqueIds(6).map(({ id }) => (
                    <S.JokeItemSkeleton key={id} />
                ))}
            </S.SecondaryJokesListSkeleton>
        </S.JokesListSkeleton>
    )
}

const JokesLoading = memo((props: { isLoading: boolean; joke: string }) => {
    return props.joke.length > 3 && props.isLoading && <JokesSkeleton />
})

const JokesError = memo((props: { isError: boolean }) => {
    return <>{props.isError && 'An error has occurred'}</>
})

export const PageJokes = () => {
    const { onChange, query, joke, foundJokes } = usePageJokes()

    return (
        <S.PageJokes>
            <S.FindJoke>
                <S.JokeSearchField
                    value={joke}
                    onChange={onChange}
                    placeholder='Search jokes...'
                    autoFocus
                />
                <S.FoundJokesNumber>
                    Found jokes: {foundJokes}
                </S.FoundJokesNumber>
            </S.FindJoke>
            <JokesLoading isLoading={query.isLoading} joke={joke} />
            <JokesError isError={query.isError} />
            <S.PrimaryJokesList>
                {query.data && <Jokes jokes={query.data.result.slice(0, 2)} />}
            </S.PrimaryJokesList>
            <S.SecondaryJokesList>
                {query.data && <Jokes jokes={query.data.result.slice(2)} />}
            </S.SecondaryJokesList>
        </S.PageJokes>
    )
}
