// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* <Header /> */}
        <Home />
      </div>
    </div>
  );
};

export default App;
