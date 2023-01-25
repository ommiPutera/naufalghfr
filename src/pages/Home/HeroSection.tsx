import {Container, Text, Title} from '@mantine/core'
import {Link as LinkScroll} from 'react-scroll'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import TextOutline from '../../components/TextOutline'
import {ArrowDownIcon} from '../../utils/icons'

const certifiedLogoAssetsUrl = [
  '/assets/image/google-logo.png',
  '/assets/image/ibm-logo.png',
  '/assets/image/interaction-logo.png',
  '/assets/image/binar-logo.png',
]

function HeroSection() {
  return (
    <WrapperHero className="mobile__mt-42">
      <Title order={1} className="mobile__font-60 basic-animate">
        DIGITAL PRODUCT
      </Title>
      <TextOutline
        size="104"
        strokeColor="white"
        className="mobile__font-60 basic-animate"
      >
        DESIGNER
      </TextOutline>
      <Container size="xs" className="mobile__p-0">
        <Text
          size="lg"
          className="mt-26 mobile__mt-62 font-20 mobile__font-14 font-400 basic-animate-1"
        >
          Hi 👋 My name is Muhammad Naufal Ghifari, a Product Designer with
          experience working in B2B and B2C Company as a UIX Designer. I help
          companies to Designing human experience in using digital product’s.
        </Text>
      </Container>
      <Certified className="mt-110 mobile__mt-62 basic-animate-2">
        <Text
          size="lg"
          className="text mobile__mt-22 mobile__font-14 font-20 font-400"
        >
          Design Certified By
        </Text>
        <Container size="xs" className="items mobile__p-0">
          {certifiedLogoAssetsUrl.map(logoUrl => (
            <img key={logoUrl} src={logoUrl} alt="" className="logo" />
          ))}
        </Container>
      </Certified>
      <ScrollDown className="mobile__mt-62 basic-animate-3">
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
  margin: 88px 0 88px 0;
  color: ${({theme: {colors}}) => colors.light[0]};

  h1 {
    line-height: 50px;
  }

  @media (min-width: 1200px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 75vh;
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
  .items {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    .logo {
      object-fit: cover;
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    .items {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 55px;

      .logo {
        width: 120px;
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
