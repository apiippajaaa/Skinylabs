"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Circle,
  Palette,
  Plus,
  Sparkles,
  Star,
  Shapes,
  Wand2,
} from "lucide-react";

const works = [
  {
    title: "Visual Identity",
    type: "Brand Visual",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=85",
    className: "md:col-span-2 md:row-span-2",
    accent: "#FF6B57",
  },
  {
    title: "Campaign Poster",
    type: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85",
    className: "",
    accent: "#FFD166",
  },
  {
    title: "Packaging",
    type: "Packaging Design",
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1000&q=85",
    className: "",
    accent: "#8FE3C1",
  },
  {
    title: "Digital Visual",
    type: "Social Content",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=85",
    className: "",
    accent: "#B8AEFF",
  },
  {
    title: "Visual Exploration",
    type: "Art Direction",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=85",
    className: "md:col-span-2",
    accent: "#FF9FB2",
  },
];

const services = [
  "Graphic Design",
  "Illustration",
  "Logo & Visual Identity",
  "Social Media Visual",
  "Poster & Campaign",
  "Packaging",
  "Editorial & Layout",
  "Marketing Material",
  "Presentation",
  "Digital Artwork",
  "Merchandise",
  "Print Material",
];

const visualWords = ["GRAPHIC", "ILLUSTRATION", "TYPE", "COLOR", "SHAPE"];

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const floatingTransition = {
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export default function DesignIllustration() {
  return (
    <main className="w-full overflow-hidden">
      {/* ================================================== */}
      {/* HEADER */}
      {/* ================================================== */}

      <header className="flex items-center justify-between pt-4 sm:pt-6">
        <Link
          href="/explore"
          className="group inline-flex min-h-8 items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-slate-950 sm:text-sm"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          <span>Kembali</span>
        </Link>

        <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.16em] text-slate-400 uppercase sm:text-[10px]">
          <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />
          Design & Illustration
        </div>
      </header>

      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="relative pt-12 sm:pt-16 md:pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.7, ease }}
        >
          <div className="relative">
            {/* Small floating palette */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 8,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                type: "spring",
                stiffness: 120,
              }}
              className="absolute right-[3%] top-[-12%] z-10 flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FFD166] text-slate-950 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)] sm:right-[8%] sm:h-16 sm:w-16 sm:rounded-[20px] md:right-[13%] md:h-20 md:w-20"
            >
              <Palette size={22} strokeWidth={1.7} className="sm:h-7 sm:w-7" />
            </motion.div>

            {/* Main heading */}

            <div className="relative">
              <h1 className="max-w-[1100px] text-[clamp(4rem,13vw,9.5rem)] font-semibold leading-[0.78] tracking-[-0.09em]">
                Design
              </h1>

              <div className="relative">
                <h1 className="mt-2 max-w-[1100px] text-[clamp(4rem,13vw,9.5rem)] font-semibold leading-[0.78] tracking-[-0.09em]">
                  & <span className="text-[#FF6B57]">Illustrate.</span>
                </h1>

                {/* Decorative floating shape */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 8, 0],
                  }}
                  transition={floatingTransition}
                  className="absolute -bottom-[20%] right-[13%] h-8 w-8 rounded-full bg-[#8FE3C1] sm:h-12 sm:w-12 md:right-[19%] md:h-14 md:w-14"
                />

                <motion.div
                  animate={{
                    rotate: [0, 12, -8, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-[6%] right-[3%] hidden text-[#B8AEFF] sm:block"
                >
                  <Sparkles size={22} strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Intro */}

          <div className="mt-9 grid gap-6 sm:mt-11 md:mt-14 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-[15px] font-medium leading-7 tracking-[-0.02em] text-slate-600 sm:text-lg sm:leading-8 md:text-xl">
              Dari desain yang rapi sampai ilustrasi yang
              <br className="hidden sm:block" />
              <span className="text-slate-400">
                punya karakter. Kita bikin visual yang terasa hidup.
              </span>
            </p>

            <div className="flex items-center gap-3 md:justify-end">
              <span className="h-px w-7 bg-slate-300 sm:w-10" />

              <span className="text-[8px] tracking-[0.16em] text-slate-400 uppercase sm:text-[9px]">
                Design / Illustration / Visual
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================================================== */}
      {/* HERO VISUAL */}
      {/* ================================================== */}

      <section className="mt-10 sm:mt-12 md:mt-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease,
          }}
          className="relative min-h-[380px] overflow-hidden rounded-[28px] bg-[#F0EDFF] sm:min-h-[460px] sm:rounded-[34px] md:min-h-[540px]"
        >
          {/* Subtle grid */}

          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Decorative blobs */}

          <motion.div
            animate={{
              rotate: [0, 6, 0],
              scale: [1, 1.04, 1],
            }}
            transition={floatingTransition}
            className="absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[#FF9FB2] sm:h-80 sm:w-80"
          />

          <motion.div
            animate={{
              rotate: [18, 25, 18],
              y: [0, 7, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-24 -right-12 h-64 w-64 rounded-[60px] bg-[#FFD166] sm:h-80 sm:w-80"
          />

          <motion.div
            animate={{
              x: [0, 8, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[8%] top-[10%] hidden h-24 w-24 rounded-[28px] bg-[#8FE3C1] sm:block md:h-32 md:w-32"
          />

          {/* Central creative composition */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: -5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -3,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              type: "spring",
              stiffness: 90,
            }}
            whileHover={{
              rotate: 0,
              scale: 1.025,
            }}
            className="absolute left-1/2 top-1/2 h-[260px] w-[205px] -translate-x-1/2 -translate-y-1/2 bg-[#FF6B57] p-3 shadow-[0_35px_80px_-25px_rgba(15,23,42,0.4)] sm:h-[340px] sm:w-[265px] sm:p-4 md:h-[410px] md:w-[315px] md:p-5"
          >
            <div className="flex h-full flex-col justify-between border border-white/40 p-3 sm:p-4">
              <div className="flex items-center justify-between text-white">
                <span className="font-mono text-[7px] tracking-[0.2em] sm:text-[8px]">
                  SKINYLABS
                </span>

                <Circle size={8} fill="currentColor" />
              </div>

              <div>
                <p className="text-[40px] font-black leading-[0.72] tracking-[-0.09em] text-white sm:text-[54px] md:text-[66px]">
                  MAKE
                  <br />
                  IT
                  <br />
                  YOURS
                </p>

                <div className="mt-4 h-1 w-12 bg-white sm:mt-5 sm:w-16" />

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["TYPE", "FORM", "COLOR"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/40 px-2 py-1 font-mono text-[6px] tracking-widest text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-between text-white">
                <span className="max-w-[100px] text-[7px] leading-3 opacity-70 sm:text-[8px]">
                  ideas need a visual language.
                </span>

                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* Floating sticker */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [5, 10, 5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[6%] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950 text-white shadow-xl sm:left-[10%] sm:h-16 sm:w-16 md:left-[12%] md:h-20 md:w-20"
          >
            <Sparkles size={19} strokeWidth={1.5} className="sm:h-6 sm:w-6" />
          </motion.div>

          <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[8px] font-semibold tracking-wide text-slate-500 shadow-sm sm:bottom-6 sm:left-6 sm:px-4 sm:py-2 sm:text-[9px]">
            DRAW / DESIGN / PLAY
          </div>

          <div className="absolute right-4 top-4 flex rotate-6 items-center gap-2 rounded-full bg-white px-3 py-2 text-[8px] font-semibold text-slate-600 shadow-sm sm:right-6 sm:top-6 sm:px-4">
            <Wand2 size={12} />
            MAKE IT YOURS
          </div>
        </motion.div>
      </section>

      {/* ================================================== */}
      {/* WHAT WE DO */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-80px",
        }}
        variants={reveal}
        transition={{
          duration: 0.6,
          ease,
        }}
        className="py-16 sm:py-20 md:py-28"
      >
        <div className="grid gap-8 md:grid-cols-[0.6fr_1.4fr] md:gap-14">
          <div>
            <span className="text-[9px] font-semibold tracking-[0.16em] text-[#FF6B57] uppercase">
              Yang kami buat
            </span>

            <h2 className="mt-2 max-w-sm text-2xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-3xl md:text-4xl">
              Visual yang bisa punya banyak bentuk.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Dari desain grafis sampai ilustrasi custom, kami membantu mengubah
              ide menjadi visual yang{" "}
              <span className="font-medium text-slate-950">
                jelas, menarik, dan punya karakter.
              </span>
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              Bisa untuk satu kebutuhan kecil, satu campaign, atau visual system
              yang dipakai di banyak media.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Graphic",
                "Illustration",
                "Typography",
                "Color",
                "Artwork",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.35,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className={[
                    "rounded-full px-3 py-1.5 text-[10px] font-medium",
                    index === 0
                      ? "bg-[#FFE0E6] text-[#E4576A]"
                      : index === 1
                      ? "bg-[#FFF0C7] text-[#9A7510]"
                      : index === 2
                      ? "bg-[#E2F8EE] text-[#328E6E]"
                      : index === 3
                      ? "bg-[#E9E6FF] text-[#655AC5]"
                      : "bg-[#EAF2FF] text-[#3B72B5]",
                  ].join(" ")}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* DESIGN VS ILLUSTRATION */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-80px",
        }}
        variants={reveal}
        transition={{
          duration: 0.6,
          ease,
        }}
      >
        <div className="mb-6 sm:mb-8">
          <span className="text-[9px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
            Dua dunia, satu visual
          </span>

          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.055em] sm:text-3xl">
            Rapi atau ekspresif?
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* DESIGN */}

          <motion.div
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative overflow-hidden rounded-[26px] bg-[#F3F3F0] p-5 sm:rounded-[30px] sm:p-7 md:p-8"
          >
            <div className="mb-7 flex items-center justify-between">
              <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-medium text-slate-500 shadow-sm">
                DESIGN
              </span>

              <Palette size={17} className="text-slate-300" />
            </div>

            <div className="relative h-[210px] overflow-hidden rounded-[20px] bg-white p-5 sm:h-[260px]">
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-[#FFD166]" />

              <div className="absolute bottom-[-25px] left-[-15px] h-32 w-32 rotate-12 rounded-[28px] bg-[#FF6B57]" />

              <div className="relative z-10">
                <span className="font-mono text-[8px] tracking-[0.2em] text-slate-400">
                  VISUAL SYSTEM
                </span>

                <h3 className="mt-9 text-4xl font-black leading-[0.78] tracking-[-0.08em] text-slate-950 sm:text-5xl">
                  CLEAR
                  <br />& SIMPLE
                </h3>

                <div className="mt-5 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8FE3C1]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#B8AEFF]" />
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-xs leading-6 text-slate-400">
              Untuk visual yang membutuhkan struktur, konsistensi, dan pesan
              yang mudah dipahami.
            </p>
          </motion.div>

          {/* ILLUSTRATION */}

          <motion.div
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative overflow-hidden rounded-[26px] bg-[#EDE8FF] p-5 sm:rounded-[30px] sm:p-7 md:p-8"
          >
            <div className="mb-7 flex items-center justify-between">
              <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-medium text-[#655AC5] shadow-sm">
                ILLUSTRATION
              </span>

              <Shapes size={17} className="text-[#8B83D9]" />
            </div>

            <div className="relative h-[210px] overflow-hidden rounded-[20px] bg-[#FFF3D8] sm:h-[260px]">
              <motion.div
                animate={{
                  rotate: [0, 5, 0],
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[12%] top-[16%] h-20 w-20 rounded-[35%_65%_60%_40%] bg-[#FF6B57]"
              />

              <motion.div
                animate={{
                  rotate: [0, -6, 0],
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[15%] top-[22%] h-24 w-24 rounded-full bg-[#8FE3C1]"
              />

              <div className="absolute bottom-[-18px] left-[35%] h-32 w-32 rotate-12 rounded-[45%_55%_35%_65%] bg-[#B8AEFF]" />

              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="rotate-[-4deg] rounded-[24px] bg-white px-6 py-5 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.3)]">
                  <div className="text-center">
                    <span className="text-[8px] font-semibold tracking-[0.2em] text-slate-400">
                      DRAW YOUR IDEA
                    </span>

                    <div className="mt-2 text-3xl font-black tracking-[-0.08em] text-slate-950">
                      PLAY!
                    </div>

                    <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[#FF6B57]" />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-xs leading-6 text-slate-500">
              Untuk karakter, artwork, visual storytelling, dan ide yang ingin
              tampil lebih ekspresif.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* VISUAL WORDS */}
      {/* ================================================== */}

      <section className="py-16 sm:py-20 md:py-24">
        <div className="relative overflow-hidden rounded-[28px] bg-slate-950 px-5 py-10 sm:rounded-[34px] sm:px-8 sm:py-14 md:px-12">
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.16em] text-white/40 uppercase">
                Visual language
              </span>

              <Sparkles
                size={18}
                strokeWidth={1.5}
                className="text-[#FFD166]"
              />
            </div>

            <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
              {visualWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                    ease,
                  }}
                  whileHover={{
                    y: -4,
                    rotate: index % 2 === 0 ? -2 : 2,
                  }}
                  className={[
                    "text-[clamp(2rem,7vw,6rem)] font-black leading-[0.85] tracking-[-0.08em]",
                    index === 0
                      ? "text-[#FF6B57]"
                      : index === 1
                      ? "text-[#FFD166]"
                      : index === 2
                      ? "text-white"
                      : index === 3
                      ? "text-[#8FE3C1]"
                      : "text-[#B8AEFF]",
                  ].join(" ")}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <p className="mt-8 max-w-md text-xs leading-6 text-white/45 sm:text-sm">
              Setiap project punya kebutuhan yang berbeda. Style-nya bisa
              playful, clean, bold, minimal, atau dibuat dari nol.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* GALLERY */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-80px",
        }}
        variants={reveal}
        transition={{
          duration: 0.6,
          ease,
        }}
        className="pb-16 sm:pb-20 md:pb-28"
      >
        <div className="mb-7 flex items-end justify-between sm:mb-9">
          <div>
            <span className="text-[9px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
              Yang bisa dibuat
            </span>

            <h2 className="mt-2 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.055em] sm:text-3xl md:text-4xl">
              Satu tempat untuk banyak bentuk visual.
            </h2>
          </div>

          <motion.div
            animate={{
              rotate: [0, 10, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-1 hidden sm:block"
          >
            <Sparkles size={22} strokeWidth={1.5} className="text-[#FF6B57]" />
          </motion.div>
        </div>

        <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:gap-4 md:auto-rows-[190px] md:grid-cols-4 lg:auto-rows-[220px]">
          {works.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{
                opacity: 0,
                y: 25,
                rotate: index % 2 === 0 ? -1 : 1,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
                ease,
              }}
              whileHover={{
                y: -5,
              }}
              className={`group relative overflow-hidden rounded-[22px] bg-slate-200 sm:rounded-[26px] ${work.className}`}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-90" />

              <div
                className="absolute left-4 top-4 h-2.5 w-2.5 rounded-full sm:left-5 sm:top-5"
                style={{
                  backgroundColor: work.accent,
                }}
              />

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white sm:inset-x-5 sm:bottom-5">
                <div className="min-w-0">
                  <span className="text-[8px] tracking-[0.14em] text-white/60 uppercase">
                    {work.type}
                  </span>

                  <h3 className="mt-1 truncate text-sm font-semibold tracking-[-0.02em] sm:text-base">
                    {work.title}
                  </h3>
                </div>

                <motion.span
                  whileHover={{
                    rotate: 45,
                  }}
                  className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md"
                >
                  <ArrowUpRight size={14} />
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* SERVICES */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-80px",
        }}
        variants={reveal}
        transition={{
          duration: 0.6,
          ease,
        }}
      >
        <div className="relative overflow-hidden rounded-[28px] bg-[#FFF0C7] p-5 sm:rounded-[34px] sm:p-8 md:p-10">
          <motion.div
            animate={{
              rotate: [0, 8, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#FF9FB2] sm:h-52 sm:w-52"
          />

          <div className="relative z-10 grid gap-9 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
            <div>
              <span className="text-[9px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                Yang bisa kami kerjakan
              </span>

              <h2 className="mt-2 max-w-md text-2xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-3xl md:text-4xl">
                Dari satu desain sampai satu visual system.
              </h2>

              <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500 sm:text-sm">
                Pilih satu kebutuhan, atau gabungkan beberapa kebutuhan
                sekaligus sesuai project-mu.
              </p>

              <div className="mt-7 flex h-11 w-11 rotate-[-6deg] items-center justify-center rounded-[14px] bg-white shadow-sm">
                <Shapes size={19} strokeWidth={1.6} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.035,
                    duration: 0.3,
                  }}
                  whileHover={{
                    x: 4,
                  }}
                  className="group flex items-center gap-3 border-b border-slate-900/10 py-3"
                >
                  <span className="font-mono text-[8px] text-slate-300 transition-colors group-hover:text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[11px] font-medium text-slate-700 sm:text-xs">
                    {service}
                  </span>

                  <ArrowUpRight
                    size={12}
                    className="ml-auto opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-50"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* CLOSING */}
      {/* ================================================== */}

      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          ease,
        }}
        className="py-16 text-center sm:py-20 md:py-28"
      >
        <div className="mx-auto max-w-2xl">
          <motion.div
            animate={{
              rotate: [-6, 4, -6],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#B8AEFF]"
          >
            <Star size={17} fill="currentColor" />
          </motion.div>

          <h2 className="text-2xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-3xl md:text-4xl">
            Visual yang baik bukan cuma
            <br />
            <span className="text-slate-300">terlihat bagus.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-slate-400">
            Ia punya karakter, menyampaikan sesuatu, dan terasa seperti milikmu.
          </p>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* CTA */}
      {/* ================================================== */}

      <motion.section
        initial={{
          opacity: 0,
          scale: 0.98,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
        className="pb-8 sm:pb-12"
      >
        <div className="relative overflow-hidden rounded-[28px] bg-[#8FE3C1] px-5 py-9 sm:rounded-[34px] sm:px-8 sm:py-11 md:px-12 md:py-14 lg:px-14">
          <motion.div
            animate={{
              rotate: [0, 8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#FFD166] sm:h-56 sm:w-56"
          />

          <motion.div
            animate={{
              x: [0, 8, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-10 left-[35%] h-24 w-24 rounded-[28px] bg-[#FF9FB2] sm:h-32 sm:w-32"
          />

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <Plus size={15} />
                </span>

                <span className="text-[9px] font-medium tracking-[0.15em] text-slate-500 uppercase">
                  Mulai dari ide
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-4xl md:text-5xl">
                Punya sesuatu
                <br />
                yang ingin dibuat?
              </h2>

              <p className="mt-4 max-w-md text-xs leading-6 text-slate-600 sm:text-sm">
                Ceritakan idemu. Kita cari bentuk visual yang paling pas.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-5 py-3.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_-18px_rgba(15,23,42,0.6)] sm:w-fit sm:px-6 sm:py-4 sm:text-sm"
            >
              Ceritakan idemu
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
