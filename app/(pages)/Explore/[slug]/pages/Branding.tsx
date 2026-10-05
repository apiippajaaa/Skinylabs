"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Asterisk,
  Circle,
  Palette,
  PenTool,
  Sparkles,
  Type,
  Shapes,
  Layers3,
  MoveUpRight,
} from "lucide-react";

const brandItems = [
  {
    title: "Logo & Mark",
    description: "Logo yang punya karakter dan mudah dikenali.",
    icon: PenTool,
    accent: "#FF6B57",
    soft: "#FFF0ED",
  },
  {
    title: "Visual Identity",
    description: "Warna, bentuk, dan gaya visual yang konsisten.",
    icon: Palette,
    accent: "#6C63FF",
    soft: "#F0EFFF",
  },
  {
    title: "Typography",
    description: "Tipografi yang bikin brand punya suara sendiri.",
    icon: Type,
    accent: "#F4C430",
    soft: "#FFF8DD",
  },
  {
    title: "Brand System",
    description: "Aturan visual agar brand tetap rapi di mana saja.",
    icon: Layers3,
    accent: "#35BFA4",
    soft: "#EAF9F6",
  },
];

const projects = [
  {
    name: "Kopi Kawan",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
    rotate: "-2deg",
  },
  {
    name: "Forma",
    category: "Visual Direction",
    image:
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1200&q=85",
    rotate: "2deg",
  },
  {
    name: "Mori Studio",
    category: "Brand System",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=85",
    rotate: "-1deg",
  },
];

const process = [
  {
    number: "01",
    title: "Kenalan",
    description:
      "Cari tahu siapa kamu, siapa audiensmu, dan apa yang ingin kamu bawa.",
  },
  {
    number: "02",
    title: "Rancang",
    description:
      "Eksplorasi arah visual, mood, warna, bentuk, dan karakter brand.",
  },
  {
    number: "03",
    title: "Bangun",
    description: "Semua elemen dirangkai menjadi identitas visual yang utuh.",
  },
  {
    number: "04",
    title: "Siap jalan",
    description: "Brand system siap dipakai untuk berbagai kebutuhan.",
  },
];

const applications = [
  "Logo",
  "Business Card",
  "Social Media",
  "Packaging",
  "Website",
  "Presentation",
  "Merchandise",
  "Campaign",
];

