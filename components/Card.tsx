import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { IPlayer } from '../types'

const Wrapper = styled.div<Props>`
  width: 300px;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  transition-duration: 0.25s;
  &:hover {
    transform: scale(1.05);
  }

  @media ${({ theme }) => theme.device.laptop} {
    margin: 1rem;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    margin: 2rem;
  }
`
const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transition-duration: 0.25s;
  border-radius: 1rem;
  pointer-events: none;
  img {
    pointer-events: none;
  }
  ${Wrapper}:hover & {
    filter: grayscale(75%);
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
  pointer-events: none;

  img {
    pointer-events: none;
    transition-duration: 0.25s;
  }

  ${Wrapper}:hover & {
    img {
      filter: drop-shadow(0 0 0.75rem rgb(0, 0, 0, 0.5));
    }
    filter: grayscale(25%);
    transform: translate(3rem) scale(1.5);
  }
`

const Heading = styled.div`
  margin: 1rem;
  position: relative;
  z-index: 3;
  text-align: right;
`

const Content = styled.div`
  margin: 1rem;
  position: relative;
  z-index: 3;
`

const Title = styled.h2`
  margin: 0.5rem 0;
  font-size: 2rem;
  color: white;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.45);
`

const SubTitle = styled.p`
  font-weight: lighter;
  margin: 0.5rem 0;
  font-size: 1rem;
  color: white;
`

type Props = {
  children: ReactNode
  player?: IPlayer
  onClick: () => void
}

const defaultPlayer = {
  name: 'Paul',
  class: 'War',
  background: '',
  image: '',
}

const Card: React.FC<Props> = ({ children, player = defaultPlayer, onClick }: Props) => (
  <Wrapper onClick={() => onClick()}>
    <Background>
      <Image src={player.background} layout="fill" objectFit="cover" quality={100} />
    </Background>
    <ImagePlayer>
      <Image src={player.image} layout="fill" objectFit="contain" quality={100} />
    </ImagePlayer>
    <Heading>
      <Title> {player.name} </Title>
      <SubTitle> {player.class} </SubTitle>
    </Heading>
    <Content>{children}</Content>
  </Wrapper>
)
export default Card
