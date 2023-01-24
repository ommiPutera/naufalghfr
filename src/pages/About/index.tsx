import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {HeroBackgrounds} from '../../layouts/Backgrounds'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'

function About() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <AboutHelmet />
      <HeroBackgrounds route="about" imgUrl="/assets/image/heroBg.jpg" />
      <HeroSection />
      <IntroSection />
    </Wrapper>
  )
}

function AboutHelmet() {
  return (
    <Helmet>
      <title>About Naufal Ghifari</title>
    </Helmet>
  )
}

const Wrapper = styled.div`
  display: block;
`

export default About
