import styled, {keyframes} from 'styled-components'

// --- Keyframes ---
export const growDown = keyframes`
    0% {
        transform: rotateX(30deg)
    }
    100% {
        transform: rotateX(0deg) 
    }
`

// --- Layouts ---
export const WrapperLayout = styled.div`
  .children__ {
    height: fit-content;
    min-height: 100vh;
    padding: 0 24px;
  }
  .nav__open {
    filter: blur(2px);
    overflow: hidden;
    display: none;
  }

  @media (min-width: 1200px) {
    position: relative;
    .children__ {
      padding: 0px 48px;
      height: 100%;
    }
  }
`
export const LeftContent = styled.div`
  width: 50%;
  text-align: left;
  display: flex;
  justify-content: start;

  @media (min-width: 1200px) {
    width: 25%;
    text-align: left;
    display: flex;
    justify-content: start;
  }
`
export const CenterContent = styled.div`
  width: 0%;

  @media (min-width: 1200px) {
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
  }
`
export const RightContent = styled.div`
  width: 50%;
  text-align: right;
  display: flex;
  justify-content: end;

  .btn-contact {
    display: none;
  }

  @media (min-width: 1200px) {
    width: 25%;
    .btn-contact {
      display: flex;
      align-items: center;

      svg {
        margin-left: 15px;
      }
    }
  }
`
export const WrapperDropdownNav = styled.nav`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  position: absolute;
  z-index: 9999;
  background: #1d1d1d;
  color: #fff;
  padding-top: 42px;

  &.open {
    display: block;
  }
  &.closed {
    display: none;
  }

  ul {
    width: 100%;
    overflow: scroll;
    transform-origin: top center;

    li {
      position: relative;
      padding: 20px 16px;
      text-align: center;
      font-size: 17px;
      font-weight: 500;
      text-decoration: none;

      div {
        width: 0;
        height: 4px;
        margin: 3px auto 0 auto;
      }
      &.match {
        color: #ffff;

        div {
          width: 67px;
          background: ${({theme: {colors}}) => colors.primary[0]};
        }
      }
    }
  }
  .close__btn {
    padding: 32px 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div {
      border: 1px solid ${({theme: {colors}}) => colors.dark[9]};
      border-radius: 50px;
      position: absolute;
      content: '';
      width: 70%;
      height: 60%;
      background: none;
    }
  }
`
