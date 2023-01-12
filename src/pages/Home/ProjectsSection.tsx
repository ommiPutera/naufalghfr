import {Text, Title} from '@mantine/core'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import TextOutline from '../../components/TextOutline'
import {ArrowTopRightIcon, PenIcon} from '../../utils/icons'
import {propsContentProjects} from './propsCollection'

export type ProjectCardItemTypes = {
  assetSrc: string
  title: string
  to: string
  desc: string
  types: string
  animate?: 'basic-animate-2' | 'basic-animate-3'
  layout: '1' | '2'
}

function ProjectsSection() {
  return (
    <WrapperProjects className="mt-110 mobile__mt-42">
      <TitleSection />
      <Content className="mt-62 mobile__mt-42">
        <AllProjects>
          <Button size="sm" variant="default" className="btn__projects">
            ALL PROJECTS
            <PenIcon />
          </Button>
        </AllProjects>
        <ProjectsCards />
      </Content>
    </WrapperProjects>
  )
}

function TitleSection() {
  return (
    <WrapperTitleSection className="mobile__mt-12">
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
        <Title className="font-700 font-16 mobile__font-14 basic-animate section__highlight">
          BEST PROJECTS SELECTION
          <div />
        </Title>
      </RightContent>
    </WrapperTitleSection>
  )
}

function ProjectsCards() {
  return (
    <WrapperProjectsCards>
      {propsContentProjects.map(project => (
        <ProjectCardItem
          key={project.title}
          assetSrc={project.assetSrc}
          title={project.title}
          to={project.to}
          desc={project.desc}
          types={project.types}
          animate={project.animate}
          layout={project.layout}
        />
      ))}
    </WrapperProjectsCards>
  )
}

function ProjectCardItem({
  assetSrc,
  title,
  to,
  desc,
  types,
  animate,
  layout,
}: ProjectCardItemTypes) {
  return (
    <ProjectCard className="project__card">
      <div className={clsx(layout === '1' ? 'left__' : 'right__', 'title__')}>
        <div className="basic-animate">
          <div>
            <Link to={to} className="text__">
              <Title className="font-32 font-600 mobile__font-14">
                {title}
              </Title>
              <div className="icon__">
                <ArrowTopRightIcon />
              </div>
            </Link>
          </div>
          <Text
            size="lg"
            className="mt-26 mobile__mt-62 font-14 mobile__font-14 font-400"
          >
            {desc}
          </Text>
        </div>
        <div className="basic-animate-1">
          <Text
            size="lg"
            className="mt-26 mobile__mt-62 font-14 mobile__font-14 font-400"
          >
            {types}
          </Text>
        </div>
      </div>
      <div className={clsx(layout === '1' ? 'right__' : 'left__', 'preview__')}>
        <img src={assetSrc} alt="" className={animate} />
      </div>
    </ProjectCard>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1100px) {
    border-top: 1px solid rgba(18, 18, 18, 0.15);
  }
`

const AllProjects = styled.div`
  .btn__projects {
    .mantine-Button-label {
      padding: 0 72px;
    }
  }

  @media (min-width: 1100px) {
    width: 30%;
  }
`

const WrapperProjects = styled.div``
const WrapperProjectsCards = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1100px) {
    width: 70%;

    .project__card:last-child {
      .left {
        border-bottom: none;
      }
      .right {
        border-bottom: none;
      }
    }
  }
`
const ProjectCard = styled.div`
  @media (min-width: 1100px) {
    display: flex;

    .left__ {
      order: 1;
    }
    .right__ {
      order: 2;
    }

    .title__ {
      width: 50%;
      padding: 52px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-left: 1px solid rgba(18, 18, 18, 0.15);
      border-bottom: 1px solid rgba(18, 18, 18, 0.15);

      .text__ {
        display: flex;
        justify-content: space-between;

        .icon__ {
          width: 30%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }
      }
    }
    .preview__ {
      border-left: 1px solid rgba(18, 18, 18, 0.15);
      border-bottom: 1px solid rgba(18, 18, 18, 0.15);
      padding: 52px;
      width: 50%;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
        min-height: 525px;
        object-fit: contain;
      }
    }
  }
`

const WrapperTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 120px;

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
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
  text-align: right;

  .section__highlight {
    text-align: left;
    margin-bottom: 0px;
    margin-top: 20px;
    div {
      display: none;
    }

    @media (min-width: 1100px) {
      margin-bottom: 70px;
      div {
        display: block;
        width: 405px;
        height: 4.76px;
        margin-top: 11px;
        background: ${({theme: {colors}}) => colors.dark[9]};
      }
    }
  }

  @media (min-width: 1100px) {
  }
`

export default ProjectsSection
