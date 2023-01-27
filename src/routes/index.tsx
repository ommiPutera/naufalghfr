import React from 'react'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Project from '../pages/Project'
import Projects from '../pages/Projects'

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
    label: 'PROJECT',
    path: '/project/:projectId',
    element: <Project />,
  },
  {
    label: 'Contact',
    path: '/contact',
    element: <Contact />,
  },
]
