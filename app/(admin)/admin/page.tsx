import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Admin() {
  const cookieStore = cookies();
  const auth = (await cookieStore).get("duelart_dev_auth")?.value;
  if (!auth) redirect("/login");

  let payload: { email?: string; role?: string; username?: string } | null =
    null;
  try {
    payload = JSON.parse(decodeURIComponent(auth));
  } catch (e) {
    redirect("/login");
  }

  if (!payload || payload.role !== "admin") redirect("/login");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
      <p className="text-lg text-on-surface/70">Welcome to the admin panel!</p>
    </div>
  );
}
