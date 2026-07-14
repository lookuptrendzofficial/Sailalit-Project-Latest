
"use client";

import Link from "next/link";
import { LayoutDashboard, FolderOpen, Mail, LogOut } from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="w-72 h-screen bg-white shadow-xl fixed left-0 top-0 border-r">

      {/* Logo */}
      <div className="p-6 border-b">
        <img
          src="https://lookuptrendz.com/wp-content/uploads/2026/07/IMG-20260610-WA01197.jpg"
          alt="Sai Lalit"
          className="h-16 mx-auto"
        />
      </div>

      {/* Menu */}
      <nav className="mt-8 px-4 space-y-3">

        <Link
          href="/admin"
          className="flex items-center gap-4 px-5 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-md"
        >
          <LayoutDashboard size={22} />
          Dashboard
        </Link>

        <Link
          href="/admin/projects"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-gray-100 transition font-medium"
        >
          <FolderOpen size={22} />
          Projects
        </Link>

        <Link
          href="/admin/enquiries"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-gray-100 transition font-medium"
        >
          <Mail size={22} />
          Enquiries
        </Link>

      </nav>

      {/* Logout */}
      <div className="absolute bottom-8 left-4 right-4">

        <button className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}
