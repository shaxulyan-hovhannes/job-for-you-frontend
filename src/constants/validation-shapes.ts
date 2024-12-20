import * as Yup from "yup";

const USER_SIGNUP_VALIDATION_SCHEMA = Yup.object({
  firstname: Yup.string()
    .min(2, "Firstname must be at least 2 character")
    .max(30, "Firstname must be at most 30 characters")
    .required("Required"),
  lastname: Yup.string()
    .min(2, "Lastname must be at least 2 character")
    .max(30, "Lastname must be at most 30 characters")
    .required("Required"),
  phone: Yup.string()
    // .matches(/^\+374\d{8}$/, "Phone number must be in the format +374xxxxxxxx")
    // .min(6, "Phone must be at least 6 character")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .max(30, "Password must be at most 30 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

const USER_LOGIN_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .max(30, "Password must be at most 30 characters")
    .required("Required"),
});

export { USER_SIGNUP_VALIDATION_SCHEMA, USER_LOGIN_VALIDATION_SCHEMA };
