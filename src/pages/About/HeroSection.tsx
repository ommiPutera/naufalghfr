import {Title} from '@mantine/core'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import TextOutline from '../../components/TextOutline'
import {ArrowDownIcon} from '../../utils/icons'

function HeroSection() {
  return (
    <WrapperHero className="mobile__mt-42">
      <div className="page__title">
        <div>
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
        <a href="#projects">
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

  @media (min-width: 800px) {
    justify-content: flex-start;
    text-align: center;
    height: 70vh;
    margin-top: 120px;

    h1 {
      line-height: 150px;
    }

    .page__title {
      width: 100%;
      height: 100%;
      margin-bottom: 230px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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

      @media (min-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: -70px;
        line-height: 30px;
      }
    }

    .about__me {
      margin-left: 105px;
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
