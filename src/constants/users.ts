// const SIGNUP_CANDIDATE_INITIAL_VALUES = {
//   firstname: "",
//   lastname: "",
//   email: "",
//   phone: "",
//   password: "",
//   confirmPassword: "",
// };

const SIGNUP_CANDIDATE_INITIAL_VALUES = {
  firstname: "Hovhannes",
  lastname: "Shakhulyan",
  email: "hov@gmail.com",
  phone: "098515360",
  password: "12345",
  confirmPassword: "12345",
};

const LOGIN_INITIAL_VALUES = {
  email: "hov@gmail.com",
  password: "12345",
};

const USER_ROLES = {
  guest: "guest",
  candidate: "candidate",
  employer: "employer",
  admin: "admin",
} as const;

export { SIGNUP_CANDIDATE_INITIAL_VALUES, USER_ROLES, LOGIN_INITIAL_VALUES };
