import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { categories } from "@/app/(pages)/Home/data/ExploreCategories";
import CreativeCard from "@/app/(pages)/Home/CreativeCard";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/\s+/g, "-");
}

export default function ExplorePage() {
  return (
    <main className="w-full overflow-hidden text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative">
        <div className="relative mx-auto max-w-7xl">
          {/* Decorative system */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Quarter circle — desktop */}
            <div className="absolute -right-1 -top-1 hidden h-72 w-72 rounded-bl-full bg-[#EAF2FF] lg:block xl:h-80 xl:w-80" />

            {/* Quarter circle — mobile */}
            <div className="absolute -right-1 -top-1 h-36 w-36 rounded-bl-full bg-[#EAF2FF] sm:h-52 sm:w-52 lg:hidden" />

            {/* Orbit / ring */}
            <div className="absolute right-[5%] top-[8%] hidden h-20 w-20 rounded-full border-[10px] border-current bg-[#BFEDE3] sm:block sm:h-28 sm:w-28 sm:border-[14px]" />

            {/* Small geometric accent */}
            <div className="absolute right-[27%] top-[13%] hidden h-12 w-12 rotate-12 rounded-[14px] bg-[#FFF0C7] sm:block sm:h-16 sm:w-16" />

            {/* Small dots */}
            <div className="absolute right-[18%] top-[31%] hidden h-3 w-3 rounded-full bg-[#CFC2F5] sm:block" />
            <div className="absolute left-[8%] top-[20%] hidden h-2.5 w-2.5 rounded-full bg-[#FFD4CC] sm:block" />
          </div>

          {/* Hero content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-8 flex items-center sm:mb-14">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#5B8DEF]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Pilihan kreatif
                </span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="max-w-6xl text-[42px] font-semibold leading-[0.91] tracking-[-0.07em] sm:text-[68px] sm:leading-[0.88] md:text-[82px] lg:text-[104px] xl:text-[118px]">
              Mulai dari{" "}
              <span className="relative inline-block">
                <span className="absolute bottom-[3%] left-[-5%] z-0 h-[42%] w-[110%] -rotate-[2deg] rounded-[10px] bg-[#DCEBFF] sm:rounded-[18px]" />

                <span className="absolute -right-1.5 -top-1.5 z-20 h-2.5 w-2.5 rounded-full bg-[#FF8C78] sm:-right-4 sm:-top-3 sm:h-4 sm:w-4" />

                <span className="relative z-10 text-[#6F8FBE]">
                  “gimana kalau…”
                </span>
              </span>
              <br />
              lalu kita{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#5B8DEF]">wujudkan.</span>

                <span className="absolute -bottom-1 left-0 h-1.5 w-[105%] -rotate-[1.5deg] rounded-full bg-[#BFEDE3] sm:h-2.5" />
              </span>
            </h1>

            {/* Description */}
            <div className="mt-9 grid gap-7 sm:mt-16 sm:gap-10 lg:mt-20 lg:grid-cols-[1fr_390px] lg:items-end lg:gap-20">
              {/* Primary description */}
              <div className="relative max-w-xl">
                <div className="absolute -left-5 top-0 hidden h-full w-px bg-slate-200 sm:block" />

                <p className="max-w-[340px] text-[13px] leading-[1.8] text-slate-400 sm:max-w-none sm:text-[15px] md:text-[16px]">
                  Tidak semua ide datang dengan bentuk yang jelas. Kadang cuma
                  dimulai dari satu kalimat, satu sketsa, atau satu{" "}
                  <span className="font-medium text-slate-600">
                    “gimana kalau?”
                  </span>
                </p>
              </div>

              {/* Secondary description */}
              <div className="relative max-w-sm lg:ml-auto">
                <span className="absolute -right-1 -top-4 hidden h-3 w-3 rotate-45 rounded-[3px] bg-[#CFC2F5] sm:block" />

                <p className="max-w-[340px] text-[12px] leading-[1.8] text-slate-400 sm:max-w-none sm:text-[14px]">
                  Di sini, kamu bisa menjelajahi berbagai cara kami membantu
                  mengubahnya menjadi sesuatu yang bisa dilihat, digunakan, dan
                  dirasakan.
                </p>

                <div className="mt-5 flex items-center gap-3 sm:mt-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C8D9F5] bg-[#EAF2FF] text-[#5B8DEF] sm:h-9 sm:w-9">
                    <ArrowDown
                      size={14}
                      strokeWidth={1.7}
                      className="animate-bounce"
                    />
                  </span>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Lihat pilihannya
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero divider */}
          <div className="relative z-10 mt-11 sm:mt-18 lg:mt-20">
            <div className="h-px bg-slate-200" />

            <span className="absolute -top-1 left-[13%] h-2 w-2 rounded-full bg-[#9FC2F8]" />
            <span className="absolute -top-1.5 left-[34%] h-3 w-3 rotate-45 rounded-[3px] bg-[#F7E7A7]" />
            <span className="absolute -top-1 right-[29%] h-2.5 w-2.5 rounded-full bg-[#9DDDD0]" />
            <span className="absolute -top-1 right-[11%] h-3 w-3 rotate-12 rounded-[4px] bg-[#CFC2F5]" />
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORY
      ========================================================= */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl pt-12 sm:pt-18 lg:pt-24">
          {/* Section heading */}
          <div className="mb-9 grid gap-6 sm:mb-10 lg:mb-14 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16">
            <div className="relative">
              {/* Decorative square */}
              <div className="pointer-events-none absolute -left-6 -top-6 h-12 w-12 rotate-[-8deg] rounded-[13px] bg-[#EAF2FF] sm:-left-8 sm:-top-8 sm:h-16 sm:w-16 sm:rounded-[17px]" />

              <div className="relative z-10">
                <p className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6F8FBE] sm:mb-3">
                  Pilihan kreatif
                </p>

                <h2 className="max-w-2xl text-[37px] font-semibold leading-[0.93] tracking-[-0.065em] text-slate-950 sm:text-5xl md:text-6xl">
                  Mau bikin apa{" "}
                  <span className="relative inline-block text-slate-400">
                    hari ini?
                    <span className="absolute -bottom-1 left-0 h-1.5 w-12 -rotate-2 rounded-full bg-[#BFEDE3] sm:w-14" />
                  </span>
                </h2>
              </div>
            </div>

            <p className="max-w-sm text-[12px] leading-[1.8] text-slate-400 sm:text-[14px] lg:pb-1">
              Pilih jalur yang paling dekat dengan ide kamu. Dari visual sampai
              pengalaman digital, semuanya bisa dimulai dari sini.
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
            {categories.map((category, index) => {
              const slug =
                "slug" in category && category.slug
                  ? category.slug
                  : createSlug(category.name);

              return (
                <CreativeCard
                  key={category.name}
                  number={String(index + 1).padStart(2, "0")}
                  title={category.name}
                  description={category.description}
                  icon={category.icon}
                  accent={category.accent}
                  hoverAccent={category.hoverAccent}
                  soft={category.soft}
                  rotate={category.rotate}
                  href={`/categories/${slug}`}
                />
              );
            })}
          </div>

          {/* Category meta */}
          <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between sm:pt-5">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9FC2F8]" />

              <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-slate-300">
                {String(categories.length).padStart(2, "0")} pilihan kreatif
              </p>
            </div>

            <p className="text-[10px] leading-relaxed text-slate-400">
              Pilih satu, gabungkan beberapa, atau buat sesuatu yang berbeda.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl pb-10 pt-12 sm:pb-16 sm:pt-18 lg:pb-24 lg:pt-24">
          <div className="relative overflow-hidden border-y border-slate-200 py-9 sm:py-12 lg:py-14">
            {/* CTA decorative system */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#EAF2FF] sm:h-72 sm:w-72" />

              <div className="absolute right-[22%] top-7 h-5 w-5 rotate-12 rounded-[5px] bg-[#EDE7FF] sm:h-7 sm:w-7" />

              <div className="absolute bottom-8 left-[32%] h-3 w-3 rotate-45 rounded-[3px] bg-[#FFF0C7]" />
            </div>

            {/* CTA content */}
            <div className="relative z-10 flex flex-col gap-8 sm:gap-9 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6F8FBE] sm:mb-3">
                  Ada yang ingin diwujudkan?
                </p>

                <h2 className="text-[36px] font-semibold leading-[0.93] tracking-[-0.065em] text-slate-950 sm:text-5xl md:text-6xl">
                  Punya ide kecil?
                  <br />
                  <span className="text-slate-400">
                    Mari bikin jadi sesuatu.
                  </span>
                </h2>
              </div>

              <Link
                href="/contact"
                className="group/button inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-transparent px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#5B8DEF] hover:bg-[#5B8DEF] hover:text-white sm:px-5 sm:py-3"
              >
                <span>Hubungi kami</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF2FF] text-[#5B8DEF] transition-all duration-300 group-hover/button:bg-white">
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                  />
                </span>
              </Link>
            </div>

            {/* Footer meta */}
            <div className="relative z-10 mt-7 flex flex-col gap-2 border-t border-slate-200/80 pt-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-slate-300">
                Skinylabs / Studio Kreatif
              </span>

              <span className="text-[9px] text-slate-300">
                Ide → Desain → Jadi
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
