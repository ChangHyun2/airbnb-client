import styled from '@emotion/styled';
import { spacing, pallete } from 'S';

const sizes = {
  xs: spacing[4],
  sm: spacing[10],
  md: spacing[20],
  lg: spacing[30],
  xl: spacing[40],
};

const SingleDivider = styled.div`
  width: 100%;
  height: 0;
  border-bottom: 1.5px solid ${pallete.grey0};
  margin: ${({ size }) => sizes[size]} 0;
`;

const DoubleDivider = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ size }) => sizes[size]} 0;
`;

const SPAN = styled.span`
  margin: 0 10px;
  color: ${pallete.grey5};
  font-weight: bold;
  white-space: nowrap;
`;

const Divider = ({ size, children, ...otherProps }) =>
  children ? (
    <DoubleDivider size={size} {...otherProps}>
      <SingleDivider />
      <SPAN>{children}</SPAN>
      <SingleDivider />
    </DoubleDivider>
  ) : (
    <SingleDivider size={size} {...otherProps} />
  );

export default Divider;
