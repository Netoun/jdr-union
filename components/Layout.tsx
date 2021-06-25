import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

const Header = styled.header`
  display: flex;
  justify-content: center;
`

const Footer = styled.footer`
  position: fixed;
  width: 100vw;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-weight: lighter;
`

const App = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media ${({ theme }) => theme.device.laptop} {
    flex-direction: row;
  }
`

const Title = styled.h1`
  font-family: Blackcastle;
  font-size: 2.5rem;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 6px 6px rgba(0, 0, 0, 0.5);
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
      <Title> {title} </Title>
    </Header>
    <App>{children}</App>
    <Footer>
      <span>
        © 2021 <strong> D&D </strong> Union
      </span>
    </Footer>
  </>
)

export default Layout
