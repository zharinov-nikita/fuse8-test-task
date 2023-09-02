import { keyframes } from 'styled-components'

export interface AppStyleTheme {
    colors: {
        brand: string
        primary: string
        secondary: string
        skeletonPrimary: string
        skeletonSecondary: string
    }
    fonts: {
        primary: string
        secondary: string
    }
    animations: {
        // any no good
        skeleton: any
    }
}

const skeletonAnimations = keyframes`
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

export const appStyleTheme: AppStyleTheme = {
    colors: {
        brand: '#656EC2',
        primary: '#282626',
        secondary: '#767676',
        skeletonPrimary: '#e0e0e0',
        skeletonSecondary: '#e0e0e0',
    },
    fonts: {
        primary: 'Fira Sans',
        secondary: 'Montserrat',
    },
    animations: {
        skeleton: skeletonAnimations,
    },
}
