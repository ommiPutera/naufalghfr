import React from 'react'
import {Helmet} from 'react-helmet'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import BackToTop from '../../components/BackToTop'
import {useThemeColorStore} from '../../store/themeStore'
import {ProjectContent} from './props'
import TitleSection from './TitleSection'

function ProjectHelmet() {
  const {themeColor} = useThemeColorStore(state => state)
  return (
    <Helmet>
      <title>Project Naufal Ghifari</title>
      <meta name="description" content="Chats with Naufal Ghifari" />
      <meta
        name="theme-color"
        content={themeColor === '#1D1D1D' ? '#1D1D1D' : '#fff'}
      />
    </Helmet>
  )
}

function Project() {
  let {projectId} = useParams()
  const contentProps = ProjectContent.find(project => project.id === projectId)

  if (!contentProps?.id) return <></>
  return (
    <Wrapper>
      <ProjectHelmet />
      <TitleSection {...contentProps.metaTitle} />
      <BackToTop />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;

  @media (min-width: 1100px) {
    margin-top: 94px;
  }
`

export default Project
