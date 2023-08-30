import 'styled-components'
import { AppStyleTheme } from '@app'

declare module 'styled-components' {
    export interface DefaultTheme extends AppStyleTheme {}
}
