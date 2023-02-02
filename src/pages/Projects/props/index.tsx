import {CardItemTypes} from '../../Home/types'
import {propsContentProjects as propsProjectsFromHomePage} from '../../Home/props'

const propsContentProjects: CardItemTypes[] = [
  ...propsProjectsFromHomePage,
  {
    assetSrc: '/assets/image/previewProjects/icons.jpg',
    title: 'Icon Design',
    to: '/project',
    desc: (
      <span>
        Designing an Icon pack for eCommerce <br /> (exploration)
      </span>
    ),
    types: 'Icon Design',
    animate: 'basic-animate',
    layout: '1',
  },
  {
    assetSrc: '/assets/image/previewProjects/ruang-alternative-2.jpg',
    title: 'Article Website',
    to: '/project',
    desc: (
      <span>
        Designing an article, event, video & <br /> podcast website for Digital
        Agencies
      </span>
    ),
    types: 'Interface & Website',
    animate: 'basic-animate-3',
    layout: '2',
  },
  {
    assetSrc: '/assets/image/previewProjects/design-system.jpg',
    title: 'Design System',
    to: '/project',
    desc: (
      <span>
        Designing a design system and <br /> documentation for fintech product
      </span>
    ),
    types: 'Design System Documentation',
    animate: 'basic-animate',
    layout: '1',
  },
  {
    assetSrc: '/assets/image/previewProjects/kenari-dashboard.jpg',
    title: 'Indofund Dashboard',
    to: '/project',
    desc: (
      <span>
        Re-Design and visual improvement for <br /> admin Dashboard Indofund.id
      </span>
    ),
    types: 'Interface & Website',
    animate: 'basic-animate-3',
    layout: '2',
  },
]

export {propsContentProjects}
