"use client";

import React from "react";
import { useState } from "react";
import Header from "../(components)/Header";

type UserSettings = {
  label: string;
  value: string | boolean;
  type: "text" | "toggle";
};

const mockSettings: UserSettings[] = [
  { label: "Username", value: "John Doe", type: "text" },
  { label: "Email", value: "john.doe@example.com", type: "text" },
  { label: "Notifications", value: true, type: "toggle" },
  { label: "Dark Mode", value: false, type: "toggle" },
  { label: "Language", value: "English", type: "text" },
];

const Settings = () => {
  const [settings, setSettings] = useState<UserSettings[]>(mockSettings);

  const handleToggleChange = (index: number) => {
    const newSettings = [...settings];
    newSettings[index].value = !newSettings[index].value as boolean;
    setSettings(newSettings);
  };

  return (
    <div className="w-full">
      <Header name="User Settings" />
      <div className="overflow-x-auto mt-5 shadow-md">
        <table className="min-w-full bg-white rounded-full">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Setting
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {settings.map((setting, index) => (
              <tr className="hover:bg-blue-50" key={setting.label}>
                <td className="py-2 px-4 font-semibold text-gray-600">{setting.label}</td>
                <td className="py-2 px-4">
                  {setting.type === "toggle" ? (
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={setting.value as boolean}
                        onChange={() => handleToggleChange(index)}
                      />
                      <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-gray-400 peer-focus:ring-4 
                    transition peer-checked:after:translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
                    after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                    peer-checked:bg-gray-600"
                      ></div>
                    </label>
                  ) : (
                    <input
                      type="text"
                      className="px-4 py-2 border-2 rounded-lg text-gray-500 focus:outline-none focus:border-gray-500"
                      value={setting.value as string}
                      onChange={(e) => {
                        const settingsCopy = [...settings];
                        settingsCopy[index].value = e.target.value;
                        setSettings(settingsCopy);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
