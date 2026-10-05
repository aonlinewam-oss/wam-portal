import { NextResponse } from "next/server";
import { getAnnouncements } from "@/lib/db";

export async function GET() {
  try {
    const announcements = await getAnnouncements();
    return NextResponse.json({ success: true, data: announcements });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}