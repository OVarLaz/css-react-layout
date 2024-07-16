import React from "react";
import { ActionVerticalDotsIcon, SquareIcon } from "../ui/Icon";
import Title from "../ui/Title";
import Card from "../ui/Card";

const RecentlyUsed: React.FC = () => {
  const sharedFiles = [
    {
      id: 1,
      name: "Add Project",
      date: "20.02.2020",
      hoops: [1, 2],
    },
    {
      id: 2,
      name: "Project: fitbit",
      date: "28.02.2020",
      hoops: [1, 2],
    },
    {
      id: 3,
      name: "Client Documents",
      date: "04.03.2020",
      hoops: [1, 2, 3, 4, 5],
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="mb-1">
          <Title name="Recently Used" />
        </div>
        <div className="flex">
          <SquareIcon color={"#343951"} />
          <div className="ml-2" />
          <SquareIcon color={"#9D9FAF"} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[95%]">
        {sharedFiles.map((file) => (
          <Card id={file.id}>
            <div className="flex self-end">
              <ActionVerticalDotsIcon />
            </div>
            <div className="flex items-center mb-8">
              <div className="w-[60%] relative flex items-center">
                <div className={`w-8 h-6 bg-tertiary-orange`}></div>
                <div
                  className={`w-8 h-6 bg-primary-orange absolute left-1 bottom-1`}
                ></div>
              </div>
              <div className="flex items-center relative w-[40%]">
                {file.hoops.slice(0, 3).map((hoop, index) => (
                  <span
                    key={index}
                    className={`w-6 h-6 border-2 border-secondary-gray rounded-full bg-white absolute`}
                    style={{ left: `${index}rem` }}
                  ></span>
                ))}
                {file.hoops.length > 3 && (
                  <span
                    className="absolute w-6 h-6 flex items-center justify-center text-sm text-gray text-tiny"
                    style={{ left: `2rem` }}
                  >
                    +{file.hoops.length - 2}
                  </span>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xs text-gray font-medium">{file.name}</h3>
              <p className="text-tiny text-tertiary-gray pt-2">
                Created: {file.date}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentlyUsed;
