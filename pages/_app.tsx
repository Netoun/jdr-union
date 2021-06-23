import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type {} from 'styled-components/cssprop'
import { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  padding-top: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
  Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: white;
}
`

const theme = {
  colors: {
    primary: '',
  },
}

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)
export default App
