import React from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export const AccountToggle = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div className="mb-2 mt-2 pb-2">
      <div className="flex items-center justify-between px-2">
        {/* Avatar + Text Button */}
        {!isCollapsed && (
            <button className="flex items-center gap-2 p-1 hover:bg-stone-500 rounded transition-colors">
            <img
                src="https://api.dicebear.com/9.x/avataaars-neutral/svg"
                alt="avatar"
                className="size-8 rounded shrink-0 bg-violet-500"
            />

            {/* Text nur wenn nicht collapsed */}
            
                <div className="text-start">
                <span className="text-sm font-bold block">Gildenname</span>
                <span className="text-xs block text-stone-500">Guild</span>
                </div>
            
            </button>
        )}
        {/* Collapse Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-stone-100 rounded p-3 -ml-1 transition-colors -mb-4 "
        >
          {isCollapsed ? <FiChevronsRight /> : <FiChevronsLeft />}
        </button>
      </div>
    </div>
  );
};
