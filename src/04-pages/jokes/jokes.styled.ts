import {
    SharedUiCardComponent,
    SharedUiCardSkeleton,
    SharedUiInputComponent,
} from '@shared'
import { styled } from 'styled-components'

export namespace S {
    export const PageJokes = styled.div`
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    `

    export const SearchJokes = styled.div``

    export const SearchJokesInput = styled(SharedUiInputComponent)``

    export const FoundJokes = styled.p``

    export const Jokes = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    `

    export const FirstRowJokes = styled(Jokes)`
        grid-template-columns: repeat(2, 1fr);
    `

    export const Joke = styled(SharedUiCardComponent)`
        width: 100%;
        min-height: 300px;
    `

    export const JokesWrapperSkeleton = styled.div`
        display: flex;
        flex-direction: column;
        gap: 24px;
    `

    // Skeleton
    export const JokesSkeleton = styled(Jokes)``
    export const FirstRowJokesSkeleton = styled(FirstRowJokes)``
    export const JokeSkeleton = styled(SharedUiCardSkeleton)`
        width: 100%;
        min-height: 300px;
    `
}
