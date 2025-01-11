"use client";

import React from "react";
import Link from "next/link";

import MuiButton from "@/components/core/ui/button";

import SignpostIcon from "@mui/icons-material/Signpost";
// import LoginIcon from "@mui/icons-material/Login";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";

import paths from "@/constants/paths";

export default function HeaderAuthSection() {
  return (
    <section className="header-auth-section">
      <Link href={paths.signup}>
        <MuiButton>
          <SignpostIcon />
          Signup
        </MuiButton>
      </Link>
      <Link href={paths.login}>
        <MuiButton>
          <LockIcon />
          Login
        </MuiButton>
      </Link>
    </section>
  );
}
