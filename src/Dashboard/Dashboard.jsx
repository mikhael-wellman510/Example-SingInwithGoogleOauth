import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { token } = useParams();
  console.log(token);

  const Logout = async () => {
    try {
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <>
      <div>ini Dashboard</div>
      <button onClick={Logout}>Logout</button>
    </>
  );
};

export default Dashboard;
