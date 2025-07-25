import "./CustomLogo.scss";
import logo from "@assets/react.svg";
const CustomLogo = ({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    {...props}
    src={logo}
    alt="logo"
    className={`custom_logo ${props.className ?? ""}`}
  />
);
export default CustomLogo;
