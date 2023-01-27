import {Text, Title} from '@mantine/core'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import {ArrowTopRightIcon} from '../../utils/icons'
import {CardItemTypes} from '../Home/types'
import {propsContentProjects} from './props'

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
    <Wrapper className="mt-100 mobile__mt-42" id="projects-section">
      <Content className="mt-62">
        <RandomSelectionButton />
        <ProjectsCards />
      </Content>
    </Wrapper>
  )
}

function RandomSelectionButton() {
  return (
    <WrapperRandomSelection>
      <Link to="/projects">
        <Button size="lg" variant="default" className="btn__random">
          RANDOM SELECTION
          <ArrowTopRightIcon />
        </Button>
      </Link>
    </WrapperRandomSelection>
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

const WrapperRandomSelection = styled.div`
  padding-top: 26px;
  .btn__random {
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
    width: 25%;
    padding-top: 100px;

    .btn__random {
      position: sticky;
      position: -webkit-sticky;
      top: 62px;
      margin-right: 65px;
      .mantine-Button-root {
        width: 100%;
        min-height: 64px;
      }
      .mantine-Button-label {
        padding: 0px;
        font-weight: 400;
        font-size: 20px;
        gap: 16px;
      }
    }
  }
`

const Wrapper = styled.div`
  @media (min-width: 1200px) {
    padding-bottom: 0;
    margin-top: 9%;
  }
`
const WrapperProjectsCards = styled.div`
  display: flex;
  flex-direction: column;

  .project__card:first-child {
    border-top: none;
  }

  @media (min-width: 1200px) {
    width: 90%;

    .project__card:first-child {
      border-top: 1px solid rgba(18, 18, 18, 0.15);
    }
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
  border-top: 0.5px solid rgba(18, 18, 18, 0.15);

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
      object-fit: cover;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;

    .left__ {
      order: 2;
    }
    .right__ {
      order: 1;
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
      border-bottom: 0.5px solid rgba(18, 18, 18, 0.15);
      padding: 59px;
      width: 50%;
      margin: auto;
      min-height: 525px;

      img {
        width: 100%;
        height: 525px;
        object-fit: cover;
      }
    }
  }
`

export default ProjectsSection
