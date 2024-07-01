import { useState } from "react";
import AuthFormFooter from "../../components/AuthPageComponents/AuthFormFooter/AuthFormFooter";
import AuthFormHeader from "../../components/AuthPageComponents/AuthFormHeader/AuthFormHeader";
import AuthPageContainer from "../../components/Layout/AuthPageContainer/AuthPageContainer";
import Button from "../../components/UI/Button/Button";
import InputField from "../../components/UI/InputField/InputField";
import { LoginData } from "./types";
import { loginUser, registerUser } from "../../services/api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/Global/GlobalContext";
import { v4 as uuid } from "uuid";

const LoginPage = () => {
  const { setLoginResponse } = useGlobalContext();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const updateData = (key: keyof LoginData, value: string) => {
    setLoginData({ ...loginData, [key]: value });
  };

  const handleSubmit = (loginData: LoginData) => {
    loginUser(loginData)
      .then((result) => {
        setLoginResponse(result);
        navigate("/");
        toast.success(
          "Welcome!! Guest accounts are automatically deleted after 3 days"
        );
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const createGuestAccount = () => {
    const guestUser = {
      name: `guest-${uuid()}`,
      email: `guest-${uuid()}@mail.com`,
      password: uuid(),
    };
    registerUser(guestUser).then(() => {
      const loginDetails = {
        email: guestUser.email,
        password: guestUser.password,
      };
      handleSubmit(loginDetails);
    });
  };

  return (
    <AuthPageContainer>
      <form
        className="w-[45%] lg:w-[70%] md:w-[90%] p-8 rounded-lg bg-white dark:bg-dark_bg mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(loginData);
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
        <Button
          bg_color="bg-purple"
          text="Log in as guest"
          text_color="text-white"
          className="w-full mt-4"
          type="button"
          clickFunc={createGuestAccount}
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
