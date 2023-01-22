import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {HeroBackgrounds} from '../../layouts/Backgrounds'
import HeroSection from './HeroSection'

function About() {
  return (
    <Wrapper>
      <AboutHelmet />
      <HeroBackgrounds route="home" imgUrl="/assets/image/heroBg.jpg" />
      <HeroSection />
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
