import { FC, HTMLProps } from 'react'
import { S } from './card.styled'

export const SharedUiCardSkeleton: FC<HTMLProps<HTMLDivElement>> = (props) => {
    return (
        <S.Card data-testid='SharedUiCardSkeleton' {...props}>
            <S.CardBody>
                <S.TitleSkeleton />
            </S.CardBody>
            <S.CardFooter>
                <S.IdSkeleton />
                <S.DateSkeleton />
            </S.CardFooter>
        </S.Card>
    )
}
