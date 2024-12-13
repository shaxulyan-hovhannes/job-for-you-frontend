"use client";

import React, {
  ReactElement,
  useState,
  useRef,
  ReactNode,
  useEffect,
} from "react";
import { SxProps, Theme, InputAdornment } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import { HTML_INPUT_TYPES } from "@/constants/common";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type MuiTextFieldProps = TextFieldProps & {
  helperTextId?: string;
  helperText?: string;
  error?: boolean;
  placeholder?: string;
  sxProps?: SxProps<Theme>;
  value?: string;
  onClearField: () => void;
  type?: keyof typeof HTML_INPUT_TYPES;
  startAdornment?: ReactNode;
};

export default function MuiTextField({
  helperTextId = "helper-text-id",
  helperText = "",
  error = false,
  placeholder = "",
  sxProps = null,
  value = "",
  onClearField = () => {},
  type = HTML_INPUT_TYPES.text,
  startAdornment = null,
  ...rest
}: MuiTextFieldProps): ReactElement {
  const textfieldRef = useRef<HTMLInputElement>(null);

  const [showRemoveIcon, setShowRemoveIcon] = useState<boolean>(false);
  const [targetType, setTargetType] = useState<keyof typeof HTML_INPUT_TYPES>(
    HTML_INPUT_TYPES.text
  );

  const handleMouseEnter = () => setShowRemoveIcon(true);

  const handleMouseLeave = () => setShowRemoveIcon(false);

  useEffect(() => {
    setTargetType(type);
  }, [type]);

  return (
    <FormControl
      variant="standard"
      className="mui-textfield-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TextField
        aria-describedby={helperTextId}
        error={error}
        className="mui-textfield"
        placeholder={placeholder}
        sx={sxProps}
        inputRef={textfieldRef}
        value={value}
        type={targetType}
        InputProps={{
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : type === HTML_INPUT_TYPES.password ? (
            <InputAdornment
              position="start"
              sx={{ marginLeft: "12px", marginRight: 0, cursor: "pointer" }}
              onClick={() => {
                if (targetType === HTML_INPUT_TYPES.password) {
                  setTargetType(HTML_INPUT_TYPES.text);
                } else {
                  setTargetType(HTML_INPUT_TYPES.password);
                }
              }}
            >
              {targetType === HTML_INPUT_TYPES.password ? (
                <VisibilityOffIcon fontSize="small" />
              ) : (
                <VisibilityIcon fontSize="small" />
              )}
            </InputAdornment>
          ) : null,
        }}
        {...rest}
      />
      {helperText ? (
        <FormHelperText error={error} id={helperTextId}>
          {helperText}
        </FormHelperText>
      ) : null}
      {showRemoveIcon ? (
        <div
          className="mui-textfield-remove-icon"
          style={{ insetInlineEnd: "10px" }}
        >
          <IconButton size="small" onClick={onClearField}>
            x
          </IconButton>
        </div>
      ) : null}
    </FormControl>
  );
}
