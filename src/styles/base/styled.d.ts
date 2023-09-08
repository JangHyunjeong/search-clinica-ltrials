import 'styled-components'
import { fontSize } from './../constants/fontSize'
import { color } from '../constants/color'
import { flex } from '../constants/flex'

declare module 'styled-components' {
  interface DefaultTheme extends ExtendedTheme {
    fontSize: typeof fontSize
    color: typeof color
    flex: typeof flex
  }
}
