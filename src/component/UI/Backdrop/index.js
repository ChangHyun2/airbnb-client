import React, { useEffect } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import s from 'S';
import { slideInUp, slideOutDown } from '@UI/keyframes';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.5s;
  ${s.zIndex.backdrop};
  ${defaultStyle}
`;

export default function Backdrop({ children, onClose, ...otherProps }) {
  const [inProp, setInProp] = React.useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    setInProp(true);
    return () => setInProp(false);
  }, []);

  const handleOnClick = (e) => {
    if (e.target !== ref.current) return;

    onClose(e);
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <StyledBackdrop
          ref={ref}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          onClick={handleOnClick}
          {...otherProps}
        >
          {children}
        </StyledBackdrop>
      )}
    </Transition>
  );
}
