import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import { Box, FormField, TextInput, Button } from "grommet";

import { useFormik } from "formik";

import * as yup from "yup";

import auth from "../auth";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
});

const RegistrationForm = (props) => {
  const history = useHistory();

  const { handleSubmit, values, errors, getFieldProps } = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirm: ""
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log("test");
      try {
        console.log("here we go");
        const response = await auth.signup(values.email, values.password);
        console.log("registered", response);
        history.push(`${props.rootPath}/login`);
      } catch (error) {
        console.error("Oh shit", error);
      }
    }
  });

  const wrappedHandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("boi!!!", values);
      handleSubmit(values);
    },
    [handleSubmit, values]
  );

  return (
    <form onSubmit={wrappedHandleSubmit}>
      <FormField label="email" error={errors.email}>
        <TextInput {...getFieldProps("email")} />
      </FormField>
      <FormField label="password" error={errors.password}>
        <TextInput type="password" {...getFieldProps("password")} />
      </FormField>
      <FormField label="confirm password" error={errors.password_confirm}>
        <TextInput type="password" {...getFieldProps("password_confirm")} />
      </FormField>
      <Box pad="small">
        <Button type="submit" label="Join" />
      </Box>
    </form>
  );
};

RegistrationForm.propTypes = {
  rootPath: PropTypes.string
};

RegistrationForm.defaultProps = {
  rootPath: "/"
};

export default RegistrationForm;
