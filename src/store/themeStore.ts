import create from 'zustand'

const useThemeColorStore = create<{
  themeColor: string
  setThemeColor: (theme: string) => void
}>(set => ({
  themeColor: '#fff',
  setThemeColor: theme => set(state => ({themeColor: theme})),
}))

export {useThemeColorStore}
