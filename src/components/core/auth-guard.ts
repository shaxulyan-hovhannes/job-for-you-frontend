"use client";

import React, { PropsWithChildren, useState, useEffect, useMemo } from "react";
import { useRouter, redirect } from "next/navigation";

import { useAppSelector, useAppDispatch } from "@/store";
import { selectUserState } from "@/store/user/userSelectors";
import { resetLoginedUser } from "@/store/user/userSlice";

import paths from "@/constants/paths";

interface AuthGuardProps extends PropsWithChildren {
  test?: boolean;
}

export default function AuthGuard({ test = false, children }: AuthGuardProps) {
  const [isChecking, setIsChecking] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const userState = useAppSelector(selectUserState);

  useEffect(() => {
    // console.log("AUTH GUARD LOGINED USER", userState.loginedUser);
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      dispatch(resetLoginedUser());

      router.push(paths.login);
    }
  }, []);

  useEffect(() => {
    // if no userInfo in store (no signup case) -> get UserInfo
    // if (success userINfo response) -> set userinfo to store -> set isCHecking as false && render layout with sidebar -> get router query
    // |-> get target data (depended from router query (/dashboard, /my-resume, etc))
    // if no userInfo -> remove access_token from localStorage -> replace to login page
  }, [userState.loginedUser]);

  if (isChecking) {
    return null;
  }

  return children;
}
