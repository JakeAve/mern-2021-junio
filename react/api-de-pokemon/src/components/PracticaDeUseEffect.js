import React, { useEffect, useState } from "react";

const PracticaDeUseEffect = () => {
  const [cuenta1, setCuenta1] = useState(0);
  const [cuenta2, setCuenta2] = useState(100);
  const [sumo, setSumo] = useState(cuenta1 + cuenta2);

  useEffect(() => {
    setSumo(cuenta1 + cuenta2);
  }, [cuenta1, cuenta2]);

  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const int = setInterval(() => setTime(new Date().toLocaleString()), 1000);

    return () => clearInterval(int);
  }, []);

  return (
    <div>
      <button onClick={() => setCuenta1((p) => p + 1)}>Button 1</button>
      <div>{cuenta1}</div>
      <button onClick={() => setCuenta2((p) => p - 1)}>Button 2</button>
      <div>{cuenta2}</div>
      <div>Sumo: {sumo}</div>

      <hr />
      <div>Time: {time}</div>
    </div>
  );
};

export default PracticaDeUseEffect;
