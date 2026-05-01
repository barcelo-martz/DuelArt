import { NextResponse } from "next/server";
import { devUsers } from "../../../../mocks/devUser";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

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

    // Development-only credential check against `mocks/devUser.ts`.
    const found = devUsers.find(
      (u) => u.email === email && u.password === password,
    );
    if (found) {
      const payload = {
        email: found.email,
        role: found.role,
        username: found.username,
      };
      const maxAge = 60 * 60 * 24 * 30; // 30 days
      const cookie = `duelart_dev_auth=${encodeURIComponent(JSON.stringify(payload))}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}`;

      return NextResponse.json(
        { ok: true, user: payload },
        {
          status: 200,
          headers: {
            "Set-Cookie": cookie,
          },
        },
      );
    }

    return NextResponse.json(
      { ok: false, message: "Invalid credentials" },
      { status: 401 },
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 },
    );
  }
}
