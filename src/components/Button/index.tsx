import {Button} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import {getClassProps} from '../../utils/helper'

interface IButton {
  children: React.ReactNode | JSX.Element
  className?: string
  variant?: 'outline' | 'default'
  compact?: true
  size?: 'sm' | 'md' | 'lg' | 'xl'
  mobileSize?: 'sm' | 'md' | 'lg' | 'xl'
}

function EpicButton({children, className, ...rest}: IButton) {
  return (
    <WrapperButton className={className}>
      <Button className={clsx(getClassProps(rest))} {...rest}>
        {children}
      </Button>
    </WrapperButton>
  )
}

const WrapperButton = styled.div`
  .mantine-Button-root {
    padding: 0 30px;
    min-height: 44px;
    border-radius: 100px;
  }
  .mantine-Button-label {
    font-weight: 400;
  }
  .sizeLg {
    .mantine-Button-label {
      font-size: 17px;
    }
  }
  @media (max-width: 768px) {
    .mobileSizeMd {
      .mantine-Button-label {
        font-size: 14px;
      }
    }
  }
  .variantDefault {
    border: 2px solid ${({theme: {colors}}) => colors.primary[0]};
    color: ${({theme: {colors}}) => colors.light[0]};
    background: ${({theme: {colors}}) => colors.primary[0]};
    &:hover {
      border: 2px solid ${({theme: {colors}}) => colors.primary[0]};
      background: ${({theme: {colors}}) => colors.primary[0]};
      transition: border 0.4s ease;
    }
  }
  .variantOutline {
    border: 2px solid ${({theme: {colors}}) => colors.primary[0]};
    color: ${({theme: {colors}}) => colors.primary[0]};
    &:hover {
      border: 2px solid ${({theme: {colors}}) => colors.primary[0]};
      background: ${({theme: {colors}}) => colors.primary[0]};
      transition: border 0.4s ease;
    }
  }
`

export {EpicButton as Button}
