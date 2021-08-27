import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`/api/user/61282b4cc95aaba2af2bcb9b`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
