"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Circle,
  Focus,
  Image as ImageIcon,
  MoveUpRight,
  Sparkles,
  Star,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
    alt: "Fashion portrait",
    label: "PORTRAIT",
    className: "md:col-span-7 md:row-span-2",
    rotate: "-rotate-1",
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
    alt: "Fashion editorial",
    label: "EDITORIAL",
    className: "md:col-span-5",
    rotate: "rotate-1",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
    alt: "Creative portrait",
    label: "STORY",
    className: "md:col-span-5",
    rotate: "-rotate-1",
  },
  {
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=85",
    alt: "Portrait photography",
    label: "PEOPLE",
    className: "md:col-span-5",
    rotate: "rotate-1",
  },
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
    alt: "Mountain landscape",
    label: "MOMENT",
    className: "md:col-span-7",
    rotate: "-rotate-1",
  },
];

const process = [
  {
    number: "01",
    title: "Lihat dulu.",
    description: "Kami mencari momen kecil yang sering terlewat.",
    icon: Focus,
  },
  {
    number: "02",
    title: "Tangkap ceritanya.",
    description: "Bukan sekadar objek. Ada suasana di baliknya.",
    icon: Camera,
  },
  {
    number: "03",
    title: "Bikin terasa.",
    description: "Warna, cahaya, dan detail dirangkai jadi satu.",
    icon: Sparkles,
  },
];

export default function PhotographyPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden pb-24">
      {/* HERO */}
      <section className="relative px-4 pb-20 pt-12 sm:px-6 md:pb-28 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            {/* Decorative shapes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute -right-3 -top-8 hidden h-20 w-20 rounded-[28px] bg-[#F4C430] sm:block md:-right-2"
            >
              <Star
                size={34}
                strokeWidth={1.5}
                className="absolute left-5 top-5"
              />
            </motion.div>

            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-900/10 bg-[#EAF9F6] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-800"
              >
                <Camera size={13} />
                Photography
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="max-w-4xl text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.84] tracking-[-0.07em] text-neutral-950"
              >
                Bukan cuma
                <span className="relative mx-2 inline-block sm:mx-4">
                  foto.
                  <span className="absolute -bottom-2 left-0 h-3 w-full -rotate-2 rounded-full bg-[#FF6B57]/30 sm:-bottom-3 sm:h-4" />
                </span>
                <br />
                <span className="text-[#6C63FF]">ada ceritanya.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base"
              >
                Kami menangkap momen, suasana, dan detail kecil supaya sebuah
                gambar terasa lebih dari sekadar gambar.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-3 text-xs font-medium text-neutral-500"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900/10">
                <ArrowDown size={15} />
              </div>
              <span>Scroll pelan-pelan.</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO STORY */}
      <section className="px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <div className="relative mx-auto aspect-square max-w-[280px] overflow-hidden rounded-[38px] bg-[#FFF0ED] p-5 sm:max-w-[320px]">
              <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-[10px] font-bold tracking-widest text-neutral-600">
                FRAME 01
              </div>

              <div className="relative h-full overflow-hidden rounded-[28px]">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85"
                  alt="Creative portrait"
                  fill
                  sizes="(max-width: 768px) 80vw, 320px"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-2 -right-3 flex h-16 w-16 rotate-12 items-center justify-center rounded-full bg-[#35BFA4] text-white">
                <Camera size={24} />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B57]">
              Every frame has a feeling
            </span>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
              Kadang yang paling menarik justru yang{" "}
              <span className="text-[#6C63FF]">nggak direncanakan.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
              Cahaya yang kebetulan jatuh dengan pas. Ekspresi yang muncul
              sebentar. Atau detail kecil yang membuat sebuah momen terasa
              hidup.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Portrait", "Brand", "Product", "Event"].map((item, index) => (
                <span
                  key={item}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    index === 0
                      ? "bg-[#F0EFFF]"
                      : index === 1
                      ? "bg-[#FFF8DD]"
                      : index === 2
                      ? "bg-[#EAF9F6]"
                      : "bg-[#EAF2FF]"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL STORY */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#6C63FF]">
                A little visual diary
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                Potongan cerita.
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-neutral-500">
              Beberapa frame, beberapa rasa. Tidak harus berurutan.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-12 md:auto-rows-[250px]">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 30,
                        rotate: index % 2 === 0 ? -2 : 2,
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
                className={`group relative min-h-[300px] overflow-hidden rounded-[28px] bg-neutral-100 ${photo.className}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-neutral-800 backdrop-blur-sm">
                    {photo.label}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-xs font-medium text-white/90">
                    0{index + 1} / 05
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform duration-300 group-hover:rotate-45">
                    <MoveUpRight size={15} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY TYPES */}
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-xl">
            <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#35BFA4]">
              What we capture
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Setiap kebutuhan punya
              <span className="text-[#FF6B57]"> sudutnya sendiri.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Portrait",
                text: "Karakter, ekspresi, dan cerita personal.",
                icon: Circle,
                bg: "bg-[#FFF0ED]",
                iconBg: "bg-[#FF6B57]",
              },
              {
                title: "Product",
                text: "Produk dibuat terlihat lebih hidup.",
                icon: ImageIcon,
                bg: "bg-[#FFF8DD]",
                iconBg: "bg-[#F4C430]",
              },
              {
                title: "Brand",
                text: "Visual yang ikut membangun karakter brand.",
                icon: Sparkles,
                bg: "bg-[#F0EFFF]",
                iconBg: "bg-[#6C63FF]",
              },
              {
                title: "Event",
                text: "Momen yang layak untuk diingat kembali.",
                icon: Camera,
                bg: "bg-[#EAF9F6]",
                iconBg: "bg-[#35BFA4]",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`group relative min-h-[230px] overflow-hidden rounded-[28px] ${item.bg} p-6 transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconBg} text-white`}
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div className="mt-16">
                    <h3 className="text-xl font-bold tracking-tight text-neutral-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-[220px] text-sm leading-6 text-neutral-600">
                      {item.text}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="absolute right-6 top-6 text-neutral-800 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-[#F0EFFF] p-6 sm:p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#6C63FF]">
                Behind the frame
              </span>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
                Sedikit proses.
                <br />
                Banyak rasa.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-600">
                Kami tidak mengejar foto yang sekadar bagus. Kami mencari foto
                yang terasa pas.
              </p>
            </div>

            <div className="space-y-4 lg:col-span-7 lg:col-start-6">
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
                    className="group flex items-center gap-4 rounded-[24px] bg-white p-4 sm:p-5"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-widest text-neutral-400">
                          {item.number}
                        </span>
                        <h3 className="font-bold text-neutral-950">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="mr-1 shrink-0 text-neutral-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ENDING */}
      <section className="px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[40px] bg-[#FF6B57] px-6 py-16 text-center sm:px-10 md:py-20">
            <div className="absolute -left-8 -top-8 h-24 w-24 rotate-12 rounded-[30px] bg-[#F4C430]" />
            <div className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-[#6C63FF]" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Camera size={21} />
              </div>

              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                Your story, your frame
              </p>

              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                Punya cerita yang
                <br />
                mau ditangkap?
              </h2>

              <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/80">
                Ceritakan idenya. Kami bantu mengubahnya menjadi visual yang
                punya rasa.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-neutral-950 transition-transform duration-300 hover:-translate-y-1"
              >
                Mulai cerita
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
