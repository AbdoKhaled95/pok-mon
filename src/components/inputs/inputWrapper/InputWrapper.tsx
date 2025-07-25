import CustomInputError from "@components/typographies/customInputError/CustomInputError";
import CustomInputLabel from "@components/typographies/customInputLabel/CustomInputLabel";
import { FormControl } from "@mui/material";
import type { FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";
type Props = {
  className?: string;
  inputName: string;
  children: React.ReactNode;
  inputLabel?: string;
  required?: boolean;
  error?: FieldError;
  localesNs?: string | string[];
};
const InputWrapper = ({
  children,
  inputName,
  className,
  inputLabel,
  error,
  localesNs,
  required,
}: Props) => {
  const { t } = useTranslation(localesNs, { nsMode: "fallback" });
  return (
    <FormControl
      id={`${inputName}Wrapper`} // Ensure the ID is unique for each input
      className={`input_wrapper ${className ?? ""}`}
    >
      <CustomInputLabel
        htmlFor={inputName}
        className="input_wrapper-inputLabel"
        required={required}
        error={error}
      >
        {inputLabel}
      </CustomInputLabel>
      {children}
      {error && (
        <CustomInputError className="input_wrapper-error">
          {t(String(error.message))}
        </CustomInputError>
      )}
    </FormControl>
  );
};

export default InputWrapper;
