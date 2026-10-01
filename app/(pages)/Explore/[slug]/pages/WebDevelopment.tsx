"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Component,
  Cpu,
  Cursor,
  Layers3,
  MousePointer2,
  Palette,
  Play,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const capabilities = [
  {
    title: "Websites",
    description:
      "Website yang punya karakter, responsive, cepat, dan tetap nyaman digunakan.",
    icon: Code2,
    className: "lg:col-span-7 lg:row-span-2",
    background: "bg-[#F0EFFF]",
    accent: "text-[#6C63FF]",
    shape: "bg-[#6C63FF]",
  },
  {
    title: "Web Apps",
    description: "Interface kompleks yang tetap terasa sederhana.",
    icon: Layers3,
    className: "lg:col-span-5",
    background: "bg-[#EAF9F6]",
    accent: "text-[#35BFA4]",
    shape: "bg-[#35BFA4]",
  },
  {
    title: "Components",
    description: "UI system yang reusable dan scalable.",
    icon: Component,
    className: "lg:col-span-5",
    background: "bg-[#FFF8DD]",
    accent: "text-[#D19B00]",
    shape: "bg-[#F4C430]",
  },
  {
    title: "Interactions",
    description: "Motion kecil yang membuat interface terasa hidup.",
    icon: MousePointer2,
    className: "lg:col-span-4",
    background: "bg-[#FFF0ED]",
    accent: "text-[#FF6B57]",
    shape: "bg-[#FF6B57]",
  },
  {
    title: "Systems",
    description: "Fondasi teknis yang siap tumbuh bersama produk.",
    icon: Cpu,
    className: "lg:col-span-8",
    background: "bg-[#EAF2FF]",
    accent: "text-[#5C8DFF]",
    shape: "bg-[#5C8DFF]",
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

export default function WebDevelopmentPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden pb-24">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-4 pb-24 pt-12 sm:px-6 md:pb-32 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* LEFT */}
            <div>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#EAF9F6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-800"
              >
                <Code2 size={13} />
                Web Development
              </motion.div>

              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="max-w-3xl text-[clamp(3.6rem,8vw,7.5rem)] font-black leading-[0.84] tracking-[-0.075em] text-neutral-950"
              >
                Build
                <br />
                something
                <br />
                <span className="relative inline-block text-[#6C63FF]">
                  delightful.
                  <span className="absolute bottom-[-6px] left-[5%] h-3 w-[90%] -rotate-2 rounded-full bg-[#FF6B57]/25" />
                </span>
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-8 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base"
              >
                Kami mengubah ide menjadi digital experience yang cepat,
                expressive, dan menyenangkan untuk digunakan.
              </motion.p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-1"
                >
                  Start a project
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="#playground"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-900/10 px-5 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100"
                >
                  Explore
                  <ArrowDown size={15} />
                </Link>
              </div>
            </div>

            {/* RIGHT — UNIQUE CODE PLAYGROUND */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 0.92, rotate: 2 }
              }
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              {/* floating labels */}
              <div className="absolute -left-3 top-8 z-20 rotate-[-7deg] rounded-full bg-[#FFF8DD] px-4 py-2 text-xs font-bold shadow-sm sm:-left-7">
                creative
              </div>

              <div className="absolute -right-2 bottom-14 z-20 rotate-[7deg] rounded-full bg-[#EAF9F6] px-4 py-2 text-xs font-bold shadow-sm sm:-right-6">
                functional
              </div>

              {/* browser */}
              <div className="relative overflow-hidden rounded-[34px] border border-neutral-900/10 bg-[#171717] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
                {/* browser top */}
                <div className="flex items-center justify-between px-3 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F4C430]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#35BFA4]" />
                  </div>

                  <div className="rounded-full bg-white/10 px-4 py-1 text-[9px] text-white/40">
                    localhost:3000
                  </div>

                  <div className="h-5 w-5" />
                </div>

                {/* fake website */}
                <div className="relative min-h-[390px] overflow-hidden rounded-[25px] bg-[#F8F7F3] p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-16 rounded-full bg-neutral-950" />

                    <div className="flex gap-2">
                      <div className="h-2 w-8 rounded-full bg-neutral-300" />
                      <div className="h-2 w-8 rounded-full bg-neutral-300" />
                    </div>
                  </div>

                  <div className="mt-14">
                    <div className="h-5 w-24 rounded-full bg-[#6C63FF]/20" />

                    <div className="mt-4 max-w-[300px] text-4xl font-black leading-[0.9] tracking-[-0.06em] text-neutral-950">
                      Make it
                      <br />
                      <span className="text-[#6C63FF]">interesting.</span>
                    </div>

                    <div className="mt-5 h-2 w-44 rounded-full bg-neutral-200" />
                    <div className="mt-2 h-2 w-32 rounded-full bg-neutral-200" />

                    <div className="mt-7 flex gap-2">
                      <div className="rounded-full bg-neutral-950 px-4 py-2 text-[9px] font-bold text-white">
                        Explore
                      </div>

                      <div className="rounded-full bg-[#FFF0ED] px-4 py-2 text-[9px] font-bold">
                        About
                      </div>
                    </div>
                  </div>

                  {/* floating component */}
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { y: [0, -8, 0], rotate: [2, 4, 2] }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-7 right-7 flex h-28 w-28 rotate-2 items-center justify-center rounded-[28px] bg-[#FF6B57] text-white shadow-lg"
                  >
                    <Sparkles size={32} strokeWidth={1.5} />
                  </motion.div>

                  <div className="absolute bottom-8 left-7 h-3 w-3 rounded-full bg-[#35BFA4]" />
                </div>
              </div>

              {/* decorative orbit */}
              <div className="absolute -bottom-7 -left-7 -z-10 h-28 w-28 rounded-full border border-[#6C63FF]/20" />
              <div className="absolute -right-8 -top-8 -z-10 h-24 w-24 rounded-full bg-[#F4C430]/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MANIFESTO
      ====================================================== */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <div className="absolute -left-3 top-0 hidden text-7xl font-black text-[#FF6B57]/20 lg:block">
              “
            </div>

            <p className="max-w-5xl text-[clamp(2rem,5vw,4.8rem)] font-bold leading-[1.02] tracking-[-0.055em] text-neutral-950">
              Website yang bagus bukan yang paling{" "}
              <span className="text-[#6C63FF]">ramai.</span>
              <br />
              Tapi yang membuat orang{" "}
              <span className="relative inline-block">
                ingin tinggal.
                <span className="absolute bottom-[-4px] left-0 h-2 w-full rotate-1 rounded-full bg-[#F4C430]/60" />
              </span>
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="h-px w-16 bg-neutral-300" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Our approach
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLAYGROUND
      ====================================================== */}
      <section id="playground" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#35BFA4]">
                The playground
              </span>

              <h2 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                What happens
                <br />
                <span className="text-[#FF6B57]">behind the screen.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-neutral-500">
              Bukan cuma menulis code. Kami menyusun visual, interaction,
              structure, dan logic menjadi satu pengalaman.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12 lg:auto-rows-[220px]">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.07 }}
                  className={`group relative overflow-hidden rounded-[32px] ${item.background} ${item.className} p-7`}
                >
                  <div
                    className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${item.shape} opacity-10 transition-transform duration-700 group-hover:scale-125`}
                  />

                  <div className="relative flex h-full flex-col justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white ${item.accent}`}
                    >
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-neutral-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CODE / DESIGN SPLIT
      ====================================================== */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {/* CODE */}
          <div className="overflow-hidden rounded-[36px] bg-neutral-950 p-6 text-white sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                  Code
                </span>
              </div>

              <span className="text-[10px] text-white/30">
                clean / scalable
              </span>
            </div>

            <div className="font-mono text-sm leading-8 text-white/70">
              <div>
                <span className="text-[#6C63FF]">const</span>{" "}
                <span className="text-[#35BFA4]">experience</span> = {"{"}
              </div>

              <div className="pl-6">
                <span className="text-[#FF6B57]">beautiful</span>:{" "}
                <span className="text-[#F4C430]">true</span>,
              </div>

              <div className="pl-6">
                <span className="text-[#FF6B57]">fast</span>:{" "}
                <span className="text-[#F4C430]">true</span>,
              </div>

              <div className="pl-6">
                <span className="text-[#FF6B57]">useful</span>:{" "}
                <span className="text-[#F4C430]">true</span>,
              </div>

              <div className="pl-6">
                <span className="text-[#FF6B57]">memorable</span>:{" "}
                <span className="text-[#F4C430]">true</span>,
              </div>

              <div>{"}"}</div>
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs text-white/40">
              <Check size={14} className="text-[#35BFA4]" />
              Built with intention.
            </div>
          </div>

          {/* DESIGN */}
          <div className="relative overflow-hidden rounded-[36px] bg-[#FFF0ED] p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Palette size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Design
                </span>
              </div>

              <Sparkles size={18} className="text-[#FF6B57]" />
            </div>

            <div className="relative min-h-[250px]">
              <div className="absolute left-0 top-5 w-[70%] rotate-[-3deg] rounded-[26px] bg-white p-5 shadow-sm">
                <div className="h-3 w-20 rounded-full bg-neutral-900" />

                <div className="mt-6 h-4 w-40 rounded-full bg-[#6C63FF]/20" />

                <div className="mt-3 h-2 w-28 rounded-full bg-neutral-200" />
                <div className="mt-2 h-2 w-36 rounded-full bg-neutral-200" />

                <div className="mt-5 h-9 w-20 rounded-full bg-neutral-950" />
              </div>

              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { y: [0, -10, 0], rotate: [7, 10, 7] }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-2 right-3 flex h-32 w-32 rotate-7 items-center justify-center rounded-[34px] bg-[#6C63FF] text-white shadow-lg"
              >
                <Braces size={40} strokeWidth={1.4} />
              </motion.div>

              <div className="absolute bottom-8 left-1/3 h-8 w-8 rotate-12 rounded-xl bg-[#F4C430]" />
            </div>

            <p className="relative z-10 max-w-sm text-sm leading-6 text-neutral-600">
              Design dan code bukan dua dunia terpisah. Keduanya bekerja bersama
              untuk menghasilkan experience yang utuh.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          STACK
      ====================================================== */}
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[36px] bg-[#EAF9F6] p-7 sm:p-10 md:p-14">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#35BFA4]">
                  The toolkit
                </span>

                <h2 className="text-4xl font-bold leading-tight tracking-tight text-neutral-950">
                  Small tools.
                  <br />
                  <span className="text-[#6C63FF]">Big possibilities.</span>
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {stack.map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-full bg-white px-4 py-2 text-sm font-semibold ${
                      index % 3 === 0
                        ? "text-[#6C63FF]"
                        : index % 3 === 1
                        ? "text-[#FF6B57]"
                        : "text-[#35BFA4]"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS — UNIQUE TIMELINE
      ====================================================== */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B57]">
                The workflow
              </span>

              <h2 className="text-4xl font-bold leading-[0.95] tracking-tight text-neutral-950 sm:text-5xl">
                From
                <br />
                <span className="text-[#6C63FF]">thought</span>
                <br />
                to browser.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-600">
                Proses yang fleksibel, tapi tetap punya arah yang jelas.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-5 left-[27px] top-5 w-px bg-neutral-200" />

              <div className="space-y-5">
                {[
                  {
                    number: "01",
                    title: "Discover",
                    text: "Cari tahu apa yang sebenarnya perlu dibuat.",
                    color: "bg-[#FFF0ED]",
                  },
                  {
                    number: "02",
                    title: "Design",
                    text: "Bentuk visual, structure, dan interaction.",
                    color: "bg-[#F0EFFF]",
                  },
                  {
                    number: "03",
                    title: "Develop",
                    text: "Ubah semuanya menjadi interface yang nyata.",
                    color: "bg-[#EAF9F6]",
                  },
                  {
                    number: "04",
                    title: "Refine",
                    text: "Polish sampai setiap detail terasa tepat.",
                    color: "bg-[#FFF8DD]",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                    whileInView={
                      shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative flex gap-5"
                  >
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.color} text-xs font-black`}
                    >
                      {item.number}
                    </div>

                    <div className="rounded-[24px] bg-neutral-50 p-5">
                      <h3 className="font-bold text-neutral-950">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-neutral-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[40px] bg-[#6C63FF] px-6 py-16 sm:px-10 md:py-24">
            <div className="absolute -left-10 -top-10 h-32 w-32 rotate-12 rounded-[35px] bg-[#F4C430]" />

            <div className="absolute -bottom-12 right-10 h-36 w-36 rounded-full bg-[#35BFA4]" />

            <div className="absolute right-[20%] top-10 h-6 w-6 rotate-45 rounded-lg bg-[#FF6B57]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Rocket size={21} />
              </div>

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
                Ready when you are
              </p>

              <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-[#FFF8DD]">worth using.</span>
              </h2>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-neutral-950 transition-transform hover:-translate-y-1"
                >
                  Start a project
                  <ArrowUpRight size={17} />
                </Link>

                <span className="text-sm text-white/60">
                  No boring websites.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
