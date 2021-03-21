import styled from '@emotion/styled';
import s from 'S';
import BaseModal from '@UI/Modal';

export const PrivateHeader = styled.div`
  ${s.spaceBetween}

  h1 {
    ${s.bold}
    ${s.h32}
  }

  button {
    ${s.h16}
    ${s.bold}
  
    transition: transform 0.05s ease-out;
    &:active {
      transform: scale(0.95);
    }
  }
`;

export const PublicHeader = styled.header`
  h1 {
    ${s.bold}
    ${s.h32}
    margin-bottom:1em;
  }

  button {
    ${({ theme: { white, black, black2 } }) => `
      color: ${white}
      background-color: ${black2}
      border: 2px solid ${black2}
      &:hover {
        background-color: ${black}
        border: 2px solid ${black}
      }
    `}
  }
`;

export const Modal = styled(BaseModal)`
  width: 95%;
  max-width: 400px;
  max-height: 400px;
  background-color: white;
`;
