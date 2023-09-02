import { FC, memo } from 'react'
import { S } from './card.styled'

interface HighlightProps {
    text?: string
    searchTerm?: string
}

const HighlightedText: React.FC<HighlightProps> = ({
    text = '',
    searchTerm = '',
}) => {
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'))

    return (
        <>
            {parts.map((part, index) =>
                part.toLowerCase() === searchTerm.toLowerCase() ? (
                    <S.HighlightedText key={index}>{part}</S.HighlightedText>
                ) : (
                    part
                )
            )}
        </>
    )
}

interface Props {
    title?: string
    id?: string
    date?: string
    to?: string
    target?: string
    className?: string
    highlightSearchTerm?: string
}

export const SharedUiCardComponent: FC<Props> = memo((props) => {
    return (
        <S.Card data-testid='SharedUiCardComponent' className={props.className}>
            <S.Title to={props.to || ''} target={props.target}>
                <HighlightedText
                    text={props.title}
                    searchTerm={props.highlightSearchTerm}
                />
            </S.Title>
            <S.CardFooter>
                <S.Id>{props.id}</S.Id>
                <S.Date>{props.date}</S.Date>
            </S.CardFooter>
        </S.Card>
    )
})
