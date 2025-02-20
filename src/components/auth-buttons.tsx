
import Link from "next/link";

export const AuthButtons = () => {
  return (
    <div className="flex flex-col">
      <Link
        href="/auth"
        className="block w-full text-left px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/50 transition-all"
      >
        Sign In
      </Link>
      <Link
        href="/auth"
        className="block w-full text-left px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/50 transition-all"
      >
        Sign Up
      </Link>
    </div>
  );
};
