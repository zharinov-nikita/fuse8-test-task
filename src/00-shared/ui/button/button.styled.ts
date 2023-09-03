import styled from 'styled-components'

export namespace S {
    export const Button = styled.button`
        cursor: pointer;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.brand};
        border: none;
        font-size: 22px;
        font-weight: bold;
        padding: 12px 24px;
        min-height: 64px;
    `
}
