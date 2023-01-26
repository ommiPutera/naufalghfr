import React from 'react'
import Loadable from 'react-loadable'
import Home from '../pages/Home'

const Projects = Loadable({
  loader: () => import('../pages/Projects'),
  loading: () => <></>,
})

const About = Loadable({
  loader: () => import('../pages/About'),
  loading: () => <></>,
})

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
    handlePreload: () => {
      About.preload()
    },
  },
  {
    label: 'PROJECT',
    path: '/projects',
    element: <Projects />,
    handlePreload: () => {
      Projects.preload()
    },
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
    handlePreload: () => {
      About.preload()
    },
  },
  {
    label: 'Project',
    path: '/projects',
    element: <Projects />,
    handlePreload: () => {
      Projects.preload()
    },
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
