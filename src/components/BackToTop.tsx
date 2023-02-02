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

  React.useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (scrollPosition > 370) {
    return (
      <WrapperBackToTop className="basic-animate-2">
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
    return <div style={{height: '120px'}}></div>
  }
}

const WrapperBackToTop = styled.div`
  position: sticky;
  position: -webkit-sticky;
  bottom: 38px;
  right: 0;
  display: flex;
  padding-top: 14%;
  justify-content: end;

  button {
    border: 1px solid #000000;
    box-shadow: 4px 4px 10px rgba(76, 77, 220, 0.2);

    &.mantine-Button-root {
      width: 52px;
      padding: 0 17px;
      min-height: 44px;
      border-radius: 10px;
    }
    &.mantine-Button-label {
      font-weight: 500;
      font-size: 12px;
    }
  }

  .icon__ {
    transform: rotate(180deg);
    margin-right: 12px;
    margin-bottom: 3px;
  }

  @media (min-width: 1100px) {
    background: transparent;
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: end;
    position: sticky;
    position: -webkit-sticky;
    padding-top: 4%;

    button {
      &.mantine-Button-root {
        width: 180px;
        padding: 0 17px;
        min-height: 44px;
        border-radius: 10px;
      }
    }
  }
`

export default BackToTop
