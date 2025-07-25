type Props = {
  className: string;
};
import HeaderLink from "@components/navigation/headerLink/HeaderLink";
import "./Header.scss";
import { ROUTES_PATH } from "@enums/routesPath.enum";
import CustomContainer from "@components/containers/customContainer/CustomContainer";
import CustomLogo from "@components/logos/customLogo/CustomLogo";
import Languages from "@components/settings/languages/Languages";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { MenuIcon } from "@svgComponents/SvgIcons";
import { useModalHandler } from "@hooks/useModalHandler.hook";
import DrawerHeader from "../drawerHeader/DrawerHeader";
import useHeaderLinks from "@hooks/useHeaderLinks";

const Header = ({ className }: Props) => {
  const navigate = useNavigate();
  const handleLogoClick = () => navigate(`/${ROUTES_PATH.HOME}`);
  const { open, handleClose, handleOpen } = useModalHandler({
    defaultOpen: false,
  });
  const { headerLinks } = useHeaderLinks();
  return (
    <header id="header" className={`header ${className ?? ""}`}>
      <CustomContainer className="header-container">
        <div className="header-container--content">
          <div
            className="header-container--content---logo"
            onClick={handleLogoClick}
          >
            <CustomLogo className="header-container--content---logo----img" />
          </div>
          <div className="header-container--content---links">
            {headerLinks.map((link, index) => (
              <HeaderLink key={index} {...link} />
            ))}
          </div>
          <div className="header-container--content---settings">
            <Languages />
          </div>
          <IconButton
            size="small"
            className="header-container--content---menuBtn"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </CustomContainer>
      <DrawerHeader open={open} onClose={handleClose} />
    </header>
  );
};

export default Header;
