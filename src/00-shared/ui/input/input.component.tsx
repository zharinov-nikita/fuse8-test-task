import { InputHTMLAttributes, memo } from 'react'
import { S } from './input.styled'

type Props = InputHTMLAttributes<HTMLInputElement>

export const SharedUiInputComponent = memo((props: Props) => {
    return <S.Input data-testid="SharedUiInputComponent" {...props} />
})
