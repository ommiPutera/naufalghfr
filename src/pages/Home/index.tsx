import React from 'react'
import styled from 'styled-components'
import {HeroBackgrounds} from '../../layouts/Backgrounds'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import ToolsSection from './ToolsSection'

function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <HeroBackgrounds route="home" imgUrl="/assets/image/heroBg.jpg" />
      <HeroSection />
      <ProjectsSection />
      <ToolsSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
`

export default Home
