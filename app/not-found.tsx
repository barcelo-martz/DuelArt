import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-on-surface/70">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="flexitems-center mt-6 gap-5">
        <button>
          <Link
            href="./"
            className="border border-primary text-primary hover:bg-primary/10 py-2 px-4 rounded mt-6"
          >
            Go back
          </Link>
        </button>
        <button className="border border-primary text-primary hover:bg-primary/10 py-2 px-4 rounded mt-6">
          <Link
            href="/"
            className="bg-primary text-on-primary hover:bg-primary/80 py-2 px-4 rounded"
          >
            Go to Home
          </Link>
        </button>
      </div>
    </div>
  );
}
