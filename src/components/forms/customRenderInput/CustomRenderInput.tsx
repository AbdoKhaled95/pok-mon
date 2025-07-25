import { type FieldValues } from "react-hook-form";
import "./CustomRenderInput.scss";
import { type FormInput } from "@models/formInput.model";
import CustomTextField from "@components/inputs/customTextField/CustomTextField";
import { getTextFiledType } from "@utils/inputs.utils";
import CustomSelectField from "@components/inputs/customSelectField/CustomSelectField";
import CustomDateField from "@components/inputs/customDateField/CustomDateField";

type Props<T extends FieldValues> = FormInput<T> & {};

const CustomRenderInput = <T extends FieldValues>({
  inputType,
  ...props
}: Props<T>) => {
  if (getTextFiledType(inputType as string) === inputType)
    // @ts-expect-error "inputType in CustomTextField is may be text | password | number | textarea"
    return <CustomTextField inputType={inputType} {...props} />;
  if (inputType === "element") return props.element;
  if (inputType === "select")
    // @ts-expect-error "inputType in select  is may be select | autocomplete | multiselect | multiselectAutocomplete"
    return <CustomSelectField inputType={inputType} {...props} />;
  if (inputType === "date")
    // @ts-expect-error "inputType for date"
    return <CustomDateField inputType={inputType} {...props} />;
  // Handle other input types if necessary
  return null; // or any other default component
};

export default CustomRenderInput;
