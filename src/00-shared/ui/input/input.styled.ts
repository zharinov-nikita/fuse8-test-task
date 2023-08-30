import styled from 'styled-components'

export namespace S {
    export const Input = styled.input`
        width: 100%;
        color: ${({ theme }) => theme.colors.brand};
        display: flex;
        align-items: center;
        background-color: #fff;
        border: none;
        font-size: 22px;
        font-weight: bold;
        filter: drop-shadow(0px 7px 12px rgba(100, 100, 111, 0.2));
        padding: 12px 24px;

        &::placeholder {
            color: #656ec2;
        }
    `
}
