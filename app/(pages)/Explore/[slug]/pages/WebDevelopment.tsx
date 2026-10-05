"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Component,
  Cpu,
  Layers3,
  MousePointer2,
  Palette,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const capabilities = [
  {
    number: "01",
    title: "Websites",
    description:
      "Website yang punya karakter, cepat, responsive, dan nyaman digunakan.",
    icon: Code2,
    accent: "#6C63FF",
    soft: "#F0EFFF",
  },
  {
    number: "02",
    title: "Web Apps",
    description:
      "Interface kompleks yang tetap terasa sederhana dan mudah dipahami.",
    icon: Layers3,
    accent: "#35BFA4",
    soft: "#EAF9F6",
  },
  {
    number: "03",
    title: "Components",
    description: "UI system reusable yang lebih konsisten dan siap berkembang.",
    icon: Component,
    accent: "#D19B00",
    soft: "#FFF8DD",
  },
  {
    number: "04",
    title: "Interactions",
    description:
      "Motion kecil yang membuat interface terasa hidup tanpa berlebihan.",
    icon: MousePointer2,
    accent: "#FF6B57",
    soft: "#FFF0ED",
  },
  {
    number: "05",
    title: "Systems",
    description:
      "Fondasi teknis yang rapi, scalable, dan siap tumbuh bersama produk.",
    icon: Cpu,
    accent: "#5C8DFF",
    soft: "#EAF2FF",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Motion",
  "Node.js",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Pahami tujuan, pengguna, dan apa yang sebenarnya perlu dibuat.",
    accent: "#FF6B57",
  },
  {
    number: "02",
    title: "Design",
    text: "Bentuk visual, structure, dan interaction yang punya arah.",
    accent: "#6C63FF",
  },
  {
    number: "03",
    title: "Develop",
    text: "Ubah konsep menjadi interface yang nyata dan responsive.",
    accent: "#35BFA4",
  },
  {
    number: "04",
    title: "Refine",
    text: "Rapikan detail sampai semuanya terasa pas.",
    accent: "#F4C430",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function WebDevelopmentPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden pb-10 text-neutral-950">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-4 pb-14 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 10,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#5278D8]"
              >
                <Code2 size={13} />
                Web Development
              </motion.div>

              <motion.h1
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                }}
                className="max-w-3xl text-[clamp(3.4rem,8vw,7rem)] font-black leading-[0.84] tracking-[-0.075em]"
              >
                Website yang
                <br />
                <span className="text-[#6C63FF]">terasa hidup.</span>
              </motion.h1>

              <motion.p
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                className="mt-6 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base"
              >
                Kami mengubah ide menjadi digital experience yang cepat,
                expressive, responsive, dan menyenangkan untuk digunakan.
              </motion.p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  Mulai project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-900/10 px-5 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100"
                >
                  Lihat kemampuan
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* mini stats */}
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-neutral-900/10 pt-5">
                <div>
                  <p className="text-lg font-black">UI</p>
                  <p className="text-[11px] text-neutral-500">
                    visual & interaction
                  </p>
                </div>

                <div>
                  <p className="text-lg font-black">UX</p>
                  <p className="text-[11px] text-neutral-500">
                    structure & flow
                  </p>
                </div>

                <div>
                  <p className="text-lg font-black">Code</p>
                  <p className="text-[11px] text-neutral-500">
                    clean & scalable
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.94,
                      rotate: 2,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[500px]"
            >
              {/* floating labels */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -5, 0],
                        rotate: [-5, -3, -5],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-2 top-7 z-20 rounded-full bg-[#FFF8DD] px-3.5 py-2 text-[11px] font-bold shadow-sm sm:-left-5"
              >
                creative
              </motion.div>

              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, 5, 0],
                        rotate: [5, 3, 5],
                      }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 bottom-10 z-20 rounded-full bg-[#EAF9F6] px-3.5 py-2 text-[11px] font-bold shadow-sm sm:-right-5"
              >
                functional
              </motion.div>

              {/* browser */}
              <div className="relative rounded-[28px] bg-neutral-950 p-2.5 shadow-[0_25px_70px_rgba(0,0,0,0.12)] sm:rounded-[34px] sm:p-3">
                <div className="flex h-9 items-center justify-between px-2 sm:h-10 sm:px-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F4C430]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#35BFA4]" />
                  </div>

                  <div className="rounded-full bg-white/10 px-3 py-1 text-[8px] text-white/40">
                    localhost:3000
                  </div>

                  <div className="w-8" />
                </div>

                <div className="relative min-h-[310px] overflow-hidden rounded-[21px] bg-[#F8F7F3] p-5 sm:min-h-[360px] sm:rounded-[25px] sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-14 rounded-full bg-neutral-950" />

                    <div className="flex gap-1.5">
                      <div className="h-1.5 w-7 rounded-full bg-neutral-300" />
                      <div className="h-1.5 w-7 rounded-full bg-neutral-300" />
                    </div>
                  </div>

                  <div className="mt-12 sm:mt-16">
                    <div className="h-4 w-20 rounded-full bg-[#6C63FF]/20" />

                    <div className="mt-3 max-w-[260px] text-3xl font-black leading-[0.9] tracking-[-0.06em] sm:text-4xl">
                      Make it
                      <br />
                      <span className="text-[#6C63FF]">interesting.</span>
                    </div>

                    <div className="mt-5 space-y-2">
                      <div className="h-1.5 w-40 rounded-full bg-neutral-200" />
                      <div className="h-1.5 w-28 rounded-full bg-neutral-200" />
                    </div>

                    <div className="mt-6 flex gap-2">
                      <div className="rounded-full bg-neutral-950 px-3.5 py-2 text-[8px] font-bold text-white">
                        Explore
                      </div>

                      <div className="rounded-full bg-[#FFF0ED] px-3.5 py-2 text-[8px] font-bold">
                        About
                      </div>
                    </div>
                  </div>

                  {/* floating visual */}
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: [0, -8, 0],
                            rotate: [3, 7, 3],
                          }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-5 right-5 flex h-20 w-20 items-center justify-center rounded-[23px] bg-[#FF6B57] text-white shadow-lg sm:bottom-7 sm:right-7 sm:h-24 sm:w-24"
                  >
                    <Sparkles
                      size={28}
                      strokeWidth={1.5}
                      className="sm:h-8 sm:w-8"
                    />
                  </motion.div>

                  <div className="absolute bottom-6 left-6 h-2.5 w-2.5 rounded-full bg-[#35BFA4]" />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 -z-10 h-20 w-20 rounded-full border border-[#6C63FF]/20" />
              <div className="absolute -right-6 -top-6 -z-10 h-20 w-20 rounded-full bg-[#F4C430]/25" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MANIFESTO
      ====================================================== */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <Reveal>
          <div className="mx-auto max-w-7xl border-y border-neutral-900/10 py-8 sm:py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10">
              <span className="shrink-0 pt-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6B57]">
                01 / Approach
              </span>

              <p className="max-w-5xl text-[clamp(1.8rem,4vw,4rem)] font-bold leading-[1] tracking-[-0.055em]">
                Website yang bagus bukan yang paling{" "}
                <span className="text-[#6C63FF]">ramai.</span>{" "}
                <span className="text-neutral-400">
                  Tapi yang membuat orang ingin tinggal.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}
      <section
        id="capabilities"
        className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#35BFA4]">
                  02 / What we build
                </span>

                <h2 className="mt-3 text-4xl font-black leading-[0.9] tracking-[-0.05em] sm:text-5xl">
                  Bukan cuma
                  <br />
                  <span className="text-[#FF6B57]">website.</span>
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500">
                  Dari halaman sederhana sampai web app yang kompleks, setiap
                  bagian dirancang untuk bekerja bersama.
                </p>
              </div>
            </Reveal>

            <div className="divide-y divide-neutral-900/10 border-y border-neutral-900/10">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              x: 5,
                            }
                      }
                      transition={{
                        duration: 0.25,
                      }}
                      className="group flex items-center gap-4 py-5 sm:gap-6 sm:py-6"
                    >
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12"
                        style={{
                          backgroundColor: item.soft,
                          color: item.accent,
                        }}
                      >
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <span className="hidden w-6 shrink-0 text-[10px] font-bold text-neutral-300 sm:block">
                        {item.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-1 max-w-xl text-xs leading-5 text-neutral-500 sm:text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-900/10 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:rotate-45"
                        />
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CODE + DESIGN
      ====================================================== */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[30px] bg-neutral-950 p-5 text-white sm:rounded-[36px] sm:p-8 lg:p-10">
              {/* decorative */}
              <motion.div
                animate={
                  shouldReduceMotion
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
                className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#6C63FF]/20 blur-2xl"
              />

              <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <div className="flex items-center gap-2 text-[#35BFA4]">
                    <Terminal size={16} />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Design × Development
                    </span>
                  </div>

                  <h2 className="mt-5 max-w-xl text-4xl font-black leading-[0.92] tracking-[-0.05em] sm:text-5xl">
                    Visual yang menarik.
                    <br />
                    <span className="text-[#6C63FF]">Code yang bekerja.</span>
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-white/50">
                    Design dan code bukan dua dunia terpisah. Kami menyatukan
                    visual, structure, interaction, dan logic menjadi satu
                    experience.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/60">
                    {["Responsive", "Accessible", "Scalable", "Performant"].map(
                      (item) => (
                        <span key={item} className="flex items-center gap-1.5">
                          <Check size={13} className="text-[#35BFA4]" />
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* code visual */}
                <div className="relative">
                  <div className="rounded-[25px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#FF6B57]" />
                        <div className="h-2 w-2 rounded-full bg-[#F4C430]" />
                        <div className="h-2 w-2 rounded-full bg-[#35BFA4]" />
                      </div>

                      <span className="font-mono text-[9px] text-white/20">
                        experience.ts
                      </span>
                    </div>

                    <div className="font-mono text-xs leading-7 text-white/50 sm:text-sm">
                      <div>
                        <span className="text-[#6C63FF]">const</span>{" "}
                        <span className="text-[#35BFA4]">experience</span> ={" "}
                        {"{"}
                      </div>

                      <div className="pl-5">
                        <span className="text-[#FF6B57]">beautiful</span>:{" "}
                        <span className="text-[#F4C430]">true</span>,
                      </div>

                      <div className="pl-5">
                        <span className="text-[#FF6B57]">fast</span>:{" "}
                        <span className="text-[#F4C430]">true</span>,
                      </div>

                      <div className="pl-5">
                        <span className="text-[#FF6B57]">useful</span>:{" "}
                        <span className="text-[#F4C430]">true</span>,
                      </div>

                      <div className="pl-5">
                        <span className="text-[#FF6B57]">memorable</span>:{" "}
                        <span className="text-[#F4C430]">true</span>,
                      </div>

                      <div>{"}"}</div>
                    </div>
                  </div>

                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: [0, -7, 0],
                            rotate: [5, 8, 5],
                          }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-5 -right-2 flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#FF6B57] text-white shadow-xl sm:-right-4 sm:h-24 sm:w-24"
                  >
                    <Braces size={32} strokeWidth={1.4} />
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          TOOLKIT
      ====================================================== */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 border-y border-neutral-900/10 py-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF9F6] text-[#35BFA4]">
                  <Palette size={18} />
                </div>

                <div>
                  <p className="text-sm font-bold">Toolkit</p>
                  <p className="text-xs text-neutral-500">
                    Tools yang kami gunakan sehari-hari.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.9,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.3,
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -2,
                          }
                    }
                    className="rounded-full bg-neutral-100 px-3.5 py-2 text-xs font-semibold text-neutral-700 transition-colors hover:bg-[#EAF2FF] hover:text-[#6C63FF]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <Reveal>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6B57]">
                  03 / Workflow
                </span>

                <h2 className="mt-3 text-4xl font-black leading-[0.9] tracking-[-0.05em] sm:text-5xl">
                  Dari ide
                  <br />
                  <span className="text-[#6C63FF]">ke browser.</span>
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500">
                  Proses fleksibel dengan arah yang tetap jelas.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {process.map((item, index) => (
                <Reveal key={item.number} delay={index * 0.06}>
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    transition={{
                      duration: 0.25,
                    }}
                    className="group border-t border-neutral-900/10 pt-5"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] font-black"
                        style={{
                          color: item.accent,
                        }}
                      >
                        {item.number}
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="text-neutral-300 transition-all duration-300 group-hover:rotate-45 group-hover:text-neutral-950"
                      />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
                      {item.text}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 pb-4 pt-12 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#6C63FF] px-6 py-12 sm:rounded-[40px] sm:px-10 sm:py-16 lg:px-14">
            {/* decoration */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [12, 18, 12],
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-8 -top-8 h-28 w-28 rounded-[30px] bg-[#F4C430]"
            />

            <div className="absolute -bottom-12 left-[20%] h-28 w-28 rounded-full bg-[#35BFA4]" />

            <div className="absolute right-[25%] top-10 h-5 w-5 rotate-45 rounded-md bg-[#FF6B57]" />

            <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-950">
                  <Rocket size={18} />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Punya ide?
                </span>

                <h2 className="mt-3 max-w-3xl text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.85] tracking-[-0.07em] text-white">
                  Let&apos;s make it
                  <br />
                  <span className="text-[#FFF8DD]">real.</span>
                </h2>
              </div>

              <div className="relative flex flex-col items-start gap-3 lg:items-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-neutral-950 transition-transform duration-300 hover:-translate-y-1"
                >
                  Mulai ngobrol
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </Link>

                <span className="text-xs text-white/50">
                  No boring websites.
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
