import {CardItemTypes} from '../types'

const propsContentProjects: CardItemTypes[] = [
  {
    assetSrc: '/assets/image/previewProjects/kenari-apps.jpg',
    title: 'Kenari Apps',
    to: '/project/kenari-apps',
    desc: (
      <span>
        Designing mobile apps for various <br /> kinds of “Koperasi” needs
      </span>
    ),
    types: 'Mobile Apps',
    animate: 'basic-animate',
    layout: '1',
  },
  {
    assetSrc: '/assets/image/previewProjects/ruang-alternative.jpg',
    title: 'Ruang Alternative',
    to: '/project/ruang-alternative',
    desc: (
      <span>
        Designing a company profile website <br /> for Digital Agencies
      </span>
    ),
    types: 'Interface & Website',
    animate: 'basic-animate-3',
    layout: '2',
  },
  {
    assetSrc: '/assets/image/previewProjects/mental-health-case-study.jpg',
    title: 'Mental health Case Study',
    to: '/project/mental-health-case-study',
    desc: (
      <span>
        Designing an Apps to help educate <br /> users about the importance of
        mental <br />
        health
      </span>
    ),
    types: 'Case Study & Interface',
    animate: 'basic-animate',
    layout: '1',
  },
  {
    assetSrc: '/assets/image/previewProjects/kenari-admin-site.jpg',
    title: 'Kenari Admin Site',
    to: '/project',
    desc: (
      <span>
        Designing an back-end system for the <br /> Kenari Apps
      </span>
    ),
    types: 'Interface & Website',
    animate: 'basic-animate-3',
    layout: '2',
  },
]

const propsContentTools: CardItemTypes[] = [
  {
    assetSrc: '/assets/icons/icon1.svg',
    title: 'Web design',
    to: '/',
    desc: 'I love using tools like Figma and Framer to developing your own Websites',
    animate: '',
    layout: '1',
  },
  {
    assetSrc: '/assets/icons/icon2.svg',
    title: 'UI design',
    to: '/',
    desc: 'Eye for the visual side of things, I enjoy crafting beautiful Interface',
    animate: '',
    layout: '1',
  },
  {
    assetSrc: '/assets/icons/icon3.svg',
    title: 'UX design',
    to: '/',
    desc: 'I love designing products that not only looks great, but usable & useful as well',
    animate: '',
    layout: '1',
  },
  {
    assetSrc: '/assets/icons/icon5.svg',
    title: 'Icon design',
    to: '/',
    desc: 'Ready to have your own Icon on your Product?',
    animate: '',
    layout: '1',
  },
]

export {propsContentProjects, propsContentTools}
