"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import NavMenu from "./NavMenu";

function LanguageToggle() {
  return (
    <button
      type="button"
      aria-label="Change language"
      className="
        inline-flex h-9 items-center rounded-full
        bg-slate-100 p-1
        text-[10px] font-bold tracking-wide
      "
    >
      <span
        className="
          flex h-7 min-w-8 items-center justify-center
          rounded-full bg-white px-2
          text-slate-900 shadow-sm
        "
      >
        ID
      </span>

      <span
        className="
          flex h-7 min-w-8 items-center justify-center
          rounded-full px-2
          text-slate-400
        "
      >
        EN
      </span>
    </button>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  /**
   * Lock body scroll while mobile navigation is open.
   */
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /**
   * Close mobile navigation with Escape.
   */
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          sticky top-0 z-[1000]
          border-b border-slate-200/70
          bg-white/85
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto flex h-[72px] w-full max-w-7xl
            items-center justify-between
            px-5 sm:px-6 lg:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            aria-label="Skinylabs home"
            className="
              group flex shrink-0 items-center gap-2
            "
          >
            <div
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl bg-slate-950
                transition-transform duration-300
                group-hover:rotate-[-6deg]
              "
            >
              <Image
                src="/logo.svg"
                alt="Skinylabs"
                width={24}
                height={24}
                priority
                className="h-6 w-6 object-contain"
              />
            </div>

            <span
              className="
                text-[16px] font-semibold
                tracking-[-0.04em]
                text-slate-950
              "
            >
              skinylabs
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden md:block">
            <NavMenu />
          </div>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />

            <Link
              href="/register"
              className="
                group inline-flex h-10 items-center
                gap-2 rounded-full
                bg-slate-950 px-5
                text-[13px] font-medium text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-slate-800
                active:scale-[0.97]
              "
            >
              <span>Get Started</span>

              <ArrowUpRight
                size={14}
                aria-hidden="true"
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================== */}

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={toggleMenu}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                bg-slate-100 text-slate-800
                transition-all duration-300
                hover:bg-slate-200
                active:scale-90
              "
            >
              {isMenuOpen ? (
                <X size={19} aria-hidden="true" />
              ) : (
                <Menu size={19} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`
          fixed inset-0 z-[900]
          bg-[#FFFDF9]
          md:hidden
          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-4 opacity-0"
          }
        `}
      >
        <div
          className="
            relative flex h-[100dvh] w-full
            flex-col overflow-y-auto
            px-5 pb-6 pt-[96px]
            sm:px-6
          "
        >
          {/* =================================================
              BACKGROUND DECORATION
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -right-24 top-20
              h-52 w-52
              rounded-full
              bg-[#FFDCD5]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -left-28 bottom-24
              h-56 w-56
              rounded-full
              bg-[#DFF2E4]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              right-10 top-[42%]
              h-4 w-4
              rounded-full
              bg-[#D6CCF5]
            "
          />

          {/* =================================================
              TITLE
          ================================================== */}

          <div
            className={`
              relative mb-9 text-center
              transition-all duration-500
              ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }
            `}
          >
            <p
              className="
                text-[11px] font-semibold uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Explore Skinylabs
            </p>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div className="relative flex-1">
            <NavMenu mobile onNavigate={closeMenu} />
          </div>

          {/* =================================================
              CTA
          ================================================== */}

          <div
            className={`
              relative mt-8
              transition-all duration-500
              ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <Link
              href="/register"
              onClick={closeMenu}
              className="
                flex min-h-14 w-full
                items-center justify-center
                rounded-2xl
                bg-slate-950 px-5
                text-sm font-medium text-white
                transition-all duration-300
                hover:-translate-y-0.5
                active:scale-[0.965]
              "
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
