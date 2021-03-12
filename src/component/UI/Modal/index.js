import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Backdrop from '@UI/Backdrop';

const StyledModal = styled(Backdrop)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Modal({ children, show, onClose, ...otherProps }) {
  useEffect(() => {
    show
      ? (document.body.style.position = 'fixed')
      : (document.body.style.position = '');
  }, [show]);

  return show ? (
    <StyledModal onClose={onClose} {...otherProps}>
      {children}
    </StyledModal>
  ) : null;
}
