import {Container, Divider} from '@mantine/core'
import clsx from 'clsx'
import styled from 'styled-components'
import {CONTAINER_SIZE} from '../defaultVariable'
import {useNavigation} from '../store/rootStore'

function Footer() {
  const {isOpen} = useNavigation()
  return (
    <WrapperFooter className={clsx(isOpen ? 'nav__open' : '')}>
      <Container size={CONTAINER_SIZE}>
        <div className="top">
          <SocialItem
            logoUrl="/assets/logo/twitter.svg"
            to="https://twitter.com/"
          />
          <SocialItem
            logoUrl="/assets/logo/facebook.svg"
            to="https://twitter.com/"
          />
          <SocialItem
            logoUrl="/assets/logo/instagram.svg"
            to="https://twitter.com/"
          />
          <SocialItem
            logoUrl="/assets/logo/github.svg"
            to="https://twitter.com/"
          />
        </div>
        <Divider size="xs" />
        <div className="bottom">
          <p>© Copyright 2023, All Rights Reserved</p>
        </div>
      </Container>
    </WrapperFooter>
  )
}

function SocialItem({logoUrl, to}: {logoUrl: string; to: string}) {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <div className="social__item">
        <img src={logoUrl} alt="" />
      </div>
    </a>
  )
}

const WrapperFooter = styled.footer`
  background: ${({theme: {colors}}) => colors.dark[9]};
  color: ${({theme: {colors}}) => colors.light[0]};
  margin-top: 48px;

  > div {
    padding: 72px 0px 92px 0px;
  }

  .bottom {
    text-align: center;
  }

  .top {
    display: flex;
    gap: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;

    .social__item {
      background: rgba(76, 77, 220, 0.2);
      padding: 10px;
      border-radius: 100%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 20px;
        height: 20px;
      }

      :hover,
      :focus,
      :active {
        cursor: pointer;
        background: ${({theme: {colors}}) => colors.primary[0]};
      }
    }
  }
  .bottom {
    margin-top: 32px;

    p {
      font-size: 14px;
    }
  }

  .nav__open {
    filter: blur(2px);
  }

  @media (min-width: 1100px) {
    padding: 32px 0;

    .top {
      margin-bottom: 72px;
    }

    .bottom {
      margin-top: 72px;
    }

    > div {
      padding: 32px 12px;
    }
  }
`

export default Footer
