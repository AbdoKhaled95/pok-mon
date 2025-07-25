import { type Transition, type Variants } from "framer-motion";
export const primaryTransition: Transition = {
  duration: 0.5,
  ease: "easeOut",
};
export const toYVariant: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
  },
  exit: {
    y: "-100%",
    opacity: 0,
  },
};
export const toXStartVariant: Variants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
  },
  exit: {
    x: "-100%",
    opacity: 0,
  },
};
export const toXEndVariant: Variants = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
  },
  exit: {
    x: "100%",
    opacity: 0,
  },
};
