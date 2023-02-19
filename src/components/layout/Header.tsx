import { PropsWithChildren } from "react";

const Header: React.FC<PropsWithChildren> = ({ children }) => <header className="header">{children}</header>;

export default Header;
