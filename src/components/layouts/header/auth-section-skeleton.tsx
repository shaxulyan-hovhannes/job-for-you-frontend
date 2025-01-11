"use client";

import React from "react";
import styles from "./index.module.scss";

import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export default function AuthSectionSkeleton() {
  return (
    <div className={styles["auth-section-skeleton"]}>
      <Stack spacing={0.45}>
        <Skeleton variant="text" width={150} height={13} />
        <Skeleton variant="text" width={150} height={13} />
        <Skeleton variant="text" width={150} height={13} />
      </Stack>
      <Skeleton variant="circular" width={50} height={50} />
    </div>
  );
}
