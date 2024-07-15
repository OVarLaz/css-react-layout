import React from "react";
import { ActionDotsIcon } from "../ui/Icon";

const files = [
  {
    id: 1,
    color: "bg-primary-orange",
    name: "Travel Landing Page",
    members: "5 members",
    date: "Mar 8, 2020",
  },
  {
    id: 2,
    color: "bg-primary-green",
    name: "True Photos",
    members: "12 members",
    date: "Mar 8, 2020",
  },
  {
    id: 3,
    color: "bg-primary-red",
    name: "Dashboard Structure",
    members: "10 members",
    date: "Mar 9, 2020",
  },
  {
    id: 4,
    color: "bg-primary-orange",
    name: "Character Illustration",
    members: "3 members",
    date: "Mar 10, 2020",
  },
];

const RecentFiles = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Files</h2>
        <a href="#" className="text-xs">
          View All
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4 text-xs font-medium text-tertiary-gray mb-2">
        <div>Name</div>
        <div>Members</div>
        <div>Last Modified</div>
      </div>
      {files.map((file) => (
        <div
          key={file.id}
          className="grid grid-cols-3 gap-4 items-center p-4 mb-2 bg-white rounded-lg shadow-sm text-xs"
        >
          <div className="flex items-center">
            <div className={`w-6 h-6 ${file.color} rounded-md mr-2`}></div>
            <span className="text-gray">{file.name}</span>
          </div>
          <div className="text-tertiary-gray">{file.members}</div>
          <div className="flex justify-between items-center">
            <span className="text-tertiary-gray">{file.date}</span>
            <button className="text-gray-400">
              <ActionDotsIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentFiles;
