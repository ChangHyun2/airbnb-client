import React from 'react';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import s from 'S';
import { HamburgerIcon } from '@UI/Icon';
import { PillButton, GhostButton } from '@UI/Button';
import Divider from '@UI/Divider';
import { useToggle } from '@hooks';
import Avatar from '@UI/Avatar';

const StyledProfileMenu = styled(PillButton)`
  ${s.relative}
  ${s.row}
  padding: 4px 4px 4px 12px;
  border-radius: 24px;
  color: ${s.pallete.black};

  svg {
    stroke: currentcolor;
    stroke-width: 3px;
    width: 14px;
    margin-right: 14px;
  }
`;

const AvatarBadge = styled.div`
  ${s.absolute}
  color: ${s.pallete.white}
  right: -3px;
  top: -4px;

  border-radius: 100%;
  line-height: 16px;
  width: 16px;
  height: 16px;
  box-shadow: 0 0 0 1.5px ${s.pallete.white};
  font-size: 10px;
  background-color: ${s.pallete.primary};
`;

const DropdownMenu = styled.ul`
  ${s.absolute}
  ${s.baseCard('sm')}
  width: 220px;
  top: 100%;
  right: 0;
  margin-top: ${s.spacing[10]};
  text-align:left;
  border-radius: ${s.round.md};
  background-color: ${s.pallete.white}
  padding: ${s.spacing[8]} 0;
  font-weight: normal;
`;

const DropdownBox = ({ data, ...otherProps }) => {
  const onClickItem = (e) => {
    if (e.target.tagName === 'LI') {
      e.target.querySelector('a').click();
    }
  };

  return (
    <div {...otherProps}>
      {data.map(({ title, to, updated }) => {
        return (
          <DropDownItem key={title} updated={updated} onClick={onClickItem}>
            <GhostButton to={to}>{title}</GhostButton>
          </DropDownItem>
        );
      })}
    </div>
  );
};

const DropDownItem = styled.li`
  &:hover {
    background-color: ${s.pallete.whiteGrey0};
  }
  padding: ${s.spacing[10]} ${s.spacing[16]};
  &:hover a {
    text-decoration: none;
  }

  ${({ updated }) =>
    updated
      ? `
          a {
            position: relative;
          }
          a::after {
            position: absolute;
            content: '';
            top: -3px;
            right: -6px;
            width: 6px;
            height: 6px;
            border-radius: 100%;
            background-color: red;
          }
        `
      : ''}
`;

export default function ProfileMenu() {
  const message = ['hi'];
  const dropdownToggle = useToggle(false);

  useEffect(() => {
    dropdownToggle.on
      ? window.addEventListener('click', dropdownToggle.setOff)
      : window.removeEventListener('click', dropdownToggle.setOff);
  }, [dropdownToggle.on]);

  return (
    <StyledProfileMenu
      IconComponent={HamburgerIcon}
      variant="white"
      hello="hello"
      onClick={dropdownToggle.setOn}
    >
      <Avatar />
      <AvatarBadge>{message.length}</AvatarBadge>
      {dropdownToggle.on ? (
        <DropdownMenu dropdownToggle={dropdownToggle}>
          <DropdownBox
            data={[
              {
                title: '메시지',
                to: '/alerts',
              },
              {
                title: '알림',
                to: '/alerts',
                updated: true,
              },
              {
                title: '여행',
                to: '/alerts',
              },
              {
                title: '저장 목록',
                to: '/alerts',
              },
            ]}
            css={css`
              font-weight: bold;
            `}
          />
          <Divider size="sm" />
          <DropdownBox
            data={[
              {
                title: '숙수 호스트 되기',
                to: '/alerts',
              },
              {
                title: '체험 호스팅하기',
                to: '/alerts',
              },
              {
                title: '호스트 추천하기',
                to: '/alerts',
              },
              {
                title: '계정',
                to: '/alerts',
              },
            ]}
          />
          <Divider size="sm" />
          <DropdownBox
            data={[
              {
                title: '도움말',
                to: '/alerts',
              },
              {
                title: '로그아웃',
                to: '/alerts',
              },
            ]}
          />
        </DropdownMenu>
      ) : null}
    </StyledProfileMenu>
  );
}
