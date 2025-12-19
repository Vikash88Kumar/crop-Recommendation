import api from "../axios.js";

export const registerUser = async (data) => {
  try {
    const res = await api.post("/user/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    console.error("Registration error:", err.response?.data || err.message);
    throw err;
  }
};

  export const LoginUser=async(data)=>{
    try {
      const res=await api.post("/user/login",data,{
          headers:{
              "Content-Type":"application/json"
          }
      })
      return res.data;
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      throw error;
    }
  }

  export const getCurrentUser = async () => {
    try {
      // Common backend endpoints for current user: /user/me or /auth/me
      const res = await api.get("/user/getcurrentuser");
      return res.data;
    } catch (error) {
      console.error("Get current user error:", error.response?.data || error.message);
      throw error;
    }
  };

  export const logout = async () => {
    try {
      // Logout usually invalidates the session/cookie on the server
      const res = await api.post("/user/logout");
      return res.data;
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
      throw error;
    }
  };
