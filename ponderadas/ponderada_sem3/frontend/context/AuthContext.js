import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();
const { Provider } = AuthContext;

const TOKEN_STORAGE_KEY = "token";

const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const setUserAuthInfo = (data) => {
    const newToken = data.token;
    localStorage.setItem(TOKEN_STORAGE_KEY, newToken);
    setToken(newToken);
  };

  const isUserAuthenticated = () => !!token;

  return (
    <Provider
      value={{
        token,
        setUserAuthInfo,
        isUserAuthenticated
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
