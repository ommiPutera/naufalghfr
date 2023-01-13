import {clsx, Title} from '@mantine/core'
import styled from 'styled-components'

type Props = {
  children: JSX.Element | JSX.Element | string
  className?: string
  strokeColor: 'black' | 'white'
  size: '104' | '130'
}

function TextOutline({children, size, className, strokeColor}: Props) {
  return (
    <WrapperTextOutline>
      <Title
        className={clsx(
          className,
          `color__${strokeColor}`,
          `size__${size}`,
          'textOutline',
        )}
      >
        {children}
        <div />
      </Title>
    </WrapperTextOutline>
  )
}

const WrapperTextOutline = styled.div`
  .textOutline {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    margin-top: 0;

    &.color__white {
      color: ${({theme: {colors}}) => colors.light[0]};
      -webkit-text-stroke-color: ${({theme: {colors}}) => colors.light[0]};
    }
    &.color__black {
      color: ${({theme: {colors}}) => colors.dark[9]};
      -webkit-text-stroke-color: ${({theme: {colors}}) => colors.dark[9]};
    }

    &.size__104 {
      margin-top: 0;
    }
    &.size__130 {
      margin-top: -16px;
    }
    &.size__104 div {
      margin-top: -13px;
      width: 105%;
    }
    &.size__130 div {
      margin-top: -20px;
      width: 104%;
    }

    div {
      display: block;
      z-index: -1;
      width: 104%;
      height: 14px;
      background: ${({theme: {colors}}) => colors.primary[0]};
      margin-top: -15px;
      margin-bottom: 8px;
    }
  }

  @media (min-width: 800px) {
    .textOutline {
      &.size__104 {
        margin-top: -22px;
      }
      &.size__130 {
        margin-top: -32px;
      }

      div {
        height: 28px;
        background: ${({theme: {colors}}) => colors.primary[0]};
        margin-bottom: 12px;
      }
      &.size__104 div {
        margin-top: -29px;
        width: 107%;
      }
      &.size__130 div {
        margin-top: -42px;
        width: 105%;
      }
    }
  }
`

export default TextOutline
