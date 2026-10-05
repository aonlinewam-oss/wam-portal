"use client";

import React, { useState } from "react";
import HubShell from "@/components/HubShell";

export default function PresidentHub() {
  const [activeTab, setActiveTab] = useState("analytics");

  const tabs = [
    { id: "analytics", label: "📊 Executive Analytics" },
    { id: "broadcast", label: "📢 Global Announcements" },
    { id: "approvals", label: "✅ Executive Approvals" },
  ];

  return (
    <HubShell
      hubTitle="President's Hub"
      roleBadge="Executive Oversight"
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {activeTab === "analytics" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow border-l-4 border-[#064e3b]">
            <span className="text-xs text-gray-500 font-bold uppercase">Total Enrollment</span>
            <p className="text-2xl font-extrabold text-[#064e3b]">1,240 Students</p>
          </div>
          <div className="bg-white p-4 rounded shadow border-l-4 border-[#d97706]">
            <span className="text-xs text-gray-500 font-bold uppercase">Revenue Cleared</span>
            <p className="text-2xl font-extrabold text-[#d97706]">88%</p>
          </div>
          <div className="bg-white p-4 rounded shadow border-l-4 border-[#064e3b]">
            <span className="text-xs text-gray-500 font-bold uppercase">Active Programs</span>
            <p className="text-2xl font-extrabold text-[#064e3b]">12 Catalogues</p>
          </div>
        </div>
      )}

      {activeTab === "broadcast" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-3">
          <h2 className="text-lg font-bold text-[#064e3b]">Broadcast Broadcast Notice</h2>
          <input type="text" placeholder="Notice Title" className="border p-2 text-xs w-full rounded" />
          <textarea placeholder="Notice Body" className="border p-2 text-xs w-full rounded h-24" />
          <button className="bg-[#064e3b] text-white px-4 py-2 rounded text-xs font-bold">Publish Notice</button>
        </div>
      )}

      {activeTab === "approvals" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Pending Policy Sign-Offs</h2>
          <p className="text-xs text-gray-500 mt-2">All academic calendars signed.</p>
        </div>
      )}
    </HubShell>
  );
}