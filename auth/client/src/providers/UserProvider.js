import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import logoutUser from "../actions/logoutUser";
import updateToken from "../actions/updateToken";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);

  const history = useHistory();

  console.log({ history });

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
  }, []);

  //   useEffect(() => {
  //       setUser(user)
  //   }, [user])

  return (
    <UserContext.Provider value={{ user, setUser, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
