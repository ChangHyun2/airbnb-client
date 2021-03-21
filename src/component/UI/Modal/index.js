import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Backdrop from '@UI/Backdrop';

const StyledModal = styled(Backdrop)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const effects = {
  slideInFromBottom: {
    base: `
      transition: transform 0.3s;    
      transform: translateY(100vw);
    `,
    active: 'transform: translateY(0);',
  },
};

export default function Modal({
  children,
  show,
  onClose,
  effect = 'slideInFromBottom',
  ...otherProps
}) {
  const [animation, setAnimation] = React.useState([effects[effect]['base']]);

  useEffect(() => {
    if (show) {
      document.body.style.position = 'fixed';
      setAnimation((prev) => [...prev, effects[effect]['active']]);
      return;
    }

    setAnimation([effects[effect]['base']]);
    document.body.style.position = '';
  }, [show]);

  return show ? (
    <StyledModal onClose={onClose} {...otherProps}>
      <div
        css={css`
          ${animation.join('')}
        `}
      >
        {children}
      </div>
    </StyledModal>
  ) : null;
}
