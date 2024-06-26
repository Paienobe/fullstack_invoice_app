import { authInstance } from "../../axios/instances";
import { LoginData } from "../../pages/Login/types";
import { RegisterData } from "../../pages/SignUp/types";

export const registerUser = async (data: RegisterData) => {
  try {
    const request = await authInstance.post("/register/", data);
    return request.data;
    // eslint-disable-next-line
  } catch (error: any) {
    catchAndThrowErr(error);
  }
};

export const loginUser = async (data: LoginData) => {
  try {
    const request = await authInstance.post("/login/", data);
    return request.data;
    // eslint-disable-next-line
  } catch (error: any) {
    catchAndThrowErr(error);
  }
};

// eslint-disable-next-line
const catchAndThrowErr = (error: any) => {
  const errorData = error.response.data;
  const errorMsgKey = Object.keys(errorData)[0];
  if (Array.isArray(errorData[errorMsgKey])) {
    const errMessage = errorData[errorMsgKey][0];
    throw new Error(errMessage);
  } else throw new Error(errorData[errorMsgKey]);
};
