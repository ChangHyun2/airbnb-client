import styled from '@emotion/styled';
import { GhostButton as ghostButton } from '@UI/Button/GhostButton';
import { Form as form } from 'Former';
import s from 'S';

export const Form = styled(form)`
  padding: 10px 0;
`;

export const GhostButton = styled(ghostButton)`
  padding: 0.5em;
  margin-left: 5px;
  background-color: transparent;
  ${s.h(14)}
  ${({ theme: { secondary } }) => `
    color: ${secondary}
  `}
`;

export const LinkItem = styled.div`
  ${s.center}
  ${s.textCenter}
`;

export const ForgotPasswordLinkItem = styled(LinkItem)`
  margin-bottom: 10px;

  a {
    margin: 3px 0 10px;
  }
`;

export const RegisterLinkItem = styled(LinkItem)`
  ${s.h16}
  margin-bottom: 30px;

  button {
    ${s.h16}
  }
`;
// Input
// touched일 때 value가 ''일 경우 적용하기
// onBlur일 때 value가 없을 경우 제거하기
