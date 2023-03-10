import {CardItemTypes} from '../../Home/types'
import {propsContentProjects as propsProjectsFromHomePage} from '../../Home/props'

const propsContentProjects: CardItemTypes[] = [
  ...propsProjectsFromHomePage,
  {
    assetSrc: '/assets/image/previewProjects/icons.jpg',
    title: 'Icon Design',
    to: 'https://naufalghfr.notion.site/Designing-an-Icon-Pack-for-eCommerce-Icon-Design-15c340b42b744b87a37b969c52dc3b91',
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
    to: 'https://naufalghfr.notion.site/Designing-an-Article-Event-Video-Podcast-Website-for-Digital-Agencies-4cb0f69452094b35a4768b8418f00496',
    desc: (
      <span>
        Designing an article, event, video & <br /> podcast website for Digital
        Agencies
      </span>
    ),
    types: 'Interface & Website',
    animate: 'basic-animate',
    layout: '2',
  },
  {
    assetSrc: '/assets/image/previewProjects/design-system.jpg',
    title: 'Design System',
    to: 'https://naufalghfr.notion.site/Design-System-Documentation-for-Fintech-Product-89a3e50cc20a4165bb1d7bef4161be96',
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
    to: 'https://naufalghfr.notion.site/Re-Design-and-Visual-Improvement-for-Admin-Dashboard-Indofund-id-59e30571646545b280b813c91547c8bd',
    desc: (
      <span>
        Re-Design and visual improvement for <br /> admin Dashboard Indofund.id
      </span>
    ),
    types: 'Interface & Website',
    animate: 'basic-animate',
    layout: '2',
  },
]

export {propsContentProjects}
