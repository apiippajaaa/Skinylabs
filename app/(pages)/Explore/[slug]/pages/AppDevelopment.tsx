"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Layers3,
  MousePointer2,
  Palette,
  Play,
  Rocket,
  Sparkles,
  Smartphone,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Rancang tampilannya",
    description:
      "Kami mulai dari alur, tampilan, dan pengalaman yang membuat aplikasi terasa mudah dipahami sejak pertama dibuka.",
    accent: "#A78BFA",
    soft: "#F3EEFF",
    rotate: "-rotate-2",
  },
  {
    number: "02",
    icon: Code2,
    title: "Bangun aplikasinya",
    description:
      "Desain kemudian diterjemahkan menjadi aplikasi yang responsif, cepat, dan nyaman digunakan.",
    accent: "#3B82F6",
    soft: "#EAF2FF",
    rotate: "rotate-1",
  },
  {
    number: "03",
    icon: Database,
    title: "Hubungkan sistemnya",
    description:
      "Data, API, autentikasi, database, dan kebutuhan bisnis disatukan agar aplikasi tidak hanya terlihat bagus.",
    accent: "#35BFA4",
    soft: "#E9FAF6",
    rotate: "-rotate-1",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Siapkan untuk tumbuh",
    description:
      "Struktur aplikasi dibuat dengan mempertimbangkan kebutuhan pengembangan berikutnya.",
    accent: "#FF6B57",
    soft: "#FFF0ED",
    rotate: "rotate-2",
  },
];

const stack = [
  { name: "React", type: "Frontend", icon: Code2 },
  { name: "Next.js", type: "Web App", icon: Zap },
  { name: "Laravel", type: "Backend", icon: Braces },
  { name: "Node.js", type: "Runtime", icon: Cpu },
  { name: "Supabase", type: "Database", icon: Database },
  { name: "Figma", type: "Interface", icon: Palette },
];

const process = [
  {
    step: "01",
    title: "Dengar idenya",
    text: "Apa yang ingin dibuat, siapa yang akan menggunakannya, dan masalah apa yang ingin diselesaikan?",
  },
  {
    step: "02",
    title: "Bentuk alurnya",
    text: "Kami menyusun struktur dan pengalaman supaya setiap layar punya alasan untuk ada.",
  },
  {
    step: "03",
    title: "Bangun & uji",
    text: "Desain berubah menjadi produk nyata, lalu diuji agar terasa masuk akal saat digunakan.",
  },
  {
    step: "04",
    title: "Siap dikembangkan",
    text: "Fondasi dibuat fleksibel agar aplikasi tidak berhenti di versi pertamanya.",
  },
];

