import {Title} from '@mantine/core'
import styled from 'styled-components'
import TextOutline from '../../components/TextOutline'

function ProjectsSection() {
  return (
    <WrapperHero className="mt-110 mobile__mt-42">
      <LeftContent>
        <Title className="font-130 mobile__font-60 basic-animate">
          MY PAST
        </Title>
        <TextOutline
          size="130"
          strokeColor="black"
          className="font-130 mobile__font-60 basic-animate"
        >
          PROJECTS
        </TextOutline>
      </LeftContent>
      <RightContent>
        <Title className="font-700 font-16 basic-animate section__highlight">
          BEST PROJECTS SELECTION
          <div />
        </Title>
      </RightContent>
    </WrapperHero>
  )
}

const WrapperHero = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: right;

  .section__highlight {
    text-align: left;
    margin-bottom: 50px;
    div {
      width: 405px;
      height: 4.76px;
      margin-top: 11px;
      background: ${({theme: {colors}}) => colors.dark[9]};
    }
  }
`

export default ProjectsSection
