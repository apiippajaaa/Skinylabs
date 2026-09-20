"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Brush,
  Camera,
  Code2,
  MoveUpRight,
  Palette,
  Play,
  Sparkles,
  Type,
  Wand2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    title: "Brand Identity",
    category: "Identity",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=90",
    color: "#FF6B57",
    size: "large",
  },
  {
    title: "Visual Campaign",
    category: "Campaign",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=90",
    color: "#F4C430",
    size: "small",
  },
  {
    title: "Digital Content",
    category: "Social",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=90",
    color: "#6C63FF",
    size: "small",
  },
  {
    title: "Art Direction",
    category: "Visual",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=90",
    color: "#35BFA4",
    size: "wide",
  },
];

const tools = [
  {
    title: "Branding",
    description: "Identitas yang punya karakter.",
    icon: Palette,
    color: "#FF6B57",
  },
  {
    title: "Typography",
    description: "Kata-kata yang punya bentuk.",
    icon: Type,
    color: "#F4C430",
  },
  {
    title: "Campaign",
    description: "Visual yang punya cerita.",
    icon: Wand2,
    color: "#6C63FF",
  },
  {
    title: "Content",
    description: "Konten yang tidak terasa biasa.",
    icon: Camera,
    color: "#35BFA4",
  },
  {
    title: "Digital",
    description: "Visual untuk layar dan ruang.",
    icon: Code2,
    color: "#3B82F6",
  },
  {
    title: "Illustration",
    description: "Gambar dengan personality.",
    icon: Brush,
    color: "#F59E0B",
  },
];

