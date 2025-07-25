import { TextField, type TextFieldProps } from "@mui/material";
import "./CustomTextField.scss";
import {
  Controller,
  type FieldValues,
  type Path,
  useFormContext,
  type UseFormReturn,
} from "react-hook-form";

import PasswordToggle from "./passwordToggle/PasswordToggle";
import InputWrapper from "../inputWrapper/InputWrapper";
import usePasswordInput from "./passwordToggle/usePasswordInput";

type Props<T extends FieldValues> = TextFieldProps & {
  inputName: Path<T>;
  inputType?: "text" | "password" | "textarea";
  inputLabel?: string;
  localesNs?: string | string[];
  className?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    methods: UseFormReturn<T>
  ) => void;
};

const CustomTextField = <T extends FieldValues>({
  inputName,
  inputType = "text",
  inputLabel,
  localesNs,
  className,
  onChange,
  ...props
}: Props<T>) => {
  const methods = useFormContext();

  const { control } = methods;
  const passwordInput = usePasswordInput();
  const { showPassword } = passwordInput;
  return (
    <Controller
      name={inputName}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <InputWrapper
          inputName={inputName}
          className={`custom_text_field ${className ?? ""}`}
          error={error}
          inputLabel={inputLabel}
          localesNs={localesNs}
          required={props.required}
        >
          <TextField
            slotProps={{
              input: {
                endAdornment:
                  inputType === "password" ? (
                    <PasswordToggle {...passwordInput} />
                  ) : null, // for now
              },
            }}
            {...field}
            {...props}
            id={inputName}
            onChange={(e) => {
              field.onChange(e);
              // @ts-expect-error "ignore error"
              if (onChange) onChange(e, methods);
            }}
            required={false}
            type={showPassword ? "text" : inputType}
            className="custom_text_field-input"
            multiline={inputType === "textarea"}
            // error={!!error}
          />
        </InputWrapper>
      )}
    />
  );
};

export default CustomTextField;
