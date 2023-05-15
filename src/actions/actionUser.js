import { publicRequest, userRequest } from "../api/apiHandle";

export const userLogin = (reqObj) => async (dispatch) => {
  try {
    const res = await publicRequest.post("/auth/login", reqObj);
    localStorage.setItem("user", JSON.stringify(res.data));
    window.location.replace("/");
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

export const userSignup = (reqObj) => async (dispatch) => {
  try {
    const res = await publicRequest.post("/auth/signup", reqObj);
    alert("Registration Successful");
    window.location.replace("/login");
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};
