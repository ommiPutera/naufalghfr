import {Text} from '@mantine/core'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ArrowTopRightIcon} from '../../utils/icons'

function IntroSection() {
  return (
    <Wrapper className="mt-110 mobile__mt-42" id="intro">
      <div className="order__1">
        <Link to="/" className="wrapper__">
          <div>
            <ArrowTopRightIcon />
          </div>
          <p>
            My <br /> Resume
          </p>
        </Link>
      </div>
      <div className="order__2">
        <div className="title__">
          <h3>
            Hi, I’m Naufal <div />
          </h3>
          <h3>👋</h3>
        </div>
        <Text className="font-500 describe__">
          and I'm a <b>Product Designer</b> based in Jakarta, <br />
          <br /> I love talking about technology, design, and well-designed
          digital products. I also like reading and I am an avid listener of
          music. I love building products which are simple and clean so that in
          addition to being visually beautiful, it also makes it easier for
          users to interact with it. For me <br />
          <br />
          <b> “Great design is as little design as possible.”</b>
        </Text>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid rgba(18, 18, 18, 0.15);
  padding-bottom: 48px;

  @media (min-width: 800px) {
    border-bottom: none;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    height: 100%;
    gap: 60px;

    .order__1 {
      .wrapper__ {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        border-radius: 100%;
        background: ${({theme: {colors}}) => colors.primary[0]};
        div {
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          width: 100px;
          height: 50px;
          color: #ffff;
        }

        p {
          font-size: 28px;
          color: #ffff;
          line-height: 30px;
          font-weight: 600;
        }
      }
    }
    .order__2 {
      width: 70%;
      height: 100%;

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
        margin-top: 44px;
        color: #616161;
        b {
          color: #121212;
        }
      }
    }
  }
`

export default IntroSection
