import Link from "next/link";
import NavMenu from "./NavMenu";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-[0px_5px_5px_0px_rgba(0,_0,_0,_0.1)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-6">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Skinylabs"
          className="flex items-center gap-1"
        >
          <Image
            src="/logo.svg"
            alt="Skinylabs"
            width={100}
            height={100}
            className="h-9 w-9 object-contain"
          />

          <span className="text-[15px] font-semibold tracking-[-0.025em] text-slate-900">
            skinylabs
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-5 md:flex">
          {/* Language */}
          <button
            type="button"
            className="
              text-[13px]
              font-medium
              text-slate-400
              transition-colors
              duration-200
              hover:text-slate-900
            "
          >
            ID / EN
          </button>

          {/* Sign In */}
          <a
            href="/login"
            className="
              text-[13px]
              font-medium
              text-slate-500
              transition-colors
              duration-200
              hover:text-slate-900
            "
          >
            Sign In
          </a>

          {/* Get Started */}
          <a
            href="/register"
            className="
              rounded-full
              bg-slate-900
              px-4
              py-2
              text-[13px]
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-blue-600
              active:scale-[0.97]
            "
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          aria-label="Open menu"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-900
            md:hidden
          "
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
