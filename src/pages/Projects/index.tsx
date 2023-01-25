import React from 'react'
import {Helmet} from 'react-helmet'
import {useInView} from 'react-intersection-observer'
import styled from 'styled-components'
import BackToTop from '../../components/BackToTop'
import {useThemeColorStore} from '../../store/themeStore'
import Loadable from 'react-loadable'

const HeroSection = Loadable({
  loader: () => import('./HeroSection'),
  loading: () => <></>,
})
const ProjectsSection = Loadable({
  loader: () => import('./ProjectsSection'),
  loading: () => <></>,
})
const HeroBackgrounds = Loadable({
  loader: () => import('../../layouts/Backgrounds'),
  loading: () => <></>,
})

function ProjectsHelmet() {
  const {themeColor} = useThemeColorStore(state => state)
  return (
    <Helmet>
      <title>Naufal Projects</title>
      <meta name="description" content="Naufal Projects" />
      <meta
        name="theme-color"
        content={themeColor === '#1D1D1D' ? '#1D1D1D' : '#fff'}
      />
    </Helmet>
  )
}

function Projects() {
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

  React.useLayoutEffect(() => {
    HeroSection.preload()
    ProjectsSection.preload()
    HeroBackgrounds.preload()
  }, [])

  return (
    <Wrapper>
      <ProjectsHelmet />
      <div ref={ref}>
        <HeroBackgrounds route="projects" imgUrl="/assets/image/heroBg.jpg" />
        <HeroSection />
      </div>
      <ProjectsSection />
      <BackToTop />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
`

export default Projects
