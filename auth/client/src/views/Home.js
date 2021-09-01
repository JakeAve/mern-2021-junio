import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useUser } from "../providers/UserProvider";

const Home = () => {
  const [data, setData] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    fetch(`/api/sensitive-info`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!user) return <Redirect to="/login" />;
  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
