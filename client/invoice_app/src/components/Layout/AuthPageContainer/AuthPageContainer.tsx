import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthPageContainer = ({ children }: Props) => {
  return (
    <section className="w-screen h-screen bg-black bg-opacity-25 backdrop-blur-sm grid place-items-center">
      {children}
    </section>
  );
};

export default AuthPageContainer;
