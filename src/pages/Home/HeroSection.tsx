import {Container, Text, Title} from '@mantine/core'
import {Link as LinkScroll} from 'react-scroll'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import TextOutline from '../../components/TextOutline'
import {ArrowDownIcon} from '../../utils/icons'

const certifiedLogoAssetsUrl = [
  '/assets/logo/google-logo.png',
  '/assets/logo/ibm-logo.png',
  '/assets/logo/interaction-logo.png',
  '/assets/logo/binar-logo.png',
]

function HeroSection() {
  return (
    <WrapperHero className="mobile__mt-42">
      <Title order={1} className="mobile__font-70 basic-animate">
        DIGITAL PRODUCT
      </Title>
      <TextOutline
        size="104"
        strokeColor="white"
        className="mobile__font-70 basic-animate"
      >
        DESIGNER
      </TextOutline>
      <Container size="xs" className="mobile__p-0">
        <Text
          size="lg"
          className="mt-26 mobile__mt-52 font-20 mobile__font-14 font-400 basic-animate-1"
        >
          Hi 👋 My name is Muhammad Naufal Ghifari, a Product Designer with
          experience working in B2B and B2C Company as a UIX Designer. I help
          companies to Designing human experience in using digital product’s.
        </Text>
      </Container>
      <Certified className="mt-129 mobile__mt-52 basic-animate-2">
        <Text
          size="lg"
          className="text mobile__mt-22 mobile__font-14 font-20 font-400"
        >
          Design Certified By
        </Text>
        <Container size="xs" className="items__ mobile__p-0">
          {certifiedLogoAssetsUrl.map(logoUrl => (
            <div key={logoUrl} className="item__">
              <img src={logoUrl} alt="" className="logo" />
            </div>
          ))}
        </Container>
      </Certified>
      <ScrollDown className="mobile__mt-52 basic-animate-3">
        <LinkScroll
          activeClass="active"
          to="projects"
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
    line-height: 60px;
  }

  @media (min-width: 1200px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    margin: 62px 0 62px 0;

    h1 {
      line-height: 120px;
    }
  }
`

const Certified = styled.div`
  display: block;

  .text {
    color: ${({theme: {colors}}) => colors.light[1]};
    margin-bottom: 24px;
  }
  .items__ {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;

    .item__ {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
      width: fit-content;

      .logo {
        object-fit: contain;
        width: 100%;
      }
    }
  }

  @media (min-width: 1200px) {
    .items__ {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 55px;

      .item__ {
        max-height: 80px;
        width: fit-content;
      }

      .logo {
        object-fit: contain;
        height: 100%;
        width: 100%;
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
