import React from "react";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import type { ActionMeta, GroupBase, OptionsOrGroups } from "react-select";

export type InputType =
  | "text"
  | "password"
  | "textarea"
  | "select"
  | "date"
  | "dateRange"
  | "multiDate"
  | "checkbox"
  | "radio"
  | "element";
export type FormInput<T extends FieldValues> = {
  // start general
  inputName?: Path<T>; // Ensure the input name corresponds to a key in the form data type T
  inputType?: InputType; // Input type
  inputLabel?: string; // Input label
  placeholder?: string; // Placeholder
  localesNs?: string | string[]; // Namespace for localization json files
  required?: boolean; // uses the required * symbol
  className?: string; // Custom class name for the input container
  disabled?: boolean; // Disable the input
  isClearable?: boolean; // Allow clearing the selected option by clicking the clear button and set the value to null for datePicker and react-select

  // start text, password, textarea
  rows?: number; // Number of rows for textarea
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    methods: UseFormReturn<T>
  ) => void; // Handle input changes

  // start select input
  onChangeSelect?: (
    newValue: unknown,
    actionMeta: ActionMeta<unknown>,
    methods: UseFormReturn<T>
  ) => void; // Handle select changes
  options?: OptionsOrGroups<unknown, GroupBase<unknown>>; // Options for select
  isMulti?: boolean; // Allow multiple selection
  isSearchable?: boolean; // Allow searching for options by typing
  isLoading?: boolean; // Show a loading indicator while fetching options

  // start checkbox input
  onChangeCheckbox?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // start radio input
  onChangeRadio?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // start date input
  onChangeDate?: (date: Date | null, methods: UseFormReturn<T>) => void;

  // start element
  element?: React.ReactNode;
};
