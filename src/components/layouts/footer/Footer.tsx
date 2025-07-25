import "./footer.scss";
type Props = {
  className?: string;
};
const Footer = ({ className }: Props) => {
  return (
    <footer id="footer" className={`footer ${className || ""}`}>
      Footer
    </footer>
  );
};

export default Footer;
