import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex justify-center mt-5 gap-4">
        <div>
          <Link
            className=" block bg-green-300 hover:bg-green-400 p-4 text-xl rounded text-black"
            href="/sequential"
          >
            Sequential Data Fetching
          </Link>
        </div>
        <div>
          <Link
            className=" block bg-orange-200 hover:bg-orange-300 p-4 text-xl rounded text-black "
            href="/parallel"
          >
            Parallel Data Fetching 
          </Link>
        </div>
        <div>
          <Link
            className=" block bg-orange-300 hover:bg-orange-400 p-4 text-xl rounded text-black "
            href="/parallel-best"
          >
            Parallel Data Fetching - Best
          </Link>
        </div>
      </div>
        {children}</body>
    </html>
  );
}
