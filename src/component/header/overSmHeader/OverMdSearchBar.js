import styled from '@emotion/styled';
import s from 'S';
import { searchIcon } from '@UI/Icon';
import { GhostButton, RoundButton } from '@UI/Button';

const SearchButton = styled(RoundButton)`
  color: white;
`;

const StyledOverMdSearchBar = styled.div`
  ${s.relative}
  ${s.under.md(`
    position:absolute;
    top:100%;
    left: 50%;
    transform: translate(-50%, -50%)
  `)}

  color: ${s.pallete.white}

  a,button {
    position: relative;
    color: ${s.pallete.white};
    text-decoration: none !important;
    padding: ${s.spacing[8]};
    ${s.bold}
    ${s.h16}

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: calc(100% - 3px);
      left: 50%;
      transform: translateX(-50%);
      border-bottom: 2px solid #fff;
      border-radius: 2px;
      transition: width 0.3s;
    }
    &:hover {
      opacity: 0.8;
      &::after {
        width: 10%;
        border-bottom: 2px solid #fff;
      }
    }
    &:focus {
      &::after {
        width: 40%;
      }
    }
  }
`;

const SearchBar = styled.div`
  ${s.absolute}
  top:100%;
  left: 50%;
  transform: translateX(-50%);
  ${s.row}
  flex-wrap:nowrap;

  border-radius: 32px;
  background-color: ${s.pallete.white};
  ${s.under.md(`
    top:130%;
  `)}
`;

const StyledTab = styled.div`
  white-space:nowrap;
  border-radius: 32px;
  padding: 14px 24px;
  color: ${s.pallete.black}

  &:hover {
    background-color: ${s.pallete.whiteGrey1};
  }

  input,
  & > span {
    outline: none;
    border: none;
    background: transparent;
    ${s.h14}
  }
`;

const TabTitle = styled.div`
  margin-bottom: 1px;
  ${s.h12}
  ${s.bold}
`;

const SearchBarItem = ({ title, children, ...otherProps }) => {
  return (
    <StyledTab {...otherProps}>
      <TabTitle>{title}</TabTitle>
      {children}
    </StyledTab>
  );
};

export default function OverMdSearchBar() {
  return (
    <>
      <StyledOverMdSearchBar>
        <GhostButton size="sm">숙소</GhostButton>
        <GhostButton size="sm">체험</GhostButton>
        <GhostButton size="sm" href="#">
          온라인 체험
        </GhostButton>
      </StyledOverMdSearchBar>
      <SearchBar>
        <SearchBarItem title="위치">
          <label htmlFor="location"></label>
          <input
            type="text"
            placeholder="어디로 여행가세요?"
            autoComplete="off"
            value={location}
            id="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </SearchBarItem>
        {[
          { title: '체크인', content: '날짜 추가' },
          { title: '체크아웃', content: '날짜 추가' },
          { title: '인원', content: '게스트 추가' },
        ].map(({ title, content }) => (
          <SearchBarItem key={title} title={title}>
            <span>{content}</span>
          </SearchBarItem>
        ))}
        {/* <SearchButton IconComponent={searchIcon} size="lg" variant="primary" /> */}
      </SearchBar>
    </>
  );
}
