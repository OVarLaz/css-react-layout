import React from "react";
import { SquareIcon, PlusIcon } from "./ui/Icon";

const Sidebar: React.FC = () => {
  const actions = {
    upload_files: { name: "Upload files", url: "/upload-files" },
    upload_folder: { name: "Upload folder", url: "/upload-folder" },
    new_folder: { name: "New folder", url: "/new-folder" },
    more: { name: "More", url: "/more" },
  };
  const pages = {
    home: { name: "Home", url: "/" },
    files: { name: " My Files", url: "/my-files" },
    recent: { name: "Recent Files", url: "/recent-files" },
    shared: { name: "Shared Filed", url: "/shared-filed" },
    request: { name: "File Request", url: "/file-request" },
    trash: { name: "Trash", url: "/trash" },
  };

  return (
    <aside className="bg-sidebar text-white w-64 min-h-screen">
      <div className="p-8">
        <div className="bg-custom-gradient w-20 h-5 rounded"></div>
        <ul className="pt-8">
          {Object.entries(pages).map(([key, page]) => (
            <li key={key} className="mb-8 flex items-center">
              <SquareIcon />
              <a href={page.url} className="ml-2 text-white">
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-0.5 w-full bg-base-gray"></div>
      <div className="p-8 h-1/2 flex flex-col justify-end">
        <ul className="bg-base-gray rounded-lg p-4 mb-8">
          {Object.entries(actions).map(([key, action]) => (
            <li key={key} className="mb-2 flex items-center">
              <SquareIcon />
              <a href={action.url} className="ml-2 text-secondary-gray">
                {action.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center w-full h-10 bg-primary-orange rounded">
          <div className="w-[80%] flex justify-center">
            <span>Create New</span>
          </div>
          <div className="w-[20%] flex justify-center">
            <span className="bg-secondary-orange p-3 h-full rounded">
              <PlusIcon />
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
