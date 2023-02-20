import {Text} from '@mantine/core'
import styled from 'styled-components'
import {ArrowTopRightIcon} from '../../utils/icons'

function IntroSection() {
  return (
    <Wrapper className="mt-110 mobile__mt-42" id="intro">
      <div className="order__1">
        <div className="wrapper__">
          <img src="/assets/profile.png" alt="" />
        </div>
      </div>
      <div className="order__2">
        <div className="title__">
          <h3>
            Hi, I’m Naufal <div />
          </h3>
          <h3>👋</h3>
        </div>
        <Text className="font-500 describe__">
          <span>
            and I'm a <b>Product Designer</b> based in Jakarta,
          </span>
          <br />
          I love talking about technology, design, and well-designed digital
          products. I also like reading and I am an avid listener of music. I
          love building products which are simple and clean so that in addition
          to being visually beautiful, it also makes it easier for users to
          interact with it. For me
          <br />
          <span>
            <b> “Great design is as little design as possible.”</b>
          </span>
        </Text>
        <div className="link__resume">
          <a
            href="https://drive.google.com/file/d/14V6j7pOd6OKQLc1iYUEI35s837B7zuC5/view"
            target="_blank"
            rel="noreferrer"
          >
            Link to my Resume
          </a>
          <ArrowTopRightIcon />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom: 12px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  .order__1 {
    order: 2;
    margin-top: 48px;
    .wrapper__ {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 288px;
      height: 288px;
      border-radius: 100%;

      img {
        width: max-content;
        height: max-content;
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  .order__2 {
    order: 1;
    width: 100%;
    height: 100%;
    margin-top: 48px;

    .title__ {
      display: flex;
      align-items: center;
      h3 {
        font-size: 28px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        div {
          z-index: -1;
          width: 51%;
          height: 12px;
          background: ${({theme: {colors}}) => colors.primary[0]};
          margin-top: -17px;
        }
      }
    }
    .link__resume {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-top: 12px;
      color: ${({theme: {colors}}) => colors.primary[0]};
      a {
        font-weight: 600;
        text-decoration: underline 1.5px;
        text-underline-offset: 4px;
      }
    }
    .describe__ {
      margin-top: 8px;
      color: #616161;
      b {
        color: #121212;
      }
      span {
        display: inline-block;
        padding: 14px 0;
      }
    }
  }

  @media (min-width: 1200px) {
    padding-bottom: 0;
    margin-top: 9%;
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: 60px;

    .order__1 {
      order: 1;
      margin-top: 0;
    }
    .order__2 {
      order: 2;
      width: 70%;
      height: 100%;
      margin-top: 0;

      .title__ {
        display: flex;
        align-items: center;
        h3 {
          font-size: 48px;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          div {
            z-index: -1;
            width: 51%;
            height: 14px;
            background: ${({theme: {colors}}) => colors.primary[0]};
            margin-top: -26px;
          }
        }
      }
      .describe__ {
        margin-top: 12px;
        color: #616161;
        b {
          color: #121212;
        }
      }
    }
  }
`

export default IntroSection
