import { CircularProgress } from "@mui/material";
import "./CustomLoader.scss";
type Props = {
  className?: string;
};
const CustomLoader = ({ className }: Props) => {
  return (
    <div className={`custom_loader ${className ?? ""}`}>
      <CircularProgress />
    </div>
  );
};

export default CustomLoader;
