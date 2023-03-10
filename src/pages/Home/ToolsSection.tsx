import {Grid, Text, Title} from '@mantine/core'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {TitleSection} from './shared'
import {propsContentTools} from './props'
import {CardItemTypes} from './types'

function ToolsSection() {
  return (
    <Wrapper className="mt-110 mobile__mt-42">
      <TitleSection
        reversedRow={true}
        highlightText="WHAT CAN I DO FOR YOU"
        title={{defaultText: 'TOOLS &', outlineText: 'SKILL SET'}}
      />
      <Cards />
    </Wrapper>
  )
}

function Cards() {
  return (
    <WrapperCards className="mt-82 mobile__mt-26">
      <Grid>
        {propsContentTools.map(project => (
          <Grid.Col key={project.title} sm={1} md={3}>
            <CardItem
              assetSrc={project.assetSrc}
              title={project.title}
              to={project.to}
              desc={project.desc}
              animate={project.animate}
              layout={project.layout}
            />
          </Grid.Col>
        ))}
      </Grid>
    </WrapperCards>
  )
}

function CardItem({assetSrc, title, desc, to, animate}: CardItemTypes) {
  return (
    <WrapperCardItem className={clsx(animate, '')}>
      <Link to={to}>
        <img src={assetSrc} alt="" />
        <Title className="font-22 font-600 mt-29 mobile__mt-29 mobile__font-22 font-uppercase">
          {title}
        </Title>
        <Text
          size="lg"
          className="desc__ mt-12 mobile__mt-12 font-14 mobile__font-14 font-500"
        >
          {desc}
        </Text>
      </Link>
    </WrapperCardItem>
  )
}

const Wrapper = styled.div``
const WrapperCards = styled.div`
  border-top: 1px solid rgba(18, 18, 18, 0.15);
  padding-top: 26px;
  position: relative;
  > div {
    > div:hover,
    div:active,
    div:focus {
      > div {
        cursor: pointer;
        transition: 0.3s;
        background: ${({theme: {colors}}) => colors.primary[0]};
      }
    }
  }

  @media (min-width: 1200px) {
    border: none;
  }
`
const WrapperCardItem = styled.div`
  color: ${({theme: {colors}}) => colors.light[0]};
  max-width: 100%;
  min-height: 164px;
  height: max-content;
  overflow: hidden;
  padding: 30px;
  border-radius: 13px;
  background: ${({theme: {colors}}) => colors.dark[9]};
  -webkit-tap-highlight-color: transparent;

  img {
    width: 42px;
    height: 42px;
  }

  .desc__ {
    line-height: 18.95px;
  }
  @media (max-width: 1200px) {
    gap: 14px;
    width: max-content;
  }
`

export default ToolsSection
