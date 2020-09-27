import React, { useCallback } from "react";
import * as yup from "yup";

import { Box, FormField, TextInput, Button } from "grommet";

import { useFormik } from "formik";

export const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
});

const LoginForm = () => {
  const { handleSubmit, values, errors, getFieldProps } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    onSubmit: (values) => console.log("submit", values)
  });

  const wrappedHandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleSubmit(values);
    },
    [handleSubmit, values]
  );

  return (
    <form onSubmit={wrappedHandleSubmit}>
      <Box>
        <FormField label="email" error={errors.email}>
          <TextInput {...getFieldProps("email")} />
        </FormField>
        <FormField label="password" error={errors.password}>
          <TextInput type="password" {...getFieldProps("password")} />
        </FormField>
      </Box>
      <Box pad="small">
        <Button type="submit" label="Log In" />
      </Box>
    </form>
  );
};

export default LoginForm;
