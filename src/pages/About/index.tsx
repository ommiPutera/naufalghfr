import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import BackToTop from '../../components/BackToTop'
import {HeroBackgrounds} from '../../layouts/Backgrounds'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import WorkSection from './WorkSection'

function AboutHelmet() {
  return (
    <Helmet>
      <title>About Naufal Ghifari</title>
      <meta
        name="description"
        content="About Naufal Ghifari"
        data-react-helmet="true"
      />
    </Helmet>
  )
}

function About() {
  React.useEffect(() => {
    window.scrollBy({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [])

  return (
    <Wrapper>
      <AboutHelmet />
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
