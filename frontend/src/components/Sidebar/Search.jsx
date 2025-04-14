"use client";

import React, { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import { CommandMenu } from "./CommandMenu.jsx";

export const Search = ({isCollapsed}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
    {!isCollapsed && <>
      <div className="bg-sidebarselect mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        
          <input
            onFocus={(e) => {
              e.target.blur();
              setOpen(true);
            }}
            type="text"
            placeholder="Search"
            className="w-full bg-transparent placeholder:text-stone-200 focus:outline-none"
          />

          <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-sidebarselect rounded absolute right-1.5 top-1/2 -translate-y-1/2">
            Strg K
          </span>
        
      </div>

      <CommandMenu open={open} setOpen={setOpen} />
    </>}
    {isCollapsed && <>
      <button className="rounded size-10 m-1 ">
      <FiSearch className="size-5 m-2.5 flex" />
      </button>
    </>}
    </>
  );
};