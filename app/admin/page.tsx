"use client";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";
import { FolderOpen, Mail } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <AdminSidebar />

      <div className="ml-72">

        <AdminTopbar />

        <main className="p-8">

          {/* Heading */}

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="text-gray-500 mt-2">
              Welcome to Sai Lalit Admin Panel
            </p>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Total Projects
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  0
                </h3>

              </div>

              <FolderOpen
                size={55}
                className="text-blue-600"
              />

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Total Enquiries
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  0
                </h3>

              </div>

              <Mail
                size={55}
                className="text-green-600"
              />

            </div>

          </div>

          {/* Recent Enquiries */}

          <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">

            <h3 className="text-2xl font-bold mb-6">
              Recent Enquiries
            </h3>

            <div className="text-center text-gray-400 py-20">

              No enquiries received yet.

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}
