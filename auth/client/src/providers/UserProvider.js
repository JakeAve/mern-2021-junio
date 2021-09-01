import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import getUserInfo from "../actions/getUserInfo";
import logoutUser from "../actions/logoutUser";
import updateToken from "../actions/updateToken";

const localStorageKey = "user-email";

const emailFromLocalStorage = window.localStorage.getItem(localStorageKey);

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const initialPath = location.pathname;

  useEffect(() => {
    if (emailFromLocalStorage)
      getUserInfo(emailFromLocalStorage)
        .then(({ success, data }) => {
          if (success) {
            setUser(data);
            history.push(initialPath);
          } else setUser(null);
        })
        .catch(() => {});
    // eslint-disable-next-line
  }, []);

  const logout = async () => {
    try {
      await logoutUser();
    } catch {
    } finally {
      setUser(null);
      history.push("/login");
    }
  };

  const login = (userObjectDeAPI) => {
    setUser(userObjectDeAPI);
    history.push("/");
  };

  useEffect(() => {
    const int = setInterval(() => {
      if (user) updateToken();
    }, 14 * 60 * 1000);
    return () => clearInterval(int);
  }, [user]);

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, user?.email || null);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
