"use client";

import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminTopbar from "../../components/AdminTopbar";

import {
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function ProjectsPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="ml-72">

        <AdminTopbar />

        <main className="p-8">

          {/* Header */}

          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mb-8">

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                Projects
              </h1>

              <p className="text-gray-500 mt-2">
                Manage all your interior & exterior projects.
              </p>

            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold shadow-lg transition"
            >
              <Plus size={20} />
              Add Project
            </button>

          </div>

          {/* Filters */}

          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

            <div className="grid lg:grid-cols-4 gap-4">

              <div className="relative">

                <Search
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search Project..."
                  className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-600"
                />

              </div>

              <select className="border rounded-xl px-4 py-3">

                <option>All Projects</option>

              </select>

              <select className="border rounded-xl px-4 py-3">

                <option>Published</option>

                <option>Hidden</option>

              </select>

              <select className="border rounded-xl px-4 py-3">

                <option>Newest First</option>

                <option>Oldest First</option>

              </select>

            </div>

          </div>

          {/* Table */}

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>

                  <th className="text-left p-5">
                    Cover
                  </th>

                  <th className="text-left p-5">
                    Project
                  </th>

                  <th className="text-left p-5">
                    Location
                  </th>

                  <th className="text-left p-5">
                    Status
                  </th>

                  <th className="text-left p-5">
                    Updated
                  </th>

                  <th className="text-center p-5">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="p-5">

                    <div className="w-24 h-16 rounded-lg bg-gray-200"></div>

                  </td>

                  <td className="p-5 font-semibold">

                    Luxury Villa Interior

                  </td>

                  <td className="p-5">

                    Visakhapatnam

                  </td>

                  <td className="p-5">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">

                      Published

                    </span>

                  </td>

                  <td className="p-5">

                    Today

                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-5">

                      <button className="text-blue-600 hover:text-blue-700">

                        <Eye size={20} />

                      </button>

                      <button className="text-green-600 hover:text-green-700">

                        <Pencil size={20} />

                      </button>

                      <button className="text-red-600 hover:text-red-700">

                        <Trash2 size={20} />

                      </button>

                    </div>

                  </td>

                </tr>

                <tr>

                  <td
                    colSpan={6}
                    className="text-center py-20 text-gray-400"
                  >

                    New projects added by the client will appear here.

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </main>

      </div>

      <AddProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  );
}

