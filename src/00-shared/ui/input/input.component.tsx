import { FC, InputHTMLAttributes } from 'react'
import { S } from './input.styled'

type Props = InputHTMLAttributes<HTMLInputElement>

export const SharedUiInputComponent: FC<Props> = (props) => {
    return <S.Input data-testid='SharedUiInputComponent' {...props} />
}
