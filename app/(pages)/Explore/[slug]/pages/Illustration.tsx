"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Brush,
  Circle,
  Dices,
  Heart,
  MousePointer2,
  Palette,
  PenTool,
  Sparkles,
  Star,
  Wand2,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const playgroundItems = [
  {
    title: "Karakter",
    text: "Tokoh, maskot, avatar, dan karakter yang punya kepribadian.",
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=900&q=85",
    accent: "#3B82F6",
    soft: "#EAF2FF",
    rotate: "-rotate-2",
  },
  {
    title: "Poster",
    text: "Visual yang dibuat supaya pesan terasa lebih seru.",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=85",
    accent: "#FF6B57",
    soft: "#FFF0ED",
    rotate: "rotate-2",
  },
  {
    title: "Doodle",
    text: "Coretan kecil yang bisa membuat sebuah interface terasa lebih hidup.",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=85",
    accent: "#F4C430",
    soft: "#FFF8DD",
    rotate: "-rotate-1",
  },
  {
    title: "Visual",
    text: "Eksplorasi bentuk, warna, tekstur, dan hal-hal yang belum punya nama.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85",
    accent: "#A78BFA",
    soft: "#F3F0FF",
    rotate: "rotate-1",
  },
];

const tools = [
  {
    title: "Karakter",
    icon: Wand2,
    color: "#3B82F6",
    soft: "#EAF2FF",
  },
  {
    title: "Doodle",
    icon: PenTool,
    color: "#FF6B57",
    soft: "#FFF0ED",
  },
  {
    title: "Warna",
    icon: Palette,
    color: "#F4C430",
    soft: "#FFF8DD",
  },
  {
    title: "Eksperimen",
    icon: Dices,
    color: "#A78BFA",
    soft: "#F3F0FF",
  },
];

const miniGallery = [
  {
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=85",
    rotate: "-rotate-3",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=700&q=85",
    rotate: "rotate-2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=700&q=85",
    rotate: "-rotate-2",
  },
];

