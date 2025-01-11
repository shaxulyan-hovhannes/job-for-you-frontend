"use client";

import { PropsWithChildren, useEffect } from "react";

import axios from "@/utils/axios";

import { useAppDispatch } from "@/store";

import { handleGetUserInfo } from "@/store/actions";
import { setIsUserAuthenticated } from "@/store/user/userSlice";

import useUser from "./use-user";

export default function UserProvider({ children }: PropsWithChildren) {
  const { onGetUserInfo } = useUser();
  //   const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     try {
  //       dispatch(handleGetUserInfo()).then((action) => {
  //         console.log("USER PROVIDER ACTION", action);

  //         const encryptedAccessToken = action.payload?._v;

  //         if (encryptedAccessToken) {
  //           axios.interceptors.request.use(
  //             (config) => {
  //               config.headers.Authorization = `Bearer ${encryptedAccessToken}`;

  //               return config;
  //             },
  //             (error) => {
  //               return Promise.reject(error);
  //             }
  //           );
  //         }
  //       });
  //     } catch (err) {
  //       console.log(err instanceof Error && err.message);

  //       dispatch(setIsUserAuthenticated(false));
  //     }
  //   }, []);

  useEffect(() => {
    onGetUserInfo();
  }, []);

  return children;
}
