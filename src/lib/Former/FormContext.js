import React from 'react';

const FormContext = React.createContext({});
export default FormContext;

export const useFormContext = () => React.useContext(FormContext);
