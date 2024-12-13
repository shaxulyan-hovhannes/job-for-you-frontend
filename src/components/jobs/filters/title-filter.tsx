"use client";

import React, { ChangeEvent, useContext } from "react";

import { IntlContext } from "@/components/core/intl-provider";

import Card from "@/components/core/ui/card";
import MuiTextField from "@/components/core/ui/textfield";

interface TitleFilterProps {
  title: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearField: () => void;
}

export default function TitleFilter({
  title = "",
  handleChange = () => {},
  onClearField = () => {},
}: TitleFilterProps) {
  const intlContext = useContext(IntlContext);

  return (
    <Card title={intlContext?.translateData("job_title")}>
      <MuiTextField
        placeholder={intlContext?.translateData("search_job_by_title")}
        onChange={handleChange}
        value={title}
        onClearField={onClearField}
      />
    </Card>
  );
}
