import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
        <p className="kicker">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">This page is not on the map.</h1>
        <Link href="/" className="mt-8 rounded-full bg-ink px-5 py-3 text-sm text-bg">
          Back to the portfolio
        </Link>
      </main>
      <Footer />
    </>
  );
}
