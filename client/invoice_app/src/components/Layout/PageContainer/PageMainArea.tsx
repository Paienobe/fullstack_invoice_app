import { ReactNode } from "react";

const PageMainArea = ({ children }: { children: ReactNode }) => {
  return <section className="w-[62.5%] mx-auto py-12">{children}</section>;
};

export default PageMainArea;
