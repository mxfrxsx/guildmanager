import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiActivity,
  FiArchive,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiCpu,
  FiDollarSign,
  FiHome,
  FiLink,
  FiMonitor,
  FiSettings,
  FiShield,
  FiShoppingBag,
  FiUser,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
import {FaRegHandshake, FaTasks} from "react-icons/fa" 

export const RouteSelect = ({isCollapsed}) => {
const [openSections, setOpenSections] = useState({
  members: false,
});

const toggleSection = (section) => {
  setOpenSections((prev) => ({
    ...prev,
    [section]: !prev[section],
  }));
};

  return (
    <div className="space-y-1">
      {!isCollapsed && <a className="text-xs text-stone-500 px-2 flex mt-2">Guild</a>}
      {isCollapsed && <div className="border-stone-500 border-1 my-2"></div>}
      <RouteLink to={"/Dashboard"} Icon={FiHome} selected={true} title="Dashboard" isCollapsed={isCollapsed} />
      {/*Hauptpunkt Members*/}
      <RouteButton Icon={FiUsers} selected={false} title="Members" isCollapsed={isCollapsed} onClick={() => toggleSection("members")} isExpandable isOpen={openSections.members}/>

      {/* Nur anzeigen wenn offen */}
      {openSections.members && 
        <div className=" border-stone-400 border-1 rounded">
          <RouteLink
            to={"/memberstatistics"}
            Icon={FiUser}
            selected={false}
            title="Member List"
            isCollapsed={isCollapsed}
            isSub
          />
          <RouteLink
            Icon={FiMonitor}
            selected={false}
            title="Statistics"
            isCollapsed={isCollapsed}
            isSub
          />
          <RouteLink
            Icon={FiCalendar}
            selected={false}
            title="Leave of Absence"
            isCollapsed={isCollapsed}
            isSub
          />
        </div>
      }

      <RouteLink Icon={FiActivity} selected={false} title="Activities" isCollapsed={isCollapsed} />
      <RouteLink Icon={FaRegHandshake} selected={false} title="Parties" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiDollarSign} selected={false} title="Loot" isCollapsed={isCollapsed} />
      <RouteLink Icon={FaTasks} selected={false} title="Task" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiUserPlus} selected={false} title="Applications" isCollapsed={isCollapsed} />
      {!isCollapsed && <a className="text-xs text-stone-500 px-2 flex mt-2">Administration</a>}
      {isCollapsed && <div className="border-stone-500 border-1 my-2 mt-5"></div>}
      <RouteLink Icon={FiArchive} selected={false} title="Audit Log" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiCpu} selected={false} title="Rules" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiMonitor} selected={false} title="Insights" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiSettings} selected={false} title="Settings" isCollapsed={isCollapsed} />
      {!isCollapsed && <a className="text-xs text-stone-500 px-2 flex mt-2">Profil</a>}
      {isCollapsed && <div className="border-stone-500 border-1 my-2 mt-5"></div>}
      <RouteLink Icon={FiHome} selected={false} title="Summary" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiShield} selected={false} title="Gear" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiUsers} selected={false} title="Characters" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiUserPlus} selected={false} title="Applications" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiDollarSign} selected={false} title="Personal Calendar" isCollapsed={isCollapsed} />
      <RouteLink Icon={FiShoppingBag} selected={false} title="Trades" isCollapsed={isCollapsed} />
    </div>
  );
};

const RouteButton = ({
  Icon,
  title,
  isCollapsed,
  isSub = false,
  onClick,
  isExpandable = false,
  isOpen = false,
  selected = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start gap-2 w-full rounded px-4 py-1.5 text-sm transition-all
        ${selected ? "bg-sidebarselect shadow" : "hover:bg-sidebarselect"}
        ${isCollapsed && "text-xs"}
      `}
    >
      <Icon
        className={`
          ${selected ? "text-violet-500" : ""}
          ${isCollapsed ? "size-4" : ""}
        `}
      />
      {!isCollapsed && (
        <>
          <span>{title}</span>
          {isExpandable && (
            <span>{isOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
          )}
        </>
      )}
    </button>
  );
};

const RouteLink = ({
  to,
  Icon,
  title,
  isCollapsed,
  isSub = false,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center justify-start gap-2 w-full rounded px-4 py-1.5 text-sm transition-all
        ${isActive ? "bg-sidebarselect shadow text-violet-500" : "hover:bg-sidebarselect"}
        ${isCollapsed ? "text-xs" : ""}
      `}
    >
      <Icon className={`${isCollapsed ? "size-4" : ""}`} />
      {!isCollapsed && <span>{title}</span>}
    </NavLink>
  );
};