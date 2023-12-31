import { Navigate, Route, Routes } from 'react-router-dom'
import { AppStyleReset, appStyleTheme } from './styles'
import { ThemeProvider } from 'styled-components'
import { PageJokes } from '@pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={appStyleTheme}>
                <AppStyleReset />
                <Routes>
                    <Route element={<PageJokes />} path="jokes" />
                    <Route element={<Navigate to="jokes" />} path="*" />
                </Routes>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
