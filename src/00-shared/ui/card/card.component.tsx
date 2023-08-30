import { FC, memo } from 'react'
import { S } from './card.styled'

interface Props {
    title?: string
    hash?: string
    date?: string
}

export const SharedUiCardComponent: FC<Props> = memo((props) => {
    return (
        <S.Card data-testid='SharedUiCardComponent'>
            <S.CardBody>
                <S.Title>{props.title}</S.Title>
            </S.CardBody>
            <S.CardFooter>
                <S.Hash>{props.hash}</S.Hash>
                <S.Date>{props.date}</S.Date>
            </S.CardFooter>
        </S.Card>
    )
})
