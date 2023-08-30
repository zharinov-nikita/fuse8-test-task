import { SharedUiCardComponent, SharedUiInputComponent } from '@shared'
import { S } from './jokes.styled'
import { usePageJokes } from './jokes.hook'
export const PageJokes = () => {
    const { onChange, query, joke } = usePageJokes()

    console.log(query)

    return (
        <S.PageJokes>
            <SharedUiInputComponent
                value={joke}
                onChange={onChange}
                placeholder='Search jokes...'
                autoFocus
            />
            <S.FoundJokes>Found jokes: {query.data?.total || 0}</S.FoundJokes>
            {query.data &&
                query.data.result.map(({ id, value }) => (
                    <SharedUiCardComponent title={value} key={id} />
                ))}
        </S.PageJokes>
    )
}
