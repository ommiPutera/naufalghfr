import React from 'react'
import {Helmet} from 'react-helmet'
import {useInView} from 'react-intersection-observer'
import styled from 'styled-components'
import BackToTop from '../../components/BackToTop'
import HeroBackgrounds from '../../layouts/Backgrounds'
import {useThemeColorStore} from '../../store/themeStore'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import ToolsSection from './ToolsSection'

function HomeHelmet() {
  const {themeColor} = useThemeColorStore(state => state)
  return (
    <Helmet>
      <title>Naufal - Digital Product Designer</title>
      <meta name="description" content="Naufal - Digital Product Designer" />
      <meta
        name="theme-color"
        content={themeColor === '#1D1D1D' ? '#1D1D1D' : '#fff'}
      />
    </Helmet>
  )
}

function Home() {
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
    <Wrapper>
      <HomeHelmet />
      <div ref={ref}>
        <HeroBackgrounds route="home" imgUrl="/assets/image/heroBg.jpg" />
        <HeroSection />
      </div>
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
