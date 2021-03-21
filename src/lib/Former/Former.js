import React from 'react';

import FormContext from './FormContext';

const Former = ({}) => {};

const Field = () => {
  const { getFieldProps } = useField();

  return <input {...getFieldProps()} />;
};

const LoginForm = () => {
  return (
    <Former
      initialStates={{
        email: '',
        password: '',
      }}
      validate={{
        email: () => {},
        password: () => {},
      }}
    >
      <FieldBox>
        <Field name="email" />
        <Field name="password" />
      </FieldBox>
      <button onClick={}>submit</button>
    </Former>
  );
};
