// src/App.tsx
import React from "react";
import Header from "./views/components/Header";
import Sidebar from "./views/components/Sidebar";
import Home from "./views/layouts/Home";

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
