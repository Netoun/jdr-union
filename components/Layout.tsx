import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

const Header = styled.div`
  display: flex;
  justify-content: center;
`

const App = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`

const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`

type Props = {
  children: ReactNode
  title?: string
  background?: string
}

const Layout: React.FC<Props> = ({ children, title = 'Title', background = '' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Background>
      <Image alt="DnD Background" src={background} layout="fill" objectFit="cover" quality={100} />
    </Background>
    <Header>
      <h1> {title}</h1>
    </Header>
    <App>{children}</App>
  </>
)

export default Layout
