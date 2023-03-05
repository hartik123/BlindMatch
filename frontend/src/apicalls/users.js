import { axiosInstance } from ".";

export const login = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/login", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/register", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const userInfo = async () => {
  try {
    const response = await axiosInstance.get("/api/users/getuserinfo");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const verify = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/verify", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const forgotPassword = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/users/forgotPassword",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const checkOtp = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/checkOtp", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const resetPassword = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/users/resetPassword",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllUsers = async()=>{
    try {
        const response = await axiosInstance.get('/api/users/getallusers')
        return response.data
        
    } catch (error) {
        return error.response.data
    }
} 

export const UpdateProfilePicture = async (payload) => {
    try {
      const response = await axiosInstance.post("/api/users/update-profile-picture", payload);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
