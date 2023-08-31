import { FC, memo } from 'react'
import { S } from './card.styled'
import { Link } from 'react-router-dom'

interface Props {
    title?: string
    id?: string
    date?: string
    to?: string
    target?: string
    className?: string
}

export const SharedUiCardComponent: FC<Props> = memo((props) => {
    return (
        <S.Card data-testid='SharedUiCardComponent' className={props.className}>
            <S.Title to={props.to || ''} target={props.target}>
                {props.title}
            </S.Title>
            <S.CardFooter>
                <S.Id>{props.id}</S.Id>
                <S.Date>{props.date}</S.Date>
            </S.CardFooter>
        </S.Card>
    )
})
