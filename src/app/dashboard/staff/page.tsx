"use client";

import React, { useState } from "react";
import HubShell from "@/components/HubShell";

export default function StaffDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "👤 Lecturer Profile" },
    { id: "courses", label: "📖 Course Allocation" },
    { id: "marks", label: "📝 Mark Submission" },
    { id: "announcements", label: "📣 Department Notices" },
  ];

  return (
    <HubShell
      hubTitle="Staff Portal"
      roleBadge="Lecturer / Staff Access"
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {activeTab === "profile" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-2 text-sm">
          <h2 className="text-xl font-bold text-[#064e3b]">Staff Details</h2>
          <p><strong>Name:</strong> Dr. A. Oke</p>
          <p><strong>Staff ID:</strong> WAM/ST/042</p>
          <p><strong>Department:</strong> Public Sector Governance</p>
        </div>
      )}

      {activeTab === "courses" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-xl font-bold text-[#064e3b] mb-4">Assigned Courses</h2>
          <div className="p-3 border rounded text-xs flex justify-between items-center">
            <div>
              <p className="font-bold">PSG 402 - Public Policy Analysis</p>
              <p className="text-gray-500">Google Classroom attached</p>
            </div>
            <a href="https://classroom.google.com" target="_blank" className="bg-[#064e3b] text-white px-3 py-1 rounded">Open Class</a>
          </div>
        </div>
      )}

      {activeTab === "marks" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-3">
          <h2 className="text-xl font-bold text-[#064e3b]">Score Entry Panel</h2>
          <input type="text" placeholder="Student Matric Number" className="border p-2 text-xs w-full rounded" />
          <input type="number" placeholder="Score (0 - 100)" className="border p-2 text-xs w-full rounded" />
          <button className="bg-[#d97706] text-white px-4 py-2 rounded text-xs font-bold">Submit Mark to Dean</button>
        </div>
      )}

      {activeTab === "announcements" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-xl font-bold text-[#064e3b]">Faculty Notices</h2>
          <p className="text-xs text-gray-600 mt-2">No new faculty notices today.</p>
        </div>
      )}
    </HubShell>
  );
}