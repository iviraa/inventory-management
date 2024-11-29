"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { SetisDarkMode, SetisSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(SetisSidebarCollapsed(!isSidebarCollapsed));
  };

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(SetisDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7 ">
      {/* Left Side */}
      <div className="flex justify-between items-center gap-5 ">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-50"
          onClick={toggleSidebar}
        >
          <Menu className={`w-4 h-4 `} />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Search for items"
            className="pl-10 py-2 pr-4 w-50 md:w-60 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500"
          />

          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-between items-center gap-5 ">
        <div className=" hidden md:flex justify-between items-center gap-5">
          <div>
            <button
              className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-50"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <Sun size={20} className=" text-gray-500 cursor-pointer" />
              ) : (
                <Moon size={20} className=" text-gray-500 cursor-pointer" />
              )}
            </button>
          </div>
          <div className="relative">
            <Bell size={20} className=" text-gray-500 cursor-pointer" />
            <span className="absolute -top-2 -right-2 items-center justify-center h-4 w-4 text-white text-xs inline-flex bg-red-400 rounded-full">
              2
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 cursor-pointer">
            <Image
              src="https://s3-inventory-management-ivira.s3.us-east-2.amazonaws.com/f9ee39551ef105541d1aecb8bc666844.jpg"
              alt="profile"
              width={50}
              height={50}
              className="object-cover h-full rounded-full"
            />
            <span className="font-semibold">Chetan</span>
          </div>
        </div>
        {/* Settings Button */}
        <Link href="/settings">
          <button className=" bg-gray-100 rounded-full hover:bg-blue-50">
            <Settings size={24} className=" text-gray-500 cursor-pointer" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
