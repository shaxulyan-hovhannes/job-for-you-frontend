"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";

import { useAppSelector } from "@/store";
import { selectUserState } from "@/store/user/userSelectors";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { CANDIDATES_ROUTES } from "@/constants/common";

export default function HeaderActions() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const userState = useAppSelector(selectUserState);

  const pathname = usePathname();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles["header-actions-block"]}>
      <div
        className={styles["avatar-circle"]}
        id="avatar_circle"
        onClick={handleClick}
      >
        {typeof userState.firstname === "string" && userState.firstname[0]}
        {typeof userState.lastname === "string" && userState.lastname[0]}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          marginTop: "8px",
          "& .MuiMenu-paper": { border: "1px solid rgba(0,0,0,0.3)" },
        }}
      >
        {CANDIDATES_ROUTES.map((route) => (
          <MenuItem
            key={route.id}
            onClick={handleClose}
            sx={{
              "&.Mui-focusVisible": {
                backgroundColor: "inherit",
              },
            }}
            selected={route.path === pathname}
          >
            <Link href={route.path}> {route.label}</Link>
          </MenuItem>
        ))}
        <MenuItem onClick={() => {}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
