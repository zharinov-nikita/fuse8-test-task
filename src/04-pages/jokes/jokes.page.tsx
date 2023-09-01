import { SharedUiCardSkeleton, utilFormatDate } from '@shared'
import { S } from './jokes.styled'
import { usePageJokes } from './jokes.hook'
import { mockJokes } from '../../__mock__'
import { VirtuosoGrid } from 'react-virtuoso'
import s from './jokes.module.css'
import { ChangeEventHandler, memo, useEffect, useState } from 'react'
import { JokesSearch } from './jokes.type'

export const PageJokes = () => {
    const { onChange, joke, foundJokes } = usePageJokes()
    return (
        <S.PageJokes>
            <FoundJokes
                joke={joke}
                onChange={onChange}
                foundJokes={foundJokes}
            />
            <Jokes />
        </S.PageJokes>
    )
}

const FoundJokes = memo(
    (props: {
        joke: string
        onChange: ChangeEventHandler
        foundJokes: number
    }) => {
        return (
            <S.FindJoke>
                <S.JokeSearchField
                    value={props.joke}
                    onChange={props.onChange}
                    placeholder='Search jokes...'
                    autoFocus
                />
                <S.FoundJokesNumber>
                    Found jokes: {props.foundJokes}
                </S.FoundJokesNumber>
            </S.FindJoke>
        )
    }
)

const Jokes = () => {
    return (
        <VirtuosoGrid
            data={mockJokes}
            itemClassName={s.item}
            listClassName={s.list}
            totalCount={mockJokes.length}
            itemContent={(_, joke) => (
                <S.JokeItem
                    target='_blank'
                    to={joke.url}
                    title={joke.value}
                    key={joke.id + joke.value}
                    id={joke.id}
                    date={utilFormatDate(joke.created_at)}
                />
            )}
            components={{
                ScrollSeekPlaceholder: ({ height, width }) => (
                    <SharedUiCardSkeleton
                        style={{ height, gridColumn: 'span 2' }}
                    />
                ),
            }}
            scrollSeekConfiguration={{
                enter: (velocity) => Math.abs(velocity) > 200,
                exit: (velocity) => Math.abs(velocity) < 30,
                change: (_, range) => console.log({ range }),
            }}
        />
    )
}
