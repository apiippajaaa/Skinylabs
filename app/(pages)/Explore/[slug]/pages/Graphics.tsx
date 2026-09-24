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
    title: "Identitas Visual",
    type: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Poster & Campaign",
    type: "Visual Campaign",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    title: "Kemasan",
    type: "Packaging",
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    title: "Konten Digital",
    type: "Social Content",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    title: "Eksplorasi Visual",
    type: "Art Direction",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-2",
  },
];

const services = [
  "Logo",
  "Identitas visual",
  "Konten media sosial",
  "Poster",
  "Brosur & katalog",
  "Kemasan",
  "Materi promosi",
  "Visual kampanye",
  "Presentasi",
  "Aset digital",
  "Merchandise",
  "Kebutuhan cetak",
];

const ease = [0.22, 1, 0.36, 1] as const;

const pastelColors = {
  coral: "#FF6B57",
  pink: "#FF9FB2",
  yellow: "#FFD166",
  mint: "#8FE3C1",
  purple: "#B8AEFF",
  blue: "#8DCBFF",
  cream: "#FFF3D8",
};

export default function GraphicsPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* -------------------------------------------------- */}
      {/* HEADER */}
      {/* -------------------------------------------------- */}

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

        <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.14em] text-slate-400 uppercase sm:text-[10px] sm:tracking-[0.18em]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF6B57]" />
          Graphic Design
        </div>
      </header>

      {/* -------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------- */}

      <section className="relative pt-12 sm:pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="relative">
            {/* Floating palette */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 8 }}
              transition={{
                delay: 0.25,
                duration: 0.7,
                type: "spring",
              }}
              className="absolute right-[2%] top-[-15%] z-10 flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FFD166] text-slate-950 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)] sm:right-[7%] sm:h-16 sm:w-16 sm:rounded-[20px] md:right-[13%] md:h-20 md:w-20"
            >
              <Palette size={22} strokeWidth={1.7} className="sm:h-7 sm:w-7" />
            </motion.div>

            {/* Main title */}
            <h1 className="max-w-[1100px] text-[clamp(4.25rem,14vw,10rem)] font-semibold leading-[0.76] tracking-[-0.09em]">
              Graphic
            </h1>

            <div className="relative">
              <h1 className="mt-2 text-[clamp(4.25rem,14vw,10rem)] font-semibold leading-[0.76] tracking-[-0.09em]">
                Design<span className="text-[#FF6B57]">.</span>
              </h1>

              {/* Floating circle */}
              <motion.div
                animate={{
                  y: [0, -9, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-[22%] right-[12%] h-8 w-8 rounded-full bg-[#8FE3C1] shadow-sm sm:h-12 sm:w-12 md:right-[18%] md:h-14 md:w-14"
              />

              {/* Tiny decorative star */}
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
                className="absolute -bottom-[8%] right-[3%] hidden text-[#B8AEFF] sm:block"
              >
                <Sparkles size={22} strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>

          {/* Hero description */}
          <div className="mt-9 grid gap-6 sm:mt-11 md:mt-14 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-[15px] font-medium leading-7 tracking-[-0.02em] text-slate-600 sm:text-lg sm:leading-8 md:text-xl">
              Ide yang bagus layak punya bentuk yang tepat.
              <br className="hidden sm:block" />
              <span className="text-slate-400">
                Kami bantu membuatnya terlihat.
              </span>
            </p>

            <div className="flex items-center gap-3 md:justify-end">
              <span className="h-px w-7 bg-slate-300 sm:w-10" />

              <span className="text-[8px] tracking-[0.16em] text-slate-400 uppercase sm:text-[9px]">
                Visual / Identity / Expression
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* -------------------------------------------------- */}
      {/* HERO VISUAL */}
      {/* -------------------------------------------------- */}

      <section className="mt-10 sm:mt-12 md:mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          className="relative min-h-[360px] overflow-hidden rounded-[26px] bg-[#EDE8FF] sm:min-h-[440px] sm:rounded-[32px] md:min-h-[500px] lg:min-h-[540px]"
        >
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-45"
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
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-24 top-[-12%] h-56 w-56 rounded-full bg-[#FF9FB2] sm:-left-20 sm:h-72 sm:w-72 md:h-80 md:w-80"
          />

          <motion.div
            animate={{
              rotate: [18, 25, 18],
              y: [0, 7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-[15%] -right-[8%] h-56 w-56 rounded-[50px] bg-[#FFD166] sm:h-72 sm:w-72 md:h-80 md:w-80"
          />

          <motion.div
            animate={{
              x: [0, 8, 0],
              y: [0, -8, 0],
              rotate: [-8, 2, -8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[8%] top-[12%] hidden h-20 w-20 rounded-[25px] bg-[#8FE3C1] sm:block md:h-28 md:w-28"
          />

          {/* Poster */}
          <motion.div
            initial={{ y: 35, rotate: -8 }}
            animate={{ y: 0, rotate: -5 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              rotate: -2,
              scale: 1.025,
            }}
            className="absolute left-1/2 top-1/2 h-[250px] w-[188px] -translate-x-1/2 -translate-y-1/2 bg-[#FF6B57] p-3 shadow-[0_35px_80px_-25px_rgba(15,23,42,0.4)] sm:h-[320px] sm:w-[240px] sm:p-4 md:h-[380px] md:w-[285px] md:p-5"
          >
            <div className="flex h-full flex-col justify-between border border-white/40 p-3 sm:p-4">
              <div className="flex items-center justify-between text-white">
                <span className="font-mono text-[7px] tracking-[0.2em] sm:text-[8px]">
                  SKINYLABS
                </span>

                <Circle size={8} fill="currentColor" />
              </div>

              <div>
                <p className="text-[45px] font-black leading-[0.7] tracking-[-0.09em] text-white sm:text-[57px] md:text-[68px]">
                  MAKE
                  <br />
                  IT
                  <br />
                  LOUD
                </p>

                <div className="mt-4 h-1 w-12 bg-white sm:mt-5 sm:w-16" />
              </div>

              <div className="flex items-end justify-between text-white">
                <span className="max-w-[90px] text-[7px] leading-3 opacity-70 sm:text-[8px]">
                  visual is a language.
                </span>

                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* Left floating badge */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [6, 10, 6],
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

          {/* Small playful label */}
          <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[8px] font-semibold tracking-wide text-slate-500 shadow-sm sm:bottom-6 sm:left-6 sm:px-4 sm:py-2 sm:text-[9px]">
            PLAY / EXPLORE / CREATE
          </div>

          {/* Top right mini sticker */}
          <div className="absolute right-4 top-4 flex rotate-6 items-center gap-2 rounded-full bg-white px-3 py-2 text-[8px] font-semibold text-slate-600 shadow-sm sm:right-6 sm:top-6 sm:px-4">
            <Wand2 size={12} />
            MAKE IT YOURS
          </div>
        </motion.div>
      </section>

      {/* -------------------------------------------------- */}
      {/* INTRO */}
      {/* -------------------------------------------------- */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="py-16 sm:py-20 md:py-28"
      >
        <div className="grid gap-8 md:grid-cols-[0.6fr_1.4fr] md:gap-14">
          <div>
            <span className="text-[9px] font-semibold tracking-[0.16em] text-[#FF6B57] uppercase">
              Jadi, apa itu?
            </span>

            <h2 className="mt-2 max-w-sm text-2xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-3xl md:text-4xl">
              Graphic design bukan sekadar bikin gambar.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Graphic design adalah cara mengubah pesan, ide, atau karakter
              menjadi bahasa visual melalui{" "}
              <span className="font-medium text-slate-950">
                warna, tipografi, gambar, bentuk, dan komposisi.
              </span>
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              Jadi bukan cuma soal “bagus”. Visual perlu membantu orang
              mengenali, memahami, dan mengingat apa yang sedang kamu
              komunikasikan.
            </p>

            {/* Small visual keywords */}
            <div className="mt-7 flex flex-wrap gap-2">
              {["Warna", "Tipografi", "Komposisi", "Karakter"].map(
                (item, index) => (
                  <span
                    key={item}
                    className={[
                      "rounded-full px-3 py-1.5 text-[10px] font-medium",
                      index === 0
                        ? "bg-[#FFE0E6] text-[#E4576A]"
                        : index === 1
                        ? "bg-[#FFF0C7] text-[#9A7510]"
                        : index === 2
                        ? "bg-[#E2F8EE] text-[#328E6E]"
                        : "bg-[#E9E6FF] text-[#655AC5]",
                    ].join(" ")}
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* -------------------------------------------------- */}
      {/* WITH / WITHOUT */}
      {/* -------------------------------------------------- */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="mb-6 sm:mb-8">
          <span className="text-[9px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
            Kenapa penting?
          </span>

          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.055em] sm:text-3xl">
            Coba lihat bedanya.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* WITHOUT */}
          <div className="relative overflow-hidden rounded-[26px] bg-[#F3F3F0] p-5 sm:rounded-[30px] sm:p-7 md:p-8">
            <div className="mb-7 flex items-center justify-between">
              <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-medium text-slate-400 shadow-sm">
                TANPA ARAH VISUAL
              </span>

              <span className="text-xl text-slate-300">×</span>
            </div>

            <div className="relative h-[190px] overflow-hidden rounded-[20px] bg-white p-4 sm:h-[250px] sm:p-5">
              <div className="absolute left-5 top-5 h-5 w-20 bg-slate-200" />
              <div className="absolute right-5 top-5 h-5 w-12 bg-slate-100" />

              <div className="absolute left-5 right-5 top-16">
                <div className="h-8 w-[75%] bg-slate-200" />
                <div className="mt-2 h-3 w-[90%] bg-slate-100" />
                <div className="mt-2 h-3 w-[60%] bg-slate-100" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
                <div className="h-14 bg-slate-100 sm:h-16" />
                <div className="h-14 bg-slate-200 sm:h-16" />
                <div className="h-14 bg-slate-100 sm:h-16" />
              </div>

              <span className="absolute bottom-3 right-4 text-[8px] text-slate-300">
                terlihat biasa
              </span>
            </div>

            <p className="mt-5 max-w-sm text-xs leading-6 text-slate-400">
              Pesan tetap bisa tersampaikan, tetapi visual yang tidak konsisten
              lebih sulit membangun karakter yang mudah dikenali.
            </p>
          </div>

          {/* WITH */}
          <div className="relative overflow-hidden rounded-[26px] bg-[#FF6B57] p-5 sm:rounded-[30px] sm:p-7 md:p-8">
            <div className="mb-7 flex items-center justify-between">
              <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold text-[#FF6B57] shadow-sm">
                DENGAN ARAH VISUAL
              </span>

              <Check size={18} className="text-white" />
            </div>

            <div className="relative h-[190px] overflow-hidden rounded-[20px] bg-[#FFE1E7] p-4 sm:h-[250px] sm:p-5">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#8FE3C1]" />

              <div className="absolute bottom-[-30px] left-[-20px] h-32 w-32 rotate-12 rounded-[25px] bg-[#FFD166]" />

              <div className="relative z-10">
                <span className="font-mono text-[8px] tracking-widest text-slate-500">
                  YOUR BRAND
                </span>

                <h3 className="mt-9 text-4xl font-black leading-[0.8] tracking-[-0.07em] text-slate-950 sm:mt-10 sm:text-5xl">
                  LEBIH
                  <br />
                  MUDAH
                  <br />
                  DIINGAT.
                </h3>
              </div>

              <span className="absolute bottom-4 right-4 rounded-full bg-white px-2.5 py-1 text-[8px] font-medium text-slate-500">
                punya karakter
              </span>
            </div>

            <p className="mt-5 max-w-sm text-xs leading-6 text-white/80">
              Visual yang terarah membantu berbagai titik komunikasi terasa
              seperti berasal dari brand yang sama.
            </p>
          </div>
        </div>
      </motion.section>

      {/* -------------------------------------------------- */}
      {/* VISUAL GALLERY */}
      {/* -------------------------------------------------- */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="py-16 sm:py-20 md:py-28"
      >
        <div className="mb-7 flex items-end justify-between sm:mb-9">
          <div>
            <span className="text-[9px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
              Yang bisa dibuat
            </span>

            <h2 className="mt-2 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.055em] sm:text-3xl md:text-4xl">
              Visual untuk banyak kebutuhan.
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
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07,
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

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-90" />

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white sm:inset-x-5 sm:bottom-5">
                <div className="min-w-0">
                  <span className="text-[8px] tracking-[0.14em] text-white/60 uppercase">
                    {work.type}
                  </span>

                  <h3 className="mt-1 truncate text-sm font-semibold tracking-[-0.02em] sm:text-base">
                    {work.title}
                  </h3>
                </div>

                <span className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* -------------------------------------------------- */}
      {/* SERVICES */}
      {/* -------------------------------------------------- */}

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="relative overflow-hidden rounded-[28px] bg-[#FFF0C7] p-5 sm:rounded-[34px] sm:p-8 md:p-10">
          {/* Decorative shape */}
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
                Tidak cuma poster
              </span>

              <h2 className="mt-2 max-w-md text-2xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-3xl md:text-4xl">
                Satu ide bisa punya banyak bentuk.
              </h2>

              <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500 sm:text-sm">
                Dari kebutuhan digital sampai cetak, kami membantu menerjemahkan
                ide yang sama ke berbagai media.
              </p>

              {/* Mini icon */}
              <div className="mt-7 flex h-11 w-11 rotate-[-6deg] items-center justify-center rounded-[14px] bg-white shadow-sm">
                <Shapes size={19} strokeWidth={1.6} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service}
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

      {/* -------------------------------------------------- */}
      {/* CLOSING */}
      {/* -------------------------------------------------- */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
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
            Bukan sekadar membuatnya terlihat bagus.
            <br />
            <span className="text-slate-300">
              Tapi membuatnya terasa seperti milikmu.
            </span>
          </h2>
        </div>
      </motion.section>

      {/* -------------------------------------------------- */}
      {/* CTA */}
      {/* -------------------------------------------------- */}

      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="pb-8 sm:pb-12"
      >
        <div className="relative overflow-hidden rounded-[28px] bg-[#8FE3C1] px-5 py-9 sm:rounded-[34px] sm:px-8 sm:py-11 md:px-12 md:py-14 lg:px-14">
          {/* Decorative shapes */}
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
                Ada sesuatu yang
                <br />
                ingin dibuat?
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
