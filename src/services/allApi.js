import { serverUrl } from "./serverUrl";
import { commonApi } from "./commonApi";

// Register API
export const registerApi = async (reqBody) => {
  return await commonApi("POST", `${serverUrl}/register`, reqBody);
};

// Login API
export const loginApi = async (reqBody) => {
  return await commonApi("POST", `${serverUrl}/login`, reqBody);
};

// send otp
export const sendOtp = async(userId)=>{
    return await commonApi("POST",`${serverUrl}/send-otp`,{ userId })
}

// verify otp
export const verifyOtp = async(otp)=>{
    return await commonApi("POST",`${serverUrl}/verify-Otp`,{otp})
}

export const getUserData = async()=>{
  return await commonApi("GET",`${serverUrl}/data`)
}
