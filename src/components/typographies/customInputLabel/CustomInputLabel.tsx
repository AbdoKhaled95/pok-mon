import { Typography } from "@mui/material";
import "./CustomInputLabel.scss";
import { type ReactNode, type LabelHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";
type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  children?: ReactNode;
  className?: string;
  required?: boolean;
  error?: FieldError;
};

const CustomInputLabel = ({
  children,
  className,
  required = false,
  error,
  ...props
}: Props) => {
  return (
    <Typography
      component="label"
      className={`custom_input_label ${className ?? ""}`}
      color={error ? "error" : "inherit"}
      {...props}
    >
      {children}
      {required && <span className="custom_input_label-required">*</span>}
    </Typography>
  );
};

export default CustomInputLabel;
