import {Container} from '@mantine/core'
import clsx from 'clsx'
import {Helmet} from 'react-helmet'
import {Link, Outlet, useLocation} from 'react-router-dom'
import {CONTAINER_SIZE} from '../defaultVariable'
import {ROUTES} from '../routes'
import {useNavigation} from '../store/rootStore'
import Footer from './Footer'
import Header from './Header'
import {WrapperDropdownNav, WrapperLayout} from './styled'

interface IRouteArray {
  handleClick?: () => void
  withCloseBtn?: boolean
}

function DefaultLayout() {
  const {isOpen} = useNavigation()
  return (
    <WrapperLayout>
      <Header />
      <DropdownNav />
      <Container size={CONTAINER_SIZE} className="p-0">
        <div className={clsx('children__', isOpen ? 'nav__open' : '')}>
          <Outlet />
        </div>
      </Container>
      <Footer />
    </WrapperLayout>
  )
}

function DropdownNav() {
  const {isOpen, setIsOpen} = useNavigation()
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={isOpen ? '#1D1D1D' : '#fff'} />
      </Helmet>
      <WrapperDropdownNav className={`${isOpen ? 'open' : 'closed'}`}>
        <RouteArray handleClick={handleClick} />
      </WrapperDropdownNav>
    </>
  )
}

function RouteArray({handleClick, withCloseBtn}: IRouteArray) {
  const {pathname} = useLocation()
  return (
    <ul>
      {ROUTES.map(({path, label, handlePreload}) => (
        <Link
          key={path}
          to={path || '/'}
          onClick={handleClick}
          onMouseOver={handlePreload}
        >
          <li className={pathname === path ? 'match' : ''}>
            {label}
            <div />
          </li>
        </Link>
      ))}
    </ul>
  )
}

export {DefaultLayout, RouteArray}