export default function Branding() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-8 sm:px-8 lg:px-12 lg:pb-28 ">
        <div className="mx-auto max-w-7xl">
          {/* top navigation */}
          <div className="mb-8 flex items-center justify-between sm:mb-8">
            <Link
              href="/explore"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
            >
              <span className="flex size-8 items-center justify-center rounded-full border border-neutral-200 transition-transform group-hover:-translate-x-1">
                <ArrowLeft size={15} />
              </span>
              Semua pilihan
            </Link>

            <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 sm:block">
              Branding / 02
            </span>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-semibold"
              >
                <span className="size-2 rounded-full bg-[#FF6B57]" />
                Build a brand people remember
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="max-w-4xl text-[clamp(3.8rem,9vw,8.8rem)] font-black leading-[0.82] tracking-[-0.075em]"
              >
                Bikin brand
                <br />
                <span className="relative inline-block">
                  punya
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="absolute bottom-[3%] left-0 -z-10 h-[15%] bg-[#F4C430]"
                  />
                </span>{" "}
                <span className="text-[#6C63FF]">karakter.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-md lg:mb-3 lg:justify-self-end"
            >
              <Asterisk
                className="absolute -left-7 -top-8 hidden text-[#FF6B57] sm:block"
                size={28}
              />

              <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
                Bukan cuma logo. Kami bantu membentuk identitas yang terasa
                konsisten, punya personality, dan gampang diingat.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 text-sm font-bold"
              >
                Mulai bikin brand
                <span className="flex size-9 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* floating visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.7, delay: 0.35, type: "spring" }}
            className="absolute right-[8%] top-[18%] hidden size-24 items-center justify-center rounded-[28px] bg-[#FF6B57] text-white shadow-xl lg:flex"
          >
            <Sparkles size={38} strokeWidth={1.5} />
          </motion.div>

          <div className="mt-14 flex items-center justify-center sm:mt-20">
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-neutral-400"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                Scroll
              </span>
              <ArrowDown size={16} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              More than a logo
            </span>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Brand yang bagus bukan cuma{" "}
              <span className="text-[#6C63FF]">kelihatan bagus.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              Ia terasa. Dari cara logo tampil, warna berbicara, font dipilih,
              sampai bagaimana semuanya muncul di Instagram, packaging, website,
              atau kartu nama.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE MAKE */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                What we build
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Satu brand, banyak bagian.
              </h2>
            </div>

            <Shapes className="hidden text-[#F4C430] sm:block" size={38} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brandItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -7, rotate: index % 2 === 0 ? -1 : 1 }}
                  className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-6"
                >
                  <div
                    className="mb-14 flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-12"
                    style={{
                      backgroundColor: item.soft,
                      color: item.accent,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>

                  <div
                    className="absolute -bottom-10 -right-10 size-28 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-150"
                    style={{ backgroundColor: item.accent }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISUAL / PROJECTS */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Brand in action
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                Visual yang terasa hidup.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              Setiap identitas punya dunia visualnya sendiri. Kami bantu
              membangunnya dari awal.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="group relative aspect-[4/5] overflow-hidden rounded-[30px] bg-neutral-100"
                  style={{
                    transform: `rotate(${project.rotate})`,
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${project.image}")`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/65">
                      {project.category}
                    </span>
                    <div className="mt-1 flex items-center justify-between gap-3">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[36px] bg-[#F4C430] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Cara kami bekerja
                </span>

                <h2 className="mt-4 max-w-md text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
                  Dari ide,
                  <br />
                  jadi identitas.
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-relaxed text-black/60">
                  Nggak perlu ribet. Kita mulai dari ngobrol, lalu membangun
                  sesuatu yang memang cocok untuk brand kamu.
                </p>
              </div>

              <div className="grid gap-0">
                {process.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group flex gap-5 border-t border-black/15 py-6 first:border-t-0"
                  >
                    <span className="pt-1 font-mono text-xs font-bold text-black/40">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-1 max-w-lg text-sm leading-relaxed text-black/55">
                        {item.description}
                      </p>
                    </div>

                    <MoveUpRight
                      size={19}
                      className="ml-auto shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Brand playground
              </span>

              <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                Satu identitas.
                <br />
                <span className="text-[#FF6B57]">Banyak kemungkinan.</span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-500">
                Setelah identitas jadi, brand bisa berkembang ke berbagai
                touchpoint tanpa kehilangan karakternya.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {applications.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.04,
                    rotate: index % 2 === 0 ? -2 : 2,
                  }}
                  className="flex aspect-square items-center justify-center rounded-[22px] border border-neutral-200 bg-white p-4 text-center text-sm font-bold"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[36px] bg-[#6C63FF] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
            <motion.div
              animate={{
                rotate: [0, 8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-16 -top-16 size-52 rounded-full bg-[#F4C430]"
            />

            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-16 left-[35%] size-36 rounded-full bg-[#35BFA4]"
            />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Ready when you are
              </span>

              <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-7xl">
                Punya ide?
                <br />
                Bikin jadi brand.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-relaxed text-white/70">
                Ceritakan sedikit tentang project kamu. Kita obrolkan bagaimana
                membuat identitas yang terasa pas.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition-transform hover:scale-105"
              >
                Mulai project
                <span className="flex size-7 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SMALL FOOTER */}
      <section className="px-5 pb-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-neutral-200 pt-6">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Circle size={9} fill="currentColor" />
            Skinylabs
          </div>

          <span className="text-xs text-neutral-400">
            Ide → Identitas → Diingat
          </span>
        </div>
      </section>
    </main>
  );
}
