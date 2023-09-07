import { ThemeProvider } from 'styled-components'

import SearchPage from './page/SearchPage'
import { Theme } from './styles/base/DefaultTheme'
import GlobalStyles from './styles/base/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <SearchPage />
    </ThemeProvider>
  )
}

export default App
