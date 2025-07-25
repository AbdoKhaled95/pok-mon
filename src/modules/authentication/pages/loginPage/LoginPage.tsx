import "./LoginPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import LoginForm from "@features/authentication/components/loginForm/LoginForm";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";

const LoginPage = () => {
  const { t } = useTranslation(["authentication"], { nsMode: "fallback" });
  useMount({
    documentTitle: t("authentication:login"),
  });

  return (
    <PageMotion id="login_page">
      <CustomContainer className="login_page-container">
        <LoginForm />
      </CustomContainer>
    </PageMotion>
  );
};

export default LoginPage;
