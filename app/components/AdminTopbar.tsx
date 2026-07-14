
"use client";

import { Bell, UserCircle } from "lucide-react";

export default function AdminTopbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="h-20 bg-white shadow-sm border-b flex items-center justify-between px-8 ml-72">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, Admin 👋
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          {today}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <button className="relative">
          <Bell className="text-gray-700" size={24} />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <UserCircle size={42} className="text-blue-600" />

          <div>
            <h3 className="font-semibold text-gray-800">
              Sai Lalit Admin
            </h3>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}
