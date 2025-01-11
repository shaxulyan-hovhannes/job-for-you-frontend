"use client";

import { PropsWithChildren, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppSelector } from "@/store";

import { selectUserState } from "@/store/user/userSelectors";

import paths from "@/constants/paths";

export default function AuthGuard({ children }: PropsWithChildren) {
  const [isChecking, setIsChecking] = useState<boolean>(true);

  const router = useRouter();

  const userState = useAppSelector(selectUserState);

  useEffect(() => {
    if (!userState.loading && userState.isAuthenticated === false) {
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