const words = ["COLOR", "TYPE", "FORM", "IDEA", "IMAGE"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function GraphicsPage() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="relative w-full overflow-hidden bg-[#FAFAF7] text-[#111318]">
      {/* ============================================================
          TOP BAR
      ============================================================ */}
      <header className="relative z-50 flex items-center justify-between pt-5 sm:pt-7">
        <Link
          href="/explore"
          className="group flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors hover:text-slate-950"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to explore
        </Link>

        <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-slate-400">
          <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />
          GRAPHIC DESIGN
        </div>
      </header>

      {/* ============================================================
          HERO — TYPOGRAPHIC PLAYGROUND
      ============================================================ */}
      <section className="relative min-h-[720px] pt-24 sm:min-h-[820px] sm:pt-32 md:min-h-[900px]">
        {/* giant background word */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[10%] top-[12%] select-none text-[25vw] font-black leading-none tracking-[-0.12em] text-[#F0F0EB]"
        >
          ART
        </div>

        {/* floating circle */}
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -20, 0],
                  rotate: [0, 8, 0],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-[12%] z-20 flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-[#F4C430] sm:h-28 sm:w-28"
        >
          <Sparkles size={27} strokeWidth={1.5} />
        </motion.div>

        {/* little sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8,
            type: "spring",
          }}
          className="absolute left-[4%] top-[17%] z-20 hidden rotate-[-8deg] sm:block"
        >
          <div className="border-2 border-slate-950 bg-white px-4 py-2 shadow-[5px_5px_0_#111318]">
            <span className="font-mono text-[9px] font-bold tracking-widest">
              NO BORING
            </span>
          </div>
        </motion.div>

        {/* headline */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <p className="mb-6 ml-[3%] font-mono text-[9px] tracking-[0.2em] text-slate-400">
              WE MAKE VISUAL THINGS
            </p>

            <h1 className="text-[clamp(5rem,17vw,14rem)] font-black leading-[0.72] tracking-[-0.105em]">
              MAKE
            </h1>

            <div className="relative ml-[10%] mt-2">
              <h1 className="text-[clamp(5rem,17vw,14rem)] font-black leading-[0.72] tracking-[-0.105em]">
                IT
              </h1>

              {/* underline */}
              <svg
                className="absolute -bottom-6 left-[2%] w-[65%] text-[#FF6B57]"
                viewBox="0 0 600 50"
                fill="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 1.1,
                    ease,
                  }}
                  d="M5 30 C150 5 250 45 390 20 C470 5 540 15 595 8"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative ml-[19%] mt-5 inline-block">
              <h1 className="text-[clamp(5rem,17vw,14rem)] font-black leading-[0.72] tracking-[-0.105em]">
                VISUAL.
              </h1>

              <motion.div
                animate={
                  reducedMotion
                    ? {}
                    : {
                        rotate: [0, 360],
                      }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-12 -top-8 hidden h-16 w-16 items-center justify-center rounded-full border-2 border-slate-950 bg-[#35BFA4] sm:flex"
              >
                <ArrowUpRight size={22} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* hero bottom */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col justify-between gap-6 sm:bottom-12 sm:flex-row sm:items-end">
          <div className="max-w-sm">
            <p className="text-sm leading-6 text-slate-500 sm:text-base">
              Kami membuat identitas, visual, dan pengalaman yang membantu
              sebuah ide terlihat seperti dirinya sendiri.
            </p>
          </div>

          <motion.div
            animate={
              reducedMotion
                ? {}
                : {
                    y: [0, 7, 0],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2 text-[9px] font-bold tracking-[0.18em] text-slate-400 uppercase"
          >
            Scroll to explore
            <ArrowDown size={13} />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          MARQUEE
      ============================================================ */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-slate-200 bg-[#111318] py-5 text-white">
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-10"
        >
          {[...words, ...words, ...words].map((word, index) => (
            <div key={`${word}-${index}`} className="flex items-center gap-10">
              <span className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                {word}
              </span>

              <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ============================================================
          INTRO — "DESIGN IS..."
      ============================================================ */}
      <section className="py-24 sm:py-32 md:py-40">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div className="relative">
            <span className="font-mono text-[9px] tracking-[0.18em] text-slate-400">
              01 / THE IDEA
            </span>

            <motion.div
              animate={
                reducedMotion
                  ? {}
                  : {
                      rotate: [-4, 4, -4],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-10 top-10 hidden h-20 w-20 rounded-[25px] bg-[#C8C1FF] md:block"
            />
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.065em] sm:text-5xl md:text-7xl">
              Design is not decoration.
              <br />
              <span className="text-slate-300">It's how an idea gets</span>{" "}
              <span className="relative inline-block">
                noticed.
                <span className="absolute -bottom-1 left-0 h-2 w-full rotate-[-2deg] bg-[#F4C430]" />
              </span>
            </h2>

            <p className="mt-10 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              Visual yang baik membantu orang mengenali siapa kamu, memahami apa
              yang kamu tawarkan, dan akhirnya mengingatnya.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROJECTS — PINBOARD
      ============================================================ */}
      <section className="relative py-10 sm:py-16">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="font-mono text-[9px] tracking-[0.18em] text-slate-400">
              02 / THE WORK
            </span>

            <h2 className="mt-3 text-4xl font-bold tracking-[-0.07em] sm:text-5xl md:text-6xl">
              Things we've
              <br />
              <span className="text-[#FF6B57]">made.</span>
            </h2>
          </div>

          <span className="hidden font-mono text-[9px] text-slate-400 sm:block">
            SELECTED WORKS / 2026
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          {projects.map((project, index) => {
            const isLarge = project.size === "large";
            const isWide = project.size === "wide";

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
                className={`group relative overflow-hidden ${
                  isLarge
                    ? "min-h-[500px] md:col-span-7 md:min-h-[650px]"
                    : isWide
                    ? "min-h-[350px] md:col-span-8"
                    : "min-h-[350px] md:col-span-5"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/5" />

                {/* floating category */}
                <div
                  style={{ backgroundColor: project.color }}
                  className="absolute left-5 top-5 flex h-11 w-11 rotate-[-8deg] items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:rotate-12"
                >
                  <ArrowUpRight size={17} />
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <span className="font-mono text-[8px] tracking-[0.16em] text-white/60 uppercase">
                      {project.category}
                    </span>

                    <h3 className="mt-1 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <span className="hidden font-mono text-[8px] text-white/60 sm:block">
                    0{index + 1}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          TOOLBOX
      ============================================================ */}
      <section className="py-28 sm:py-36 md:py-44">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <span className="font-mono text-[9px] tracking-[0.18em] text-slate-400">
              03 / THE TOOLBOX
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-[0.95] tracking-[-0.07em] sm:text-5xl md:text-6xl">
              Pick a tool.
              <br />
              <span className="text-slate-300">Make something.</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Tidak ada satu formula untuk semua kebutuhan. Setiap proyek punya
              bentuknya sendiri.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                    ease,
                  }}
                  whileHover={{
                    y: -7,
                    rotate: index % 2 === 0 ? -1.5 : 1.5,
                  }}
                  className="group relative min-h-[180px] overflow-hidden rounded-[25px] border border-slate-200 bg-white p-5 transition-shadow hover:shadow-[8px_10px_0_#111318] sm:min-h-[210px] sm:p-6"
                >
                  <div
                    style={{ backgroundColor: tool.color }}
                    className="flex h-11 w-11 items-center justify-center rounded-[14px] transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <div className="absolute right-4 top-4 font-mono text-[8px] text-slate-300">
                    0{index + 1}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                    <h3 className="text-sm font-bold tracking-[-0.02em] sm:text-base">
                      {tool.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-slate-400">
                      {tool.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          BIG STATEMENT
      ============================================================ */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#FF6B57] px-5 py-24 text-white sm:py-32 md:py-40">
        <div
          aria-hidden
          className="absolute -right-[5%] top-[-25%] h-[500px] w-[500px] rounded-full border-[70px] border-white/10"
        />

        <div
          aria-hidden
          className="absolute -bottom-[30%] -left-[10%] h-[450px] w-[450px] rounded-full border-[60px] border-white/10"
        />

        <div className="relative mx-auto max-w-6xl">
          <span className="font-mono text-[9px] tracking-[0.18em] text-white/60">
            04 / THE POINT
          </span>

          <h2 className="mt-8 max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.78] tracking-[-0.095em]">
            GOOD DESIGN
            <br />
            GETS YOU
            <br />
            <span className="text-[#F4C430]">REMEMBERED.</span>
          </h2>

          <div className="mt-12 flex items-center justify-between">
            <p className="max-w-sm text-sm leading-7 text-white/70">
              Karena visual yang baik bukan hanya dilihat. Ia meninggalkan
              sesuatu setelah orang selesai melihatnya.
            </p>

            <motion.div
              animate={
                reducedMotion
                  ? {}
                  : {
                      rotate: [0, 360],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="hidden h-20 w-20 items-center justify-center rounded-full border border-white/30 sm:flex"
            >
              <MoveUpRight size={24} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}
      <section className="py-24 sm:py-32 md:py-40">
        <div className="relative">
          <div className="absolute left-[10%] top-0 h-3 w-3 rounded-full bg-[#35BFA4]" />
          <div className="absolute right-[15%] top-[30%] h-5 w-5 rounded-full bg-[#F4C430]" />
          <div className="absolute bottom-[5%] left-[30%] h-4 w-4 rounded-full bg-[#C8C1FF]" />

          <div className="text-center">
            <span className="font-mono text-[9px] tracking-[0.18em] text-slate-400">
              05 / LET'S MAKE
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[0.82] tracking-[-0.08em] sm:text-6xl md:text-8xl">
              Got an idea?
              <br />
              <span className="text-[#FF6B57]">Let's play.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-slate-400">
              Ceritakan apa yang ada di kepala. Tidak harus sudah rapi. Biarkan
              kami bantu mengubahnya menjadi sesuatu.
            </p>

            <Link
              href="/contact"
              className="group mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-[#111318] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6B57] hover:shadow-[7px_7px_0_#F4C430]"
            >
              Start a project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
