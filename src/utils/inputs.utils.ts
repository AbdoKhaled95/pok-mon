import type { FilterOptionOption } from "react-select";

export const getTextFiledType = (inputType: string) => {
  if (inputType === "password") return "password";
  if (inputType === "textarea") return "textarea";
  return "text";
};
export const inputMaxLength = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  length = 30
) => (event.target.value = event.target.value.slice(0, length));
export const numericOnly = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { value } = event.target;
  const numericValue = value.replace(/\D/g, "");
  if (value !== numericValue) {
    event.target.value = numericValue;
  }
};
export const handleFilter = (
  option: FilterOptionOption<unknown>,
  inputValue: string
) => {
  // filter for search react-select
  if (!inputValue) return true;
  // @ts-expect-error "option.data.searchText ?? option.label?.toString() ?? """
  const targetText = option?.data.searchText ?? option.label?.toString() ?? "";

  return targetText.toLowerCase().includes(inputValue.toLowerCase());
};
