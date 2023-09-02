import React from 'react'
import { ReactNode, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { appStyleTheme } from '../src/06-app'

export const TestProvider = (props: { children?: ReactNode }) => {
    return (
        <StrictMode>
            <BrowserRouter>
                <ThemeProvider theme={appStyleTheme}>
                    {props.children}
                </ThemeProvider>
            </BrowserRouter>
        </StrictMode>
    )
}
