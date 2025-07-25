import SignupForm from "@features/authentication/components/signupForm/SignupForm";
import "./SignupPage.scss";
import useMount from "@hooks/useMount";
import PageMotion from "@libraries/framerMotion/pageMotion/PageMotion";
import { useTranslation } from "react-i18next";
import CustomContainer from "@components/containers/customContainer/CustomContainer";

const SignupPage = () => {
  const { t } = useTranslation(["authentication"], { nsMode: "fallback" });
  useMount({ documentTitle: t("authentication:signup") });
  return (
    <PageMotion id="signup_page">
      <CustomContainer className="signup_page-container">
        <SignupForm />
      </CustomContainer>
    </PageMotion>
  );
};

export default SignupPage;
