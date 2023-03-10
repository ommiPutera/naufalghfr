import styled from 'styled-components'
import {ArrowTopRightIcon} from '../../utils/icons'

function ContactSection() {
  return (
    <Wrapper className="mt-110 mobile__mt-42" id="contact-section">
      <div className="order__1">
        <div>
          <a
            href="https://wa.me/+6281219603026"
            target="_blank"
            className="wrapper__"
            rel="noreferrer"
          >
            <div>
              <ArrowTopRightIcon />
            </div>
            <p>
              Whatsapp <br /> Me
            </p>
          </a>
          <a
            href="mailto:muhammadnaufalghfr@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="wrapper__ outline__"
          >
            <div>
              <ArrowTopRightIcon />
            </div>
            <p>
              Grab Me <br /> An Email
            </p>
          </a>
        </div>
        <div>
          <p>MY LOCATION</p>
          <h3>Jakarta, Indonesia</h3>
        </div>
      </div>
      <div className="order__2">
        <div className="email__">
          <p>EMAIL</p>
          <h3>
            <b>muhammadnaufalghfr</b>@gmail.com
          </h3>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  .order__1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    gap: 80px;

    > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      .wrapper__ {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 282px;
        max-height: 282px;
        min-width: 252px;
        min-height: 252px;
        width: max-content;
        height: max-content;
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

      .outline__ {
        background: ${({theme: {colors}}) => colors.light[0]};
        border: 1px solid rgba(18, 18, 18, 0.2);

        svg,
        p {
          color: ${({theme: {colors}}) => colors.dark[9]};
        }
      }
    }

    > div:last-child {
      p {
        font-size: 12px;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  .order__2 {
    width: 100%;
    height: 100%;
    margin-top: 48px;

    .email__ {
      display: flex;
      flex-direction: column;
      p {
        font-size: 12px;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  @media (min-width: 1200px) {
    padding-bottom: 0;
    margin-top: 9%;
    display: flex;
    height: 100%;
    gap: 60px;

    .order__1 {
      width: 100%;
      flex-direction: row;
      gap: 10px;
      margin-top: 4%;

      > div:first-child {
        width: 50%;
        flex-direction: row;
        align-items: center;
      }
      > div:last-child {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;

        p {
          font-size: 12px;
          margin-bottom: 10px;
        }
        h3 {
          font-size: 40px;
          font-weight: 500;
        }
      }
    }
    .order__2 {
      width: 100%;
      height: 100%;

      .email__ {
        display: flex;
        flex-direction: column;
        p {
          font-size: 12px;
          margin-bottom: 10px;
        }
        h3 {
          font-size: 30px;
          font-weight: 400;
          b {
            font-weight: 600;
          }
        }
      }
    }
  }
`

export default ContactSection
