"use client";

import React, { useState, ChangeEvent, useContext } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import Card from "@/components/core/ui/card";

import { IntlContext } from "@/components/core/intl-provider";

import { LOCATIONS } from "@/constants/locations";

interface LocationFilterProps {
  selectedOptions: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export default function LocationFilter({
  selectedOptions = [],
  handleChange = () => {},
}: LocationFilterProps) {
  const intlContext = useContext(IntlContext);

  const [viewAll, setViewAll] = useState<boolean>(false);

  const handleToggleViewAll = () => setViewAll(!viewAll);

  return (
    <Card title={intlContext?.translateData("location")}>
      <FormGroup>
        {(viewAll ? LOCATIONS.slice(1) : LOCATIONS.slice(1, 8)).map(
          (location) => (
            <FormControlLabel
              key={location.id}
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={selectedOptions.includes(location.value)}
                  name={location.value}
                />
              }
              label={
                intlContext?.translateData(location.value) ?? location.label
              }
              sx={{ userSelect: "none" }}
            />
          )
        )}
      </FormGroup>
      <div className="flex justify-center">
        <Button
          className="!text-[1rem] !text-black"
          onClick={handleToggleViewAll}
        >
          {intlContext?.translateData(viewAll ? "view_less" : "view_more")}
        </Button>
      </div>
    </Card>
  );
}
