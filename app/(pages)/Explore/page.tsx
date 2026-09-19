import Link from "next/link";
import { ArrowUpRight, Shapes } from "lucide-react";

import CreativeCard from "@/app/(pages)/Home/CreativeCard";
import { categories } from "./[slug]/Categories";

export default function ExplorePage() {
  return (
    <main className="w-full overflow-hidden text-slate-950">
      {/* =========================================================
          HERO / CATEGORY
      ========================================================= */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-10">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:gap-7 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            {/* Heading */}
            <div className="relative max-w-3xl">
              {/* Decorative shape */}
              <div
                aria-hidden="true"
                className="
                  absolute -top-3 -left-2.5
                  h-7 w-7
                  -rotate-6
                  rounded-[9px]
                  bg-[#FFE4DE]
                  sm:-top-5 sm:-left-5
                  sm:h-10 sm:w-10
                "
              />

              <div className="relative">
                <div className="mb-3 flex items-center gap-2 sm:mb-3.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF9B8A]" />

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#E47D6B]
                      sm:text-[10px]
                      sm:tracking-[0.19em]
                    "
                  >
                    Pilihan kreatif
                  </p>
                </div>

                <h1
                  className="
                    max-w-[760px]
                    text-[2.7rem]
                    font-semibold
                    leading-[0.96]
                    tracking-[-0.055em]
                    sm:text-[3.5rem]
                    sm:leading-[0.94]
                    lg:text-[clamp(3.8rem,5vw,4.75rem)]
                  "
                >
                  Mau bikin apa{" "}
                  <span className="relative inline-block text-slate-400">
                    hari ini?
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        -bottom-1
                        left-0
                        h-1.5
                        w-[82%]
                        rotate-1
                        rounded-full
                        bg-[#BFEDE3]
                        sm:-bottom-1.5
                        sm:h-2
                      "
                    />
                  </span>
                </h1>
              </div>
            </div>

            {/* Description */}
            <p
              className="
                max-w-[360px]
                text-[12px]
                leading-[1.75]
                text-slate-400
                sm:text-[13px]
                sm:leading-[1.8]
                lg:mb-1
                lg:text-[14px]
              "
            >
              Pilih jalur yang paling dekat dengan ide kamu. Dari visual sampai
              pengalaman digital, semuanya bisa dimulai dari sini.
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div key={category.slug} className="group relative">
                {/* Number */}
                <div
                  className={`
                    absolute
                    -top-2
                    -right-1.5
                    z-20
                    flex
                    h-7
                    min-w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-100
                    px-2
                    font-mono
                    text-[8px]
                    font-bold
                    text-slate-400
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:rotate-6
                    sm:-top-2.5
                    sm:-right-1
                    sm:h-8
                    sm:min-w-8
                    sm:text-[9px]
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <CreativeCard
                  number={String(index + 1).padStart(2, "0")}
                  title={category.name}
                  description={category.description}
                  icon={category.icon}
                  accent={category.accent}
                  hoverAccent={category.hoverAccent}
                  soft={category.soft}
                  rotate={category.rotate}
                  href={`/explore/${category.slug}`}
                />
              </div>
            ))}
          </div>

          {/* Category Footer */}
          <div className="mt-8 border-t border-slate-200 pt-4 sm:mt-7 sm:pt-5 lg:mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7FD8C8]" />

                <p
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.14em]
                    text-slate-300
                    sm:text-[9px]
                  "
                >
                  {String(categories.length).padStart(2, "0")} pilihan kreatif
                </p>
              </div>

              <p
                className="
                  max-w-[320px]
                  text-[10px]
                  leading-[1.6]
                  text-slate-400
                  sm:text-right
                  sm:text-[11px]
                "
              >
                Pilih satu, gabungkan beberapa, atau buat sesuatu yang berbeda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div
            className="
              relative
              overflow-hidden
              rounded-[1.5rem]
              border
              border-slate-200
              px-5
              py-8
              sm:rounded-[1.75rem]
              sm:px-10
              sm:py-11
              lg:px-14
              lg:py-12
            "
          >
            {/* Decorative shapes */}
            <div
              aria-hidden="true"
              className="
                absolute
                top-5
                right-5
                h-7
                w-7
                rotate-12
                rounded-[8px]
                bg-[#FFF0C7]
                sm:top-9
                sm:right-12
                sm:h-12
                sm:w-12
                sm:rounded-[11px]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                top-10
                right-14
                h-2.5
                w-2.5
                rounded-full
                bg-[#FF9B8A]
                sm:top-16
                sm:right-32
                sm:h-4
                sm:w-4
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                right-[20%]
                bottom-8
                hidden
                h-5
                w-5
                rotate-45
                rounded-[5px]
                bg-[#BFEDE3]
                sm:block
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-6
                left-5
                h-2.5
                w-2.5
                rounded-full
                bg-[#A99BEF]
                sm:left-12
                sm:h-3
                sm:w-3
              "
            />

            {/* CTA Content */}
            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-8
                md:flex-row
                md:items-center
                md:justify-between
                md:gap-12
              "
            >
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 sm:mb-3.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF9B8A]" />

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#E47D6B]
                      sm:text-[10px]
                      sm:tracking-[0.19em]
                    "
                  >
                    Ada yang ingin diwujudkan?
                  </p>
                </div>

                <h2
                  className="
                    text-[2.6rem]
                    font-semibold
                    leading-[0.96]
                    tracking-[-0.055em]
                    sm:text-[3.5rem]
                    sm:leading-[0.94]
                    lg:text-[clamp(3.8rem,5vw,4.75rem)]
                  "
                >
                  Punya ide kecil?
                  <br />
                  <span className="text-slate-400">
                    Mari bikin jadi sesuatu.
                  </span>
                </h2>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  w-fit
                  shrink-0
                  items-center
                  gap-3
                  rounded-full
                  bg-[#5B8DEF]
                  px-4
                  py-2.5
                  text-[13px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:rotate-[-1deg]
                  hover:shadow-xl
                  hover:shadow-[#5B8DEF]/15
                  active:translate-y-0
                  active:rotate-0
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                <span>Hubungi kami</span>

                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    sm:h-7
                    sm:w-7
                  "
                >
                  <ArrowUpRight size={13} strokeWidth={1.8} />
                </span>
              </Link>
            </div>

            {/* CTA Footer */}
            <div
              className="
                relative
                z-10
                mt-8
                flex
                flex-col
                gap-2.5
                border-t
                border-slate-200/80
                pt-4
                sm:mt-9
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:pt-5
              "
            >
              <div className="flex items-center gap-2">
                <Shapes
                  size={11}
                  className="text-slate-300"
                  strokeWidth={1.5}
                />

                <span
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.14em]
                    text-slate-300
                    sm:text-[9px]
                  "
                >
                  Skinylabs / Studio Kreatif
                </span>
              </div>

              <span className="text-[9px] text-slate-300 sm:text-[10px]">
                Ide → Desain → Jadi
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
