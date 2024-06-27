import logo from "../../../assets/logo.svg";

const AuthFormHeader = () => {
  return (
    <>
      <div className="bg-purple w-fit mx-auto p-4 rounded-lg">
        <img src={logo} alt="" />
      </div>
      <p className="text-text_dark dark:text-white font-medium my-4 tracking-widest text-center font-Spartan text-3xl">
        INVOICE
      </p>{" "}
    </>
  );
};

export default AuthFormHeader;
