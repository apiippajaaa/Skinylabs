"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Clapperboard,
  Film,
  Layers3,
  Play,
  Scissors,
  Sparkles,
  Volume2,
  WandSparkles,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type VideoItem = {
  title: string;
  category: string;
  duration: string;
  youtubeUrl: string;
  poster: string;
  accent: string;
  soft: string;
  className: string;
};

const videos: VideoItem[] = [
  {
    title: "Cerita yang bergerak",
    category: "CERITA BRAND",
    duration: "00:42",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85",
    accent: "#FF6B57",
    soft: "#FFF0ED",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    title: "Bikin visual bergerak",
    category: "MOTION",
    duration: "00:18",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    poster:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85",
    accent: "#6C63FF",
    soft: "#F0EFFF",
    className: "md:col-span-5",
  },
  {
    title: "Di balik layar",
    category: "PRODUKSI",
    duration: "01:12",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    poster:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85",
    accent: "#F4C430",
    soft: "#FFF8DD",
    className: "md:col-span-5",
  },
  {
    title: "Frame kecil, rasa besar",
    category: "SOSIAL MEDIA",
    duration: "00:26",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    poster:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=85",
    accent: "#35BFA4",
    soft: "#EAF9F6",
    className: "md:col-span-5",
  },
  {
    title: "Dari diam jadi hidup",
    category: "VISUAL",
    duration: "00:36",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=85",
    accent: "#3B82F6",
    soft: "#EAF2FF",
    className: "md:col-span-7",
  },
];

const services = [
  {
    title: "Video Sosial",
    description: "Video pendek yang bikin orang berhenti scroll.",
    icon: Play,
    bg: "bg-[#FFF0ED]",
    iconBg: "bg-[#FF6B57]",
  },
  {
    title: "Motion",
    description: "Teks, grafis, dan visual yang terasa hidup.",
    icon: WandSparkles,
    bg: "bg-[#F0EFFF]",
    iconBg: "bg-[#6C63FF]",
  },
  {
    title: "Video Brand",
    description: "Cerita visual yang membawa karakter brand.",
    icon: Film,
    bg: "bg-[#FFF8DD]",
    iconBg: "bg-[#F4C430]",
  },
  {
    title: "Penyuntingan",
    description: "Potongan, tempo, dan suara yang terasa pas.",
    icon: Scissors,
    bg: "bg-[#EAF9F6]",
    iconBg: "bg-[#35BFA4]",
  },
];

const process = [
  {
    number: "01",
    title: "Cari rasanya.",
    description: "Mood, tujuan, dan cerita dirapikan lebih dulu.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Bikin bergerak.",
    description: "Footage, suara, tipografi, dan motion dirangkai.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Poles sampai pas.",
    description: "Timing kecil disesuaikan sampai semuanya mengalir.",
    icon: WandSparkles,
  },
];

function getYoutubeId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    const videoId = parsed.searchParams.get("v");

    if (videoId) {
      return videoId;
    }

    const embedMatch = parsed.pathname.match(/\/embed\/([^/]+)/);

    if (embedMatch?.[1]) {
      return embedMatch[1];
    }

    return url;
  } catch {
    return url;
  }
}

/* =========================================================
   MODAL VIDEO
========================================================= */

