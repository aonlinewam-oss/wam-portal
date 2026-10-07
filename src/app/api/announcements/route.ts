import { NextResponse } from "next/server";
import { getAnnouncements } from "@/lib/db";

export async function GET() {
  try {
    const announcements = await getAnnouncements();
    return NextResponse.json({ success: true, data: announcements });
  } catch (error: unknown) {
    console.error("Failed to fetch announcements:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load announcements." },
      { status: 500 }
    );
  }
}