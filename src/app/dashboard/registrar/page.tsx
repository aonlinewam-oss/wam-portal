"use client";

import React, { useState } from "react";
import HubShell from "@/components/HubShell";

export default function RegistrarHub() {
  const [activeTab, setActiveTab] = useState("courses");

  const tabs = [
    { id: "courses", label: "📖 Course Setup" },
    { id: "classrooms", label: "🔗 Google Classroom Links" },
    { id: "matriculation", label: "🎓 Student Records" },
    { id: "audit", label: "📜 Academic Audit" },
  ];

  return (
    <HubShell
      hubTitle="Registrar's Hub"
      roleBadge="Records & Courses"
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {activeTab === "courses" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-3">
          <h2 className="text-lg font-bold text-[#064e3b]">Master Course Catalog Setup</h2>
          <input type="text" placeholder="Course Code (e.g., BAM 101)" className="border p-2 text-xs w-full rounded" />
          <input type="text" placeholder="Course Title" className="border p-2 text-xs w-full rounded" />
          <button className="bg-[#064e3b] text-white px-4 py-2 rounded text-xs font-bold">Add Course</button>
        </div>
      )}

      {activeTab === "classrooms" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-3">
          <h2 className="text-lg font-bold text-[#064e3b]">Attach Google Classroom Link</h2>
          <input type="text" placeholder="Select Course Code" className="border p-2 text-xs w-full rounded" />
          <input type="url" placeholder="https://classroom.google.com/c/..." className="border p-2 text-xs w-full rounded" />
          <button className="bg-[#d97706] text-white px-4 py-2 rounded text-xs font-bold">Attach Link</button>
        </div>
      )}

      {activeTab === "matriculation" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Student Registration & Matriculation</h2>
          <p className="text-xs text-gray-600 mt-2">Manage student onboarding and record status.</p>
        </div>
      )}

      {activeTab === "audit" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Transcript Verification & Audit</h2>
          <p className="text-xs text-gray-600 mt-2">Result audit trail operational.</p>
        </div>
      )}
    </HubShell>
  );
}