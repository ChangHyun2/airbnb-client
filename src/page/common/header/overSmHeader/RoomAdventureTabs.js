import styled from '@emotion/styled';
import { css } from '@emotion/react';
import s from 'S';
import { GhostButton } from '@UI/Button';

const OverMdSearchbar = styled.div`
  ${s.row}
  ${s.absolute}
top:100%;
  width: 100%;

  border-radius: 32px;
  background-color: ${s.pallete.white};
  button {
    padding: 14px 32px;
    text-align: left;
    border-radius: 32px;
    border: none;

    :hover {
      background-color: ${s.pallete.grey0};
      box-shadow: none;
      border: none;
    }
    ${s.h12}
  }
`;
// ${s.absolute}
const Tabs = styled.div`
  ${s.relative}
  ${s.under.md(`
    position:absolute;
    top:100%;
    left: 50%;
    transform: translate(-50%, -50%)
  `)}

  a,button {
    position:relative;
    color: ${s.pallete.white};
    text-decoration: none !important;
    ${s.padding8}
    ${s.bold}
    ${s.h16}

    &::after{
      content: '';
      display:block;
      position:absolute;
      top: calc(100% - 3px);
      left: 50%;
      transform: translateX(-50%);
      border-bottom : 2px solid #fff;
      border-radius: 2px;
      transition: width 0.3s;
    }
    &:hover {
      opacity: 0.8;
      &::after{
        width: 10%;
        border-bottom: 2px solid #fff;
      }
    }
    &:focus{
      &::after{
        width: 40%;
      }
    }
  }
`;
const StyledTab = styled.div`
  border-radius: 32px;
  padding: 14px 24px;

  &:hover {
    background-color: ${s.pallete.grey0};
  }

  div {
    margin-bottom: 1px;
    ${s.h12}
    ${s.bold}
  }

  input,
  span {
    outline: none;
    border: none;
    background: transparent;
    ${s.h14}
  }
`;

export default function RoomAdventureTabs() {
  return (
    <Tabs>
      <GhostButton size="sm">숙소</GhostButton>
      <GhostButton size="sm">체험</GhostButton>
      <GhostButton size="sm" href="#">
        온라인 체험
      </GhostButton>
      <OverMdSearchbar>
        <StyledTab
          css={css`
            text-overflow: ellipsis;
          `}
        >
          <div>위치</div>
          <label htmlFor="location"></label>
          <input
            type="text"
            placeholder="어디로 여행가세요?"
            autoComplete="off"
            value={location}
            id="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </StyledTab>
        <StyledTab>
          <div>체크인</div>
          <span> 날짜 추가</span>
        </StyledTab>
        <StyledTab>
          <div>체크아웃</div>
          <span> 날짜 추가</span>
        </StyledTab>
        <StyledTab>
          <div>인원</div>
          <span>게스트 추가</span>
        </StyledTab>
      </OverMdSearchbar>
    </Tabs>
  );
}
