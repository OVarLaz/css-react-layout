import React, { useState } from "react";
import { SquareIcon, PlusIcon, SubtractIcon, PolygonIcon } from "../ui/Icon";

const Sidebar: React.FC = () => {
  const [activeItem] = useState("/home");

  const actions = {
    upload_files: { name: "Upload files", url: "/upload-files" },
    upload_folder: { name: "Upload folder", url: "/upload-folder" },
    new_folder: { name: "New folder", url: "/new-folder" },
    more: { name: "More", url: "/more" },
  };
  const pages = {
    home: { name: "Home", url: "/home" },
    files: { name: " My Files", url: "/my-files" },
    recent: { name: "Recent Files", url: "/recent-files" },
    shared: { name: "Shared Filed", url: "/shared-filed" },
    request: { name: "File Request", url: "/file-request" },
    trash: { name: "Trash", url: "/trash" },
  };

  const currentPage = (url: string) => {
    return url === activeItem ? true : false;
  };

  return (
    <aside className="bg-gray text-white w-64 min-h-screen">
      <div className="py-8 pr-8">
        <div className="bg-custom-gradient w-20 h-5 ml-8 rounded"></div>
        <ul className="pt-8">
          {Object.entries(pages).map(([key, page]) => {
            const active = currentPage(page.url);
            return (
              <div className="relative">
                <div className="absolute -bottom-2">
                  {active ? <SubtractIcon /> : null}
                </div>

                <li key={key} className="pl-8 mb-8 flex items-center">
                  <SquareIcon color={`${active ? "#ffffff" : "#858A9D "}`} />
                  <a
                    href={page.url}
                    className={`ml-2 ${
                      active ? "text-white" : "text-tertiary-gray"
                    }`}
                  >
                    {page.name}
                  </a>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="h-0.5 w-full bg-base-gray"></div>
      <div className="p-8 h-1/2 flex flex-col justify-end">
        <div className="relative mb-8">
          <ul className="bg-base-gray rounded-lg p-4 ">
            {Object.entries(actions).map(([key, action]) => (
              <li key={key} className="mb-2 flex items-center">
                <SquareIcon />
                <a href={action.url} className="ml-2 text-secondary-gray">
                  {action.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative left-4 -top-0">
            <PolygonIcon />
          </div>
        </div>
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
