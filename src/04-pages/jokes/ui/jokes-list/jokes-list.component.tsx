import { sharedUtilFormatDate, sharedUtilTruncateString } from '@shared'
import { VirtuosoGrid as JokesList } from 'react-virtuoso'
import { useUiJokesList } from './jokes-list.hook'
import { S } from './jokes.styled'

export const UiJokesListComponent = () => {
    const { pageJokesStore, listClassName, itemClassName, setVisibleRange } =
        useUiJokesList()
    return (
        <>
            {pageJokesStore.jokes && (
                <JokesList
                    useWindowScroll
                    data={pageJokesStore.jokes}
                    listClassName={listClassName}
                    itemClassName={itemClassName}
                    totalCount={pageJokesStore.jokes.length}
                    rangeChanged={setVisibleRange}
                    itemContent={(_, value) => (
                        <S.JokesItem
                            target='_blank'
                            to={value.url}
                            title={sharedUtilTruncateString(
                                value.value,
                                120,
                                '...'
                            )}
                            key={value.id + value.value}
                            id={value.id}
                            date={sharedUtilFormatDate(value.created_at)}
                            highlightSearchTerm={pageJokesStore.joke}
                        />
                    )}
                />
            )}
        </>
    )
}
