const projects = 'kenari-apps'

interface IProject {
  id: typeof projects
  metaTitle: TitleType
}

export type TitleType = {
  title: string
  role: string
  link: {
    to: string
    desc: string
  }
}

const ProjectContent: IProject[] = [
  {
    id: 'kenari-apps',
    metaTitle: {
      title: 'Kenari Apps',
      role: 'UI DESIGNER',
      link: {
        to: '/',
        desc: 'See live Apps on the link',
      },
    },
  },
]

export {ProjectContent}
