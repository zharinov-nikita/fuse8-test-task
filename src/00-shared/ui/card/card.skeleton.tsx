import { FC, HTMLProps } from 'react'
import { S } from './card.styled'

export const SharedUiCardSkeleton: FC<HTMLProps<HTMLDivElement>> = (props) => {
    return (
        <S.Card data-testid="SharedUiCardSkeleton" {...props}>
            <S.TitleSkeleton />
            <S.CardFooter>
                <S.IdSkeleton />
                <S.DateSkeleton />
            </S.CardFooter>
        </S.Card>
    )
}
