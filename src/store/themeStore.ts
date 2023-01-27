import create from 'zustand'

const useThemeColorStore = create<{
  logoColor: string
  setLogoColor: (color: string) => void
  themeColor: string
  setThemeColor: (theme: string) => void
}>(set => ({
  themeColor: '#fff',
  setThemeColor: theme => set(state => ({themeColor: theme})),
  logoColor: '#fff',
  setLogoColor: color => set(state => ({logoColor: color})),
}))

export {useThemeColorStore}
