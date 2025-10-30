import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {session?.user ? (
              <Link
                href="/api/auth/signout"
                className="px-4 py-2 rounded-md font-medium transition-colors duration-200
                  text-gray-700 hover:text-indigo-600 hover:bg-gray-100
                  dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-white/10"
              >
                Sign-Out
              </Link>
            ) : (
              <Link
                href="/api/auth/signin"
                className="px-4 py-2 rounded-md font-medium transition-colors duration-200
                  text-gray-700 hover:text-indigo-600 hover:bg-gray-100
                  dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-white/10"
              >
                Sign-In
              </Link>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <TopMenuItem title="Booking" pageRef="/booking" />
            <TopMenuItem title="Venue" pageRef="/venue" />
            <div className="flex items-center rounded-md bg-amber-50/80 dark:bg-white/5 px-3 py-1.5">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}