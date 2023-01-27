import {Text, Title} from '@mantine/core'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import {ArrowTopRightIcon} from '../../utils/icons'
import {propsContentProjects} from './props'
import Loadable from 'react-loadable'
import {TitleSection} from './shared'
import {CardItemTypes} from './types'

const Projects = Loadable({
  loader: () => import('../Projects'),
  loading: () => <></>,
})

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
    <Wrapper className="mt-100 mobile__mt-42" id="projects">
      <TitleSection
        highlightText="BEST PROJECTS SELECTION"
        title={{defaultText: 'MY PAST', outlineText: 'PROJECTS'}}
      />
      <Content className="mt-62">
        <AllProjectsButton />
        <ProjectsCards />
      </Content>
    </Wrapper>
  )
}

function AllProjectsButton() {
  return (
    <WrapperAllProjects>
      <Link to="/projects">
        <Button
          size="lg"
          variant="default"
          className="btn__projects"
          onMouseOver={() => Projects.preload()}
          onClick={() => window.scroll(0, 0)}
        >
          ALL PROJECTS
          <ArrowTopRightIcon />
        </Button>
      </Link>
    </WrapperAllProjects>
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
}: CardItemTypes) {
  return (
    <ProjectCard className="project__card mobile__mt-26">
      <div className={clsx(layout === '1' ? 'left__' : 'right__', 'title__')}>
        <div>
          <div>
            <Link
              to={to}
              className="text__"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Title className="font-32 font-600 mobile__font-28">
                {title}
              </Title>
              <div className="icon__">
                <ArrowTopRightIcon />
              </div>
            </Link>
          </div>
          <Text
            size="lg"
            className="mt-43 mobile__mt-43 font-14 mobile__font-14 font-500"
          >
            {desc}
          </Text>
        </div>
        <div>
          <Text
            size="lg"
            className="types__ mt-26 mobile__mt-43 font-14 mobile__font-14 font-500"
          >
            {types}
          </Text>
        </div>
      </div>
      <div className={clsx(layout === '1' ? 'right__' : 'left__', 'preview__')}>
        <Link to={to} onClick={() => window.scrollTo(0, 0)}>
          <img src={assetSrc} alt="" className={animate} />
        </Link>
      </div>
    </ProjectCard>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: auto;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const WrapperAllProjects = styled.div`
  padding-top: 26px;
  padding-bottom: 48px;
  .btn__projects {
    .mantine-Button-root {
      width: 100%;
      min-height: 48px;
    }
    .mantine-Button-label {
      font-size: 16px;
      gap: 15px;
    }
  }

  @media (min-width: 1200px) {
    border-top: 1px solid rgba(18, 18, 18, 0.15);
    width: 24%;
    padding-top: 110px;

    .btn__projects {
      position: sticky;
      position: -webkit-sticky;
      top: 42px;
      margin-right: 25px;
      .mantine-Button-root {
        width: 100%;
        min-height: 58px;
      }
      .mantine-Button-label {
        padding: 0 20px;
        font-weight: 400;
        font-size: 20px;
        gap: 16px;
      }
    }
  }
`

const Wrapper = styled.div`
  border-bottom: 1px solid rgba(18, 18, 18, 0.15);
  margin-top: 85px;

  @media (min-width: 1200px) {
    border-bottom: none;
    padding-bottom: 0;
    margin-top: 80px;
  }
`
const WrapperProjectsCards = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    width: 90%;

    .project__card:last-child {
      .left__ {
        border-bottom: none;
      }
      .right__ {
        border-bottom: none;
      }
    }
  }
`
const ProjectCard = styled.div`
  display: flex;
  flex-direction: column-reverse;
  border-top: 1px solid rgba(18, 18, 18, 0.15);

  .title__ {
    width: 100%;
    .text__ {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 33px;

      .icon__ {
        width: 20%;
        height: 100%;
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
    .types__ {
      text-transform: uppercase;
    }
  }

  .preview__ {
    padding-top: 26px;
    width: 100%;
    height: 100%;
    margin: auto;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;

    .left__ {
      order: 1;
    }
    .right__ {
      order: 2;
    }

    .title__ {
      width: 50%;
      padding: 55px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-left: 1px solid rgba(18, 18, 18, 0.15);
      border-bottom: 1px solid rgba(18, 18, 18, 0.15);

      .text__ {
        display: flex;
        align-items: center;
        margin-top: 0px;
        justify-content: space-between;
      }
    }
    .preview__ {
      border-left: 1px solid rgba(18, 18, 18, 0.15);
      border-bottom: 1px solid rgba(18, 18, 18, 0.15);
      padding: 59px;
      width: 50%;
      margin: auto;
      min-height: 525px;

      img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1.22;
        object-fit: cover;
      }
    }
  }
`

export default ProjectsSection
