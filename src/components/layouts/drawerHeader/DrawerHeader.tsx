import { Drawer, IconButton } from "@mui/material";
import "./DrawerHeader.scss";
import CustomLogo from "@components/logos/customLogo/CustomLogo";
import { BaselineClose } from "@svgComponents/SvgIcons";
import HeaderLink from "@components/navigation/headerLink/HeaderLink";
import Languages from "@components/settings/languages/Languages";
import useHeaderLinks from "@hooks/useHeaderLinks";
type Props = {
  open: boolean;
  onClose: () => void;
};
const DrawerHeader = ({ open, onClose }: Props) => {
  const { headerLinks } = useHeaderLinks();

  return (
    <Drawer open={open} onClose={onClose} className="drawer_header">
      <div className="drawer_header-content">
        <div className="drawer_header-content--header">
          <div className="drawer_header-content--header---logo">
            <CustomLogo className="drawer_header-content--header---logo----img" />
          </div>
          <IconButton onClick={onClose}>
            <BaselineClose />
          </IconButton>
        </div>
        <div className="drawer_header-content--links">
          {headerLinks.map((link, index) => (
            <HeaderLink key={index} {...link} onClick={onClose} />
          ))}
        </div>
        <div className="drawer_header-content--settings">
          <Languages />
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerHeader;
