import { ThemeProvider } from 'styled-components'
import type {} from 'styled-components/cssprop'
import { AppProps } from 'next/app'
import { GlobalStyle, theme } from '../styles'
const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)
export default App
