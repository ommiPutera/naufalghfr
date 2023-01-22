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
  overflow-x: hidden;
  .children {
    height: 100%;
    min-height: 100vh;
    padding: 0 24px;
  }
  .nav__open {
    filter: blur(2px);
    overflow: hidden;
    display: none;
  }

  @media (min-width: 800px) {
    position: relative;
    .children {
      padding: 0;
    }
  }
`
export const LeftContent = styled.div`
  width: 50%;
  text-align: left;
  display: flex;
  justify-content: start;

  @media (min-width: 800px) {
    width: 25%;
    text-align: left;
    display: flex;
    justify-content: start;
  }
`
export const CenterContent = styled.div`
  width: 0%;

  @media (min-width: 800px) {
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

  @media (min-width: 800px) {
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
  height: max-content;
  max-height: 100vh;
  position: absolute;
  z-index: 9999;

  &.open {
    display: block;
  }
  &.closed {
    display: none;
  }

  ul {
    width: 100%;
    background: red;
    overflow: scroll;
    animation: ${growDown} 400ms linear;
    transform-origin: top center;

    li {
      padding: 32px 16px;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
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
      border-radius: 50px;
      position: absolute;
      content: '';
      width: 70%;
      height: 60%;
      background: none;
    }
  }
`
