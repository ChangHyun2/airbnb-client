import React from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import s from 'S';
import { slideInUp, slideOutDown } from '@UI/keyframes';

const color = keyframes`
  from {
    background-color: red;
  }
  to{
    background-color: blue;
  }
`;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  transition: opacity 0.5s;
  opacity: 0;
  animation: 1s ${({ animations }) => animations};
  ${({ ds }) => ds.join('')}
  ${s.zIndex.backdrop};
`;

// const slideInUp = keyframes`
//   from {
//     transform: translate3d(0, -100%, 0);
//   }

//   to {
//     transform: translate3d(0, 0, 0);
//   }
// `;

export default function Backdrop({ children, ...otherProps }) {
  const [rendered, setRendered] = React.useState(false);
  const [ds, setDs] = React.useState([]);
  const [animations, setAnimations] = React.useState([]);

  React.useEffect(() => {
    setRendered(true);

    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  React.useEffect(() => {
    if (rendered) {
      setDs((prev) => [...prev, `opacity: 0.4;`]);
      setAnimations((prev) => [...prev, slideInUp]);
    }
  }, [rendered]);

  React.useEffect(() => {
    return () => setAnimations((prev) => [...prev, slideOutDown]);
  }, []);

  return (
    <StyledBackdrop
      rendered={rendered}
      ds={ds}
      animations={animations}
      {...otherProps}
    >
      {children}
    </StyledBackdrop>
  );
}
