import {Helmet} from 'react-helmet'
import styled from 'styled-components'

function Home() {
  return (
    <Wrapper>
      <HomeHelmet />
      Hello
    </Wrapper>
  )
}

function HomeHelmet() {
  return (
    <Helmet>
      <title>Ommi Putera - Software Engineer</title>
    </Helmet>
  )
}

const Wrapper = styled.div`
  display: block;

  > div {
    margin-bottom: 82px;
  }
`

export default Home
