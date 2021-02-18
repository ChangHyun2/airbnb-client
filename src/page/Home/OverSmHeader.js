import styled from '@emotion/styled';
import s from 'S';
import { AirbnbIcon, GlobeIcon, HamburgerIcon } from '@UI/Icon';
import { PillButton, GhostButton } from '@UI/Button';

const OverSmHeader = styled.div`
  ${s.relative}
  z-index: 1;
  ${s.baseContainer({ align: 'rowSpaceBetween' })}

  padding-top: ${s.padXs};
  padding-bottom: ${s.padXs};
`;

const Logo = styled(s.Row)`
  flex: 1 0 150px;

  svg {
    fill: ${s.pallete.white};
    width: 32px;
    margin-right: 6px;
  }

  span {
      ${s.bold}
      ${s.h22}
      color: ${s.pallete.white};
      visibility: hidden;
      ${s.over.md(`
        visibility:visible;
      `)}
    }
    `;

const Tabs = styled.div`
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

const NavMenu = styled(s.RowEnd)`
  flex: 1 0 150px;

  svg {
    fill: currentcolor;
  }
  
  a,
  button:first-of-type {
    ${s.h14}
    background-color: transparent;
    border-color: transparent;
    transition: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  button:first-of-type {
    svg {
      width: 16px;
      height: 16px;
      fill: currentcolor;
      stroke: ${s.pallete.white};
      stroke-width: 0.2px;
    }
    margin-left: -10px;
  }

  button:last-of-type {
    ${s.relative}
    padding: 4px 4px 4px 12px;
    border-radius: 24px;

    svg {
      stroke-width: 3px;
      width: 14px;
      margin-right: 14px;
    }
    
    .avatar{
      ${s.baseImageWrapper};
      width: 30px;
      height: 30px;
      img{
        border-radius: 100%;
      }
    }

    .badge {
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
    }
  }
`;

export default function overSmHeader() {
  return (
    <OverSmHeader>
      <Logo>
        <AirbnbIcon />
        <span>airbnb</span>
      </Logo>
      <div>
        <Tabs>
          <GhostButton size="sm">숙소</GhostButton>
          <GhostButton size="sm">체험</GhostButton>
          <GhostButton size="sm" href="#">
            온라인 체험
          </GhostButton>
        </Tabs>
      </div>
      <NavMenu>
        <PillButton size="md" href="#">
          호스트 되기
        </PillButton>
        <PillButton IconComponent={GlobeIcon} size="md" />
        <PillButton IconComponent={HamburgerIcon} theme="white">
          <s.RowSpaceBetween>
            <div className="avatar">
              <img
                class="_1wzp0xs"
                src="https://a0.muscache.com/im/pictures/user/fcdaa226-7b1d-4174-bef3-9035e8cf5c1c.jpg?aki_policy=profile_medium"
                alt=""
              />
              <div className="badge">1</div>
            </div>
          </s.RowSpaceBetween>
        </PillButton>
      </NavMenu>
    </OverSmHeader>
  );
}
