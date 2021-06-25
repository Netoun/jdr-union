import { NextPage } from 'next'
import { TITLE, BACKGROUND, PLAYERS } from '../utils/constants'

import { IPlayer } from '../types'

import Layout from '../components/Layout'
import Card from '../components/Card'

const IndexPage: NextPage = () => {
  function onClickPlayer(player: IPlayer): void {
    console.log(player)
  }

  return (
    <Layout title={TITLE} background={BACKGROUND}>
      {PLAYERS.map((player) => (
        <Card player={player} key={player.name} onClick={() => onClickPlayer(player)}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla harum cupiditate in
          praesentium perferendis eligendi tenetur? Est nisi distinctio similique enim iure velit
          fugiat quisquam. Eaque sed deserunt distinctio quod.
        </Card>
      ))}
    </Layout>
  )
}

export default IndexPage
