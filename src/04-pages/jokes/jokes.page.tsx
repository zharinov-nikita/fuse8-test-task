import { utilFormatDate, utilGenerateArrayWithUniqueIds } from '@shared'
import { S } from './jokes.styled'
import { usePageJokes } from './jokes.hook'
import type { Joke } from './jokes.type'
import { memo } from 'react'

const Jokes = memo((props: { jokes: Joke[] }) => {
    return props.jokes.map(({ id, value, created_at, url }) => (
        <S.Joke
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
        <S.JokesWrapperSkeleton>
            <S.FirstRowJokesSkeleton>
                {utilGenerateArrayWithUniqueIds(2).map(({ id }) => (
                    <S.JokeSkeleton key={id} />
                ))}
            </S.FirstRowJokesSkeleton>
            <S.JokesSkeleton>
                {utilGenerateArrayWithUniqueIds(6).map(({ id }) => (
                    <S.JokeSkeleton key={id} />
                ))}
            </S.JokesSkeleton>
        </S.JokesWrapperSkeleton>
    )
}

export const PageJokes = () => {
    const { onChange, query, joke, foundJokes } = usePageJokes()

    return (
        <S.PageJokes>
            <S.SearchJokes>
                <S.SearchJokesInput
                    value={joke}
                    onChange={onChange}
                    placeholder='Search jokes...'
                    autoFocus
                />
                <S.FoundJokes>Found jokes: {foundJokes}</S.FoundJokes>
            </S.SearchJokes>
            {joke.length > 3 && query.isLoading && <JokesSkeleton />}
            <S.FirstRowJokes>
                {query.data && <Jokes jokes={query.data.result.slice(0, 2)} />}
            </S.FirstRowJokes>
            <S.Jokes>
                {query.data && <Jokes jokes={query.data.result.slice(2)} />}
            </S.Jokes>
        </S.PageJokes>
    )
}
