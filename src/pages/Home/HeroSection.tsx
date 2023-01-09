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
      <Title order={1} className="mobile__font-18 basic-animate">
        DIGITAL PRODUCT
      </Title>
      <TextOutline order={1} className="mobile__font-18 basic-animate">
        DESIGNER
      </TextOutline>
      <Text
        size="lg"
        className="mt-22 mobile__mt-22 mobile__font-18 font-20 font-400 basic-animate-1"
      >
        Hi 👋 My name is Muhammad Naufal Ghifari, a Product <br /> Designer with
        experience working in B2B and B2C Company <br /> as a UIX Designer. I
        help companies to Designing human <br /> experience in using digital
        product’s.
      </Text>
      <Certified className="mt-129">
        <Text
          size="lg"
          className="text mobile__mt-22 mobile__font-18 font-20 font-400 basic-animate-1"
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
  align-items: center;
  text-align: center;
  color: ${({theme: {colors}}) => colors.light[0]};
  margin-top: 84px;
`

const Certified = styled.div`
  display: block;

  .text {
    color: ${({theme: {colors}}) => colors.light[1]};
    margin-bottom: 24px;
  }
  .items {
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
