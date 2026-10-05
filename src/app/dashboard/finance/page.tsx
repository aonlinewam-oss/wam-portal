"use client";

import React, { useState } from "react";
import HubShell from "@/components/HubShell";

export default function FinanceHub() {
  const [activeTab, setActiveTab] = useState("setup");

  const tabs = [
    { id: "setup", label: "💵 Fee Structure Setup" },
    { id: "reconciliation", label: "🏦 Payment Reconciliation" },
    { id: "ledger", label: "📋 Student Financial Ledger" },
    { id: "reports", label: "📈 Revenue Reports" },
  ];

  return (
    <HubShell
      hubTitle="Director of Finance's Hub"
      roleBadge="Bursary & Financial Tracking"
      tabs={tabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {activeTab === "setup" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b] space-y-3">
          <h2 className="text-lg font-bold text-[#064e3b]">Set Up Level/Semester Fees</h2>
          <input type="text" placeholder="Level (e.g. 100, 200, 300)" className="border p-2 text-xs w-full rounded" />
          <input type="number" placeholder="Tuition Fee Amount (₦)" className="border p-2 text-xs w-full rounded" />
          <input type="number" placeholder="Departmental Fee (₦)" className="border p-2 text-xs w-full rounded" />
          <button className="bg-[#064e3b] text-white px-4 py-2 rounded text-xs font-bold">Publish Fee Structure</button>
        </div>
      )}

      {activeTab === "reconciliation" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Bank Payment Reconciliation</h2>
          <p className="text-xs text-gray-600 mt-2">Verify manual or bank teller payments against student accounts.</p>
        </div>
      )}

      {activeTab === "ledger" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Individual Student Fee Ledger</h2>
          <input type="text" placeholder="Search Student Matric Number..." className="border p-2 text-xs w-full rounded mt-2" />
        </div>
      )}

      {activeTab === "reports" && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-[#064e3b]">
          <h2 className="text-lg font-bold text-[#064e3b]">Cleared vs. Uncleared Fee Analysis</h2>
          <p className="text-xs text-emerald-800 font-bold mt-2">Total Collections: ₦185,000,000</p>
        </div>
      )}
    </HubShell>
  );
}