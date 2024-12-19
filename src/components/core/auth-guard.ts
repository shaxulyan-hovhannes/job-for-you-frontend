"use client";

import { PropsWithChildren, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppSelector, useAppDispatch } from "@/store";
import { selectUserState } from "@/store/user/userSelectors";
import { resetLoginedUser } from "@/store/user/userSlice";
import { handleGetUserInfo } from "@/store/actions";

import axios from "@/utils/axios";
import { CryptoJsService } from "@/utils/crypto-js-service";

import paths from "@/constants/paths";

// interface AuthGuardProps extends PropsWithChildren {}

export default function AuthGuard({ children }: PropsWithChildren) {
  const [isChecking, setIsChecking] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const userState = useAppSelector(selectUserState);

  useEffect(() => {
    try {
      dispatch(handleGetUserInfo()).then((action) => {
        const encryptedAccessToken = action.payload?._v;

        if (encryptedAccessToken) {
          const decodedAccessToken =
            CryptoJsService.decryptAccessToken(encryptedAccessToken);

          axios.interceptors.request.use(
            (config) => {
              config.headers.Authorization = `Bearer ${decodedAccessToken}`;

              return config;
            },
            (error) => {
              return Promise.reject(error);
            }
          );

          setIsChecking(false);
        } else {
          dispatch(resetLoginedUser());
          router.push(paths.login);
        }
      });
    } catch (err) {
      dispatch(resetLoginedUser());
      router.push(paths.login);
    }
  }, []);

  if (isChecking) {
    return null;
  }

  return children;
}
