"use client";

import React, { useState } from "react";
import HubShell from "@/components/HubShell";

export default function VPHub() {
  const [activeTab, setActiveTab] = useState("academic");

  const tabs = [
    { id: "academic", label: "📈 Academic Monitor" },
    { id: "classrooms", label: "🔗 Classroom Resource Audit" },
    { id: "policy", label: "📅 Operations Calendar" },
  ];

  return (
    <HubShell
      hubTitle="Vice President's Hub"
      roleBadge="Academic & Operations"
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {activeTab === "academic" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Faculty Performance Overview</h2>
          <p className="text-xs text-gray-600 mt-2">94% overall course syllabus completion rate across faculties.</p>
        </div>
      )}

      {activeTab === "classrooms" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Google Classroom Utilization</h2>
          <p className="text-xs text-emerald-800 font-bold mt-2">32 Active Virtual Classrooms Linked.</p>
        </div>
      )}

      {activeTab === "policy" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Academic Calendar Schedules</h2>
          <p className="text-xs text-gray-600 mt-2">Current Semester: 2026 First Semester.</p>
        </div>
      )}
    </HubShell>
  );
}