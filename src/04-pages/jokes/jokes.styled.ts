import { styled } from 'styled-components'

export namespace S {
    export const PageJokes = styled.div`
        display: grid;
        gap: 60px;
        margin-top: 126px;

        @media screen and (max-width: 1024px) {
            gap: 16px;
            margin-top: 16px;
        }
    `
}
