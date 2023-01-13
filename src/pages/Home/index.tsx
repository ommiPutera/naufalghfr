import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import ToolsSection from './ToolsSection'

function Home() {
  return (
    <Wrapper>
      <HomeHelmet />
      <HeroSection />
      <ProjectsSection />
      <ToolsSection />
    </Wrapper>
  )
}

function HomeHelmet() {
  return (
    <Helmet>
      <title>Naufal - Digital Product Designer</title>
    </Helmet>
  )
}

const Wrapper = styled.div`
  display: block;
`

export default Home
