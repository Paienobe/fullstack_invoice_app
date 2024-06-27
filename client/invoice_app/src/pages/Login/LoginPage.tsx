import { useState } from "react";
import AuthFormFooter from "../../components/AuthPageComponents/AuthFormFooter/AuthFormFooter";
import AuthFormHeader from "../../components/AuthPageComponents/AuthFormHeader/AuthFormHeader";
import AuthPageContainer from "../../components/Layout/AuthPageContainer/AuthPageContainer";
import Button from "../../components/UI/Button/Button";
import InputField from "../../components/UI/InputField/InputField";
import { LoginData } from "./types";
import { loginUser } from "../../services/api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/Global/GlobalContext";

const LoginPage = () => {
  const { setLoginResponse } = useGlobalContext();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const updateData = (key: keyof LoginData, value: string) => {
    setLoginData({ ...loginData, [key]: value });
  };

  const handleSubmit = () => {
    loginUser(loginData)
      .then((result) => {
        setLoginResponse(result);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <AuthPageContainer>
      <form
        className="w-[45%] lg:w-[70%] md:w-[90%] p-8 rounded-lg bg-white mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
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
          text="Log in"
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
