"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { SetisSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`flex items-center cursor-pointer

                ${isActive ? "bg-blue-100 text-white" : ""}

                hover:text-blue-500 hover:bg-gray-100

                ${
                  isCollapsed
                    ? "justify-center py-4 "
                    : "justify-start px-8 py-4"
                }
            `}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={` ${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700 px-3`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

function Sidebar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(SetisSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassname = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : " w-72 md:w-64"
  } h-screen bg-white transition-all duration-300 overflow-hidden z-40  border border-gray-200 `;

  return (
    <div className={sidebarClassname}>
      {/* Top Logo */}
      <div
        className={`flex gap-3 items-center justify-between md:justify-normal pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>logo</div>
        <h1
          className={` font-bold text-2xl ${
            isSidebarCollapsed ? "hidden" : "block"
          } `}
        >
          SneakerX
        </h1>
        <button
          className=" md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-50"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />

        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* Footer */}
      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; 2023 SneakerX
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
