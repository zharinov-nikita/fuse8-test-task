import { Link } from 'react-router-dom'
import { styled, keyframes } from 'styled-components'

const pulseAnimation = keyframes`
  0% {
    background-color: ${({ theme }) => theme.colors.skeletonPrimary};
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: ${({ theme }) => theme.colors.skeletonPrimary};
  }
`

export namespace S {
    export const Card = styled.div`
        background: #fff;
        box-shadow: 0px 7px 25px 0px rgba(100, 100, 111, 0.2);
        padding: 16px;
        display: grid;
        gap: 16px;
    `

    export const Title = styled(Link)`
        color: ${({ theme }) => theme.colors.primary};
        font-size: 20px;
        font-weight: 400;
        overflow-wrap: break-word;
        overflow: auto;
    `

    export const HighlightedText = styled.span`
        background-color: ${({ theme }) => theme.colors.brand};
        color: #fff;
    `

    export const TitleSkeleton = styled.div`
        animation: ${pulseAnimation} 1.5s infinite;
        background-color: ${({ theme }) => theme.colors.skeletonPrimary};
        height: 20px;
        width: 100%;
    `

    export const CardFooter = styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    `

    export const SecondaryText = styled.p`
        color: ${({ theme }) => theme.colors.secondary};
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: 14px;
        font-weight: 400;
    `

    export const Id = styled(SecondaryText)`
        white-space: normal;
        overflow-wrap: break-word;

        @media (max-width: 576px) {
            max-width: 120px;
        }
    `

    export const IdSkeleton = styled.div`
        animation: ${pulseAnimation} 1.5s infinite;
        background-color: ${({ theme }) => theme.colors.skeletonPrimary};
        height: 20px;
        width: 120px;
    `

    export const Date = styled(SecondaryText)`
        white-space: normal;
        overflow-wrap: break-word;
    `

    export const DateSkeleton = styled.div`
        animation: ${pulseAnimation} 1.5s infinite;
        background-color: ${({ theme }) => theme.colors.skeletonPrimary};
        height: 20px;
        width: 40px;
    `
}
