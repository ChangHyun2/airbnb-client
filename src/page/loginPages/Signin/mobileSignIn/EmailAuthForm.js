import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthWithThirdParty } from '@store/actions/authActions';
import { useFormContext } from '@lib/Former/FormContext';
import Field from '@UI/Form/Field';
import FieldBox from '@UI/Form/FieldBox';
import { useToggle } from '@hooks';
import Former from 'Former';
import {
  Form,
  GhostButton,
  ForgotPasswordLinkItem,
  RegisterLinkItem,
} from './EmailAuthForm.style';
import { SecondaryFluidButton } from '@UI/Button/FluidButton';

function EmailAuthForm() {
  const dispatch = useDispatch();

  return (
    <Former
      onSubmit={(values) => {
        dispatch(loginUser(values));
      }}
      initialValues={{
        email: '',
        password: '',
        password2: 'password2',
      }}
      validationSchema={{
        email: (value) => {
          const error = {};
          if (!value) {
            error.required = 'email is required';
          } else if (value.indexOf('@') === -1) {
            error.format = 'email format is not valid';
          }
          return error;
        },
        password: (value) => {
          const error = {};
          if (!value) {
            error.required = 'password is required';
          } else if (value.length < 4) {
            error.minLength = 'password min length is 4';
          }
          return error;
        },
      }}
    >
      {({ values }) => {
        const showPassword = useToggle(false);

        return (
          <Form>
            <FieldBox>
              <Field type="email" name="email" autoComplete="off">
                이메일
              </Field>
              <Field
                type={showPassword.on ? 'text' : 'password'}
                name="password"
                subComponent={
                  <GhostButton type="button" onClick={showPassword.toggle}>
                    {showPassword.on ? '숨기기' : '표시'}
                  </GhostButton>
                }
              >
                비밀번호
              </Field>
            </FieldBox>
            <SecondaryFluidButton type="submit" style={{ fontSize: '16px' }}>
              <span>로그인</span>
            </SecondaryFluidButton>

            <ForgotPasswordLinkItem>
              <Link
                to={`/forgot-password${
                  values.email ? `/?email=${values.email}` : ''
                }`}
              >
                <GhostButton>비밀번호를 잊으셨나요?</GhostButton>
              </Link>
            </ForgotPasswordLinkItem>
            <RegisterLinkItem>
              <div>에어비앤비 계정이 없으신가요?</div>
              <Link to="/signup">
                <GhostButton>등록하기</GhostButton>
              </Link>
            </RegisterLinkItem>
          </Form>
        );
      }}
    </Former>
  );
}

const InputField = ({ focused, errorObj }) => {
  const hasError = Object.keys(errorObj || {}).length > 0;
  return (
    <FieldWrapper data-focused={!!focused} data-has-error={hasError}>
      <Label>
        <Input
          type="email"
          onFocus={() => setFieldFocus('email', true)}
          autoComplete="off"
          {...getFieldProps('email')}
        />
        <InputName data-shrink={!!(focused.email || values.email.length > 0)}>
          이메일
        </InputName>
      </Label>
    </FieldWrapper>
  );
};

export default EmailAuthForm;
