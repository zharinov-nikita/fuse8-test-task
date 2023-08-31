import {
    SharedUiCardComponent,
    SharedUiCardSkeleton,
    SharedUiInputComponent,
} from '@shared'
import { styled } from 'styled-components'

export namespace S {
    export const PageJokes = styled.div`
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 0 auto;
        max-width: 1596px;
        width: 100%;

        @media (min-width: 576px) {
            margin-top: 128px;
            padding: 0px 16px;
        }
    `

    export const SearchJokes = styled.div`
        max-width: 626px;
        width: 100%;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
    `

    export const SearchJokesInput = styled(SharedUiInputComponent)``

    export const FoundJokes = styled.p`
        color: ${({ theme }) => theme.colors.secondary};
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    `

    export const Jokes = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;

        @media (min-width: 768px) and (max-width: 991.98px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(3, 1fr);
        }
    `

    export const FirstRowJokes = styled(Jokes)`
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 575.98px) {
            grid-template-columns: 1fr;
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(2, 1fr);
        }
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
