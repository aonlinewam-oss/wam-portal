"use client";

import React, { useState } from "react";
import HubShell from "@/components/HubShell";

export default function DeanHub() {
  const [activeTab, setActiveTab] = useState("review");

  const tabs = [
    { id: "review", label: "🔍 Faculty Course Review" },
    { id: "links", label: "🔗 Classroom Verification" },
    { id: "grades", label: "📊 Grade Verification" },
    { id: "standings", label: "🏅 Academic Standings" },
  ];

  return (
    <HubShell
      hubTitle="Academic Dean's Hub"
      roleBadge="Faculty Oversight"
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {activeTab === "review" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Faculty Curriculum Review</h2>
          <p className="text-xs text-gray-600 mt-2">All submitted course syllabi reviewed.</p>
        </div>
      )}

      {activeTab === "links" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Google Classroom Link Check</h2>
          <p className="text-xs text-emerald-800 font-bold mt-2">Verified links for current semester.</p>
        </div>
      )}

      {activeTab === "grades" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Submitted Marks Verification</h2>
          <p className="text-xs text-gray-600 mt-2">Approve scores before publishing to student portals.</p>
        </div>
      )}

      {activeTab === "standings" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Dean's List & Academic Probation</h2>
          <p className="text-xs text-gray-600 mt-2">Academic standings computed.</p>
        </div>
      )}
    </HubShell>
  );
}