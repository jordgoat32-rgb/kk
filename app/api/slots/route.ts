import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();
  const base = new Date(now.getTime() + 24 * 3600 * 1000);
  const hours = ["09:00", "11:00", "13:30", "16:00", "18:00"];
  const slots = hours.map((h) => {
    const d = new Date(base);
    const [HH, MM] = h.split(":");
    d.setHours(+HH, +MM, 0, 0);
    return d.toISOString();
  });
  return NextResponse.json({ slots });
}

