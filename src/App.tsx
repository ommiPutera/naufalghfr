import {MantineProvider} from '@mantine/core'
import {Helmet} from 'react-helmet'
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
        <AppHelmet />
        <AppRoutes />
      </ThemeProvider>
    </MantineProvider>
  )
}

function AppHelmet() {
  return (
    <Helmet>
      <meta name="theme-color" content="#1D1D1D" />
    </Helmet>
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
