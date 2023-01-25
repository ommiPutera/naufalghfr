import {Button} from '@mantine/core'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'

function NoMatchPage() {
  const {pathname} = useLocation()
  const url = window.location.href
    .replace(/http:|https:|/gi, '')
    .replace('//', '')
    .replace(`${pathname.toLowerCase()}`, '')

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <WrapperPage>
      <h1>404 - Oh no, page not found.</h1>
      <p>
        <b>"{`${pathname}`}"</b> {` is not a page on ${url}. So sorry.`}
      </p>
      <Link to="/">
        <Button color="danger.9" variant="outline" radius="xl" size="md">
          Go to the home page
        </Button>
      </Link>
    </WrapperPage>
  )
}

const WrapperPage = styled.div`
  text-align: center;
  padding: 10rem 0;
  height: 100vh;

  h1 {
    font-size: 22px;
    margin-bottom: 4px;
  }
  p {
    font-size: 13.5px;
    margin-bottom: 34px;
  }

  @media (min-width: 1600px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 14.5px;
    }
  }
`

export default NoMatchPage
