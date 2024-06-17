import { ReactNode } from "react";

const PageMainArea = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-[62.5%] max-w-[75rem] mx-auto py-12">
      {children}
    </section>
  );
};

export default PageMainArea;
