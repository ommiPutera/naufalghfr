import React from 'react'
import {Helmet} from 'react-helmet'
import {useInView} from 'react-intersection-observer'
import styled from 'styled-components'
import BackToTop from '../../components/BackToTop'
import HeroBackgrounds from '../../layouts/Backgrounds'
import {useThemeColorStore} from '../../store/themeStore'
import ContactSection from './ContactSection'
import HeroSection from './HeroSection'

function ContactHelmet() {
  const {themeColor} = useThemeColorStore(state => state)
  return (
    <Helmet>
      <title>Chats with Naufal Ghifari</title>
      <meta name="description" content="Chats with Naufal Ghifari" />
      <meta
        name="theme-color"
        content={themeColor === '#1D1D1D' ? '#1D1D1D' : '#fff'}
      />
    </Helmet>
  )
}

function Contact() {
  const {setThemeColor} = useThemeColorStore(state => state)
  const {ref, inView} = useInView({
    threshold: 0,
  })

  React.useEffect(() => {
    if (inView) {
      setThemeColor('#1D1D1D')
    } else {
      setThemeColor('#fff')
    }
  }, [inView, setThemeColor])

  return (
    <>
      <Wrapper>
        <ContactHelmet />
        <div ref={ref}>
          <HeroBackgrounds route="contact" imgUrl="/assets/image/heroBg.jpg" />
          <HeroSection />
        </div>
        <ContactSection />
        <BackToTop />
      </Wrapper>
      <div style={{position: 'relative'}}>
        <BackToTop />
      </div>
    </>
  )
}

const Wrapper = styled.div`
  display: block;
`

export default Contact
