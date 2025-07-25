import "./CustomInputError.scss";
import { Typography, type TypographyProps } from "@mui/material";
type Props = {
  children: string;
  className?: string;
} & TypographyProps; // Extend TypographyProps
const CustomInputError = ({
  children,
  className,
  ...typographyProps
}: Props) => {
  return (
    <Typography
      component={"span"}
      color="error"
      className={`custom_input_error  ${className ?? ""}`}
      {...typographyProps}
    >
      {children}
    </Typography>
  );
};

export default CustomInputError;
