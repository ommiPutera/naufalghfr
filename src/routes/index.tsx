import React from 'react'
import {About} from '../App'
import Home from '../pages/Home'

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
    path: '/project',
    element: <About />,
  },
  {
    label: 'CONTACT',
    path: '/contact',
    element: <About />,
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
    path: '/project',
    element: <About />,
  },
  {
    label: 'Contact',
    path: '/contact',
    element: <About />,
  },
]