import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email?.toString()?.trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Valid email required" }, { status: 400 });
    }

    // Forward to your mailing list service or Cloudflare worker
    // Ensure we forward a well-formed payload that the worker expects
    const forwardBody = {
      type: "mailing_list",
      email,
      name: email,
      message: "User wants to join mailing list"
    };

    const response = await fetch("https://msg.linuskang.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forwardBody),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });
    }

    // try to read response body for debugging
    let text = "";
    try {
      text = await response.text();
    } catch (e) {
      // ignore
    }

    return NextResponse.json({ message: `Upstream error: ${text || response.status}` }, { status: 502 });
  } catch (error) {
    console.error("Mailing list API error:", error);
    return NextResponse.json({ message: "An error occurred. Please try again." }, { status: 500 });
  }
}
