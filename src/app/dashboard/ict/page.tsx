"use client";

import React, { useState } from "react";
import HubShell from "@/components/HubShell";

export default function ICTHub() {
  const [activeTab, setActiveTab] = useState("users");

  const tabs = [
    { id: "users", label: "👥 User & Role Management" },
    { id: "override", label: "⚙ Global Fee & System Overrides" },
    { id: "classrooms", label: "🔗 Classroom Link Audit" },
    { id: "health", label: "🖥 System Logs & Database Health" },
  ];

  return (
    <HubShell
      hubTitle="Super Master ICT Hub"
      roleBadge="System Control & Root Access"
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {activeTab === "users" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-3">
          <h2 className="text-lg font-bold text-[#064e3b]">User Provisioning & Role Assignment</h2>
          <input type="email" placeholder="User Email" className="border p-2 text-xs w-full rounded" />
          <select className="border p-2 text-xs w-full rounded">
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="president">President</option>
            <option value="vp">Vice President</option>
            <option value="registrar">Registrar</option>
            <option value="dean">Academic Dean</option>
            <option value="finance">Director of Finance</option>
            <option value="ict">Super Master ICT</option>
          </select>
          <button className="bg-[#064e3b] text-white px-4 py-2 rounded text-xs font-bold">Assign Role & Provision User</button>
        </div>
      )}

      {activeTab === "override" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Emergency System Overrides</h2>
          <p className="text-xs text-gray-600 mt-2">Manage platform-wide operation parameters.</p>
        </div>
      )}

      {activeTab === "classrooms" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">System-Wide Google Classroom Audit</h2>
          <p className="text-xs text-emerald-800 font-bold mt-2">All classroom URLs active and valid.</p>
        </div>
      )}

      {activeTab === "health" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Firestore Spark Plan Usage Health</h2>
          <p className="text-xs text-gray-700 mt-1">Reads: ~1,200 / 50,000 daily allowance (2.4%)</p>
          <p className="text-xs text-gray-700 mt-1">Writes: ~350 / 20,000 daily allowance (1.75%)</p>
        </div>
      )}
    </HubShell>
  );
}