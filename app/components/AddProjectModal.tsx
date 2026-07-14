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

        {/* Body */}
        <div className="p-8 space-y-8">

          {/* Project Details */}

          {/* Cover Image */}

          {/* Gallery */}

          {/* Video */}

          {/* Visibility */}

        </div>

        {/* Footer */}
        <div className="border-t p-8 flex justify-between items-center">

          <button
            onClick={onClose}
            className="px-8 py-3 border rounded-xl"
          >
            Cancel
          </button>

          <div className="flex gap-4">

            <button className="px-8 py-3 bg-gray-700 text-white rounded-xl">
              Save as Draft
            </button>

            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl">
              Publish Project
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
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
      Project Category
    </label>

    <select className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600">

      <option>Residential</option>
      <option>Commercial</option>
      <option>Office</option>
      <option>Villa</option>
      <option>Apartment</option>

    </select>

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
      size={46}
      className="text-blue-600 mb-4"
    />

    <h4 className="text-lg font-semibold">
      Upload Project Cover Image
    </h4>

    <p className="text-gray-500 mt-2 text-center">
      Drag & Drop your image here
      <br />
      or click to browse
    </p>

    <p className="text-sm text-gray-400 mt-3">
      JPG, PNG, WEBP • Max Size: 300 KB
    </p>

    <input
      type="file"
      accept="image/*"
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
      size={46}
      className="text-blue-600 mb-4"
    />

    <h4 className="text-lg font-semibold">
      Upload Gallery Images
    </h4>

    <p className="text-gray-500 mt-2 text-center">
      Select multiple images
      <br />
      Maximum 15 images
    </p>

    <p className="text-sm text-gray-400 mt-3">
      JPG, PNG, WEBP • 300 KB each
    </p>

    <input
      type="file"
      accept="image/*"
      multiple
      className="hidden"
    />

  </label>

  {/* Preview Grid */}

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">

    <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
      Image 1
    </div>

    <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
      Image 2
    </div>

    <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
      Image 3
    </div>

    <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
      Image 4
    </div>

    <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
      Image 5
    </div>

  </div>

</div>
{/* ================= Project Video ================= */}

<div>

  <h3 className="text-xl font-bold text-gray-800 mb-5">
    Project Video (Optional)
  </h3>

  <input
    type="url"
    placeholder="https://www.youtube.com/watch?v=xxxxxxxx"
    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
  />

  <p className="text-sm text-gray-500 mt-2">
    Paste the YouTube video link to display it on the project page.
  </p>

</div>

{/* ================= Project Settings ================= */}

<div>

  <h3 className="text-xl font-bold text-gray-800 mb-5">
    Project Settings
  </h3>

  <div className="space-y-6">

    {/* Website Visibility */}

    <div className="border rounded-2xl p-5">

      <h4 className="font-semibold text-gray-800">
        Website Visibility
      </h4>

      <p className="text-sm text-gray-500 mt-1 mb-5">
        Choose whether this project should be visible on the public website.
      </p>

      <div className="flex flex-wrap gap-8">

        <label className="flex items-center gap-2 cursor-pointer">

          <input
            type="radio"
            name="visibility"
            checked={showProject}
            onChange={() => setShowProject(true)}
            className="accent-blue-600"
          />

          <span className="font-medium text-green-600">
            Show Project
          </span>

        </label>

        <label className="flex items-center gap-2 cursor-pointer">

          <input
            type="radio"
            name="visibility"
            checked={!showProject}
            onChange={() => setShowProject(false)}
            className="accent-red-600"
          />

          <span className="font-medium text-red-600">
            Hide Project
          </span>

        </label>

      </div>

    </div>

    {/* Featured Project */}

    <div className="border rounded-2xl p-5 flex items-center justify-between">

      <div>

        <h4 className="font-semibold text-gray-800">
          Featured Project
        </h4>

        <p className="text-sm text-gray-500 mt-1">
          Display this project in the Featured Projects section on the homepage.
        </p>

      </div>

      <input
        type="checkbox"
        className="w-6 h-6 accent-blue-600"
      />

    </div>

  </div>

</div>
{/* ================= Footer ================= */}

<div className="border-t mt-10 p-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 rounded-b-3xl">

  <button
    type="button"
    onClick={onClose}
    className="w-full md:w-auto px-8 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 font-semibold text-gray-700 transition"
  >
    Cancel
  </button>

  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

    <button
      type="button"
      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gray-700 hover:bg-gray-800 text-white font-semibold transition shadow-md"
    >
      Save as Draft
    </button>

    <button
      type="submit"
      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg"
    >
      Publish Project
    </button>

  </div>

</div>

      </div>
    </div>
  );
}







