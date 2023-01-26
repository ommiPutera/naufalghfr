import React from 'react'
import Loadable from 'react-loadable'
import About from '../pages/About'
import Home from '../pages/Home'
import Projects from '../pages/Projects'

const Contact = Loadable({
  loader: () => import('../pages/Contact'),
  loading: () => <></>,
})

interface IRouteObject {
  path: string
  label: string
  index?: boolean
  children?: React.ReactNode
  element?: JSX.Element
  handlePreload?: () => void
}

export const ROUTES: IRouteObject[] = [
  {
    label: 'HOME',
    path: '/',
    element: <Home />,
  },
  {
    label: 'ABOUT',
    path: '/about',
    element: <About />,
  },
  {
    label: 'PROJECT',
    path: '/projects',
    element: <Projects />,
  },
  {
    label: 'CONTACT',
    path: '/contact',
    element: <Contact />,
    handlePreload: () => {
      Contact.preload()
    },
  },
]

export const APP_ROUTES: IRouteObject[] = [
  {
    label: 'Home',
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    label: 'About',
    path: '/about',
    element: <About />,
  },
  {
    label: 'Project',
    path: '/projects',
    element: <Projects />,
  },
  {
    label: 'Contact',
    path: '/contact',
    element: <Contact />,
    handlePreload: () => {
      Contact.preload()
    },
  },
]
