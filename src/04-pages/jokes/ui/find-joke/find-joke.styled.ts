import { SharedUiInputComponent } from '@shared'
import { styled } from 'styled-components'

export namespace S {
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
}
