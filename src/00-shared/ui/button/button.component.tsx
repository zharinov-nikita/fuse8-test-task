import { ButtonHTMLAttributes, FC } from 'react'
import { S } from './button.styled'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const SharedUiButtonComponent: FC<Props> = (props) => {
    return <S.Button {...props} />
}
