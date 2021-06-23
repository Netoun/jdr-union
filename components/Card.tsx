import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  width: 300px;
  height: 600px;
  position: relative;
  margin: 2rem;
  border-radius: 1rem;
  transition-duration: 0.25s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }
`
const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transition-duration: 0.25s;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  ${Wrapper}:hover & {
    filter: grayscale(50%);
    transform: translate(-0.5rem);
  }
`

const ImagePlayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition-duration: 0.25s;
  z-index: 2;
  margin: 3rem -3rem;

  ${Wrapper}:hover & {
    filter: grayscale(25%);
    transform: translate(3rem);
  }
`

const Content = styled.div`
  margin: 1rem;
  position: relative;
  z-index: 3;
`

type Props = {
  children: ReactNode
  backgroundImg?: string
  playerImg?: string
}

const Card: React.FC<Props> = ({ children, backgroundImg = '', playerImg = '' }: Props) => (
  <Wrapper>
    <Background>
      <Image src={backgroundImg} layout="fill" objectFit="cover" quality={100} />
    </Background>
    <ImagePlayer>
      <Image src={playerImg} layout="fill" objectFit="cover" quality={100} />
    </ImagePlayer>
    <Content>{children}</Content>
  </Wrapper>
)
export default Card
