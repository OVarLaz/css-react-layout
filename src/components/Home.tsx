import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex h-screen">
      <div className="w-[75%] h-full flex mx-5 bg-main-gray"></div>
      <div className="w-[25%] h-full flex bg-main-gray"></div>
    </main>
  );
};

export default Home;
