import { useEffect } from "react";

import axios from "@/utils/axios";

import { useAppDispatch } from "@/store";

import { handleGetUserInfo } from "@/store/actions";
import { setIsUserAuthenticated } from "@/store/user/userSlice";

export default function useUser() {
  const dispatch = useAppDispatch();

  const onGetUserInfo = () => {
    try {
      dispatch(handleGetUserInfo()).then((action) => {
        const encryptedAccessToken = action.payload?._v;

        if (encryptedAccessToken) {
          axios.interceptors.request.use(
            (config) => {
              config.headers.Authorization = `Bearer ${encryptedAccessToken}`;

              return config;
            },
            (error) => {
              return Promise.reject(error);
            }
          );
        }
      });
    } catch (err) {
      console.log(err instanceof Error && err.message);

      dispatch(setIsUserAuthenticated(false));
    }
  };

  //   useEffect(() => {
  //     onGetUserInfo();
  //   }, []);

  return { onGetUserInfo };
}
