export const loginUser = (user) => {
    const token = btoa(`${user.email}:${new Date().getTime()}`);
    localStorage.setItem("authToken", token);
    localStorage.setItem("authUser", JSON.stringify(user));
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem("authToken") !== null;
  };
  