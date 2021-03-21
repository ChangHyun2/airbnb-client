import React from 'react';
import styled from '@emotion/styled';
import s from 'S';
import Divider from '@UI/Divider';
import { FluidButton, GhostButton } from '@UI/Button';
import { facebookIcon, googleIcon } from '@UI/Icon';

const { facebookDark, white, grey3, black, secondary } = s.pallete;

const StyledSmSignIn = styled.div`
  ${s.baseSection()}
  padding-top: ${s.pad.xs};
  ${s.h14};

  h1 {
    ${s.h22}
    ${s.bold}
    ${s.mb2}
  }
`;

const AuthButton = styled(FluidButton)`
  position: relative;
  border-width: 2px;
  ${s.h14};
  ${s.mb2}

  svg {
    position: absolute;
    left: 10px;
    width: 20px;
    height: 20px;
  }
`;
const FacebookButton = styled(AuthButton)`
  background-color: ${facebookDark};
  border-color: ${facebookDark};
  ${s.mb1}
`;

const GoogleButton = styled(AuthButton)`
  background-color: ${white};
  border-color: ${grey3};
  color: ${black};
`;

const OrDivider = styled(Divider)`
  ${s.mb2}
`;

const LinkButton = styled(GhostButton)`
  ${s.h10};
`;

const Links = styled.div`
  text-align: center;

  > * {
    ${s.mb3}
  }

  a {
    color: ${secondary};
  }

  a:last-child {
    ${s.h14}
  }

  span {
    margin-right: ${s.spacing[10]};
  }
`;

export default function SmSignIn() {
  return (
    <StyledSmSignIn>
      <h1>환영합니다!</h1>
      <FacebookButton IconComponent={facebookIcon} size="lg">
        페이스북 계정으로 로그인
      </FacebookButton>
      <GoogleButton IconComponent={googleIcon} size="lg">
        구글 계정으로 로그인
      </GoogleButton>
      {/* <ThirdAuth /> */}

      <OrDivider>또는</OrDivider>

      {/* <EmailAuthForm /> */}
      <AuthButton size="lg" variant="secondary">
        로그인
      </AuthButton>
      <Links>
        <LinkButton to="/forgot-password">비밀번호를 잊으셨나요?</LinkButton>
        <div>
          <span>에어비엔비 계정이 없으신가요?</span>
          <LinkButton to="/signup">등록하기</LinkButton>
        </div>
      </Links>
      <Divider />
      {/* <NavLists /> */}
      {/* <Locale /> */}
    </StyledSmSignIn>
  );
}