function FloatingDot({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={`absolute h-2 w-2 rounded-full ${className}`}
      animate={{
        y: [0, -8, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* floating labels */}
      <motion.div
        initial={{ opacity: 0, x: 18, rotate: 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute -right-2 top-10 z-20 hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:block"
      >
        dibuat untuk manusia ✦
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -18, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute -left-3 bottom-20 z-20 hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:block"
      >
        simpel → cepat
      </motion.div>

      {/* phone */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 3 }}
        whileInView={{ opacity: 1, y: 0, rotate: 2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ rotate: 0, y: -5 }}
        className="relative mx-auto w-[min(76vw,300px)] rounded-[38px] border-[7px] border-slate-900 bg-white p-2 shadow-[0_30px_70px_rgba(15,23,42,0.16)]"
      >
        <div className="overflow-hidden rounded-[29px] bg-[#F7FAFF]">
          {/* status */}
          <div className="flex items-center justify-between px-5 pt-4 text-[9px] font-semibold text-slate-500">
            <span>09:41</span>
            <div className="flex items-center gap-1">
              <span>●●●</span>
              <span>▰</span>
            </div>
          </div>

          {/* app content */}
          <div className="space-y-5 px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400">Selamat datang,</p>
                <p className="text-base font-black tracking-tight text-slate-900">
                  Halo, kamu 👋
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF0ED] text-sm">
                ✦
              </div>
            </div>

            <div className="rounded-[22px] bg-[#3B82F6] p-5 text-white shadow-[0_14px_30px_rgba(59,130,246,0.2)]">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-[9px]">
                  PRODUKTIF HARI INI
                </span>
                <ArrowUpRight size={14} />
              </div>

              <p className="text-[10px] text-blue-100">Jangan lupa satu hal</p>
              <p className="mt-1 text-xl font-black tracking-tight">
                Bikin sesuatu
                <br />
                yang berarti.
              </p>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[11px] font-bold text-slate-900">
                  Aktivitas
                </p>
                <span className="text-[9px] font-semibold text-blue-500">
                  Lihat semua
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  ["72%", "Fokus"],
                  ["18", "Tugas"],
                  ["04", "Selesai"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={`rounded-[16px] p-3 ${
                      index === 0
                        ? "bg-[#EAF2FF]"
                        : index === 1
                        ? "bg-[#E9FAF6]"
                        : "bg-[#FFF8DD]"
                    }`}
                  >
                    <p className="text-sm font-black text-slate-900">{value}</p>
                    <p className="mt-1 text-[8px] font-medium text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between rounded-[17px] border border-slate-100 bg-white p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F3EEFF]">
                  <Sparkles size={14} className="text-[#A78BFA]" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-800">
                    Ide baru
                  </p>
                  <p className="text-[8px] text-slate-400">Tambahkan sesuatu</p>
                </div>
              </div>

              <ChevronRight size={13} className="text-slate-400" />
            </div>
          </div>

          {/* bottom navigation */}
          <div className="flex items-center justify-around border-t border-slate-100 bg-white px-4 py-3">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
            <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
            <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
          </div>
        </div>
      </motion.div>

      {/* background shapes */}
      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 left-1/2 -z-10 h-32 w-32 -translate-x-1/2 rounded-[35%] bg-[#FFF8DD]"
      />

      <FloatingDot className="left-10 top-12 bg-[#FF6B57]" />
      <FloatingDot className="right-16 bottom-12 bg-[#35BFA4]" delay={0.8} />
    </div>
  );
}

export default function AppDevelopment() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.55, ease: "easeOut" },
      };

  return (
    <main className="relative overflow-hidden text-slate-900">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate min-h-[680px]">
        <div className="grid min-h-[680px] items-center gap-12 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:py-16">
          {/* left */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -25 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-10 max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 shadow-sm">
                03 / App Development
              </span>

              <span className="h-px w-8 bg-slate-200" />

              <span className="text-xs font-medium text-slate-400">
                ide → produk
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(3.1rem,8vw,7.6rem)] font-black leading-[0.84] tracking-[-0.075em]">
              Ide kecil.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Aplikasi</span>

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-[5%] left-0 -z-0 h-[24%] rounded-full bg-[#A78BFA]/30"
                />
              </span>
              <br />
              yang nyata.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Kami membantu mengubah ide menjadi aplikasi yang tidak cuma
              terlihat menarik, tapi juga enak digunakan, masuk akal, dan siap
              berkembang.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#layanan"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                Lihat cara kami bekerja
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </Link>

              <Link
                href="#proses"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
              >
                Lihat proses
                <ArrowDown size={15} />
              </Link>
            </div>
          </motion.div>

          {/* right */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.94 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative flex min-h-[480px] items-center justify-center lg:min-h-[600px]"
          >
            <div className="absolute h-[370px] w-[370px] rounded-full bg-[#EAF2FF] blur-[1px] sm:h-[470px] sm:w-[470px]" />

            <div className="absolute right-[8%] top-[12%] h-14 w-14 rotate-12 rounded-[17px] bg-[#FFF8DD] sm:h-20 sm:w-20" />

            <div className="absolute bottom-[14%] left-[5%] h-16 w-16 -rotate-12 rounded-[22px] bg-[#E9FAF6] sm:h-24 sm:w-24" />

            <div className="relative z-10">
              <AppMockup />
            </div>

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -10, 0],
                      rotate: [-4, 1, -4],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[2%] top-[17%] z-20 hidden h-14 w-14 items-center justify-center rounded-[18px] bg-[#FF6B57] text-white shadow-lg sm:flex"
            >
              <Smartphone size={23} />
            </motion.div>

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, 8, 0],
                      rotate: [5, -1, 5],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[16%] right-[4%] z-20 hidden h-14 w-14 items-center justify-center rounded-[18px] bg-[#35BFA4] text-white shadow-lg sm:flex"
            >
              <Zap size={22} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MARQUEE
      ========================================================== */}
      <section className="relative overflow-hidden border-y border-slate-200 py-5">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-8 whitespace-nowrap"
        >
          {[...Array(2)].flatMap((_, group) =>
            ["DESIGN", "DEVELOP", "CONNECT", "TEST", "LAUNCH", "IMPROVE"].map(
              (item, index) => (
                <div
                  key={`${group}-${item}`}
                  className="flex items-center gap-8"
                >
                  <span className="text-sm font-black tracking-[0.22em] text-slate-300">
                    {item}
                  </span>

                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      index % 3 === 0
                        ? "bg-[#3B82F6]"
                        : index % 3 === 1
                        ? "bg-[#A78BFA]"
                        : "bg-[#FF6B57]"
                    }`}
                  />
                </div>
              )
            )
          )}
        </motion.div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="py-20 sm:py-24 lg:py-28">
        <motion.div
          {...reveal}
          className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#3B82F6]">
              01 / bukan sekadar coding
            </span>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.3rem,5vw,5.2rem)] font-black leading-[0.94] tracking-[-0.06em]">
              Aplikasi yang bagus
              <br />
              <span className="text-slate-400">harus terasa masuk akal.</span>
            </h2>

            <div className="mt-8 flex max-w-2xl flex-col gap-6 text-sm leading-7 text-slate-500 sm:text-base">
              <p>
                Bukan hanya tentang menulis kode atau membuat layar terlihat
                cantik. Yang lebih penting adalah bagaimana semuanya bekerja
                ketika benar-benar digunakan.
              </p>

              <p>
                Dari tombol pertama yang ditekan, data yang bergerak di belakang
                layar, sampai pengguna menyelesaikan tujuannya — semuanya kami
                pikirkan sebagai satu pengalaman.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section id="layanan" className="scroll-mt-20">
        <motion.div
          {...reveal}
          className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              02 / yang kami kerjakan
            </span>

            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Dari layar pertama
              <br />
              sampai sistemnya.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Satu proses yang menghubungkan desain, teknologi, dan kebutuhan
            sebenarnya.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={
                  shouldReduceMotion
                    ? {}
                    : { opacity: 0, y: 25, rotate: index % 2 ? 1 : -1 }
                }
                whileInView={
                  shouldReduceMotion ? {} : { opacity: 1, y: 0, rotate: 0 }
                }
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -7, rotate: index % 2 ? -1 : 1 }
                }
                className="group relative min-h-[300px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_22px_50px_rgba(15,23,42,0.09)] sm:min-h-[320px]"
              >
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: item.soft }}
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-[17px]"
                      style={{
                        backgroundColor: item.soft,
                        color: item.accent,
                      }}
                    >
                      <Icon size={21} strokeWidth={2.2} />
                    </div>

                    <span className="text-xs font-black text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-xl font-black tracking-tight text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <div
                      className="mt-5 h-1 w-8 rounded-full transition-all duration-300 group-hover:w-14"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          APP + SYSTEM
      ========================================================== */}
      <section className="py-24 sm:py-28">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-[35px] bg-[#F5F8FF] px-6 py-12 sm:px-10 lg:px-16 lg:py-16"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#A78BFA]/15" />
          <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#35BFA4]/15" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#3B82F6]">
                03 / experience
              </span>

              <h2 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.9] tracking-[-0.065em]">
                Pengguna
                <br />
                <span className="text-slate-400">nggak perlu</span>
                <br />
                tahu kodenya.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                Mereka cukup tahu aplikasinya mudah dipakai. Kompleksitas di
                belakang layar biar kami yang urus.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Alur yang jelas",
                  "Tampilan yang nyaman",
                  "Respons yang cepat",
                  "Struktur yang siap berkembang",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -12 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                      <Check size={13} className="text-[#35BFA4]" />
                    </span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[18%] top-[12%] h-24 w-24 rounded-full bg-[#FFF8DD]" />
              <div className="absolute bottom-[5%] right-[8%] h-20 w-20 rounded-full bg-[#E9FAF6]" />

              <div className="relative">
                <AppMockup />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section id="proses" className="scroll-mt-20">
        <motion.div
          {...reveal}
          className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]"
        >
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#FF6B57]">
              04 / sedikit proses
            </span>

            <h2 className="mt-4 text-[clamp(2.6rem,5vw,5.2rem)] font-black leading-[0.9] tracking-[-0.06em]">
              Ide dulu.
              <br />
              <span className="text-slate-400">Kode kemudian.</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-slate-500">
              Kami tidak langsung membuka editor kode. Karena aplikasi yang baik
              dimulai dari memahami apa yang sebenarnya ingin dibuat.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[17px] top-4 bottom-4 w-px bg-slate-200 sm:left-[21px]" />

            <div className="space-y-7">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative flex gap-5 sm:gap-7"
                >
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[10px] font-black text-slate-500 shadow-sm sm:h-11 sm:w-11">
                    {item.step}
                  </div>

                  <div className="pb-2 pt-1">
                    <h3 className="text-xl font-black tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          STACK
      ========================================================== */}
      <section className="py-24 sm:py-28">
        <motion.div
          {...reveal}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#35BFA4]">
              05 / alat yang dipakai
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Teknologi
              <br />
              <span className="text-slate-400">secukupnya.</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-500">
              Bukan mengejar teknologi paling baru. Kami memilih teknologi yang
              paling masuk akal untuk kebutuhan produknya.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {stack.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.name}
                  initial={
                    shouldReduceMotion ? {} : { opacity: 0, scale: 0.94 }
                  }
                  whileInView={
                    shouldReduceMotion ? {} : { opacity: 1, scale: 1 }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="group rounded-[22px] border border-slate-200 bg-white p-4 transition-shadow hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)] sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-slate-50 transition-colors group-hover:bg-[#EAF2FF]">
                      <Icon size={18} className="text-slate-700" />
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <p className="mt-6 text-sm font-black text-slate-900">
                    {item.name}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">{item.type}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          PLAYGROUND / VISUAL STATEMENT
      ========================================================== */}
      <section className="relative overflow-hidden py-10 sm:py-16">
        <motion.div
          {...reveal}
          className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[38px] bg-slate-900 px-6 py-16 text-center"
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.08, 1],
                    rotate: [0, 5, 0],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[330px] w-[330px] rounded-full bg-[#3B82F6]/25 blur-3xl"
          />

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.12, 1],
                    x: [0, 20, 0],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[10%] h-32 w-32 rounded-full bg-[#A78BFA]/20 blur-2xl"
          />

          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.08, 1],
                    x: [0, -20, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[5%] left-[12%] h-40 w-40 rounded-full bg-[#35BFA4]/20 blur-3xl"
          />

          <FloatingDot className="left-[15%] top-[20%] bg-[#FF6B57]" />
          <FloatingDot
            className="right-[18%] bottom-[22%] bg-[#F4C430]"
            delay={1}
          />

          <div className="relative z-10 max-w-4xl">
            <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-[18px] bg-white/10 text-white backdrop-blur">
              <Play size={21} fill="currentColor" />
            </div>

            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
              bukan cuma aplikasi
            </p>

            <h2 className="mt-5 text-[clamp(2.6rem,7vw,6.8rem)] font-black leading-[0.86] tracking-[-0.07em] text-white">
              Buat sesuatu
              <br />
              yang <span className="text-[#A78BFA]">ingin</span>
              <br />
              dipakai.
            </h2>

            <p className="mx-auto mt-7 max-w-lg text-sm leading-6 text-white/50 sm:text-base">
              Karena produk digital yang paling bagus bukan yang paling rumit.
              Tapi yang membuat orang berpikir, “oh, ternyata semudah ini.”
            </p>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="py-24 sm:py-28">
        <motion.div
          {...reveal}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#A78BFA]">
              06 / siap bikin?
            </span>

            <h2 className="mt-4 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black leading-[0.83] tracking-[-0.075em]">
              Punya ide
              <br />
              aplikasi?
              <br />
              <span className="text-slate-400">Cerita dulu.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Tidak harus sudah punya brief lengkap. Bahkan kalau baru punya
              satu kalimat dan banyak “gimana kalau…”, itu sudah cukup untuk
              memulai percakapan.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#3B82F6] px-6 py-4 text-sm font-black text-white shadow-[0_15px_35px_rgba(59,130,246,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(59,130,246,0.28)]"
            >
              Ceritakan idemu
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          FOOTER LABEL
      ========================================================== */}
      <div className="flex flex-col gap-3 border-t border-slate-200 py-7 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <span>APP DEVELOPMENT</span>
        <span>DESIGN × DEVELOP × CREATE</span>
      </div>
    </main>
  );
}
