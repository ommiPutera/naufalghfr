import create from 'zustand'

const useThemeColorStore = create<{
  themeColor: string
  setThemeColor: (theme: string) => void
}>(set => ({
  themeColor: '#1D1D1D',
  setThemeColor: theme => set(state => ({themeColor: theme})),
}))

export {useThemeColorStore}
