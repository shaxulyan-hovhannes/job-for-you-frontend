"use client";

import React from "react";

import { Button, ButtonProps } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

type MuiButtonProps = ButtonProps & {
  className?: string;
  loading?: boolean;
};

export default function MuiButton({
  children,
  className = "",
  loading = false,
  ...rest
}: MuiButtonProps) {
  return (
    <Button
      {...rest}
      className={`mui-button ${className}`}
      disableElevation
      disabled={loading}
    >
      {loading ? (
        <CircularProgress size={30} sx={{ color: "white" }} />
      ) : (
        children
      )}
    </Button>
  );
}
