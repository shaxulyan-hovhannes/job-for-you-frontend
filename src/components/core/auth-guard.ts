"use client";

import { PropsWithChildren, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/store";
import { resetLoginedUser } from "@/store/user/userSlice";

import { selectUserState } from "@/store/user/userSelectors";

import paths from "@/constants/paths";

export default function AuthGuard({ children }: PropsWithChildren) {
  const [isChecking, setIsChecking] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const userState = useAppSelector(selectUserState);

  console.log("AUTH GUARD", userState);

  useEffect(() => {
    if (!userState.loading && userState.isAuthenticated === false) {
      dispatch(resetLoginedUser());
      router.push(paths.login);
    }

    if (!userState.loading && userState.isAuthenticated) {
      setIsChecking(false);
    }
  }, [userState.isAuthenticated, userState.loading]);

  if (isChecking) {
    return null;
  }

  return children;
}
