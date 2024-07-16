import React from "react";
import Title from "../ui/Title";

const ShareWithMe = () => {
  const sharedFiles = [
    {
      id: 1,
      color: "bg-primary-orange",
      name: "Landing Page",
      date: "20.02.2020",
    },
    {
      id: 2,
      color: "bg-primary-orange",
      name: "Illustration Pack",
      date: "20.02.2020",
    },
    {
      id: 3,
      color: "bg-primary-orange",
      name: "CV Design",
      date: "20.02.2020",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="mb-1">
          <Title name="Share with me" />
        </div>
        <a href="#" className="text-xs">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sharedFiles.map((file) => (
          <div
            key={file.id}
            className="p-4 bg-white rounded-lg shadow-sm flex flex-col"
          >
            <div className="flex justify-between items-center mb-2">
              <div className={`w-8 h-6 ${file.color}`}></div>
              <div className="flex">
                <span className="w-6 h-6 border-2 border-primary-green rounded-full"></span>
                <span className="w-6 h-6 border-2 bg-white border-primary-red rounded-full"></span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xs text-gray font-medium">{file.name}</h3>
              <p className="text-tiny text-tertiary-gray">
                Created: {file.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShareWithMe;
