import "./PageMotion.scss";
import { m, type Variants } from "framer-motion";
type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
};
const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const PageMotion: React.FC<Props> = ({ children, className, ...props }) => (
  <m.section
    {...props}
    initial="initial"
    animate="animate"
    exit={"exit"}
    variants={variants}
    transition={{ duration: 0.3 }}
    className={`page_motion ${className ?? ""}`}
  >
    {children}
  </m.section>
);

export default PageMotion;
