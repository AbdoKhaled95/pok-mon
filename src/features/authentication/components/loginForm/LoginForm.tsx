import "./LoginForm.scss";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomRenderForm from "@components/forms/customRenderForm/CustomRenderForm";
import { useTranslation } from "react-i18next";
import useLoginForm from "./useLoginForm";
import { type TLoginForm } from "@features/authentication/models/loginForm.model";
import { Button } from "@mui/material";
const LoginForm = () => {
  const { t } = useTranslation();
  const { defaultValues, loginFormInputs, loginFormSchema } = useLoginForm();
  const methods = useForm<TLoginForm>({
    defaultValues: defaultValues,
    resolver: zodResolver(loginFormSchema),
  });

  const handleSubmit = (data: TLoginForm) => {
    console.log(methods.getValues());
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <CustomRenderForm
        handleSubmit={handleSubmit}
        inputsFields={loginFormInputs}
        className="login_form"
      >
        <Button variant="contained" type="submit">
          {t("login", { ns: "authentication" })}
        </Button>
      </CustomRenderForm>
    </FormProvider>
  );
};

export default LoginForm;
