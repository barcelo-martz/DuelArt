import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, username, email, password, isArtist } = await req.json();

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { ok: false, message: "Name is required" },
        { status: 400 },
      );
    }
    if (!username || typeof username !== "string" || username.length < 3) {
      return NextResponse.json(
        { ok: false, message: "Username must be at least 3 characters" },
        { status: 400 },
      );
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, message: "Invalid email" },
        { status: 400 },
      );
    }
    if (!password || typeof password !== "string" || password.length < 6) {
      return NextResponse.json(
        { ok: false, message: "Password must be at least 6 characters" },
        { status: 400 },
      );
    }

    // NOTE: Mock implementation - replace with real user creation (database, Supabase, etc.)
    const user = {
      id: Date.now(),
      name,
      username,
      email,
      isArtist: Boolean(isArtist),
    };

    return NextResponse.json({ ok: true, user }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 },
    );
  }
}
