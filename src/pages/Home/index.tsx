import {Title} from '@mantine/core'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

function Home() {
  return (
    <Wrapper>
      <HomeHelmet />
      <Title order={1} className="text-top">
        DIGITAL PRODUCT
      </Title>
      <Title order={1} className="text-bottom">
        DESIGNER
      </Title>
    </Wrapper>
  )
}

function HomeHelmet() {
  return (
    <Helmet>
      <title>Naufal</title>
    </Helmet>
  )
}

const Wrapper = styled.div`
  display: block;
  margin: 137px 0;

  .text-top {
    color: #ffff;
  }
  .text-bottom {
    color: #ffff;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffff;
  }
`

export default Home
