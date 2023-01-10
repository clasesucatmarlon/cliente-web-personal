import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValuesForm } from "./RegisterForm.form";
import "./RegisterForm.scss";

export function RegisterForm() {
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValuesForm(),
    onSubmit: async (formValues) => {
      try {
        console.log(formValues);
      } catch (error) {
        console.error(error);
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
      />
      <Form.Input
        name="password"
        placeholder="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Form.Input
        name="repeatPassword"
        placeholder="Repeat Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
      />
      <Form.Checkbox
        name="conditionsAccepted"
        label="I accept privacity policies"
        onChange={(_, data) =>
          formik.setFieldValue("conditionsAccepted", data.checked)
        }
        checked={formik.values.conditionsAccepted}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Create Account
      </Form.Button>
      <p className="register-form__error">{error}</p>
    </Form>
  );
}
