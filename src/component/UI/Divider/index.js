import styled from '@emotion/styled';
import { spacing } from 'S';

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
  border-bottom: 1px solid #eee;
  margin: ${({ size }) => sizes[size]} 0;
`;

const DoubleDivider = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ size }) => sizes[size]} 0;
`;

const SPAN = styled.span`
  margin: 0 10px;
`;

const Divider = (props) =>
  props.children ? (
    <DoubleDivider size={props.size}>
      <SingleDivider />
      <SPAN>{props.children}</SPAN>
      <SingleDivider />
    </DoubleDivider>
  ) : (
    <SingleDivider size={props.size} />
  );

export default Divider;
