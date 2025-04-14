import React from "react";
import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";
import { RouteSelect } from "./RouteSelect";
import { Plan } from "./Plan";



const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const sidebarWidth = isCollapsed ? "w-12" : "w-60";
  
  return (
    <div className={`bg-sidebar text-stone-300 transition-all duration-200 ${sidebarWidth} flex flex-col`}>
        <AccountToggle isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <div className=" overflow-y-auto no-scrollbar sticky h-[calc(120vh)] ">  
        
            <Search isCollapsed={isCollapsed} />
            <RouteSelect isCollapsed={isCollapsed}/>
        </div>
        <Plan isCollapsed={isCollapsed}/>
    </div>
  );
};

export default Sidebar;
