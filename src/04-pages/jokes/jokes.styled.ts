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
            margin-bottom: 16px;
            padding: 0px 16px;
        }
    `

    export const FindJoke = styled.div`
        max-width: 626px;
        width: 100%;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
    `

    export const JokeSearchField = styled(SharedUiInputComponent)``

    export const FoundJokesNumber = styled.p`
        color: ${({ theme }) => theme.colors.secondary};
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    `

    export const PrimaryJokesList = styled.div`
        display: grid;
        gap: 24px;
        grid-template-columns: 1fr;

        @media (min-width: 726px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `

    export const SecondaryJokesList = styled(PrimaryJokesList)`
        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
    `

    export const JokeItem = styled(SharedUiCardComponent)`
        width: 100%;
        min-height: 300px;
    `

    export const JokesListSkeleton = styled.div`
        display: flex;
        flex-direction: column;
        gap: 24px;
    `

    export const PrimaryJokesListSkeleton = styled(PrimaryJokesList)``
    export const SecondaryJokesListSkeleton = styled(SecondaryJokesList)``

    export const JokeItemSkeleton = styled(SharedUiCardSkeleton)`
        width: 100%;
        min-height: 300px;
    `
}
