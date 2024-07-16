import React from "react";
import Title from "../ui/Title";
import Card from "../ui/Card";

const ShareWithMe = () => {
  const sharedFiles = [
    {
      id: 1,
      color: "bg-primary-orange",
      name: "Landing Page",
      date: "20.02.2020",
      hoops: ["border-primary-green", "border-primary-red"],
    },
    {
      id: 2,
      color: "bg-primary-orange",
      name: "Illustration Pack",
      date: "20.02.2020",
      hoops: [
        "border-primary-green",
        "border-primary-red",
        "border-primary-orange",
      ],
    },
    {
      id: 3,
      color: "bg-primary-orange",
      name: "CV Design",
      date: "20.02.2020",
      hoops: ["border-primary-green", "border-primary-orange"],
    },
  ];

  const handleClick = () => {
    console.log("this a link...");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="mb-1">
          <Title name="Share with me" />
        </div>
        <button onClick={handleClick} className="text-xs">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[95%]">
        {sharedFiles.map((file) => (
          <Card id={file.id}>
            <div className="flex items-center mb-2">
              <div className="w-[60%]">
                <div className={`w-8 h-6 ${file.color}`}></div>
              </div>
              <div className="flex items-center relative w-[40%]">
                {file.hoops.map((hoop, index) => (
                  <span
                    className={`w-6 h-6 border-2 ${hoop} rounded-full bg-white absolute`}
                    style={{ left: `${index}rem` }}
                  ></span>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xs text-gray font-medium">{file.name}</h3>
              <p className="text-tiny text-tertiary-gray">
                Created: {file.date}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShareWithMe;
