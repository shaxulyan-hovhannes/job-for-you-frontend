"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import styles from "./index.module.scss";

import MuiTextField from "@/components/core/ui/textfield";
import MuiButton from "@/components/core/ui/button";

import { useAppDispatch, useAppSelector } from "@/store";
import { handleLogin } from "@/store/actions";
import { selectUserLoading } from "@/store/user/userSelectors";

import { HTML_INPUT_TYPES } from "@/constants/common";
import paths from "@/constants/paths";
import { LOGIN_INITIAL_VALUES } from "@/constants/users";
import { USER_LOGIN_VALIDATION_SCHEMA } from "@/constants/validation-shapes";

export type LoginFormDataType = {
  email: string;
  password: string;
};

export default function LoginComponent() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const submitLoading = useAppSelector(selectUserLoading);

  const formik = useFormik({
    initialValues: LOGIN_INITIAL_VALUES,
    validationSchema: USER_LOGIN_VALIDATION_SCHEMA,
    onSubmit: (values, { resetForm }) => {
      const submitData = {
        email: values.email,
        password: values.password,
      };

      dispatch(
        handleLogin({
          values: submitData,
          cb: () => {
            resetForm();
            router.push(paths.candidateDashboard);
          },
        })
      );
    },
  });

  const { values, touched, errors, handleChange, setFieldValue, handleSubmit } =
    formik;

  return (
    <section className={styles["login-section"]}>
      <div className={styles["login-section-title"]}>
        Good to See You Again! Please Sign In
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles["pair-fields-block"]}>
          <div>
            <MuiTextField
              name="email"
              placeholder={"*Email"}
              onChange={handleChange}
              value={values.email}
              onClearField={() => {
                setFieldValue("email", "");
              }}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email ? errors.email : ""}
              type={HTML_INPUT_TYPES.email}
            />
          </div>
          <div>
            <MuiTextField
              name="password"
              placeholder={"*Password"}
              onChange={handleChange}
              value={values.password}
              onClearField={() => {
                setFieldValue("password", "");
              }}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password ? errors.password : ""}
              type={HTML_INPUT_TYPES.password}
            />
          </div>
        </div>
        <MuiButton
          className={styles["submit-btn"]}
          type={HTML_INPUT_TYPES.submit}
          loading={submitLoading}
        >
          Login
        </MuiButton>
      </form>
    </section>
  );
}
