import {ActionIcon, Container} from '@mantine/core'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {RouteArray} from '.'
import {Button} from '../components/Button'
import {BUTTON_MODE_SIZE, HEADER_SIZE} from '../defaultVariable'
import {useNavigation} from '../store/rootStore'
import {PenIcon} from '../utils/icons'
import {LeftContent, CenterContent, RightContent, growDown} from './styled'

function Header() {
  const {pathname} = useLocation()
  return (
    <WrapperHeader>
      <Container size={HEADER_SIZE}>
        <LeftContent className="align-center">
          <Logo>
            <Link to="/" className={pathname === '/' ? 'match' : ''}>
              <div className="mobile__font-28">NAUFAL .</div>
            </Link>
          </Logo>
        </LeftContent>
        <CenterContent>
          <DesktopNav className="desktop__nav">
            <RouteArray />
          </DesktopNav>
        </CenterContent>
        <RightContent>
          <Button size="sm" variant="default" className="btn-contact">
            Let's talk!
            <PenIcon />
          </Button>
          <NavButton />
        </RightContent>
      </Container>
    </WrapperHeader>
  )
}

function NavButton() {
  const {isOpen, setIsOpen} = useNavigation()
  return (
    <ActionIcon
      className="nav__btn btn"
      size={BUTTON_MODE_SIZE}
      radius="xl"
      onClick={() => setIsOpen(!isOpen)}
    ></ActionIcon>
  )
}

const WrapperHeader = styled.header`
  padding: 38px 0 22px 0;

  > div {
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
    .menu__icon {
    }
  }

  .desktop__nav {
    display: none;
  }

  @media (min-width: 1100px) {
    padding: 32px 48px;

    .nav__btn {
      display: none;
    }
    .desktop__nav {
      display: block;
    }
  }
`
const Logo = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  height: 100%;

  a {
    font-weight: 400;
    font-family: 'Bebas Neue', cursive;
    font-size: 31.72px;
    letter-spacing: 3.9646px;
    color: #ffff;

    @media (min-width: 1100px) {
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
