interface IProject {
  id: 'kenari-apps' | 'mental-health-case-study' | 'ruang-alternative'
  metaTitle: TitleType
}

export type TitleType = {
  title: string
  role: string
  link: {
    to?: string
    desc?: string
  }
}

const ProjectContent: IProject[] = [
  {
    id: 'kenari-apps',
    metaTitle: {
      title: 'Kenari Apps',
      role: 'UI DESIGNER',
      link: {
        to: 'https://www.ruangalternative.com/',
        desc: 'See live Apps on the link',
      },
    },
  },
  {
    id: 'mental-health-case-study',
    metaTitle: {
      title: 'Mental Health Case Study',
      role: 'UI DESIGNER',
      link: {
        to: '',
        desc: '',
      },
    },
  },
  {
    id: 'ruang-alternative',
    metaTitle: {
      title: 'Ruang Alternative',
      role: 'UI DESIGNER',
      link: {
        to: 'https://www.ruangalternative.com/',
        desc: 'See live Apps on the link',
      },
    },
  },
]

export {ProjectContent}
