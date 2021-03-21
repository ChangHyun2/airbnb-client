import { useLocation } from 'react-router-dom';

import styled from '@emotion/styled';
import s from 'S';
import OverSmHeader from './header/OverSmHeader';
import Notice from './header/Notice';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/' ? <Notice /> : null}
      <s.Relative>
        <OverSmHeader />
      </s.Relative>
    </>
  );
}
