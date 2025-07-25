import "./CustomRenderForm.scss";
import { useFormContext } from "react-hook-form";
import { type FormInput } from "@models/formInput.model";
import CustomRenderInput from "../customRenderInput/CustomRenderInput";
import { useScrollToError } from "@hooks/useScrollToError";

type Props<T extends Record<string, unknown>> = {
  inputsFields: FormInput<T>[];
  handleSubmit: (data: T) => void;
  children: React.ReactNode;
  className?: string;
};

const CustomRenderForm = <T extends Record<string, unknown>>({
  inputsFields,
  handleSubmit,
  children,
  className,
}: Props<T>) => {
  const {
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useFormContext<T>();
  useScrollToError(errors);
  return (
    <form
      onSubmit={handleFormSubmit((data) => handleSubmit(data))}
      className={`custom_render_form ${className ?? ""}`}
    >
      {inputsFields.map((input, index) => (
        <CustomRenderInput {...input} key={index} />
      ))}
      {children}
    </form>
  );
};

export default CustomRenderForm;
