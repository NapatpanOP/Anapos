import { createContext, useContext, useState } from "react";
import { LoginAPI } from "../../apis/auth/loginAPI";
import CryptoJS from "crypto-js";
import { useNavigate, useLocation } from "react-router";

const AuthContext = createContext({});
const localTokenKey = 'token'

export function useAuthContext() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem(localTokenKey)) ?? null
  const [token, setToken] = useState(localUser);
  const navigate = useNavigate();
  const location = useLocation()
  const handleLogin = async (user) => {
    console.log(user)
    user.password = CryptoJS.AES.encrypt(user.password, 'OKIOKI007').toString();
    const response = await LoginAPI.login(user)
    if (!response?.name) {
      localStorage.setItem(localTokenKey, JSON.stringify(response));
      setToken(response);
      const origin = location.state?.from?.pathname || '/';
      navigate(origin);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(localTokenKey);
    setToken(null);
    const origin = location.state?.from?.pathname || '/';
    navigate(origin);
  };

  const authStore = {
    token,
    AuthAction: {
      onLogin: handleLogin,
      onLogout: handleLogout
    }
  };

  return (
    <AuthContext.Provider value={authStore}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;