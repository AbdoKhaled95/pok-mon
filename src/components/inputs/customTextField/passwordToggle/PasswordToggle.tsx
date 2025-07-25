import { IconButton, InputAdornment } from "@mui/material";
import "./PasswordToggle.scss";
import { VisibilityIcon, VisibilityOffIcon } from "@svgComponents/SvgIcons";
type Props = {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleMouseUpPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const PasswordToggle = ({
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  handleMouseUpPassword,
}: Props) => {
  return (
    <InputAdornment position="end">
      <IconButton
        size="small"
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        onMouseUp={handleMouseUpPassword}
        sx={{ P: 0 }}
      >
        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordToggle;
