"use client";

import React from "react";
import styles from "./index.module.scss";

import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export default function AuthSectionSkeleton() {
  return (
    <div className={styles["auth-section-skeleton"]}>
      <Skeleton variant="circular" width={52} height={52} />
      <Stack spacing={0.45}>
        <Skeleton variant="text" width={110} height={12} />
        <Skeleton variant="text" width={110} height={12} />
        <Skeleton variant="text" width={110} height={12} />
      </Stack>
    </div>
  );
}
