import "./CustomContainer.scss";
type Props = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
const CustomContainer = ({ children, className, ...props }: Props) => {
  return (
    <div className={`custom_container ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export default CustomContainer;
