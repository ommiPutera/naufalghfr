import {CardItemTypes} from '../../Home/types'
import {propsContentProjects as propsProjectsFromHomePage} from '../../Home/props'

const propsContentProjects: CardItemTypes[] = [
  ...propsProjectsFromHomePage,
  {
    assetSrc: '/assets/image/previewProjects/icons.jpg',
    title: 'Title',
    to: '/project',
    desc: 'Lorem ipsum dolor sit amet consectetur. Orci turpis diam id dignissim in laoreet. Amet amet viverra amet massa lectus adipiscing etiam felis. Ac ipsum tincidunt.',
    types: 'Interface & Website',
    animate: 'basic-animate',
    layout: '1',
  },
  {
    assetSrc: '/assets/image/previewProjects/ruang-alternative-2.jpg',
    title: 'Title',
    to: '/project',
    desc: 'Lorem ipsum dolor sit amet consectetur. Orci turpis diam id dignissim in laoreet. Amet amet viverra amet massa lectus adipiscing etiam felis. Ac ipsum tincidunt.',
    types: 'Interface & Website',
    animate: 'basic-animate-3',
    layout: '2',
  },
  {
    assetSrc: '/assets/image/previewProjects/design-system.jpg',
    title: 'Title',
    to: '/project',
    desc: 'Lorem ipsum dolor sit amet consectetur. Orci turpis diam id dignissim in laoreet. Amet amet viverra amet massa lectus adipiscing etiam felis. Ac ipsum tincidunt.',
    types: 'Interface & Website',
    animate: 'basic-animate',
    layout: '1',
  },
  {
    assetSrc: '/assets/image/previewProjects/kenari-dashboard.jpg',
    title: 'Title',
    to: '/project',
    desc: 'Lorem ipsum dolor sit amet consectetur. Orci turpis diam id dignissim in laoreet. Amet amet viverra amet massa lectus adipiscing etiam felis. Ac ipsum tincidunt.',
    types: 'Interface & Website',
    animate: 'basic-animate-3',
    layout: '2',
  },
]

export {propsContentProjects}
