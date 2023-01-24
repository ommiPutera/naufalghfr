import styled from 'styled-components'

type BackgroundsTypes = {
  route: 'home' | 'about'
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

  &.home,
  &.about {
    .bg {
      height: max-content;
      min-height: 910px;
      max-height: 100vh;
    }
  }
`

export {HeroBackgrounds}
