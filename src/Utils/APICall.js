import axios from "axios";
const backendURL = "https://rv9h8k6o3l.execute-api.us-east-1.amazonaws.com/";

export const UserSignUp = async (userId, name, mobile, password) => {
  const { data } = await axios.post(`${backendURL}/users/signup/`, {
    userId: userId,
    name: name,
    mobile: mobile,
    password: password,
  });
  return data;
};

export const UserSignIn = async (userId, password) => {
  const { data } = await axios.post(`${backendURL}/users/login/`, {
    userId: userId,
    password: password,
  });
  return data;
};
