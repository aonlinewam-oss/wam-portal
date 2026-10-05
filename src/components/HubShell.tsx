"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface HubShellProps {
  hubTitle: string;
  roleBadge: string;
  tabs: { id: string; label: string }[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  children: React.ReactNode;
}

export default function HubShell({
  hubTitle,
  roleBadge,
  tabs,
  activeTab,
  setActiveTab,
  children,
}: HubShellProps) {
  const { profile, logout, updateUserPassword } = useAuth();
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [pwdStatus, setPwdStatus] = useState("");

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdStatus("Updating...");
    try {
      await updateUserPassword(newPassword);
      setPwdStatus("Password updated successfully!");
      setNewPassword("");
    } catch (err: unknown) {
      setPwdStatus(`Error: ${err instanceof Error ? err.message : "Password update failed."}`);
    }
  };

  const allTabs = [...tabs, { id: "security", label: "🔒 Password & Security" }];

  return (
    <div className="flex min-h-screen flex-col bg-[#e7f0e7] md:flex-row">
      {/* Sidebar */}
      <aside className="flex w-full flex-col border-b-4 border-[#28724f] bg-[#062f24] text-white md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r-4">
        <div className="border-b border-emerald-800 p-4 sm:p-6">
          <div className="w-10 h-10 bg-[#d97706] rounded-full flex items-center justify-center font-bold text-xl text-white mb-2">
            W
          </div>
          <h1 className="font-bold text-lg leading-tight text-[#fef3c7]">{hubTitle}</h1>
          <span className="inline-block mt-2 bg-[#d97706] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
            {roleBadge}
          </span>
        </div>

        {/* User Profile Summary */}
        <div className="border-b border-emerald-800/50 bg-emerald-950/40 p-4 text-xs">
          <p className="font-semibold text-gray-200">{profile?.fullName || "Active User"}</p>
          <p className="text-emerald-300 truncate">{profile?.email || "user@wam.edu.ng"}</p>
          <p className="text-amber-400 mt-1">{profile?.department || "WAM Campus"}</p>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex gap-2 overflow-x-auto p-3 md:flex-1 md:flex-col md:space-y-1 md:overflow-x-hidden md:overflow-y-auto md:p-4">
          {allTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-max shrink-0 whitespace-nowrap rounded px-3 py-2.5 text-left text-xs font-semibold transition-colors md:w-full ${
                activeTab === tab.id
                  ? "bg-[#d97706] text-white shadow"
                  : "text-emerald-100 hover:bg-emerald-800"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer Buttons */}
        <div className="flex items-center gap-3 border-t border-emerald-800 p-3 md:block md:space-y-2 md:p-4">
          <Link
            href="/"
            className="flex-1 py-1 text-center text-xs text-emerald-200 hover:underline md:block"
          >
            ← Back to Main Web Page
          </Link>
          <button
            onClick={handleLogout}
            className="flex-1 rounded bg-red-700 py-2 text-xs font-bold text-white transition-colors hover:bg-red-800 md:w-full"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Workspace Area */}
      <main className="min-w-0 flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
        {activeTab === "security" ? (
          <div className="max-w-md bg-white p-6 rounded-lg shadow border-t-4 border-[#064e3b]">
            <h3 className="text-lg font-bold text-[#064e3b] mb-2">Password Management</h3>
            <p className="text-xs text-gray-600 mb-4">
              Update your account credentials. Changes synchronize automatically with Firebase.
            </p>

            {pwdStatus && (
              <div className="mb-4 p-2 text-xs bg-amber-50 text-amber-800 rounded border border-amber-200">
                {pwdStatus}
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-[#064e3b] outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#064e3b] hover:bg-[#047857] text-white text-xs font-bold py-2 rounded transition-all"
              >
                Update Password in Firebase
              </button>
            </form>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}