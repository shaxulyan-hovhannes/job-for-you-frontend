// import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchJobs } from "@/api/jobs";
import { fetchEmployers } from "@/api/employers";
import { signupCandidate, getUserInfo, login } from "@/api/auth";
import { UserFormDataType } from "@/components/authentication/signup/candidate-signup-form";
import { LoginFormDataType } from "@/components/authentication/login";

// const handleFetchJobs = createAsyncThunk(
//   "jobs/fetchJobs",
//   async (userId: number, { dispatch }) => {
//     const response = await fetchJobs();
//     return response.data;
//   }
// );

// const handleFetchEmployers = createAsyncThunk(
//   "employers/fetchEmployers",
//   async (userId: number, { dispatch }) => {
//     const response = await fetchEmployers();
//     return response.data;
//   }
// );

const handleFetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await fetchJobs();
  return response.data;
});

const handleFetchEmployers = createAsyncThunk(
  "employers/fetchEmployers",
  async () => {
    const response = await fetchEmployers();
    return response.data;
  }
);

const handleSignupCandidate = createAsyncThunk(
  "user/signupCandidate",
  async (payload: {
    values: Omit<UserFormDataType, "confirmPassword">;
    cb: () => void;
  }) => {
    try {
      const response = await signupCandidate(payload.values);
      return response;
    } catch (err) {
      throw err;
    } finally {
      payload.cb();
    }
  }
);

const handleGetUserInfo = createAsyncThunk("user/getUserInfo", async () => {
  try {
    const response = await getUserInfo();

    return response;
  } catch (err) {
    throw err;
  }
});

const handleLogin = createAsyncThunk(
  "user/login",
  async (payload: { values: LoginFormDataType; cb: () => void }) => {
    try {
      const response = await login(payload.values);
      return response;
    } catch (err) {
      throw err;
    } finally {
      payload.cb();
    }
  }
);

export {
  handleFetchJobs,
  handleFetchEmployers,
  handleSignupCandidate,
  handleGetUserInfo,
  handleLogin,
};
