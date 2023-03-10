import styled from 'styled-components'

type BackgroundsTypes = {
  route: 'home' | 'about' | 'projects' | 'contact'
  imgUrl: string
}

function HeroBackgrounds({route, imgUrl}: BackgroundsTypes) {
  return (
    <WrapperBackgrounds className={route}>
      <img className="bg" src={imgUrl} alt="" />
    </WrapperBackgrounds>
  )
}

const WrapperBackgrounds = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: -99;
  width: 100%;
  height: 100vh;

  .bg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &.home {
    min-height: 910px;
    max-height: 910px;
    height: fit-content;
    overflow: hidden;
    .bg {
      width: auto;
      height: max-content;
    }
  }
  &.about,
  &.projects,
  &.contact {
    min-height: 490px;
    max-height: 490px;
    overflow: hidden;
    .bg {
      width: auto;
      height: max-content;
    }
  }

  @media (min-width: 1200px) {
    &.home {
      min-height: 928px;
      max-height: 928px;
      .bg {
        width: 100%;
        height: max-content;
      }
    }

    &.about,
    &.projects,
    &.contact {
      min-height: 865px;
      max-height: 865px;
      .bg {
        width: 100%;
        height: max-content;
      }
    }
  }
`

export default HeroBackgrounds
