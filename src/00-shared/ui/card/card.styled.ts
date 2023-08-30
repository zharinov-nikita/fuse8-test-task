import { styled } from 'styled-components'

export namespace S {
    export const Card = styled.div`
        background: #fff;
        box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    `
    export const CardBody = styled.div``

    export const CardFooter = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `

    export const Title = styled.div`
        color: ${({ theme }) => theme.colors.primary};
        font-size: 20px;
        font-weight: 400;
    `

    export const SecondaryText = styled.p`
        color: ${({ theme }) => theme.colors.secondary};
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 14px;
        font-weight: 400;
    `

    export const Hash = styled(SecondaryText)``
    export const Date = styled(SecondaryText)``
}
