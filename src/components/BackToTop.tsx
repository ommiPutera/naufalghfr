import React from 'react'
import styled from 'styled-components'
import {animateScroll as scroll} from 'react-scroll'
import {ArrowDownIcon} from '../utils/icons'
import {Button} from './Button'

function BackToTop() {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (scrollPosition > 370) {
    return (
      <WrapperBackToTop className="basic-animate">
        <Button
          variant="subtle"
          onClick={() =>
            scroll.scrollToTop({
              smooth: 'easeInOutQuart',
            })
          }
        >
          <div className="icon__">
            <ArrowDownIcon />
          </div>
          BACK TO THE TOP
        </Button>
      </WrapperBackToTop>
    )
  } else {
    return <></>
  }
}

const WrapperBackToTop = styled.div`
  visibility: visible;
  position: fixed;
  bottom: 22px;
  right: 22px;

  .icon__ {
    transform: rotate(180deg);
    margin-right: 16px;
    margin-bottom: 5px;
  }

  @media (min-width: 1200px) {
    visibility: hidden;
  }
`

export default BackToTop
