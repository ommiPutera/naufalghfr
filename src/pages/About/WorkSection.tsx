import {Text} from '@mantine/core'
import React from 'react'
import styled from 'styled-components'
import {TitleSection} from '../Home/shared'

function WorkSection() {
  return (
    <Wrapper className="mt-110 mobile__mt-42" id="projects">
      <TitleSection
        reversedRow={true}
        highlightText="BEST PROJECTS SELECTION"
        title={{defaultText: 'WORK', outlineText: 'EXPERIENCE'}}
      />
      <div className="mt-62 mobile__mt-26">
        <WorkItem
          role="UI/UX DESIGNER"
          companyName="PT. Surya Fajar Capital.tbk"
          jobType="Full Time"
        />
        <WorkItem
          role="Front End Developer"
          companyName="PT. Surya Fajar Capital.tbk"
          jobType="Full Time"
        />
        <WorkItem
          role="UI/UX DESIGNER"
          companyName="PT. Surya Fajar Capital.tbk"
          jobType="Full Time"
        />
      </div>
    </Wrapper>
  )
}

function WorkItem({
  role,
  companyName,
  jobType,
}: {
  role: string
  companyName: string
  jobType: string
}) {
  return (
    <WrapperWorkItem>
      <div className="top__">
        <div className="role__">{role}</div>
        <div className="period__">
          <div className="start">
            <p>START</p>
            <p>Dec 07, 2022</p>
          </div>
          <div className="dash">-</div>
          <div className="end">
            <p>END</p>
            <p>Dec 07, 2022</p>
          </div>
        </div>
      </div>
      <div className="bottom__">
        <Text className="company__">{companyName} -</Text>
        <Text>{jobType}</Text>
      </div>
    </WrapperWorkItem>
  )
}

const Wrapper = styled.div`
  padding-bottom: 48px;

  @media (min-width: 1200px) {
    border-bottom: none;
    padding-bottom: 0;
    margin-top: 12%;
  }
`

const WrapperWorkItem = styled.div`
  border-top: 1px solid rgba(18, 18, 18, 0.15);
  margin-top: 20px;
  padding-top: 32px;

  .top__ {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .role__ {
      background: ${({theme: {colors}}) => colors.dark[9]};
      color: #ffff;
      padding: 6px 20px 4.5px 20px;
      border-radius: 20px;
      text-transform: uppercase;
      font-size: 13px;
    }
    .period__ {
      width: 98px;
      font-size: 13px;
      line-height: 20px;
      position: relative;

      .start {
        p:first-child {
          display: none;
        }
        text-align: center;
      }
      .dash {
        position: absolute;
        right: 0;
        top: 0;
      }
      .end {
        p:first-child {
          display: none;
        }
        text-align: center;
      }
    }
  }

  .bottom__ {
    margin-top: 42px;

    .company__ {
      font-size: 18px;
      font-weight: 400;
      padding-bottom: 12px;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    position: relative;
    padding-bottom: 66px;

    .top__ {
      display: flex;
      align-items: center;
      width: 20%;
      .period__ {
        width: max-content;
        position: absolute;
        right: 0;
        display: flex;
        .start {
          font-size: 14px;
          p:first-child {
            padding-bottom: 7px;
          }
          margin-right: 55px;
          text-align: center;
        }
        .dash {
          position: relative;
          right: 0;
          top: 0;
        }
        .end {
          font-size: 14px;
          p:first-child {
            padding-bottom: 7px;
          }
          margin-left: 55px;
          text-align: center;
        }
      }
    }

    .bottom__ {
      display: flex;
      align-items: center;
      margin-top: 0px;

      .company__ {
        padding-bottom: 0px;
      }
    }
  }
`

export default WorkSection
