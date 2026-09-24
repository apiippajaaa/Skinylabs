"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Component,
  Layers3,
  MousePointer2,
  Palette,
  Plus,
  Sparkles,
  Star,
  Wand2,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const services = [
  "Website UI",
  "Landing page",
  "Dashboard",
  "Mobile app",
  "Design system",
  "Component library",
  "UX flow",
  "Wireframe",
  "Prototype",
  "Redesign",
  "Responsive interface",
  "Interaction design",
];

const screens = [
  {
    title: "Dashboard",
    type: "Web Interface",
    accent: "#B8AEFF",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Mobile App",
    type: "Product UI",
    accent: "#FF9FB2",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Landing Page",
    type: "Marketing UI",
    accent: "#FFD166",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
  },
];

const process = [
  {
    number: "01",
    title: "Pahami",
    text: "Cari tahu kebutuhan, pengguna, dan tujuan.",
    icon: MousePointer2,
    bg: "#EEEAFE",
    iconBg: "#B8AEFF",
  },
  {
    number: "02",
    title: "Susun",
    text: "Rancang struktur dan alur yang masuk akal.",
    icon: Layers3,
    bg: "#E2F8EE",
    iconBg: "#8FE3C1",
  },
  {
    number: "03",
    title: "Bentuk",
    text: "Ubah struktur menjadi interface yang punya karakter.",
    icon: Component,
    bg: "#FFF3D2",
    iconBg: "#FFD166",
  },
  {
    number: "04",
    title: "Uji",
    text: "Rapikan detail berdasarkan interaksi dan feedback.",
    icon: Check,
    bg: "#FFE0E6",
    iconBg: "#FF9FB2",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   HELPERS
========================================================= */

function SectionLabel({
  children,
  accent = "text-slate-400",
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <span
      className={`text-[9px] font-semibold uppercase tracking-[0.16em] ${accent}`}
    >
      {children}
    </span>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function UIUXPage() {
  const reducedMotion = useReducedMotion();

  const floatAnimation = reducedMotion
    ? undefined
    : {
        y: [0, -8, 0],
        rotate: [0, 4, 0],
      };

  return (
    <main className="w-full overflow-hidden text-slate-950">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="flex items-center justify-between pt-4 sm:pt-6">
        <Link
          href="/explore"
          className="group inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors duration-300 hover:text-slate-950 sm:text-sm"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          <span>Kembali</span>
        </Link>

        <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[10px]">
          <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
          UI / UX Design
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative pt-14 sm:pt-18 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Small floating artifact */}

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 8,
            }}
            transition={{
              delay: 0.25,
              duration: 0.7,
              type: "spring",
            }}
            className="absolute right-[3%] top-0 z-20 flex h-12 w-12 items-center justify-center rounded-[17px] bg-[#B8AEFF] shadow-[0_20px_45px_-20px_rgba(15,23,42,0.4)] sm:right-[7%] sm:h-16 sm:w-16 md:right-[13%] md:h-20 md:w-20"
          >
            <MousePointer2
              size={23}
              strokeWidth={1.6}
              className="sm:h-7 sm:w-7"
            />
          </motion.div>

          {/* Main title */}

          <div className="relative">
            <h1 className="max-w-[1200px] text-[clamp(4rem,14vw,10.5rem)] font-semibold leading-[0.76] tracking-[-0.1em]">
              UI / UX
            </h1>

            <div className="relative">
              <h1 className="mt-2 text-[clamp(4rem,14vw,10.5rem)] font-semibold leading-[0.76] tracking-[-0.1em]">
                Design<span className="text-[#6C63FF]">.</span>
              </h1>

              {/* Yellow dot */}

              <motion.div
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                        rotate: [0, 8, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-[17%] right-[12%] h-7 w-7 rounded-full bg-[#FFD166] sm:h-11 sm:w-11 md:right-[19%] md:h-14 md:w-14"
              />

              {/* Spark */}

              <motion.div
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        rotate: [0, 12, -8, 0],
                        scale: [1, 1.08, 1],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-[5%] right-[2%] hidden text-[#35BFA4] sm:block"
              >
                <Sparkles size={23} strokeWidth={1.4} />
              </motion.div>
            </div>
          </div>

          {/* Hero copy */}

          <div className="mt-12 grid gap-7 sm:mt-14 md:mt-16 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-[15px] font-medium leading-7 tracking-[-0.02em] text-slate-600 sm:text-lg sm:leading-8 md:text-xl">
              Tampilan yang enak dilihat itu bagus.
              <br className="hidden sm:block" />
              <span className="text-slate-400">
                Tapi yang enak digunakan, jauh lebih berarti.
              </span>
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-slate-300" />

              <span className="text-[8px] uppercase tracking-[0.17em] text-slate-400 sm:text-[9px]">
                Idea / Interface / Experience
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          CREATIVE PLAYGROUND
      ===================================================== */}

      <section className="mt-12 sm:mt-16 md:mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          className="relative min-h-[530px] overflow-hidden rounded-[30px] bg-[#EAE8FF] sm:min-h-[620px] sm:rounded-[38px] md:min-h-[700px]"
        >
          {/* Grid */}

          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Pink organic shape */}

          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    rotate: [0, 8, 0],
                    scale: [1, 1.05, 1],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-24 top-[-10%] h-64 w-64 rounded-full bg-[#FF9FB2] sm:h-80 sm:w-80 md:h-[420px] md:w-[420px]"
          />

          {/* Yellow shape */}

          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    rotate: [12, 20, 12],
                    y: [0, 10, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-[12%] -right-[7%] h-64 w-64 rounded-[70px] bg-[#FFD166] sm:h-80 sm:w-80 md:h-[400px] md:w-[400px]"
          />

          {/* Green artifact */}

          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    x: [0, 10, 0],
                    y: [0, -8, 0],
                    rotate: [0, 7, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[7%] top-[9%] hidden h-20 w-20 rounded-[25px] bg-[#8FE3C1] sm:block md:h-28 md:w-28"
          />

          {/* =================================================
              REAL IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -5 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease,
            }}
            className="absolute bottom-[9%] left-[4%] z-10 hidden w-[190px] overflow-hidden rounded-[22px] border-[7px] border-white shadow-[0_25px_60px_-25px_rgba(15,23,42,0.4)] sm:block md:left-[7%] md:w-[250px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85"
                alt="Creative interface design"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-slate-700 backdrop-blur">
                Visual direction
              </div>
            </div>
          </motion.div>

          {/* =================================================
              MAIN BROWSER
          ================================================= */}

          <motion.div
            initial={{ y: 45, rotate: 2, opacity: 0 }}
            animate={{ y: 0, rotate: -1.5, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.9,
              type: "spring",
              stiffness: 90,
            }}
            whileHover={{
              rotate: 0,
              scale: 1.012,
            }}
            className="absolute left-1/2 top-1/2 z-20 w-[calc(100%-32px)] max-w-[650px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] bg-white shadow-[0_40px_100px_-35px_rgba(15,23,42,0.45)] sm:w-[calc(100%-150px)] sm:rounded-[28px]"
          >
            {/* Browser top */}

            <div className="flex h-10 items-center gap-1.5 border-b border-slate-100 px-3 sm:h-12 sm:px-4">
              <span className="h-2 w-2 rounded-full bg-[#FF9FB2]" />
              <span className="h-2 w-2 rounded-full bg-[#FFD166]" />
              <span className="h-2 w-2 rounded-full bg-[#8FE3C1]" />

              <div className="ml-3 flex h-5 flex-1 items-center rounded-full bg-slate-50 px-3 sm:h-6">
                <span className="text-[6px] text-slate-300 sm:text-[7px]">
                  skinylabs.com / experience
                </span>
              </div>
            </div>

            {/* Interface */}

            <div className="grid min-h-[310px] grid-cols-[68px_1fr] sm:min-h-[390px] sm:grid-cols-[110px_1fr]">
              {/* Sidebar */}

              <div className="border-r border-slate-100 bg-[#FAFAFC] p-3 sm:p-4">
                <div className="mb-7 flex items-center gap-2 sm:mb-10">
                  <span className="h-5 w-5 rounded-md bg-[#6C63FF]" />

                  <span className="hidden text-[7px] font-bold tracking-tight text-slate-700 sm:block">
                    STUDIO
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    { active: true, width: "w-full" },
                    { active: false, width: "w-[75%]" },
                    { active: false, width: "w-[88%]" },
                    { active: false, width: "w-[65%]" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex h-7 items-center rounded-lg px-2 ${
                        item.active ? "bg-[#EEEAFE]" : ""
                      }`}
                    >
                      <span
                        className={`h-1.5 rounded-full ${
                          item.active ? "bg-[#6C63FF]" : "bg-slate-200"
                        } ${item.width}`}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-8 hidden rounded-xl bg-[#E2F8EE] p-2.5 sm:block">
                  <div className="h-1.5 w-8 rounded-full bg-[#35BFA4]" />
                  <div className="mt-2 h-1 w-12 rounded-full bg-white" />
                  <div className="mt-1 h-1 w-8 rounded-full bg-white" />
                </div>
              </div>

              {/* Main */}

              <div className="p-4 sm:p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[6px] font-medium uppercase tracking-[0.15em] text-slate-400 sm:text-[7px]">
                      Overview
                    </span>

                    <div className="mt-1 h-4 w-24 rounded bg-slate-900 sm:h-5 sm:w-36" />
                  </div>

                  <div className="h-7 w-7 rounded-full bg-[#FFD166] sm:h-9 sm:w-9" />
                </div>

                {/* Metrics */}

                <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
                  {[
                    ["24", "Projects", "#EEEAFE"],
                    ["18", "Clients", "#E2F8EE"],
                    ["92%", "Growth", "#FFF3D2"],
                  ].map(([number, label, color]) => (
                    <div
                      key={label}
                      className="rounded-[12px] p-2.5 sm:rounded-[14px] sm:p-3"
                      style={{ backgroundColor: color }}
                    >
                      <div className="text-sm font-bold tracking-[-0.05em] sm:text-xl">
                        {number}
                      </div>

                      <div className="mt-1 text-[6px] text-slate-400 sm:text-[7px]">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}

                <div className="mt-3 rounded-[13px] border border-slate-100 p-3 sm:mt-4 sm:p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-medium text-slate-500">
                      Aktivitas
                    </span>

                    <span className="text-[6px] text-slate-300">
                      7 hari terakhir
                    </span>
                  </div>

                  <div className="mt-4 flex h-20 items-end gap-1.5 sm:h-28 sm:gap-2">
                    {[35, 52, 42, 68, 48, 78, 62, 88].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          delay: 0.6 + index * 0.05,
                          duration: 0.45,
                          ease,
                        }}
                        className={`flex-1 rounded-t-[4px] ${
                          index === 7 ? "bg-[#6C63FF]" : "bg-[#DDD9FF]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom interface */}

                <div className="mt-3 flex gap-2">
                  <div className="h-3 flex-1 rounded-full bg-slate-100" />
                  <div className="h-3 w-16 rounded-full bg-[#E2F8EE]" />
                  <div className="h-3 w-10 rounded-full bg-[#FFF3D2]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FLOATING LABELS
          ================================================= */}

          <motion.div
            animate={floatAnimation}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[4%] top-[34%] z-30 hidden rotate-6 rounded-full bg-slate-950 px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.13em] text-white shadow-xl sm:block md:right-[9%]"
          >
            Make it feel
          </motion.div>

          <motion.div
            animate={floatAnimation}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[8%] right-[7%] z-30 hidden -rotate-3 rounded-[16px] bg-white px-4 py-3 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.4)] sm:block"
          >
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#FF9FB2]" />

              <div>
                <div className="text-[7px] font-bold">DETAIL MATTERS</div>
                <div className="mt-1 text-[6px] text-slate-400">
                  micro interaction
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cursor */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={
              reducedMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    x: [0, 8, 0],
                    y: [0, -7, 0],
                  }
            }
            transition={{
              opacity: { delay: 0.8 },
              x: {
                delay: 0.8,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                delay: 0.8,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-[18%] right-[17%] z-40 hidden sm:block"
          >
            <MousePointer2
              size={30}
              fill="#171717"
              className="rotate-[-12deg] text-slate-950 drop-shadow-md"
            />

            <span className="ml-3 mt-1 block rounded-full bg-slate-950 px-2 py-1 text-[7px] text-white">
              You
            </span>
          </motion.div>

          {/* Bottom label */}

          <div className="absolute bottom-4 left-4 z-30 rounded-full bg-white px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-slate-500 shadow-sm sm:bottom-6 sm:left-6 sm:px-4 sm:py-2 sm:text-[9px]">
            THINK / DESIGN / TEST
          </div>

          {/* Top sticker */}

          <div className="absolute right-4 top-4 z-30 flex rotate-6 items-center gap-2 rounded-full bg-white px-3 py-2 text-[8px] font-semibold text-slate-600 shadow-sm sm:right-6 sm:top-6 sm:px-4">
            <Component size={12} />
            BUILT TO FLOW
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          INTRO — EDITORIAL
      ===================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        className="py-20 sm:py-24 md:py-32"
      >
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
          <div>
            <SectionLabel accent="text-[#6C63FF]">
              Jadi, apa bedanya?
            </SectionLabel>

            <h2 className="mt-3 max-w-md text-3xl font-semibold leading-[1.02] tracking-[-0.065em] sm:text-4xl md:text-5xl">
              UI membuatnya terlihat.
              <br />
              <span className="text-slate-300">UX membuatnya terasa.</span>
            </h2>
          </div>

          <div className="relative max-w-3xl">
            {/* Connector */}

            <div className="absolute -left-8 top-2 hidden h-[calc(100%-10px)] w-px bg-gradient-to-b from-[#6C63FF] via-[#8FE3C1] to-transparent md:block" />

            <p className="text-lg leading-8 tracking-[-0.025em] text-slate-600 sm:text-xl sm:leading-9">
              UI adalah tentang bagaimana sebuah interface terlihat dan
              berinteraksi. UX lebih luas: bagaimana seseorang{" "}
              <span className="font-medium text-slate-950">
                menemukan, memahami, dan menyelesaikan sesuatu
              </span>{" "}
              di dalamnya.
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Keduanya perlu berjalan bersama. Tampilan yang cantik akan lebih
              berarti ketika pengguna tidak perlu berpikir terlalu keras untuk
              menggunakannya.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                ["Simple", "#EEEAFE", "#655AC5"],
                ["Useful", "#E2F8EE", "#328E6E"],
                ["Clear", "#FFF0C7", "#9A7510"],
                ["Consistent", "#FFE0E6", "#D85A6D"],
              ].map(([item, bg, text]) => (
                <span
                  key={item}
                  className="rounded-full px-3 py-1.5 text-[10px] font-medium"
                  style={{
                    backgroundColor: bg,
                    color: text,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          UI / UX — CREATIVE SPLIT
      ===================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="mb-8">
          <SectionLabel>Dua sisi yang saling melengkapi</SectionLabel>

          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
            Bukan pilih UI atau UX.
          </h2>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-[1fr_0.82fr]">
          {/* =================================================
              UI
          ================================================= */}

          <motion.div
            whileHover={{ y: -5 }}
            className="relative min-h-[510px] overflow-hidden rounded-[32px] bg-[#EEEAFE] p-6 sm:p-8 md:p-10"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#B8AEFF]" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold text-[#655AC5] shadow-sm">
                  UI
                </span>

                <Palette
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#655AC5]"
                />
              </div>

              <h3 className="mt-12 max-w-sm text-4xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-5xl">
                Tampilan
                <br />
                yang punya
                <br />
                karakter.
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
                Warna, tipografi, layout, komponen, spacing, dan detail visual
                yang membuat sebuah produk terasa konsisten.
              </p>

              {/* Image */}

              <div className="absolute bottom-[-55px] right-[-20px] w-[210px] rotate-[-7deg] overflow-hidden rounded-[22px] border-[6px] border-white shadow-[0_25px_55px_-25px_rgba(15,23,42,0.4)] sm:w-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=85"
                  alt="UI visual direction"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* Mini UI artifact */}

              <div className="absolute bottom-8 left-8 hidden w-[230px] rounded-[17px] bg-white p-3 shadow-xl sm:block md:left-12">
                <div className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-lg bg-[#6C63FF]" />

                  <div>
                    <div className="h-2 w-20 rounded-full bg-slate-900" />
                    <div className="mt-1.5 h-1.5 w-14 rounded-full bg-slate-200" />
                  </div>

                  <div className="ml-auto h-7 w-7 rounded-full bg-[#FFD166]" />
                </div>

                <div className="mt-4 h-2 w-[75%] rounded-full bg-slate-100" />

                <div className="mt-3 flex gap-2">
                  <div className="h-8 flex-1 rounded-lg bg-[#EEEAFE]" />
                  <div className="h-8 w-16 rounded-lg bg-[#E2F8EE]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connector */}

          <div className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-[#EEEAFE] bg-slate-950 text-white shadow-xl">
              <ArrowRight size={16} />
            </div>
          </div>

          {/* =================================================
              UX
          ================================================= */}

          <motion.div
            whileHover={{ y: -5 }}
            className="relative min-h-[510px] overflow-hidden rounded-[32px] bg-[#8FE3C1] p-6 sm:p-8 md:p-10"
          >
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : {
                      rotate: [0, 8, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-16 -right-12 h-48 w-48 rounded-[45px] bg-[#FFD166]"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold text-[#328E6E] shadow-sm">
                  UX
                </span>

                <MousePointer2
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#328E6E]"
                />
              </div>

              <h3 className="mt-12 max-w-sm text-4xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-5xl">
                Alur yang
                <br />
                terasa
                <br />
                natural.
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600">
                Struktur, flow, navigasi, feedback, dan pengalaman yang membantu
                pengguna mencapai tujuan tanpa kebingungan.
              </p>

              {/* Flow */}

              <div className="mt-10 flex items-center gap-2">
                {["MULAI", "PILIH", "SELESAI"].map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ y: -3, rotate: -2 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-[14px] text-[8px] font-semibold shadow-sm ${
                        index === 2
                          ? "bg-slate-950 text-white"
                          : "bg-white text-slate-700"
                      }`}
                    >
                      {item}
                    </motion.div>

                    {index < 2 && (
                      <ArrowRight size={14} className="text-slate-500" />
                    )}
                  </div>
                ))}
              </div>

              {/* UX Image */}

              <div className="absolute bottom-[-20px] right-[-15px] hidden w-[190px] rotate-[6deg] overflow-hidden rounded-[22px] border-[6px] border-white shadow-[0_25px_55px_-25px_rgba(15,23,42,0.35)] sm:block">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=700&q=85"
                  alt="Mobile user experience"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* =====================================================
          PROCESS — HORIZONTAL STORY
      ===================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        className="py-20 sm:py-24 md:py-32"
      >
        <div className="mb-10 flex items-end justify-between">
          <div>
            <SectionLabel>Dari ide sampai interface</SectionLabel>

            <h2 className="mt-2 max-w-xl text-3xl font-semibold leading-[1] tracking-[-0.065em] sm:text-4xl md:text-5xl">
              Kami tidak langsung menggambar.
            </h2>
          </div>

          <Wand2
            size={25}
            strokeWidth={1.4}
            className="mb-1 hidden text-[#6C63FF] sm:block"
          />
        </div>

        <div className="relative">
          {/* Connecting line */}

          <div className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.5,
                    ease,
                  }}
                  whileHover={{ y: -7 }}
                  className="relative z-10 min-h-[250px] rounded-[27px] p-5 sm:p-6"
                  style={{ backgroundColor: step.bg }}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] text-slate-400">
                      {step.number}
                    </span>

                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: step.iconBg }}
                    >
                      <Icon size={17} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3 className="mt-12 text-xl font-semibold tracking-[-0.04em]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {step.text}
                  </p>

                  {index < process.length - 1 && (
                    <div className="absolute -right-3 top-9 z-20 hidden h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm lg:flex">
                      <ArrowRight size={11} className="text-slate-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          IMAGE STORY / SCREENS
      ===================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="mb-9 max-w-2xl">
          <SectionLabel>Bisa diterapkan di mana saja</SectionLabel>

          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl md:text-5xl">
            Satu sistem.
            <br />
            <span className="text-slate-300">Banyak kemungkinan.</span>
          </h2>
        </div>

        {/* Masonry-ish composition */}

        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          {/* Large image */}

          <motion.div
            whileHover={{ y: -5 }}
            className="group relative min-h-[460px] overflow-hidden rounded-[32px] bg-slate-100 sm:min-h-[560px]"
          >
            <img
              src={screens[0].image}
              alt={screens[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

            {/* UI overlay */}

            <div className="absolute left-5 top-5 rounded-[17px] bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:left-7 sm:top-7">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
                <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                  Interface study
                </span>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/60">
                {screens[0].type}
              </span>

              <h3 className="mt-1 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                Dashboard
              </h3>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-950">
                  <ArrowUpRight size={15} />
                </div>

                <span className="text-[9px] font-medium text-white/70">
                  Data, hierarchy & interaction
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right side */}

          <div className="grid gap-4">
            {screens.slice(1).map((screen, index) => (
              <motion.div
                key={screen.title}
                whileHover={{ y: -5 }}
                className="group relative min-h-[220px] overflow-hidden rounded-[30px] sm:min-h-[270px]"
                style={{ backgroundColor: screen.accent }}
              >
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-70 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/70">
                    {screen.type}
                  </span>

                  <div className="mt-1 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">
                      {screen.title}
                    </h3>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {index === 0 && (
                  <div className="absolute right-5 top-5 rotate-6 rounded-full bg-white px-3 py-2 text-[7px] font-semibold uppercase tracking-[0.1em] text-slate-600 shadow-lg">
                    Touch first
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          SERVICES — NO CARD GRID
      ===================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
        className="py-20 sm:py-24 md:py-32"
      >
        <div className="relative overflow-hidden rounded-[32px] bg-[#FFF0C7] p-6 sm:p-9 md:p-12">
          {/* Decoration */}

          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    rotate: [0, 8, 0],
                    scale: [1, 1.05, 1],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#B8AEFF] sm:h-64 sm:w-64"
          />

          <div className="relative z-10 grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-14">
            <div>
              <SectionLabel>Yang bisa kami bantu</SectionLabel>

              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-[1] tracking-[-0.065em] sm:text-4xl md:text-5xl">
                Dari layar kosong sampai siap dipakai.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                Kami bisa membantu di berbagai tahap, baik mulai dari nol maupun
                memperbaiki interface yang sudah ada.
              </p>

              <motion.div
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        rotate: [-6, 4, -6],
                        y: [0, -3, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-8 flex h-12 w-12 items-center justify-center rounded-[15px] bg-white shadow-sm"
              >
                <Layers3 size={20} strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Services list */}

            <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-3 border-b border-slate-900/10 py-3.5"
                >
                  <span className="font-mono text-[8px] text-slate-300 transition-colors group-hover:text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs font-medium text-slate-700">
                    {service}
                  </span>

                  <ArrowUpRight
                    size={12}
                    className="ml-auto opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-60"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          CLOSING STATEMENT
      ===================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="pb-20 sm:pb-24 md:pb-28"
      >
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    rotate: [-6, 4, -6],
                    y: [0, -4, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#B8AEFF]"
          >
            <Star size={18} fill="currentColor" />
          </motion.div>

          <h2 className="text-3xl font-semibold leading-[1.02] tracking-[-0.065em] sm:text-4xl md:text-6xl">
            Interface yang bagus bukan cuma
            <br />
            <span className="text-slate-300">enak dilihat.</span>
            <br />
            Tapi enak digunakan.
          </h2>
        </div>
      </motion.section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="pb-8 sm:pb-12"
      >
        <div className="relative overflow-hidden rounded-[32px] bg-[#B8AEFF] px-6 py-10 sm:rounded-[38px] sm:px-9 sm:py-12 md:px-12 md:py-14">
          {/* Yellow blob */}

          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    rotate: [0, 8, 0],
                    scale: [1, 1.05, 1],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#FFD166] sm:h-60 sm:w-60"
          />

          {/* Green blob */}

          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    x: [0, 8, 0],
                    rotate: [0, -5, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-12 left-[35%] h-28 w-28 rounded-[30px] bg-[#8FE3C1] sm:h-36 sm:w-36"
          />

          {/* Pink dot */}

          <div className="absolute bottom-8 right-[20%] h-5 w-5 rounded-full bg-[#FF9FB2] sm:h-7 sm:w-7" />

          <div className="relative z-10 grid gap-9 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <Plus size={15} />
                </span>

                <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-500">
                  Mulai dari ide
                </span>
              </div>

              <h2 className="max-w-2xl text-3xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-4xl md:text-6xl">
                Punya produk yang
                <br />
                ingin dibuat lebih enak?
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
                Ceritakan produk atau idemu. Kita mulai dari flow-nya.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-5 py-3.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.6)] sm:w-fit sm:px-6 sm:py-4 sm:text-sm"
            >
              Bahas proyek
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
