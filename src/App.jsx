import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Dashboard/Home";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   // Ambil authorization code dari URL
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const code = queryParams.get("code"); // Mengambil parameter 'code' dari URL

  //   if (code) {
  //     // Lakukan request POST ke backend untuk mendapatkan access token
  //     fetch("http://localhost:8080/exchange-token", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ code }), // Kirim code ke backend
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Ambil token dari respons
  //         const token = data.access_token;
  //         console.log("Access Token:", token);
  //         // Simpan token dan lakukan autentikasi selanjutnya
  //         localStorage.setItem("access_token", token);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/:token" element={<Dashboard />} />
          {/* <Route path="/fixed" element={<FixedPages />} />
          <Route path="/static" element={<StaticPages />} />
          <Route path="/sticky" element={<StickyPages />} />
          <Route path="/drawer" element={<DrawerPages />} />
          <Route path="/inputFile" element={<InputPages />} />
          <Route path="/lines" element={<Lines />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
