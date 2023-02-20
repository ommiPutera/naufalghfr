import {ActionIcon, Container} from '@mantine/core'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {RouteArray} from '.'
import {Button} from '../components/Button'
import {BUTTON_MODE_SIZE, HEADER_SIZE} from '../defaultVariable'
import {useNavigation} from '../store/rootStore'
import {useThemeColorStore} from '../store/themeStore'
import {PenIcon} from '../utils/icons'
import {LeftContent, CenterContent, RightContent, growDown} from './styled'

function Header() {
  const {logoColor} = useThemeColorStore(state => state)
  const {pathname} = useLocation()
  return (
    <WrapperHeader>
      <Container size={HEADER_SIZE} className="p-0">
        <LeftContent className="align-center">
          <Logo>
            <Link to="/" className={pathname === '/' ? 'match' : ''}>
              <div className="mobile__font-28" style={{color: logoColor}}>
                NAUFAL .
              </div>
            </Link>
          </Logo>
        </LeftContent>
        <CenterContent>
          <DesktopNav className="desktop__nav">
            <RouteArray />
          </DesktopNav>
        </CenterContent>
        <RightContent>
          <a
            href="mailto:muhammadnaufalghfr@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="sm" variant="default" className="btn-contact">
              Let's talk!
              <PenIcon />
            </Button>
          </a>
          <NavButton />
        </RightContent>
      </Container>
    </WrapperHeader>
  )
}

function NavButton() {
  const {isOpen, setIsOpen} = useNavigation()
  return (
    <div className="nav__btn btn">
      <ActionIcon
        size={BUTTON_MODE_SIZE}
        radius="xl"
        onClick={() => setIsOpen(!isOpen)}
      ></ActionIcon>
    </div>
  )
}

const WrapperHeader = styled.header`
  padding: 38px 0 22px 0;

  > div {
    padding: 0 24px;
    display: flex;
  }

  .btn {
    &:hover,
    &:active {
    }
  }

  .theme__btn {
    margin-right: 12px;
    .sun__icon {
      color: ${({theme: {colors}}) => colors.dark[3]};
    }
    .moon__icon {
      color: ${({theme: {colors}}) => colors.dark[8]};
    }
    :active {
      .sun__icon,
      .moon__icon {
        animation: ${growDown} 300ms ease-in-out;
      }
    }
  }
  .nav__btn {
    width: 44px;
    height: 44px;
    background: #d9d9d9;
    border-radius: 50%;
    .menu__icon {
    }
  }

  .desktop__nav {
    display: none;
  }

  @media (min-width: 1200px) {
    padding: 38px 48px 22px 48px;

    .nav__btn {
      display: none;
    }
    .desktop__nav {
      display: block;
    }
  }
`
const Logo = styled.nav`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  height: 100%;
  -webkit-tap-highlight-color: transparent;

  a {
    font-weight: 400;
    font-family: 'Bebas Neue', cursive !important;
    font-display: fallback;
    font-size: 31.72px;
    letter-spacing: 3.9646px;

    @media (min-width: 1200px) {
      font-size: 31.72px;
    }
  }
`
const DesktopNav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      margin: 16px 18px 0 18px;
      font-size: 12.55px;
      font-weight: 400;
      text-decoration: none;
      color: #9e9e9e;

      div {
        width: 0;
        height: 4px;
        margin: 3px auto 0 auto;
      }
      &.match {
        color: #ffff;

        div {
          width: 100%;
          background: ${({theme: {colors}}) => colors.primary[0]};
        }
      }
    }
  }
`

export default Header
