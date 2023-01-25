import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import BackToTop from '../../components/BackToTop'
import {HeroBackgrounds} from '../../layouts/Backgrounds'
import {useThemeColorStore} from '../../store/themeStore'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import ToolsSection from './ToolsSection'

function HomeHelmet() {
  const {themeColor} = useThemeColorStore(state => state)
  return (
    <Helmet>
      <title>{themeColor} Naufal - Digital Product Designer</title>
      <meta name="description" content="Naufal - Digital Product Designer" />
      <meta
        name="theme-color"
        content={themeColor === '#1D1D1D' ? '#1D1D1D' : '#fff'}
      />
    </Helmet>
  )
}

function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Wrapper>
      <HomeHelmet />
      <HeroBackgrounds route="home" imgUrl="/assets/image/heroBg.jpg" />
      <HeroSection />
      <ProjectsSection />
      <ToolsSection />
      <BackToTop />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
`

export default Home
