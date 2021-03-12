import { baseComponent, spacing, pallete } from 'S';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const sizes = {
  xs: spacing[20],
  sm: spacing[30],
  md: spacing[50],
  lg: spacing[70],
  auto: 'auto',
};

const StyledAvatar = styled.div`
  ${baseComponent.baseImageWrapper}
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid ${pallete.grey0};
`;

const Avatar = ({
  src = 'https://a0.muscache.com/im/pictures/user/fcdaa226-7b1d-4174-bef3-9035e8cf5c1c.jpg?aki_policy=profile_medium',
  size = 'sm',
}) => {
  const ds = [];

  const length = sizes[size];
  ds.push(`
    width: ${length};
    height: ${length};    
  `);

  return (
    <StyledAvatar
      css={css`
        ${ds.join('')}
      `}
    >
      <img src={src} />
    </StyledAvatar>
  );
};

export default Avatar;
