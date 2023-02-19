import { todoContext } from "contexts/todoContext";
import { PropsWithChildren, useContext } from "react";

const Footer: React.FC<PropsWithChildren> = ({ children }) => (
  <footer className="footer">{children}</footer>
);

export default Footer;
