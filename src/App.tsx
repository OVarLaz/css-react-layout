// src/App.tsx
import React from "react";
import Home from "./views/layouts/Home";
import Sidebar from "./views/components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Home />
      </div>
    </div>
  );
};

export default App;
