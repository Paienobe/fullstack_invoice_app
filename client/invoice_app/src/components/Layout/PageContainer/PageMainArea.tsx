import { ReactNode } from "react";

const PageMainArea = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-[62.5%] md:w-[90%] max-w-[75rem] mx-auto py-12 md:py-[calc(3rem+5.625rem)]">
      {children}
    </section>
  );
};

export default PageMainArea;
