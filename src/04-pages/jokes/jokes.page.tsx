import {
    SharedUiButtonComponent,
    SharedUiCardSkeleton,
    sharedUtilFormatDate,
    sharedUtilGenerateArrayWithUniqueIds,
    sharedUtilTruncateString,
} from '@shared'
import { S } from './jokes.styled'
import { usePageJokes } from './jokes.hook'
import { VirtuosoGrid as JokesList } from 'react-virtuoso'
import css from './jokes.module.css'

export const PageJokes = () => {
    const {
        onChange,
        joke,
        foundJokes,
        mutation,
        visibleRange,
        setVisibleRange,
        backToSearch,
    } = usePageJokes()

    const listClassName =
        visibleRange.startIndex === 0 ? css.listPrimary : css.listSecondary
    const itemClassName =
        visibleRange.startIndex === 0 ? css.itemPrimary : css.itemSecondary

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
                <JokesList
                    useWindowScroll
                    data={mutation.data.result}
                    listClassName={listClassName}
                    itemClassName={itemClassName}
                    totalCount={mutation.data.result.length}
                    rangeChanged={setVisibleRange}
                    itemContent={(_, value) => (
                        <S.JokeItem
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
                            highlightSearchTerm={joke}
                        />
                    )}
                />
            )}
            {visibleRange.startIndex > 0 && (
                <S.BackToSearchContainer>
                    <S.BackToSearchWrapper>
                        <SharedUiButtonComponent onClick={backToSearch}>
                            Back to Search 🔍
                        </SharedUiButtonComponent>
                    </S.BackToSearchWrapper>
                </S.BackToSearchContainer>
            )}
        </S.PageJokes>
    )
}

const JokesLoading = () => {
    return (
        <div className={css.listPrimary}>
            {sharedUtilGenerateArrayWithUniqueIds(30).map(({ id }) => (
                <S.JokeItemSkeleton className={css.itemPrimary} key={id} />
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
