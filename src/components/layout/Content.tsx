import { PropsWithChildren } from "react";

const Content: React.FC<PropsWithChildren> = ({ children }) => (
  <section role="main" className="main">
    {children}
  </section>
);

export default Content;
