"use client";

import React, { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title?: string;
}

export default function Card({ title = "Title", children = null }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-main">{children}</div>
    </div>
  );
}
