"use client";

import { useState } from "react";
import { X, Upload } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddProjectModal({
  open,
  onClose,
}: Props) {

  const [showProject, setShowProject] = useState(true);

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between p-8 border-b">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">
              Add New Project
            </h2>

            <p className="text-gray-500 mt-2">
              Fill all project information below.
            </p>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100"
          >
            <X size={28} />
          </button>

        </div>

        <div className="p-8 space-y-8">
          {/* ================= Project Details ================= */}

<div>

  <h3 className="text-xl font-bold text-gray-800 mb-5">
    Project Details
  </h3>

  <div className="grid md:grid-cols-2 gap-6">

    <div>

      <label className="block mb-2 font-medium">
        Project Title *
      </label>

      <input
        type="text"
        placeholder="Enter Project Title"
        className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
      />

    </div>

    <div>

      <label className="block mb-2 font-medium">
        Project Location *
      </label>

      <input
        type="text"
        placeholder="Enter Project Location"
        className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
      />

    </div>

  </div>

  <div className="mt-6">

    <label className="block mb-2 font-medium">
      Short Description *
    </label>

    <textarea
      rows={3}
      placeholder="Short description for website..."
      className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
    />

  </div>

  <div className="mt-6">

    <label className="block mb-2 font-medium">
      Detailed Description
    </label>

    <textarea
      rows={6}
      placeholder="Detailed project information..."
      className="w-full border rounded-xl p-4 outline-none focus:border-blue-600"
    />

  </div>

</div>

{/* ================= Project Cover Image ================= */}

<div>

  <h3 className="text-xl font-bold text-gray-800 mb-5">
    Project Cover Image
  </h3>

  <label className="border-2 border-dashed border-blue-300 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition">

    <Upload
      size={42}
      className="text-blue-600 mb-4"
    />

    <h4 className="font-semibold text-lg">
      Upload Project Cover Image
    </h4>

    <p className="text-gray-500 mt-2 text-center">
      JPG, PNG or WEBP
      <br />
      Maximum 300 KB
    </p>

    <input
      type="file"
      className="hidden"
    />

  </label>

</div>
      {/* ================= Gallery Images ================= */}

<div>

  <h3 className="text-xl font-bold text-gray-800 mb-5">
    Gallery Images
  </h3>

  <label className="border-2 border-dashed border-blue-300 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition">

    <Upload
      size={42}
      className="text-blue-600 mb-4"
    />

    <h4 className="font-semibold text-lg">
      Upload Gallery Images
    </h4>

    <p className="text-gray-500 mt-2 text-center">
      Maximum 15 Images
      <br />
      300 KB Each
    </p>

    <input
      type="file"
      multiple
      className="hidden"
    />

  </label>

</div>

{/* ================= Project Video ================= */}

<div>

  <h3 className="text-xl font-bold text-gray-800 mb-5">
    Project Video (Optional)
  </h3>

  <input
    type="text"
    placeholder="Paste YouTube Video Link"
    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
  />

  <p className="text-sm text-gray-500 mt-2">
    Example:
    https://youtu.be/xxxxxxxx
  </p>

</div>

{/* ================= Website Visibility ================= */}

<div>

  <h3 className="text-xl font-bold text-gray-800 mb-5">
    Website Visibility
  </h3>

  <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-5">

    <div>

      <h4 className="font-semibold">
        Show Project on Website
      </h4>

      <p className="text-sm text-gray-500 mt-1">
        Turn OFF to hide this project from the public website.
      </p>

    </div>

    <button
      onClick={() => setShowProject(!showProject)}
      className={`w-16 h-8 rounded-full transition ${
        showProject ? "bg-blue-600" : "bg-gray-300"
      }`}
    >

      <div
        className={`w-7 h-7 bg-white rounded-full mt-0.5 transition ${
          showProject ? "ml-8" : "ml-0.5"
        }`}
      />

    </button>

  </div>

</div>    
             {/* ================= Footer ================= */}

        <div className="border-t mt-10 p-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <button
            onClick={onClose}
            className="px-8 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 font-semibold transition"
          >
            Cancel
          </button>

          <div className="flex gap-4">

            <button
              className="px-8 py-3 rounded-xl bg-gray-700 hover:bg-gray-800 text-white font-semibold transition"
            >
              Save as Draft
            </button>

            <button
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition"
            >
              Publish Project
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}     
          
