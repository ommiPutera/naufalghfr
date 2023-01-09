import {Text, Title} from '@mantine/core'
import styled from 'styled-components'
import TextOutline from '../../components/TextOutline'

const certifiedLogoAssetsUrl = [
  '/assets/image/google-logo.png',
  '/assets/image/ibm-logo.png',
  '/assets/image/interaction-logo.png',
  '/assets/image/binar-logo.png',
]

function HeroSection() {
  return (
    <WrapperHero>
      <Title order={1} className="mobile__font-60 basic-animate">
        DIGITAL PRODUCT
      </Title>
      <TextOutline order={1} className="mobile__font-60 basic-animate">
        DESIGNER
      </TextOutline>
      <Text
        size="lg"
        className="mt-22 mobile__mt-22 font-20 mobile__font-14 font-400 basic-animate-1"
      >
        Hi 👋 My name is Muhammad Naufal Ghifari, a Product Designer with
        experience working in B2B and B2C Company as a UIX Designer. I help
        companies to Designing human experience in using digital product’s.
      </Text>
      <Certified className="mt-129 basic-animate-2">
        <Text
          size="lg"
          className="text mobile__mt-22 mobile__font-14 font-20 font-400"
        >
          Design Certified By
        </Text>
        <div className="items">
          {certifiedLogoAssetsUrl.map(logoUrl => (
            <img key={logoUrl} src={logoUrl} alt="" className="logo" />
          ))}
        </div>
      </Certified>
    </WrapperHero>
  )
}

const WrapperHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  color: ${({theme: {colors}}) => colors.light[0]};
  margin-top: 84px;

  h1 {
    line-height: 55px;
  }

  @media (min-width: 1100px) {
    align-items: center;
    text-align: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 55px;

    .logo {
      width: 100%;
      height: 100%;
    }
  }
`

export default HeroSection
