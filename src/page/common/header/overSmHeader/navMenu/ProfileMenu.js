import styled from '@emotion/styled';
import s from 'S';
import { HamburgerIcon } from '@UI/Icon';
import { PillButton } from '@UI/Button';

const StyledProfileMenu = styled(PillButton)`
  ${s.relative}
  padding: 4px 4px 4px 12px;
  border-radius: 24px;
  color : ${s.pallete.black}

  svg {
    stroke: currentcolor;
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
`;

export default function ProfileMenu() {
  const message = ['hi'];

  return (
    <StyledProfileMenu
      IconComponent={HamburgerIcon}
      variant="white"
      hello="hello"
    >
      <s.RowSpaceBetween>
        <div className="avatar">
          <img
            src="https://a0.muscache.com/im/pictures/user/fcdaa226-7b1d-4174-bef3-9035e8cf5c1c.jpg?aki_policy=profile_medium"
            alt=""
          />
          <div className="badge">{message.length}</div>
        </div>
      </s.RowSpaceBetween>
    </StyledProfileMenu>
  );
}
