import React from "react";
import StorageChart from "../components/Chart/StorageChart";

const Home: React.FC = () => {
  const storageData = [
    { id: 1, name: "Documents", files: 720, size: 200 },
    { id: 2, name: "Documents", files: 720, size: 125 },
    { id: 3, name: "Documents", files: 720, size: 75 },
    { id: 4, name: "Documents", files: 720, size: 50 },
  ];

  const getColor = (id: number): string => {
    const colors = [
      "bg-primary-orange",
      "bg-primary-blue",
      "bg-primary-green",
      "bg-primary-gray",
    ];
    return colors[id - 1] || "primary-gray";
  };

  return (
    <main className="flex h-screen">
      <div className="w-[80%] h-full flex mx-5 bg-main-gray"></div>
      <div className="w-[20%] h-full flex flex-col bg-main-gray">
        <div className="p-8 flex justify-between items-center">
          <div className="flex">
            <div className="bg-icon-gray w-4 h-4"></div>
            <div className="bg-icon-gray w-4 h-4 ml-2"></div>
          </div>
          <div className="flex">
            <span className="mr-2">Name</span>
            <div className="bg-icon-gray rounded-full w-8 h-8"></div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-line-gray"></div>
        <h2 className="text-xl font-semibold mb-4 px-8 py-6">Storage</h2>
        <StorageChart storageData={storageData} />
        <div className="text-gray-700 px-8">
          <p className="text-tertiary-gray text-tiny flex justify-center mt-2">
            420.2 GB of 500 GB used
          </p>
          <div className="mt-8 space-y-2">
            {storageData.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center ">
                  <div
                    className={`w-8 h-8 rounded-xl mr-2 ${getColor(item.id)}`}
                  ></div>
                  <div className="flex flex-col items-start">
                    <div className="text-xxs">{item.name}</div>
                    <div className="text-tertiary-gray text-tiny">
                      {item.files} files
                    </div>
                  </div>
                </div>

                <div className="bg-white w-14 h-6 rounded text-xxs flex items-center justify-center">
                  {item.size} GB
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8 w-full">
          <div className=" bg-white rounded-lg flex flex-col items-center">
            <div className="bg-custom-gradient w-36 h-20 rounded-lg mt-6"></div>
            <div className="flex flex-col py-4">
              <span className="text-xs">Buy more space now!</span>
              <span className="text-tertiary-gray text-tiny">
                Upgrade to cloud premium
              </span>
            </div>
            <div className="mb-6 flex items-center justify-center w-36 h-10 bg-primary-orange rounded text-white text-xxs">
              Upgrade Account!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
