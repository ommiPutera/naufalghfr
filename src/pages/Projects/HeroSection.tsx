import {Title} from '@mantine/core'
import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import {Button} from '../../components/Button'
import TextOutline from '../../components/TextOutline'
import {ArrowDownIcon} from '../../utils/icons'

function HeroSection() {
  return (
    <WrapperHero className="mobile__mt-42">
      <div className="page__title">
        <div className="title__">
          <Title order={1} className="font-130 mobile__font-60">
            MY PAST
          </Title>
          <TextOutline
            size="130"
            strokeColor="white"
            className="font-130 mobile__font-60"
          >
            PROJECTS
          </TextOutline>
        </div>
        <div>
          <Title className="mobile__mt-52 font-700 font-16 mobile__font-12 section__highlight">
            ONLY BEST PROJECTS SELECTION
            <div />
          </Title>
        </div>
      </div>
      <ScrollDown className="mobile__mt-52">
        <LinkScroll
          activeClass="active"
          to="projects-section"
          spy={true}
          smooth={true}
          offset={-10}
          duration={300}
        >
          <Button className="btn-scroll-down">
            <ArrowDownIcon /> Scroll down
          </Button>
        </LinkScroll>
      </ScrollDown>
    </WrapperHero>
  )
}

const WrapperHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 36px 0 58px 0;
  color: ${({theme: {colors}}) => colors.light[0]};

  h1 {
    line-height: 65px;
  }

  .section__highlight {
    line-height: 30px;
    div {
      display: block;
      width: 235px;
      height: 4px;
      background: ${({theme: {colors}}) => colors.light[0]};
    }
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
    text-align: center;
    height: 100%;
    min-height: 638px;
    max-height: 638px;
    margin-top: 80px;

    h1 {
      line-height: 155px;
    }

    .page__title {
      width: 100%;
      height: 100%;
      margin-top: 50px;
      margin-bottom: 230px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title__ {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
    .section__highlight {
      text-align: left;
      margin-bottom: 0px;
      margin-top: 20px;

      div {
        display: block;
        width: 485px;
        height: 4.76px;
        margin-top: 11px;
        background: ${({theme: {colors}}) => colors.light[0]};
      }

      @media (min-width: 1200px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: -70px;
        line-height: 30px;
      }
    }
  }
`

const ScrollDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  .btn-scroll-down {
    .mantine-Button-root {
      padding: 0px;
    }
    .mantine-Button-label {
      font-size: 13.5px;
      font-weight: 400;
    }
    svg {
      margin-right: 15px;
    }
  }
`

export default HeroSection
