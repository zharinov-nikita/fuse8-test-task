import { SharedUiButtonComponent, sharedUtilScrollUp } from '@shared'
import { S } from './back-to-search-joke.styled'
import { usePageJokesStore } from '../../jokes.store'

export const UiBackToSearchJokeComponent = () => {
    const { isVisibleRange } = usePageJokesStore((s) => s)
    return (
        <>
            {isVisibleRange.startIndex > 0 && (
                <S.BackToSearchContainer>
                    <S.BackToSearchWrapper>
                        <SharedUiButtonComponent onClick={sharedUtilScrollUp}>
                            Back to Search 🔍
                        </SharedUiButtonComponent>
                    </S.BackToSearchWrapper>
                </S.BackToSearchContainer>
            )}
        </>
    )
}
