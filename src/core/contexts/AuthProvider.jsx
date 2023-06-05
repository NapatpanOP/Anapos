import { createContext, useContext, useEffect, useState } from "react";
import { LoginAPI } from "../../apis/auth/loginAPI";
import CryptoJS from "crypto-js";
import { useNavigate, useLocation } from "react-router";
import { SigninAPI } from "../../apis/admin/SigninAPI";
import LoadingOverlay from "../components/loading/LoadingOverlay";

const AuthContext = createContext({});
const localTokenKey = 'token'

export function useAuthContext() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem(localTokenKey)) ?? null
  const [token, setToken] = useState(localUser);

  const localAdmin = JSON.parse(localStorage.getItem('adminToken')) ?? null
  const [adminToken, setAdminToken] = useState(localAdmin);

  const [isLoading, setIsLoading] = useState(false)

  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigate = useNavigate();
  const location = useLocation()
  const handleLogin = async (user) => {
    console.log(user)
    setIsLoading(true)
    user.password = CryptoJS.AES.encrypt(user.password, 'OKIOKI007').toString();
    const response = await LoginAPI.login(user)
    setIsLoading(false)
    if (response?.message) {
      return response.message
    }else{
      localStorage.setItem(localTokenKey, JSON.stringify(response));
      setToken(response);
      const origin = location.state?.from?.pathname || '/';
      console.log(location)
      navigate(origin);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(localTokenKey);
    setToken(null);
    const origin = location.state?.from?.pathname || '/';
    navigate(origin);
  };

  const setAdminSignin = async (admin) => {
    localStorage.setItem('adminToken', JSON.stringify(admin));
    setAdminToken(admin);
  }

  const setUserSignin = async (user) => {
    localStorage.setItem(localTokenKey, JSON.stringify(user));
    setToken(user);
  }

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
    setAdminToken(null);
    // const origin = location.state?.from?.pathname || '/';
    navigate('/admin');
  };

  const handleLoading = (loading) => {
    setIsLoading(loading)
  }

  const authStore = {
    token,
    adminToken,
    AuthAction: {
      onLogin: handleLogin,
      onLogout: handleLogout,
      onSetAdminSignin: setAdminSignin,
      onAdminLogout: handleAdminLogout,
      onSetUserSignin: setUserSignin
    },
    loadingAction: {
      onLoading: handleLoading
    }
  };

  return (
    <AuthContext.Provider value={authStore}>
      {isLoading && <LoadingOverlay />}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;