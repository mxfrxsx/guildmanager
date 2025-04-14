import React from "react";
import { FiDollarSign } from "react-icons/fi";

export const Plan = ({isCollapsed}) => {
  return (
    <>
      {!isCollapsed && 
      <div className="flex sticky flex-col h-16 border-t px-2 py-2 border-stone-500 text-xs bg-sidebar">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-stone-300">Enterprise</p>
            <p className="text-stone-500">Pay as you go</p>
          </div>

          <button className="px-2 py-1.5 font-medium bg-stone-500 hover:bg-stone-300 transition-colors rounded">
            Support
          </button>
        </div>    
      </div>}
      {isCollapsed && 
        <div className="h-16 border-t border-stone-500 bg-sidebar flex items-center justify-center">
        <button className=" flex px-2 py-2 font-medium bg-stone-700 hover:bg-stone-300 transition-colors rounded">
            <FiDollarSign/>
          </button>
        </div>
      }
    </>
  );
};