import React from "react";
import { GET_USERDATA, USER_GET, USER_REGISTER } from "../services/Api";

export const UserContext = React.createContext(null);

export const UserStorage = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const getUserWithToken = async (token) => {
    setLoading(true);
    const { url, options } = GET_USERDATA(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setUser(json);
    setIsAuthenticate(true);
    setLoading(false);
  };

  const userLogin = async (identifier, password) => {
    const { url, options } = USER_GET({
      identifier,
      password,
    });
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) throw new Error(json.message[0].messages[0].message);
      window.localStorage.setItem("token", json.jwt);
      setUser(json.user);
      setIsAuthenticate(true);
    } catch (err) {
      setError(err.toString());
    }
    setLoading(false);
  };

  const userRegister = async (username, email, password) => {
    setLoading(true);
    setError(null);
    const { url, options } = USER_REGISTER({
      username,
      email,
      password,
    });
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) throw new Error(json.message[0].messages[0].message);
      window.localStorage.setItem("token", json.jwt);
      setUser(json.user);
      setIsAuthenticate(true);
    } catch (err) {
      setError(err.toString());
    }
    setLoading(false);
  };
  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUserWithToken(token);
    }
  }, []);

  const value = {
    setError,
    isAuthenticate,
    setIsAuthenticate,
    userRegister,
    userLogin,
    user,
    error,
    loading,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
