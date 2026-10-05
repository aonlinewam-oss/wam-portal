"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  User,
  signOut as firebaseSignOut,
  updatePassword as firebaseUpdatePassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export type UserRole =
  | "student"
  | "staff"
  | "president"
  | "vp"
  | "registrar"
  | "dean"
  | "finance"
  | "ict";

interface UserProfile {
  uid: string;
  email: string;
  fullName: string;
  role: UserRole;
  department?: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  logout: () => Promise<void>;
  updateUserPassword: (newPassword: string) => Promise<void>;
  setUserRoleSession: (profile: UserProfile) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  logout: async () => {},
  updateUserPassword: async () => {},
  setUserRoleSession: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Fetch profile record from Firestore
        const userDocRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userDocRef);

        if (userSnap.exists()) {
          setProfile(userSnap.data() as UserProfile);
        } else {
          setProfile(null);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await firebaseSignOut(auth);
    setProfile(null);
  };

  const updateUserPassword = async (newPassword: string) => {
    if (auth.currentUser) {
      await firebaseUpdatePassword(auth.currentUser, newPassword);
    } else {
      throw new Error("No authenticated user active to change password.");
    }
  };

  const setUserRoleSession = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        logout,
        updateUserPassword,
        setUserRoleSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);