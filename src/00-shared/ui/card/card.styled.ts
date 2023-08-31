import { styled, keyframes } from 'styled-components'

const pulseAnimation = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`

export namespace S {
    export const Card = styled.div`
        background: #fff;
        box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

        &:hover {
            color: ${({ theme }) => theme.colors.brand};
        }
    `

    export const TitleSkeleton = styled.div`
        animation: ${pulseAnimation} 1.5s infinite;
        background-color: #e0e0e0;
        height: 20px;
        width: 100%;
    `

    export const SecondaryText = styled.p`
        color: ${({ theme }) => theme.colors.secondary};
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 14px;
        font-weight: 400;
    `

    export const Id = styled(SecondaryText)``

    export const IdSkeleton = styled.div`
        animation: ${pulseAnimation} 1.5s infinite;
        background-color: #e0e0e0;
        height: 20px;
        width: 120px;
    `

    export const Date = styled(SecondaryText)``

    export const DateSkeleton = styled.div`
        animation: ${pulseAnimation} 1.5s infinite;
        background-color: #e0e0e0;
        height: 20px;
        width: 40px;
    `
}
