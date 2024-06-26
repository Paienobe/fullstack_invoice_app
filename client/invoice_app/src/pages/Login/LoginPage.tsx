import { useState } from "react";
import AuthFormFooter from "../../components/AuthPageComponents/AuthFormFooter/AuthFormFooter";
import AuthFormHeader from "../../components/AuthPageComponents/AuthFormHeader/AuthFormHeader";
import AuthPageContainer from "../../components/Layout/AuthPageContainer/AuthPageContainer";
import Button from "../../components/UI/Button/Button";
import InputField from "../../components/UI/InputField/InputField";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const updateData = (key: keyof typeof loginData, value: string) => {
    setLoginData({ ...loginData, [key]: value });
  };
  return (
    <AuthPageContainer>
      <form
        className="w-[45%] lg:w-[70%] md:w-[90%] p-8 rounded-lg bg-white mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <AuthFormHeader />
        <InputField
          value={loginData.email}
          label="Email"
          type="email"
          onChangeFunc={(e) => updateData("email", e.currentTarget.value)}
        />
        <InputField
          value={loginData.password}
          label="Password"
          type="password"
          onChangeFunc={(e) => {
            updateData("password", e.currentTarget.value);
          }}
        />
        <Button
          bg_color="bg-purple"
          text="Sign Up"
          text_color="text-white"
          className="w-full mt-8"
          type="submit"
        />

        <AuthFormFooter
          question="New to Invoice?"
          link_text="Sign up"
          route="/sign-up"
        />
      </form>
    </AuthPageContainer>
  );
};

export default LoginPage;
