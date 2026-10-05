import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "WAM Institute | Online Institute",
  description: "West African Institute of Management online learning portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#e7f0e7] text-[#173d2e] antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}