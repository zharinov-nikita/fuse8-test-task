import { SharedUiCardComponent, SharedUiInputComponent } from '@shared'
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
        grid-template-columns: repeat(3, 1fr); /* Три столбца для всех рядов */
        grid-gap: 10px; /* Пространство между элементами */
    `
    export const Joke = styled(SharedUiCardComponent)`
        min-height: 300px;

        &:nth-child(-n + 1) {
            grid-column: span 2; /* Используем 2 колонки для первых двух элементов */
        }
    `
}
