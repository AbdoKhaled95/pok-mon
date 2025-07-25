import InputWrapper from "../inputWrapper/InputWrapper";
import DatePicker, { type DatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDateField.scss";
import {
  Controller,
  type FieldValues,
  type Path,
  useFormContext,
  type UseFormReturn,
} from "react-hook-form";
type Props<T extends FieldValues> = DatePickerProps & {
  inputName: Path<T>;
  inputLabel?: string;
  localesNs?: string | string[];
  className?: string;
  placeholder?: string;
  onChangeDate?: (date: Date | null, methods: UseFormReturn<T>) => void;
};

const CustomDateField = <T extends FieldValues>({
  inputName,
  inputLabel,
  localesNs,
  className,
  placeholder,
  onChangeDate,
  ...props
}: Props<T>) => {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <Controller
      name={inputName}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <InputWrapper
          inputName={inputName}
          className={`custom_date_field ${className ?? ""}`}
          error={error}
          inputLabel={inputLabel}
          localesNs={localesNs}
          required={props.required}
        >
          {/* @ts-expect-error "ignore */}
          <DatePicker
            {...field}
            {...props}
            id={inputName}
            showIcon
            toggleCalendarOnIconClick
            // selected={field.value}
            placeholderText={placeholder}
            required={false}
            onChange={(date: Date | null) => {
              field.onChange(date);
              // @ts-expect-error "ignore"
              if (onChangeDate) onChangeDate(date, methods);
            }}
            className="custom_date_field-date" // for now
          />
        </InputWrapper>
      )}
    />
  );
};

export default CustomDateField;
