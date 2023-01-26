import {MantineProvider} from '@mantine/core'
import {Route, Routes} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {DefaultLayout} from './layouts'
import {APP_ROUTES} from './routes'
import NoMatchPage from './routes/NoMatch'
import {GlobalStyle, mantineTheme, styledTheme} from './theme'

function App() {
  const theme = {
    ...styledTheme,
  }

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </MantineProvider>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="*" element={<NoMatchPage />} />
        {APP_ROUTES.map(route => (
          <Route
            key={route.path}
            index={route.index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
