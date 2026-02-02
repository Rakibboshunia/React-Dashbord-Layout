import { createContext, useState } from "react";
import DefaultAvatar from "../Assets/images/cartoon-boy.png";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Admin",
    email: "admin@gmail.com",
    avatar: DefaultAvatar, // 👈 image state
  });

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
