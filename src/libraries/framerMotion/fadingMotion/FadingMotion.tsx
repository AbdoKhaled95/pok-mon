import "./FadingMotion.scss";
import { m, type Variants } from "framer-motion";
type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};
const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const FadingMotion: React.FC<Props> = ({ children, className, ...props }) => (
  <m.div
    {...props}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.5 }}
    className={`fading_motion ${className || ""}`}
  >
    {children}
  </m.div>
);

export default FadingMotion;
