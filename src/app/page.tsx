import Image from "next/image";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-5xl font-bold text-center">
        Welcome to Terraledge
      </h1>
      <Link href='./analytics' className="ml-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        <span className="flex gap-3">
          View Analytics <MoveRightIcon />
      </span>
      </Link>
    </div>
  );
}
