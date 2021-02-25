import styled from '@emotion/styled';
import { Notice, OverSmHeader } from './header/index';
import s from 'S';

export default function Header() {
  return (
    <>
      <Notice />
      <s.Relative>
        <OverSmHeader />
      </s.Relative>
    </>
  );
}
