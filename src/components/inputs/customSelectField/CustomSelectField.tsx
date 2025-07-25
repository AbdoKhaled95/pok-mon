import "./CustomSelectField.scss";
import {
  Controller,
  type FieldValues,
  type Path,
  useFormContext,
  type UseFormReturn,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import Select, {
  type ActionMeta,
  type Props as SelectProps,
} from "react-select";
import { useSelector } from "react-redux";
import { type RootState } from "@store/store";
import NoDataFound from "@components/noDataFound/NoDataFound";
import { handleFilter } from "@utils/inputs.utils";
import InputWrapper from "../inputWrapper/InputWrapper";

type Props<T extends FieldValues> = SelectProps & {
  inputName: Path<T>;
  inputLabel?: string;
  localesNs?: string | string[];
  className?: string;
  disabled?: boolean;
  onChangeSelect?: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>,
    methods: UseFormReturn<T>
  ) => void;
};

const CustomSelectField = <T extends FieldValues>({
  inputName,
  inputLabel,
  localesNs,
  className,
  disabled,
  onChangeSelect,
  ...props
}: Props<T>) => {
  const { t } = useTranslation(localesNs, { nsMode: "fallback" });
  const { locale } = useSelector((state: RootState) => state.settings);
  const { direction } = locale;
  const methods = useFormContext();
  const { control } = methods;

  return (
    <Controller
      name={inputName}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <InputWrapper
          inputName={inputName}
          className={`custom_select_field ${className ?? ""}`}
          error={error}
          inputLabel={inputLabel}
          localesNs={localesNs}
          required={props.required}
        >
          <Select
            {...field}
            {...props}
            id={inputName}
            onChange={(newValue, actions) => {
              field.onChange(newValue);
              // @ts-expect-error "ignore error"
              if (onChangeSelect) onChangeSelect(newValue, actions, methods);
            }}
            required={false}
            isRtl={direction === "rtl"}
            isDisabled={disabled}
            noOptionsMessage={() => <NoDataFound />}
            filterOption={handleFilter}
            loadingMessage={() => `${t("loading", { ns: "general" })}...`}
            classNamePrefix="custom_select_field-select"
            className="custom_select_field-select" // for now
          />
        </InputWrapper>
      )}
    />
  );
};

export default CustomSelectField;
