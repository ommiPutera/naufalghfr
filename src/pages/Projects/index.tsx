import React from 'react'
import styled from 'styled-components'
import BackToTop from '../../components/BackToTop'
import {HeroBackgrounds} from '../../layouts/Backgrounds'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'

function Projects() {
  React.useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <Wrapper id="projects-section">
      <HeroBackgrounds route="projects" imgUrl="/assets/image/heroBg.jpg" />
      <HeroSection />
      <ProjectsSection />
      <BackToTop />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
`

export default Projects
