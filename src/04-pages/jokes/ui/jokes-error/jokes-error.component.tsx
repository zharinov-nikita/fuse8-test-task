import { usePageJokesStore } from '../../jokes.store'

export const UiJokesError = () => {
    const { isError } = usePageJokesStore((s) => s)
    return (
        <>
            {isError && (
                <div>
                    An error occurred when requesting the server
                    https://api.chucknorris.io/
                </div>
            )}
        </>
    )
}
