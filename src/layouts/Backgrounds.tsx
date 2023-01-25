import styled from 'styled-components'

type BackgroundsTypes = {
  route: 'home' | 'about' | 'projects'
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

  .bg {
    object-fit: cover;
    width: 100%;
  }

  &.home {
    .bg {
      height: max-content;
      min-height: 910px;
      max-height: 100vh;
    }
  }
  &.about,
  &.projects {
    min-height: 515px;
    max-height: 525px;
    overflow: hidden;
    .bg {
      min-height: 515px;
      max-height: 525px;
      height: fit-content;
    }
  }

  @media (min-width: 1200px) {
    &.home {
      .bg {
        height: max-content;
        min-height: 910px;
        max-height: 100vh;
      }
    }
    &.about,
    &.projects {
      min-height: 910px;
      max-height: 100vh;
      .bg {
        min-height: 910px;
        max-height: 100vh;
        height: max-content;
      }
    }
  }
`

export {HeroBackgrounds}
