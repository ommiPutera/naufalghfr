import React from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {TitleSection} from '../Home/shared'

function WorkHelmet() {
  return (
    <Helmet>
      <meta name="theme-color" content="#FFFFFF" data-react-helmet="true" />
    </Helmet>
  )
}

function WorkSection() {
  return (
    <Wrapper className="mt-110 mobile__mt-42" id="projects">
      <WorkHelmet />
      <TitleSection
        highlightText="BEST PROJECTS SELECTION"
        title={{defaultText: 'WORK', outlineText: 'EXPERIENCE'}}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom: 48px;

  @media (min-width: 1200px) {
    border-bottom: none;
    padding-bottom: 0;
    margin-top: 12%;
  }
`

export default WorkSection
