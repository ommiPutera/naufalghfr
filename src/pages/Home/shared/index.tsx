import {Title} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import TextOutline from '../../../components/TextOutline'

type TitleSectionTypes = {
  reversedRow?: boolean
  highlightText: string
  title: {
    defaultText: string
    outlineText: string
  }
}

function TitleSection({
  reversedRow,
  highlightText,
  title: {defaultText, outlineText},
}: TitleSectionTypes) {
  return (
    <WrapperTitleSection
      className={clsx(reversedRow ? 'reverse' : '', 'mobile__mt-12')}
    >
      <LeftContent>
        <Title className="font-130 mobile__font-60">{defaultText}</Title>
        <TextOutline
          size="130"
          strokeColor="black"
          className="font-130 mobile__font-60"
        >
          {outlineText}
        </TextOutline>
      </LeftContent>
      <RightContent>
        <Title className="font-700 font-16 mobile__font-14 section__highlight">
          {highlightText}
          <div />
        </Title>
      </RightContent>
    </WrapperTitleSection>
  )
}

const WrapperTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 42px;

  @media (min-width: 800px) {
    margin-top: 120px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    &.reverse {
      flex-direction: row-reverse;
    }
  }
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  .section__highlight {
    text-align: left;
    margin-bottom: 0px;
    margin-top: 20px;
    div {
      display: none;
    }

    @media (min-width: 800px) {
      margin-bottom: 70px;
      div {
        display: block;
        width: 405px;
        height: 4.76px;
        margin-top: 11px;
        background: ${({theme: {colors}}) => colors.dark[9]};
      }
    }
  }

  @media (min-width: 800px) {
  }
`

export {TitleSection}
