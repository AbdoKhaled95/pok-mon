import { useState } from "react";
type Props = {
  defaultOpen?: boolean;
};

export const useModalHandler = ({ defaultOpen = false }: Props) => {
  const [open, setOpen] = useState(defaultOpen);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return { open, setOpen, handleOpen, handleClose };
};
