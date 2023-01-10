import {clsx, Title, TitleOrder} from '@mantine/core'
import styled from 'styled-components'

type Props = {
  children: JSX.Element | JSX.Element | string
  order: TitleOrder
  className?: string
}

function TextOutline({children, order, className}: Props) {
  return (
    <WrapperTextOutline>
      <Title order={order} className={clsx(className, 'text')}>
        {children}
        <div />
      </Title>
    </WrapperTextOutline>
  )
}

const WrapperTextOutline = styled.div`
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffff;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffff;
    margin-top: 0;

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

  @media (min-width: 1100px) {
    .text {
      margin-top: -22px;

      div {
        width: 107%;
        height: 28px;
        background: ${({theme: {colors}}) => colors.primary[0]};
        margin-top: -29px;
        margin-bottom: 12px;
      }
    }
  }
`

export default TextOutline
