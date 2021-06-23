import { NextPage } from 'next'
import Layout from '../components/Layout'
import Card from '../components/Card'

const title = 'Dungeons & Dragons'
const background = '/dnd_background.jpg'

const player = {
  name: 'Netoun',
  backgroundImg: '/netoun_bg.jpg',
  playerImg: '/netoun_player.png',
}

const IndexPage: NextPage = () => {
  return (
    <Layout title={title} background={background}>
      <Card backgroundImg={player.backgroundImg} playerImg={player.playerImg}>
        <h2> {player.name} </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, molestiae. Beatae, suscipit
          autem deserunt eos est eum veritatis a repellat quas quo recusandae illum voluptate omnis
          repudiandae ipsum dolore. Impedit.
        </p>
      </Card>
    </Layout>
  )
}

export default IndexPage
