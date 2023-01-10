import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValuesForm, validationSchema } from "./RegisterForm.form";
import "./RegisterForm.scss";

export function RegisterForm() {
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValuesForm(),
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        // console.log(formValues);
        setError('');
      } catch (error) {
        // console.error(error);
        setError('Server error');
      }
    },
  });

  return (
    <Form className="register-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        placeholder="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Form.Input
        name="repeatPassword"
        placeholder="Repeat Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
      />
      <Form.Checkbox
        name="conditionsAccepted"
        label="I accept privacity policies"
        onChange={(_, data) =>
          formik.setFieldValue("conditionsAccepted", data.checked)
        }
        checked={formik.values.conditionsAccepted}
        error={formik.errors.conditionsAccepted}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Create Account
      </Form.Button>
      <p className="register-form__error">{error}</p>
    </Form>
  );
}
