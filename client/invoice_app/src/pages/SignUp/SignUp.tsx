import AuthPageContainer from "../../components/Layout/AuthPageContainer/AuthPageContainer";
import InputField from "../../components/UI/InputField/InputField";
import Button from "../../components/UI/Button/Button";
import AuthFormHeader from "../../components/AuthPageComponents/AuthFormHeader/AuthFormHeader";
import { useState } from "react";
import AuthFormFooter from "../../components/AuthPageComponents/AuthFormFooter/AuthFormFooter";
import { RegisterData } from "./types";
import { registerUser } from "../../services/api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [signupData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const updateData = (key: keyof RegisterData, value: string) => {
    setSignUpData({ ...signupData, [key]: value });
  };

  const handleSubmit = () => {
    registerUser(signupData)
      .then(() => {
        toast.success("Registered successfully!");
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <AuthPageContainer>
      <form
        className="w-[45%] lg:w-[70%] md:w-[90%] p-8 rounded-lg bg-white dark:bg-dark_bg mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <AuthFormHeader />
        <InputField
          value={signupData.name}
          label="Name"
          onChangeFunc={(e) => updateData("name", e.currentTarget.value)}
        />
        <InputField
          value={signupData.email}
          label="Email"
          type="email"
          onChangeFunc={(e) => updateData("email", e.currentTarget.value)}
        />
        <InputField
          value={signupData.password}
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
          question="Already have an account?"
          link_text="Log in"
          route="/login"
        />
      </form>
    </AuthPageContainer>
  );
};

export default SignUp;
