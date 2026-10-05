"use client";

import React, { useState } from "react";
import HubShell from "@/components/HubShell";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "👤 Profile Card" },
    { id: "academic", label: "📚 Academic Summary" },
    { id: "grades", label: "📊 Grade Portal" },
    { id: "fees", label: "💳 Fees Ledger" },
    { id: "noticeboard", label: "📢 Noticeboard" },
  ];

  return (
    <HubShell
      hubTitle="Student Portal"
      roleBadge="Student Access"
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {activeTab === "profile" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-3">
          <h2 className="text-xl font-bold text-[#064e3b]">Student Profile Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div><strong>Full Name:</strong> WAM Student</div>
            <div><strong>Matric Number:</strong> WAM/2026/0101</div>
            <div><strong>Department:</strong> Business Administration</div>
            <div><strong>Current Level:</strong> 300 Level</div>
            <div><strong>Fee Clearance:</strong> <span className="text-emerald-700 font-bold">CLEARED</span></div>
          </div>
        </div>
      )}

      {activeTab === "academic" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-4">
          <h2 className="text-xl font-bold text-[#064e3b]">Active Semester Courses</h2>
          <table className="w-full text-left text-xs">
            <thead className="bg-[#064e3b] text-white">
              <tr>
                <th className="p-2">Code</th>
                <th className="p-2">Course Title</th>
                <th className="p-2">Units</th>
                <th className="p-2">Google Classroom</th>
              </tr>
            </thead>
            <tbody className="divide-y text-gray-700">
              <tr>
                <td className="p-2 font-bold">BAM 301</td>
                <td className="p-2">Strategic Management</td>
                <td className="p-2">3</td>
                <td className="p-2"><a href="https://classroom.google.com" target="_blank" className="text-emerald-700 underline font-semibold">Join Class</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "grades" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-xl font-bold text-[#064e3b] mb-2">Grade Portal & GPA</h2>
          <p className="text-sm text-gray-600">Current CGPA: <strong className="text-emerald-800">4.25 / 5.00</strong></p>
        </div>
      )}

      {activeTab === "fees" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-3">
          <h2 className="text-xl font-bold text-[#064e3b]">Bursary Fee Breakdown</h2>
          <div className="bg-emerald-50 p-4 rounded text-xs text-emerald-900 border border-emerald-200">
            <p><strong>Tuition Fee (2026 Session):</strong> ₦150,000 — <em>PAID</em></p>
            <p><strong>Departmental Levy:</strong> ₦15,000 — <em>PAID</em></p>
            <p className="mt-2 text-sm font-bold text-[#d97706]">Outstanding Balance: ₦0.00</p>
          </div>
        </div>
      )}

      {activeTab === "noticeboard" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-xl font-bold text-[#064e3b] mb-2">Institutional Noticeboard</h2>
          <div className="p-3 bg-amber-50 border-l-4 border-[#d97706] text-xs">
            <span className="font-bold text-[#d97706]">Registrar's Office:</span> End of semester examination timetable has been published.
          </div>
        </div>
      )}
    </HubShell>
  );
}