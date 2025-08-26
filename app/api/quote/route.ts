import { NextResponse } from "next/server";

const catalog: Record<string, number> = {
  "vidange-standard": 8999,
  "freins-avant": 18999,
  "lavage-premium": 4999,
};

export async function POST(req: Request) {
  const { slug } = await req.json();
  const priceCents = catalog[slug as string] ?? 9999;
  return NextResponse.json({ priceCents });
}

