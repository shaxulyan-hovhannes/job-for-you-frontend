import axios from "@/utils/axios";

import { UserFormDataType } from "@/components/authentication/signup/candidate-signup-form";

const signupCandidate = async (
  payload: Omit<UserFormDataType, "confirmPassword">
) => {
  try {
    const response = await axios.post("/auth/signup", payload);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { signupCandidate };