function YoutubeModal({
  video,
  onClose,
}: {
  video: VideoItem;
  onClose: () => void;
}) {
  const youtubeId = getYoutubeId(video.youtubeUrl);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex min-h-dvh items-center justify-center bg-neutral-950/90 px-4 backdrop-blur-md sm:px-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="relative w-full max-w-4xl"
      >
        {/* Tombol tutup */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup video"
          className="absolute -right-2 -top-12 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white hover:text-neutral-950 sm:-right-1 sm:-top-12"
        >
          <X size={17} strokeWidth={2} />
        </button>

        {/* Video */}
        <div className="relative overflow-hidden rounded-[22px] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:rounded-[26px]">
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
              title={video.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VideoPage() {
  const shouldReduceMotion = useReducedMotion();

  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <main className="overflow-hidden pb-20">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="px-4 pb-20 pt-10 sm:px-6 md:pb-28 md:pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.8,
                      rotate: 12,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                      rotate: 5,
                    }
              }
              transition={{ duration: 0.7 }}
              className="absolute right-[3%] top-0 hidden w-44 rotate-3 rounded-[28px] bg-[#F4C430] p-2 shadow-sm sm:block md:w-52"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                <Image
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85"
                  alt="Kamera produksi video"
                  fill
                  sizes="220px"
                  className="object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                    <Play size={16} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-1 pb-1 pt-2">
                <span className="text-[9px] font-bold tracking-[0.16em]">
                  REKAM
                </span>

                <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />
              </div>
            </motion.div>

            <div className="max-w-5xl">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-900/10 bg-[#F0EFFF] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]"
              >
                <Clapperboard size={13} />
                Video & Motion
              </motion.div>

              <motion.h1
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="text-[clamp(3.3rem,9vw,8rem)] font-black leading-[0.82] tracking-[-0.075em] text-neutral-950"
              >
                Ide jadi
                <span className="relative mx-2 inline-block text-[#FF6B57] sm:mx-4">
                  cerita.
                  <span className="absolute -bottom-1 left-0 h-3 w-full -rotate-2 rounded-full bg-[#F4C430] sm:-bottom-2 sm:h-4" />
                </span>
                <br />
                <span className="text-[#6C63FF]">Cerita jadi gerak.</span>
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base"
              >
                Dari footage mentah sampai motion yang hidup. Kami merangkai
                visual, suara, dan tempo supaya pesan terasa lebih dari sekadar
                lewat.
              </motion.p>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {["Cerita", "Motion", "Suara", "Editing"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-900/10 bg-white px-3 py-1.5 text-[11px] font-semibold text-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            <div className="mt-12 flex items-center gap-3 text-xs font-semibold text-neutral-500">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900/10">
                <ArrowDown size={15} />
              </div>

              <span>Geser ke bawah, lalu pilih satu frame.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED VIDEO
      ========================================================= */}

      <section className="px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] bg-neutral-950 sm:rounded-[40px]">
            <button
              type="button"
              onClick={() => setSelectedVideo(videos[0])}
              className="group relative block aspect-video w-full text-left"
              aria-label={`Putar ${videos[0].title}`}
            >
              <Image
                src={videos[0].poster}
                alt={videos[0].title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

              <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-7 sm:top-7">
                <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-black tracking-[0.16em]">
                  PILIHAN UTAMA
                </span>

                <span className="rounded-full bg-black/30 px-3 py-1.5 text-[10px] text-white backdrop-blur-md">
                  2026
                </span>
              </div>

              <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-5 sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                    Skinylabs Creative
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-5xl">
                    Hal-hal yang bergerak.
                  </h2>
                </div>

                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 shadow-xl transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  <Play size={21} fill="currentColor" className="ml-1" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div className="h-full w-[38%] bg-[#FF6B57]" />
              </div>
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between px-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
              Video pilihan
            </span>

            <span className="text-[10px] text-neutral-400">
              Klik untuk menonton
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY
      ========================================================= */}

      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              className="relative mx-auto max-w-md"
            >
              <div className="rotate-[-2deg] rounded-[32px] bg-[#FFF8DD] p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black tracking-[0.18em] text-neutral-400">
                      SEBELUM EDITING
                    </p>

                    <h3 className="mt-1 text-lg font-black">Papan cerita</h3>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4C430]">
                    <Clapperboard size={17} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
                    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
                  ].map((src, index) => (
                    <div
                      key={src}
                      className="relative aspect-video overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={src}
                        alt={`Frame storyboard ${index + 1}`}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />

                      <span className="absolute bottom-2 left-2 rounded-md bg-black/60 px-1.5 py-1 text-[8px] font-black text-white">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <span className="text-[9px] font-bold text-neutral-400">
                    CERITA
                  </span>

                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/10">
                    <div className="h-full w-[72%] rounded-full bg-[#FF6B57]" />
                  </div>

                  <span className="text-[9px] font-black text-neutral-500">
                    72%
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-3 flex h-16 w-16 rotate-6 items-center justify-center rounded-[22px] bg-[#35BFA4] text-white shadow-sm sm:-right-6">
                <Volume2 size={22} />
              </div>

              <div className="absolute -left-4 -top-5 hidden h-12 w-12 -rotate-12 items-center justify-center rounded-2xl bg-[#6C63FF] text-white sm:flex">
                <Camera size={18} />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 25 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-6 md:col-start-7"
          >
            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6B57]">
              Lebih dari sekadar footage
            </span>

            <h2 className="text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
              Video yang bagus
              <br />
              bukan cuma <span className="text-[#6C63FF]">bergerak.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
              Ada tempo. Ada jeda. Ada suara yang masuk di waktu yang tepat.
              Semua disusun supaya pesan terasa natural, bukan seperti sedang
              menjual sesuatu.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Bercerita", "Editing", "Motion", "Desain suara"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-semibold text-neutral-700"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SELECTED WORKS
      ========================================================= */}

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-[#6C63FF]">
                Karya pilihan
              </span>

              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Beberapa frame.
                <br />
                <span className="text-[#FF6B57]">Banyak kemungkinan.</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-neutral-500 md:col-span-4 md:justify-self-end">
              Pilih salah satu. Video akan terbuka di tengah layar.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-12 md:auto-rows-[250px]">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 25,
                        rotate: index % 2 === 0 ? -1 : 1,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                      }
                }
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className={`group relative min-h-[280px] overflow-hidden rounded-[30px] ${video.className}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedVideo(video)}
                  aria-label={`Putar ${video.title}`}
                  className="absolute inset-0 h-full w-full text-left"
                >
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black tracking-[0.15em] text-neutral-800 backdrop-blur">
                      {video.category}
                    </span>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                      style={{ backgroundColor: video.accent }}
                    >
                      <Play size={19} fill="currentColor" className="ml-1" />
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-black text-white sm:text-xl">
                        {video.title}
                      </h3>

                      <div className="mt-1 flex items-center gap-2 text-[10px] font-medium text-white/60">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <span>•</span>
                        <span>{video.duration}</span>
                      </div>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-[#35BFA4]">
                Yang kami buat
              </span>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Satu ide bisa
                <span className="text-[#6C63FF]"> bergerak </span>
                ke banyak arah.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-neutral-500 md:col-span-4 md:justify-self-end">
              Bentuknya bisa berbeda. Rasanya tetap satu.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`group relative min-h-[240px] overflow-hidden rounded-[28px] ${service.bg} p-6 transition duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${service.iconBg} text-white`}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <span className="text-[10px] font-black tracking-widest text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-16">
                    <h3 className="text-xl font-black tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-2 max-w-[220px] text-sm leading-6 text-neutral-600">
                      {service.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="absolute bottom-6 right-6 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-[#EAF9F6] p-6 sm:p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <div className="mb-5 flex h-12 w-12 rotate-[-6deg] items-center justify-center rounded-2xl bg-[#35BFA4] text-white">
                <Film size={20} />
              </div>

              <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-[#35BFA4]">
                Di balik proses
              </span>

              <h2 className="text-3xl font-black leading-[1] tracking-tight sm:text-4xl">
                Dari ide kecil,
                <br />
                jadi frame.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-600">
                Kami tidak langsung memotong footage. Kami mencari dulu
                bagaimana ceritanya ingin terasa.
              </p>
            </div>

            <div className="space-y-3 lg:col-span-7 lg:col-start-6">
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                    whileInView={
                      shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4 rounded-[24px] bg-white p-4 transition duration-300 hover:-translate-y-0.5 sm:p-5"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black tracking-widest text-neutral-400">
                          {item.number}
                        </span>

                        <h3 className="font-black">{item.title}</h3>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="mr-1 shrink-0 text-neutral-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[40px] bg-[#6C63FF] px-6 py-16 text-center sm:px-10 md:py-20">
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [12, 18, 12],
                      y: [0, -6, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-8 -top-8 h-24 w-24 rounded-[30px] bg-[#F4C430]"
            />

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                      rotate: [0, -6, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-[#35BFA4]"
            />

            <div className="absolute right-[18%] top-8 hidden rotate-12 sm:block">
              <Film size={36} strokeWidth={1.3} className="text-white/20" />
            </div>

            <div className="absolute bottom-10 left-[15%] hidden -rotate-12 md:block">
              <Play size={28} strokeWidth={1.4} className="text-white/20" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto mb-6 flex h-12 w-12 rotate-[-5deg] items-center justify-center rounded-full bg-white text-neutral-950">
                <Play size={18} fill="currentColor" />
              </div>

              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                Siap saat kamu siap
              </p>

              <h2 className="text-4xl font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                Punya ide yang
                <br />
                ingin bergerak?
              </h2>

              <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/75">
                Dari satu kalimat sampai storyboard lengkap, kita bisa mulai
                dari mana saja.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-neutral-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Mulai proyek
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VIDEO MODAL
      ========================================================= */}

      {selectedVideo && (
        <YoutubeModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </main>
  );
}
