import React from "react";
import Sidebar from "./components/Sidebar";
import style from "./index.css";
import Home from "./components/Home";
const App = () => {
  return (
    <div>
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
