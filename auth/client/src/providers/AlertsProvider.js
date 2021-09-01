import { useContext, createContext, useState } from "react";
import Alert from "@material-ui/lab/Alert";

const AlertContext = createContext(null);

export const AlertProvider = (props) => {
  const { children } = props;
  const [alert, setAlert] = useState(<></>);

  const _setAlert = (tipo, message, duración = 5000) => {
    setAlert(<Alert severity={tipo}>{message}</Alert>);
    if (duración) setTimeout(() => setAlert(<></>), duración);
  };

  return (
    <AlertContext.Provider value={_setAlert}>
      {alert}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
