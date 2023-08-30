export interface AppStyleTheme {
    colors: {
        brand: string
        primary: string
        secondary: string
    }
    fonts: {
        primary: string
        secondary: string
    }
}

export const appStyleTheme: AppStyleTheme = {
    colors: {
        brand: '#656EC2',
        primary: '#282626',
        secondary: '#767676',
    },
    fonts: {
        primary: 'Fira Sans',
        secondary: 'Montserrat',
    },
}
