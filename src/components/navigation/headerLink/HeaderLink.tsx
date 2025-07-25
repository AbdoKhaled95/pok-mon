import { NavLink } from "react-router-dom";
import "./HeaderLink.scss";
type Props = {
  to: string;
  label: string;
  className?: string;
  onClick?: () => void;
};
const HeaderLink = ({ label, to, className, onClick }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `header_link ${isActive ? "active" : ""} ${className ?? ""}`
      }
      onClick={() => onClick?.()}
    >
      {label}
    </NavLink>
  );
};

export default HeaderLink;
