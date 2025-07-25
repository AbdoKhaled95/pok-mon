import { type TLoginForm } from "@features/authentication/models/loginForm.model";
import { type FormInput } from "@models/formInput.model";
import { inputMaxLength } from "@utils/inputs.utils";
import { useTranslation } from "react-i18next";
import { z } from "zod";

type LoginFormDataInputProps = FormInput<TLoginForm>;
const className = "login_form_input";

const useLoginForm = () => {
  const { t } = useTranslation();
  const defaultValues: TLoginForm = {
    email: "",
    password: "",
  };
  const loginFormInputs: LoginFormDataInputProps[] = [
    {
      inputName: "email",
      inputType: "text",
      inputLabel: t("loginForm.email", { ns: "authentication" }),
      placeholder: t("loginForm.emailPlaceholder", { ns: "authentication" }),
      localesNs: ["authentication", "error"],
      required: true,
      className,
      onChange: (e) => inputMaxLength(e, 30),
    },
    {
      inputName: "password",
      inputType: "password",
      inputLabel: t("loginForm.password", { ns: "authentication" }),
      placeholder: t("loginForm.passwordPlaceholder", { ns: "authentication" }),
      localesNs: ["authentication", "error"],
      required: true,
      className,
      onChange: (e) => inputMaxLength(e),
    },
  ];
  const loginFormSchema = z.object({
    email: z.string().nonempty("error:filedRequired").email("error:emailError"),
    password: z
      .string()
      .nonempty("error:filedRequired")
      .min(8, "authentication:loginForm.passwordLengthError"),
  });
  return { defaultValues, loginFormInputs, loginFormSchema };
};

export default useLoginForm;
