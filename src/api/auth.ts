import axios from "@/utils/axios";

import { UserFormDataType } from "@/components/authentication/signup/candidate-signup-form";

const signupCandidate = async (
  payload: Omit<UserFormDataType, "confirmPassword">
) => {
  try {
    const response = await axios.post("/auth/signup", payload, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUserInfo = async () => {
  try {
    const response = await axios.get("/user/info", { withCredentials: true });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { signupCandidate, getUserInfo };
