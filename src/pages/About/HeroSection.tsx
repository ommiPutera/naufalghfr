import {Title} from '@mantine/core'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import TextOutline from '../../components/TextOutline'
import {ArrowDownIcon} from '../../utils/icons'

function HeroHelmet() {
  return (
    <Helmet>
      <title>About Naufal Ghifari</title>
      <meta name="theme-color" content="#1D1D1D" />
    </Helmet>
  )
}

function HeroSection() {
  return (
    <WrapperHero className="mobile__mt-42">
      <HeroHelmet />
      <div className="page__title">
        <div className="title__">
          <Title order={1} className="font-130 mobile__font-60 basic-animate">
            ANYTHING
          </Title>
          <TextOutline
            size="130"
            strokeColor="white"
            className="about__me font-130 mobile__font-60 basic-animate"
          >
            ABOUT ME
          </TextOutline>
        </div>
        <div>
          <Title className="font-700 font-16 mobile__font-14 section__highlight">
            ABOUT & EXPERIENCE
            <div />
          </Title>
        </div>
      </div>
      <ScrollDown className="mobile__mt-62 basic-animate-3">
        <a href="#intro">
          <Button className="btn-scroll-down">
            <ArrowDownIcon /> Scroll down
          </Button>
        </a>
      </ScrollDown>
    </WrapperHero>
  )
}

const WrapperHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 88px 0 88px 0;
  color: ${({theme: {colors}}) => colors.light[0]};

  h1 {
    line-height: 70px;
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
    text-align: center;
    height: 70vh;
    margin-top: 120px;

    h1 {
      line-height: 155px;
    }

    .page__title {
      width: 100%;
      height: 100%;
      margin-bottom: 230px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title__ {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .about__me {
          margin-left: 105px;
        }
      }
    }
    .section__highlight {
      text-align: left;
      margin-bottom: 0px;
      margin-top: 20px;

      div {
        display: block;
        width: 405px;
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
