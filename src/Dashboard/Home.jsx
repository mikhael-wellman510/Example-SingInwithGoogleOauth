import React from "react";

const Home = () => {
  const handleLogin = () => {
    // Kalau berhasil langsung direct ke Dashboard
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };
  return (
    <>
      <div>
        <div>Ini Home</div>
        <button onClick={handleLogin}>Login With Google</button>
      </div>
    </>
  );
};

export default Home;
