import React from "react";
import StorageChart from "../components/Chart/StorageChart";
import BuySection from "../components/BuySection";
import SearchInput from "../components/ui/SearchInput/SearchInput";
import RecentFiles from "../components/RecentFiles";
import RecentlyUsed from "../components/RecentlyUsed";
import ShareWithMe from "../components/ShareWithMe";
import Title from "../components/ui/Title";

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
    <main className="flex h-full">
      <div className="w-[80%] h-full flex flex-col mx-5 bg-main-gray">
        <div className="w-full pt-8 pb-10 px-6">
          <SearchInput />
        </div>
        <div className="w-full pb-12 px-6">
          <RecentlyUsed />
        </div>
        <div className="w-full pb-12 px-6">
          <RecentFiles />
        </div>
        <div className="w-full pb-8 px-6">
          <ShareWithMe />
        </div>
      </div>
      <div className="w-[20%] h-full flex flex-col bg-main-gray">
        <div className="p-8 flex justify-between items-center">
          <div className="flex">
            <div className="bg-icon-gray w-4 h-4"></div>
            <div className="bg-icon-gray w-4 h-4 ml-2"></div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Name</span>
            <div className="bg-icon-gray rounded-full w-8 h-8"></div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-line-gray"></div>
        <div className="px-8 py-6">
          <Title name="Storage" />
        </div>
        <StorageChart storageData={storageData} />
        <div className="text-gray-700 px-8">
          <p className="text-tertiary-gray text-tiny flex justify-center mt-2">
            420.2 GB of 500 GB used
          </p>
          <div className="mt-8 space-y-2">
            {storageData.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center justify-between pb-2 ${
                  index !== storageData.length - 1
                    ? "border-b border-line-gray"
                    : ""
                }`}
              >
                <div className="flex items-center">
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
          <BuySection />
        </div>
      </div>
    </main>
  );
};

export default Home;
