import {Text, Title} from '@mantine/core'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from '../../components/Button'
import {ArrowHorizontal, ArrowLeft, LinkIcon} from '../../utils/icons'
import {TitleType} from './props'

function TitleSection({title, role, link}: TitleType) {
  return (
    <Wrapper>
      <div className="top__">
        <BackButton />
        <Role />
      </div>
      <div className="middle__">
        <Title order={1} className="font-uppercase mobile__font-42">
          {title}
        </Title>
      </div>
      {link.to && link.desc ? (
        <div className="bottom__">
          <LinkButton to={link.to} desc={link.desc} />
        </div>
      ) : null}
    </Wrapper>
  )
}

function BackButton() {
  return (
    <WrapperBackButton>
      <Link to="/projects">
        <Button variant="subtle">
          <div className="icon__">
            <ArrowLeft />
          </div>
          BACK TO PROJECTS
        </Button>
      </Link>
    </WrapperBackButton>
  )
}

function Role() {
  return (
    <WrapperRole>
      <div className="for__mobile rotate90">
        <ArrowHorizontal />
      </div>
      <Text className="font-12 mobile__font-12 font-600 for__desktop">
        ROLE
      </Text>
      <div className="for__desktop">
        <ArrowHorizontal />
      </div>
      <Text className="font-12 mobile__font-12 font-600">
        <span className="for__mobile">ROLE: </span>
        UI DESIGNER & LEAD
      </Text>
    </WrapperRole>
  )
}

function LinkButton({to, desc}: {to: string; desc: string}) {
  return (
    <WrapperLinkButton>
      <Button variant="subtle">
        <div className="icon__">
          <LinkIcon />
        </div>
        <div className="text__">
          <a href={to} target="_blank" rel="noreferrer">
            <strong>{desc}</strong>
          </a>
          <strong>
            <Text className="link__to">{to}</Text>
          </strong>
        </div>
      </Button>
    </WrapperLinkButton>
  )
}

const Wrapper = styled.div`
  border-top: 1px solid rgba(18, 18, 18, 0.15);
  border-bottom: 1px solid rgba(18, 18, 18, 0.15);
  padding-bottom: 24px;

  .top__ {
    margin-top: 22px;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  .middle__ {
    margin: 50px 0 0 0;
  }

  @media (min-width: 1100px) {
    .top__ {
      margin-top: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .middle__ {
      margin: 42px 0;
    }

    .bottom__ {
    }
  }
`

const WrapperRole = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background: ${({theme: {colors}}) => colors.light[1]};
  padding: 6px 19px;
  border-radius: 50px;
  width: fit-content;

  .for__desktop {
    display: none;
  }
  .for__mobile {
    display: inline;
  }
  @media (min-width: 1100px) {
    display: flex;
    gap: 10px;
    padding: 6px 16px;
    align-items: center;

    .for__desktop {
      display: inline;
    }
    .for__mobile {
      display: none;
    }
  }
`

const WrapperBackButton = styled.div`
  button {
    font-weight: 500;
    font-size: 12px;
    color: ${({theme: {colors}}) => colors.primary[0]};

    &.mantine-Button-root {
      padding: 0px;
    }
  }
  .icon__ {
    color: ${({theme: {colors}}) => colors.primary[0]};
    margin-right: 10px;
  }

  @media (min-width: 1100px) {
  }
`

const WrapperLinkButton = styled.div`
  button {
    margin-top: 48px;
    font-size: 12px;
    color: ${({theme: {colors}}) => colors.dark[9]};

    &.mantine-Button-root {
      padding: 0px;
    }
    .icon__ {
      color: ${({theme: {colors}}) => colors.dark[9]};
      margin-right: 10px;
    }
    .text__ {
      margin-top: 13px;
    }
    .link__to {
      margin-top: 5px;
      text-decoration: underline;
      display: block;
    }
  }

  @media (min-width: 1100px) {
    button {
      font-size: 12px;
      color: ${({theme: {colors}}) => colors.dark[9]};

      &.mantine-Button-root {
        padding: 0px;
      }
      .icon__ {
        color: ${({theme: {colors}}) => colors.dark[9]};
        margin-right: 10px;
      }
      .text__ {
        margin-top: 0px;
        text-decoration: underline;
      }
      .link__to {
        display: none;
      }
    }
  }
`

export default TitleSection
