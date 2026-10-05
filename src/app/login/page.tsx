"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import { db } from "@/lib/firebase";
import { UserRole } from "@/context/AuthContext";
import Link from "next/link";

const userRoles: UserRole[] = [
  "student",
  "staff",
  "president",
  "vp",
  "registrar",
  "dean",
  "finance",
  "ict",
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const routeToHub = (role: UserRole) => {
    switch (role) {
      case "president":
        router.push("/dashboard/president");
        break;
      case "vp":
        router.push("/dashboard/vp");
        break;
      case "registrar":
        router.push("/dashboard/registrar");
        break;
      case "dean":
        router.push("/dashboard/dean");
        break;
      case "finance":
        router.push("/dashboard/finance");
        break;
      case "ict":
        router.push("/dashboard/ict");
        break;
      case "staff":
        router.push("/dashboard/staff");
        break;
      default:
        router.push("/dashboard/student");
        break;
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      const profileSnapshot = await getDoc(doc(db, "users", credentials.user.uid));

      if (!profileSnapshot.exists()) {
        await signOut(auth);
        throw new Error("Your WAM account does not have an assigned role. Contact the institute administrator.");
      }

      const role = profileSnapshot.data().role;
      if (!userRoles.includes(role)) {
        await signOut(auth);
        throw new Error("Your WAM account role is missing or invalid. Contact the institute administrator.");
      }

      routeToHub(role);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#e7f0e7] p-4 sm:p-6">
      <div className="w-full max-w-md border-t-8 border-[#28724f] bg-white p-6 shadow-md sm:p-8">
        <div className="text-center mb-6">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#a7d9a7] text-2xl font-bold text-[#062f24]">
            W
          </div>
          <h2 className="text-2xl font-bold text-[#073d2e]">
            WAM Institute Login
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
            West African Institute of Management
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded text-sm mb-4 border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-bold uppercase text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@wam.edu.ng"
              autoComplete="username"
              required
              className="w-full border border-gray-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#28724f] sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-xs font-bold uppercase text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full border border-gray-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#28724f] sm:text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0b4935] px-4 py-3 text-sm font-bold text-white shadow transition-colors hover:bg-[#28724f]"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs font-semibold text-[#28724f] hover:underline">
            Return to WAM Institute
          </Link>
        </div>
      </div>
    </div>
  );
}