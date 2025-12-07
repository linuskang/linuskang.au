import { NextResponse } from "next/server";

function randomHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function hexToRgb(hex: string) {
  const cleaned = hex.replace('#','');
  const num = parseInt(cleaned, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const params = url.searchParams;

    const format = (params.get('format') || 'hex').toLowerCase();
    let count = parseInt(params.get('count') || '1', 10);
    if (Number.isNaN(count) || count < 1) count = 1;
    if (count > 10) count = 10; // safety limit

    const colors: string[] = Array.from({ length: count }).map(() => randomHex());

    if (format === 'rgb') {
      const rgbColors = colors.map((c) => hexToRgb(c));
      const body = { format: 'rgb', colors: rgbColors };
      if (count === 1) (body as any).color = rgbColors[0];
      return NextResponse.json(body);
    }

    // default: hex
    const body = { format: 'hex', colors };
    if (count === 1) (body as any).color = colors[0];
    return NextResponse.json(body);
  } catch (err) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
