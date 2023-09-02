import {
    SharedUiCardSkeleton,
    utilFormatDate,
    utilGenerateArrayWithUniqueIds,
} from '@shared'
import { S } from './jokes.styled'
import { usePageJokes } from './jokes.hook'
import { VirtuosoGrid } from 'react-virtuoso'
import s from './jokes.module.css'
import styled from 'styled-components'

export const StyledComponent = styled.div`
    width: 100%;
`

export const PageJokes = () => {
    const { onChange, joke, foundJokes, mutation } = usePageJokes()

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
                    Found jokes:{' '}
                    {mutation.isLoading ? 'Loading...' : foundJokes}
                </S.FoundJokesNumber>
            </S.FindJoke>
            {mutation.isError && <JokesError />}
            {mutation.isLoading && <JokesLoading />}
            {mutation.data && (
                <VirtuosoGrid
                    data={mutation.data.result}
                    itemClassName={s.item}
                    listClassName={s.list}
                    totalCount={mutation.data.result.length}
                    itemContent={(_, value) => (
                        <S.JokeItem
                            target='_blank'
                            to={value.url}
                            title={value.value}
                            key={value.id + value.value}
                            id={value.id}
                            date={utilFormatDate(value.created_at)}
                            highlightSearchTerm={joke}
                        />
                    )}
                    components={{
                        ScrollSeekPlaceholder: ({ height, width }) => (
                            <SharedUiCardSkeleton style={{ height, width }} />
                        ),
                    }}
                    scrollSeekConfiguration={{
                        enter: (velocity) => Math.abs(velocity) > 200,
                        exit: (velocity) => Math.abs(velocity) < 30,
                        change: (_, range) => console.log({ range }),
                    }}
                />
            )}
        </S.PageJokes>
    )
}

const JokesLoading = () => {
    return (
        <div className={s.list}>
            {utilGenerateArrayWithUniqueIds(10).map(({ id }) => (
                <S.JokeItemSkeleton key={id} />
            ))}
        </div>
    )
}

const JokesError = () => {
    return (
        <div>
            An error occurred when requesting the server
            https://api.chucknorris.io/
        </div>
    )
}
