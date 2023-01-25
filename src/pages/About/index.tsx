import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import BackToTop from '../../components/BackToTop'
import {HeroBackgrounds} from '../../layouts/Backgrounds'
import {useThemeColorStore} from '../../store/themeStore'
import {useInView} from 'react-intersection-observer'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import WorkSection from './WorkSection'

function AboutHelmet() {
  const {themeColor} = useThemeColorStore(state => state)
  return (
    <Helmet>
      <title>About Naufal Ghifari</title>
      <meta name="description" content="About Naufal Ghifari" />
      <meta
        name="theme-color"
        content={themeColor === '#1D1D1D' ? '#1D1D1D' : '#fff'}
      />
    </Helmet>
  )
}

function About() {
  const {setThemeColor} = useThemeColorStore(state => state)
  const {ref, inView} = useInView({
    threshold: 0,
  })

  React.useEffect(() => {
    if (inView) {
      setThemeColor('#1D1D1D')
    } else {
      setThemeColor('#fff')
    }
  }, [inView, setThemeColor])

  return (
    <Wrapper id="about-section">
      <AboutHelmet />
      <div ref={ref}>
        <HeroBackgrounds route="about" imgUrl="/assets/image/heroBg.jpg" />
        <HeroSection />
      </div>
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
