"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";

import MuiTextField from "@/components/core/ui/textfield";
import MuiButton from "@/components/core/ui/button";

import { User } from "@/types/common";

import { useAppDispatch, useAppSelector } from "@/store";
import { selectSignupCandidateLoading } from "@/store/user/userSelectors";
import { handleSignupCandidate } from "@/store/actions";

import { USER_SIGNUP_VALIDATION_SCHEMA } from "@/constants/validation-shapes";
import { HTML_INPUT_TYPES } from "@/constants/common";
import { SIGNUP_CANDIDATE_INITIAL_VALUES, USER_ROLES } from "@/constants/users";
import paths from "@/constants/paths";

export type UserFormDataType = Omit<User, "id" | "role"> & {
  password: string;
  confirmPassword: string;
};

export default function CandidateSignupForm() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const submitLoading = useAppSelector(selectSignupCandidateLoading);

  const formik = useFormik({
    initialValues: SIGNUP_CANDIDATE_INITIAL_VALUES as UserFormDataType,
    validationSchema: USER_SIGNUP_VALIDATION_SCHEMA,
    onSubmit: (values, { resetForm }) => {
      const submitData = {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: `+374${values.phone}`,
        password: values.password,
        role: USER_ROLES.candidate,
      };

      dispatch(
        handleSignupCandidate({
          values: submitData,
          cb: () => {
            resetForm();
            router.push(paths.candidate);
          },
        })
      );
    },
  });

  const { values, touched, errors, handleChange, setFieldValue, handleSubmit } =
    formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="pair-fields-block">
        <div>
          <MuiTextField
            name={"firstname"}
            placeholder={"*First name"}
            onChange={handleChange}
            value={values.firstname}
            onClearField={() => {
              setFieldValue("firstname", "");
            }}
            error={touched.firstname && Boolean(errors.firstname)}
            helperText={touched.firstname ? errors.firstname : ""}
          />
        </div>
        <div>
          <MuiTextField
            name="lastname"
            placeholder={"*Last name"}
            onChange={handleChange}
            value={values.lastname}
            onClearField={() => {
              setFieldValue("lastname", "");
            }}
            error={touched.lastname && Boolean(errors.lastname)}
            helperText={touched.lastname ? errors.lastname : ""}
          />
        </div>
      </div>{" "}
      <div className="pair-fields-block">
        <div>
          <MuiTextField
            name="phone"
            placeholder={"*Phone"}
            onChange={handleChange}
            value={values.phone}
            onClearField={() => {
              setFieldValue("phone", "");
            }}
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone ? errors.phone : ""}
            type={HTML_INPUT_TYPES.number}
          />
        </div>
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
      </div>
      <div className="pair-fields-block">
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
        <div>
          <MuiTextField
            name="confirmPassword"
            placeholder={"*Confirm Password"}
            onChange={handleChange}
            value={values.confirmPassword}
            onClearField={() => {
              setFieldValue("confirmPassword", "");
            }}
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            helperText={touched.confirmPassword ? errors.confirmPassword : ""}
            type={HTML_INPUT_TYPES.password}
          />
        </div>
      </div>
      <MuiButton
        className="submit-btn"
        type={HTML_INPUT_TYPES.submit}
        loading={submitLoading}
      >
        Sign Up
      </MuiButton>
    </form>
  );
}
