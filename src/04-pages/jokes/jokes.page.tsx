import {
    SharedUiCardComponent,
    SharedUiInputComponent,
    utilFormatDate,
} from '@shared'
import { S } from './jokes.styled'
import { usePageJokes } from './jokes.hook'
export const PageJokes = () => {
    const { onChange, query, joke } = usePageJokes()

    console.log(query)

    return (
        <S.PageJokes>
            <S.SearchJokes>
                <S.SearchJokesInput
                    value={joke}
                    onChange={onChange}
                    placeholder='Search jokes...'
                    autoFocus
                />
            </S.SearchJokes>
            <S.FoundJokes>Found jokes: {query.data?.total || 0}</S.FoundJokes>
            <S.Jokes>
                {query.data &&
                    query.data.result.map(({ id, value, created_at, url }) => (
                        <S.Joke
                            target='_blank'
                            to={url}
                            title={value}
                            key={id}
                            id={id}
                            date={utilFormatDate(created_at)}
                        />
                    ))}
            </S.Jokes>
        </S.PageJokes>
    )
}