function FloatingDoodle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute select-none ${className}`}>
      {children}
    </div>
  );
}

function SectionNumber({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 items-center rounded-full border border-slate-200 bg-white px-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 shadow-sm">
      {children}
    </span>
  );
}

export default function IllustrationPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden text-slate-900">
      {/* =========================================================
          PLAYGROUND HERO
      ========================================================= */}
      <section className="relative px-5 pb-16 pt-5 sm:px-8 sm:pb-20 sm:pt-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[720px] overflow-hidden rounded-[42px] bg-[#EAF2FF] px-6 py-10 sm:px-10 sm:py-14 lg:min-h-[760px] lg:px-16">
            {/* blobs */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#A78BFA]/30 blur-2xl" />
            <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#35BFA4]/25 blur-3xl" />

            {/* doodle */}
            <FloatingDoodle className="right-[9%] top-[10%]">
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: [0, 15, -10, 0],
                        y: [0, -8, 0],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Star
                  size={55}
                  fill="#F4C430"
                  className="text-[#F4C430]"
                  strokeWidth={1.5}
                />
              </motion.div>
            </FloatingDoodle>

            <FloatingDoodle className="left-[7%] top-[22%]">
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: [0, 180, 360],
                      }
                }
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Asterisk size={38} className="text-[#FF6B57]" />
              </motion.div>
            </FloatingDoodle>

            <FloatingDoodle className="right-[6%] bottom-[15%]">
              <Circle size={28} fill="#35BFA4" className="text-[#35BFA4]" />
            </FloatingDoodle>

            {/* top label */}
            <div className="relative z-10 flex items-center justify-between">
              <SectionNumber>01 / playground</SectionNumber>

              <span className="hidden text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 sm:block">
                Gambar • Main • Ulangi
              </span>
            </div>

            {/* giant typography */}
            <div className="relative z-10 mt-14 sm:mt-16 lg:mt-20">
              <div className="relative">
                <h1 className="max-w-5xl text-[clamp(4rem,12vw,10rem)] font-black leading-[0.78] tracking-[-0.08em]">
                  Bikin
                  <br />
                  <span className="relative inline-block text-blue-500">
                    gambar
                    <svg
                      viewBox="0 0 420 30"
                      className="absolute -bottom-4 left-0 w-[90%]"
                      fill="none"
                    >
                      <path
                        d="M4 19C87 4 280 2 416 14"
                        stroke="#3B82F6"
                        strokeWidth="9"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br />
                  <span className="ml-[12%] inline-block">jadi cerita.</span>
                </h1>

                {/* tiny sticker */}
                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          rotate: [-5, 4, -5],
                          y: [0, -5, 0],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[5%] top-[28%] hidden rounded-[20px] border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block lg:right-[10%]"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#A78BFA]" />
                    <span className="text-xs font-black">
                      jangan terlalu serius
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-md text-base leading-7 text-slate-500 sm:text-lg">
                  Tempat untuk karakter, coretan, warna, dan ide-ide visual yang
                  belum tahu harus disebut apa.
                </p>

                <Link
                  href="#main"
                  className="group flex w-fit items-center gap-3 rounded-full bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-600"
                >
                  Main di sini
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-y-1">
                    <ArrowDown size={15} />
                  </span>
                </Link>
              </div>
            </div>

            {/* floating artwork */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                      rotate: 7,
                    }
              }
              animate={
                reduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                      rotate: 4,
                    }
              }
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="absolute bottom-[-20px] right-[4%] hidden w-[270px] sm:block lg:right-[10%] lg:w-[340px]"
            >
              <div className="relative aspect-[0.82] overflow-hidden rounded-[32px] border-[8px] border-white bg-white shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
                <Image
                  src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1000&q=90"
                  alt="Ilustrasi"
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </div>

              <div className="absolute -left-7 bottom-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B57] text-white shadow-lg">
                <Brush size={25} />
              </div>
            </motion.div>

            {/* mobile artwork */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.95,
                    }
              }
              animate={
                reduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      scale: 1,
                    }
              }
              transition={{ duration: 0.7 }}
              className="relative mt-12 sm:hidden"
            >
              <div className="relative aspect-[1.2] overflow-hidden rounded-[30px] border-[6px] border-white bg-white shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1000&q=90"
                  alt="Ilustrasi"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FLOATING STATEMENT
      ========================================================= */}
      <section
        id="main"
        className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative flex flex-col items-center text-center">
            <FloatingDoodle className="left-[8%] top-0 hidden sm:block">
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: [0, -15, 10, 0],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart
                  size={34}
                  fill="#FFF0ED"
                  className="text-[#FF6B57]"
                  strokeWidth={1.7}
                />
              </motion.div>
            </FloatingDoodle>

            <FloatingDoodle className="right-[10%] top-10 hidden sm:block">
              <Asterisk size={32} className="text-[#35BFA4]" />
            </FloatingDoodle>

            <SectionNumber>02 / cara berpikir</SectionNumber>

            <h2 className="mt-8 max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              Tidak harus sempurna.
              <br />
              <span className="text-blue-500">Yang penting terasa hidup.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-500">
              Kami suka visual yang punya sedikit kejutan. Warna yang tidak
              terduga. Bentuk yang tidak terlalu rapi. Dan karakter yang terasa
              seperti punya sesuatu untuk dikatakan.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PLAYGROUND ITEMS
      ========================================================= */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <SectionNumber>03 / yang bisa dimainkan</SectionNumber>

              <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Mau main
                <br />
                <span className="text-blue-500">yang mana?</span>
              </h2>
            </div>

            <Dices
              size={42}
              strokeWidth={1.5}
              className="hidden text-[#A78BFA] sm:block"
            />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {playgroundItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={
                  reduceMotion
                    ? {}
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
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -8,
                        rotate: 0,
                      }
                }
                className={`group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.05)] ${item.rotate}`}
              >
                <div className="relative aspect-[0.95] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />

                  <div
                    className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: item.soft,
                    }}
                  >
                    <span
                      className="text-xs font-black"
                      style={{
                        color: item.accent,
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-black tracking-tight">
                      {item.title}
                    </h3>

                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full transition group-hover:rotate-45"
                      style={{
                        backgroundColor: item.soft,
                        color: item.accent,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BIG COLOR PLAYGROUND
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[42px] bg-slate-900 px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[570px] lg:px-16">
            {/* colorful blobs */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#A78BFA]/25 blur-3xl" />
            <div className="absolute bottom-[-100px] left-1/3 h-72 w-72 rounded-full bg-[#FF6B57]/20 blur-3xl" />

            <FloatingDoodle className="right-[12%] top-[12%]">
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: [0, 180, 360],
                      }
                }
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Asterisk size={45} className="text-[#F4C430]" />
              </motion.div>
            </FloatingDoodle>

            <div className="relative z-10">
              <SectionNumber>04 / bermain dengan gaya</SectionNumber>

              <h2 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
                Tidak ada
                <br />
                <span className="text-blue-400">satu cara</span> menggambar.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 text-white/60">
                Kadang clean. Kadang ramai. Kadang lucu. Kadang aneh. Gaya
                visual mengikuti cerita, bukan sebaliknya.
              </p>

              {/* tools */}
              <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                {tools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <motion.div
                      key={tool.title}
                      whileHover={
                        reduceMotion
                          ? {}
                          : {
                              y: -6,
                              rotate: 0,
                            }
                      }
                      className="rounded-[22px] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md"
                    >
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: tool.soft,
                        }}
                      >
                        <Icon
                          size={20}
                          style={{
                            color: tool.color,
                          }}
                        />
                      </div>

                      <p className="mt-5 text-sm font-bold text-white">
                        {tool.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MINI COLLAGE
      ========================================================= */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <SectionNumber>05 / sedikit proses</SectionNumber>

              <h2 className="mt-7 text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl">
                Gambar dulu.
                <br />
                <span className="text-blue-500">Rapikan nanti.</span>
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  ["01", "Cari cerita", "Apa yang ingin dibuat dan kenapa?"],
                  ["02", "Coret-coret", "Coba bentuk, warna, dan kemungkinan."],
                  [
                    "03",
                    "Pilih yang terasa",
                    "Kembangkan arah yang paling punya karakter.",
                  ],
                ].map(([number, title, text]) => (
                  <div key={number} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[10px] font-black text-blue-500">
                      {number}
                    </span>

                    <div>
                      <h3 className="font-black">{title}</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* collage */}
            <div className="relative mx-auto h-[460px] w-full max-w-[500px]">
              {miniGallery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.8,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? {}
                      : {
                          opacity: 1,
                          scale: 1,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          scale: 1.04,
                          rotate: 0,
                          zIndex: 20,
                        }
                  }
                  className={`absolute overflow-hidden rounded-[28px] border-[7px] border-white bg-white shadow-[0_25px_60px_rgba(15,23,42,0.12)] ${
                    item.rotate
                  } ${
                    index === 0
                      ? "left-0 top-10 w-[55%]"
                      : index === 1
                      ? "right-0 top-0 w-[56%]"
                      : "bottom-0 left-[22%] w-[58%]"
                  }`}
                >
                  <div className="relative aspect-[0.9]">
                    <Image
                      src={item.image}
                      alt="Eksplorasi ilustrasi"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                </motion.div>
              ))}

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [0, -7, 0],
                        rotate: [-4, 2, -4],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-12 right-2 z-30 flex h-20 w-20 items-center justify-center rounded-full bg-[#F4C430] shadow-xl sm:right-4"
              >
                <Sparkles size={28} className="text-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL PLAYFUL CTA
      ========================================================= */}
      <section className="px-5 pb-20 pt-10 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[42px] bg-[#FFF8DD] px-6 py-14 text-center sm:px-10 sm:py-20">
            <div className="absolute left-[10%] top-[12%]">
              <Asterisk size={32} className="text-[#FF6B57]" />
            </div>

            <div className="absolute right-[10%] top-[20%]">
              <Star size={35} fill="#A78BFA" className="text-[#A78BFA]" />
            </div>

            <div className="absolute bottom-[15%] left-[18%]">
              <Circle size={18} fill="#35BFA4" className="text-[#35BFA4]" />
            </div>

            <div className="relative z-10">
              <SectionNumber>06 / giliranmu</SectionNumber>

              <h2 className="mx-auto mt-7 max-w-4xl text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.82] tracking-[-0.075em]">
                Gimana
                <br />
                <span className="text-blue-500">kalau...?</span>
              </h2>

              <p className="mx-auto mt-8 max-w-md text-base leading-7 text-slate-500">
                Satu kalimat, satu coretan, atau satu ide random juga boleh.
                Kita lihat bisa jadi apa.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-600"
              >
                Ceritakan idemu
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </div>

            {/* bottom doodles */}
            <FloatingDoodle className="bottom-8 right-[10%]">
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: [0, 10, -10, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Palette size={35} className="text-[#3B82F6]" />
              </motion.div>
            </FloatingDoodle>

            <FloatingDoodle className="bottom-10 left-[8%]">
              <Brush size={30} className="text-[#FF6B57]" />
            </FloatingDoodle>
          </div>
        </div>
      </section>
    </main>
  );
}
