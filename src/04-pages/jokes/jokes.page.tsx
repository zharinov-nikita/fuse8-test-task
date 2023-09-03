import { S } from './jokes.styled'
import {
    UiBackToSearchJokeComponent,
    UiFindJokeComponent,
    UiJokesError,
    UiJokesListComponent,
    UiJokesLoading,
} from './ui'

export const PageJokes = () => {
    return (
        <S.PageJokes>
            <UiFindJokeComponent />
            <UiJokesError />
            <UiJokesLoading />
            <UiJokesListComponent />
            <UiBackToSearchJokeComponent />
        </S.PageJokes>
    )
}
