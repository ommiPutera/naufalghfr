import React from 'react'
import styled from 'styled-components'
import BackToTop from '../../components/BackToTop'
import {HeroBackgrounds} from '../../layouts/Backgrounds'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import WorkSection from './WorkSection'

function About() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <HeroBackgrounds route="about" imgUrl="/assets/image/heroBg.jpg" />
      <HeroSection />
      <IntroSection />
      <WorkSection />
      <BackToTop />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
`

export default About
