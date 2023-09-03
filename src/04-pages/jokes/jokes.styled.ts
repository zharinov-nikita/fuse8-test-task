import {
    SharedUiCardComponent,
    SharedUiCardSkeleton,
    SharedUiInputComponent,
} from '@shared'
import { styled } from 'styled-components'

export namespace S {
    export const PageJokes = styled.div`
        display: grid;
        grid-template-rows: 100px calc(100vh - 100px - 60px - 126px);
        gap: 60px;
        margin-top: 126px;

        @media screen and (max-width: 992px) {
            gap: 16px;
            grid-template-rows: 100px calc(100vh - 100px - 16px);
            margin-top: 16px;
        }

        @media screen and (max-width: 726px) {
            margin-top: 16px;
        }
    `

    export const FindJoke = styled.div`
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 16px;
        max-width: 626px;
        width: 100%;
        margin: 0 auto;
    `

    export const JokeSearchField = styled(SharedUiInputComponent)``

    export const FoundJokesNumber = styled.p`
        color: ${({ theme }) => theme.colors.secondary};
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
    `

    export const JokeItem = styled(SharedUiCardComponent)`
        width: 100%;
        min-height: 300px;
        height: 100%;
    `

    export const JokeItemSkeleton = styled(SharedUiCardSkeleton)`
        width: 100%;
        min-height: 300px;
        height: 100%;
    `

    export const BackToSearchContainer = styled.div`
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    `
    export const BackToSearchWrapper = styled.div`
        padding: 16px;
        max-width: 626px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    `
}
