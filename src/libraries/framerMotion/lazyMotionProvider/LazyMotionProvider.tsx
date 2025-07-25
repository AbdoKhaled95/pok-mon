import { domMax, LazyMotion } from "framer-motion";

// ----------------------------------------------------------------------

export type Props = {
  children: React.ReactNode;
};

const LazyMotionProvider = ({ children }: Props) => {
  return (
    <LazyMotion strict features={domMax}>
      {children}
    </LazyMotion>
  );
};
export default LazyMotionProvider;
