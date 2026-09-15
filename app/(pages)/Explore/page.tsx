import Link from "next/link";
import { ArrowDown, ArrowUpRight, Shapes, Star } from "lucide-react";

import { categories } from "@/app/(pages)/Home/data/ExploreCategories";
import CreativeCard from "@/app/(pages)/Home/CreativeCard";

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/\s+/g, "-");
}

const pastelColors = [
  {
    soft: "bg-[#FFE4DE]",
    text: "text-[#E47D6B]",
  },
  {
    soft: "bg-[#DDF5EF]",
    text: "text-[#52B7A5]",
  },
  {
    soft: "bg-[#ECE9FF]",
    text: "text-[#8374D4]",
  },
  {
    soft: "bg-[#FFF3D5]",
    text: "text-[#D5A63D]",
  },
];

export default function ExplorePage() {
  return (
    <main className="w-full overflow-hidden text-slate-950">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section>
        <div
          className="
            mx-auto max-w-7xl
            px-5 pb-14 pt-8
            sm:px-8 sm:pb-20 sm:pt-10
            lg:px-10 lg:pb-28 lg:pt-12
          "
        >
          {/* ---------------------------------------------------------
              Headline
          --------------------------------------------------------- */}
          <div
            className="
              relative
              mx-auto max-w-6xl
              text-center
              lg:mx-0
              lg:text-left
            "
          >
            <Star
              aria-hidden="true"
              className="
                absolute
                right-[4%] top-0
                hidden
                rotate-12
                text-[#F4C96B]
                sm:block
                lg:right-[5%]
              "
              size={25}
              strokeWidth={1.5}
              fill="currentColor"
            />

            <h1
              className="
                mx-auto max-w-[340px]
                text-[2.8rem]
                font-semibold
                leading-[0.96]
                tracking-[-0.065em]

                sm:max-w-[620px]
                sm:text-[4.5rem]
                sm:leading-[0.91]

                lg:mx-0
                lg:max-w-6xl
                lg:text-[clamp(5rem,8vw,7.5rem)]
              "
            >
              Mulai dari{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#718FBD]">
                  “gimana kalau?”
                </span>

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-[3%]
                    left-[-3%]
                    z-0
                    h-[36%]
                    w-[106%]
                    -rotate-2
                    rounded-full
                    bg-[#DDEBFF]
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -right-1
                    -top-1
                    h-2.5
                    w-2.5
                    rotate-12
                    rounded-[3px]
                    bg-[#FF9B8A]

                    sm:-right-3
                    sm:h-4
                    sm:w-4
                  "
                />
              </span>
              <br />
              lalu kita{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#5B8DEF]">wujudkan</span>

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1
                    left-0
                    z-0
                    h-1.5
                    w-[108%]
                    -rotate-1
                    rounded-full
                    bg-[#BFEDE3]

                    sm:h-2
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -right-4
                    bottom-1
                    hidden
                    h-4
                    w-4
                    rotate-45
                    rounded-[5px]
                    bg-[#FFF0C7]
                    sm:block
                  "
                />
              </span>
              .
            </h1>
          </div>

          {/* ---------------------------------------------------------
              Supporting Content
              Desktop : dua description sejajar
              Mobile  : centered / stacked
          --------------------------------------------------------- */}
          <div
            className="
              mx-auto mt-9
              max-w-[700px]

              sm:mt-14

              lg:mt-16
              lg:grid
              lg:max-w-none
              lg:grid-cols-[1fr_1fr]
              lg:items-center
              lg:gap-20
          "
          >
            {/* Main description */}
            <div
              className="
                relative
                mx-auto
                max-w-[470px]
                text-center

                lg:mx-0
                lg:text-left
              "
            >
              {/* Accent line desktop */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  -left-5
                  top-1
                  hidden
                  h-14
                  w-1
                  rounded-full
                  bg-[#BFEDE3]
                  lg:block
                "
              />

              <p
                className="
                  text-[13px]
                  leading-[1.8]
                  text-slate-500

                  sm:text-[15px]
                  sm:leading-[1.85]

                  lg:text-[15px]
                "
              >
                Tidak semua ide datang dengan bentuk yang jelas. Kadang cuma
                dimulai dari satu kalimat, seperti{" "}
                <span className="font-medium text-slate-700">
                  “gimana kalau?”
                </span>
              </p>
            </div>

            {/* Secondary description */}
            <div className="relative mx-auto mt-7 text-center sm:mt-8 lg:mx-0 lg:mt-0 lg:text-left">
              <span
                aria-hidden="true"
                className="absolute -right-1 -top-3 h-2.5 w-2.5 rounded-full bg-[#A99BEF] sm:h-3 sm:w-3 lg:-top-4"
              />

              <p
                className="text-[12px] leading-[1.8] text-slate-400 lg:text-right sm:text-[14px]
                "
              >
                Jelajahi berbagai cara untuk mengubah ide menjadi sesuatu yang
                bisa dilihat, digunakan, dan dirasakan.
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------------
              Explore Indicator
              Mobile : centered
              Desktop: centered terhadap hero
          --------------------------------------------------------- */}
          <div
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-2.5

              sm:mt-9
              sm:gap-3

              lg:mt-10
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#C9DCF9]
                bg-[#EAF2FF]
                text-[#5B8DEF]

                transition-transform
                duration-300
                hover:translate-y-1

                sm:h-9
                sm:w-9
              "
            >
              <ArrowDown
                size={14}
                strokeWidth={1.8}
                className="animate-bounce"
              />
            </span>

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-slate-400

                sm:text-[9px]
                sm:tracking-[0.18em]
              "
            >
              Lihat pilihannya
            </span>
          </div>

          {/* ---------------------------------------------------------
              Decorative Divider
          --------------------------------------------------------- */}
          <div
            className="
              relative
              mx-auto
              mt-10
              max-w-6xl

              sm:mt-14

              lg:mt-16
              lg:mx-0
            "
          >
            <div className="h-px bg-slate-200" />

            {/* Coral dot */}
            <span
              aria-hidden="true"
              className="
                absolute
                -top-1
                left-[28%]
                h-1.5
                w-1.5
                rounded-full
                bg-[#FF9B8A]

                sm:left-[20%]
                sm:h-2
                sm:w-2
              "
            />

            {/* Yellow diamond */}
            <span
              aria-hidden="true"
              className="
                absolute
                -top-1
                left-1/2
                hidden
                h-2.5
                w-2.5
                -translate-x-1/2
                rotate-45
                rounded-[3px]
                bg-[#F4C96B]

                sm:block
                sm:-top-1.5
                sm:h-3
                sm:w-3
              "
            />

            {/* Mint dot */}
            <span
              aria-hidden="true"
              className="
                absolute
                -top-1
                right-[28%]
                h-2
                w-2
                rounded-full
                bg-[#7FD8C8]

                sm:right-[22%]
                sm:h-2.5
                sm:w-2.5
              "
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORY
      ========================================================= */}
      <section>
        <div
          className="
            mx-auto max-w-7xl
            px-5 py-14
            sm:px-8 sm:py-20
            lg:px-10 lg:py-24
          "
        >
          {/* ---------------------------------------------------------
              Section Header
          --------------------------------------------------------- */}
          <div
            className="
              mb-9
              flex
              flex-col
              gap-5

              sm:mb-12
              sm:gap-6

              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* Heading */}
            <div className="relative">
              {/* Playful shape */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -left-3
                  -top-4
                  h-8
                  w-8
                  -rotate-6
                  rounded-[10px]
                  bg-[#FFE4DE]

                  sm:-left-6
                  sm:-top-6
                  sm:h-12
                  sm:w-12
                "
              />

              <div className="relative">
                <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF9B8A]" />

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#E47D6B]

                      sm:text-[10px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Pilihan kreatif
                  </p>
                </div>

                <h2
                  className="
                    text-[2.5rem]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.06em]

                    sm:text-[3.8rem]

                    lg:text-[clamp(4rem,5vw,4.8rem)]
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
                      "
                    />
                  </span>
                </h2>
              </div>
            </div>

            {/* Section description */}
            <p
              className="
                max-w-[340px]
                text-[12px]
                leading-[1.8]
                text-slate-400

                sm:text-[14px]
              "
            >
              Pilih jalur yang paling dekat dengan ide kamu. Dari visual sampai
              pengalaman digital, semuanya bisa dimulai dari sini.
            </p>
          </div>

          {/* ---------------------------------------------------------
              Category Cards
          --------------------------------------------------------- */}
          <div
            className="
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
              sm:gap-3

              lg:grid-cols-4
            "
          >
            {categories.map((category, index) => {
              const slug =
                "slug" in category && category.slug
                  ? category.slug
                  : createSlug(category.name);

              const color = pastelColors[index % pastelColors.length];

              return (
                <div key={category.name} className="group relative">
                  {/* Floating number */}
                  <div
                    className={`
                      absolute
                      -right-1
                      -top-2
                      z-20
                      flex
                      h-7
                      min-w-7
                      items-center
                      justify-center
                      rounded-full
                      px-2
                      text-[8px]
                      font-bold

                      ${color.soft}
                      ${color.text}

                      transition-all
                      duration-300

                      group-hover:-translate-y-1
                      group-hover:rotate-6

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
                    href={`/categories/${slug}`}
                  />
                </div>
              );
            })}
          </div>

          {/* ---------------------------------------------------------
              Category Footer
          --------------------------------------------------------- */}
          <div
            className="
              mt-7
              border-t
              border-slate-200
              pt-4

              sm:mt-6
              sm:pt-5
            "
          >
            <div
              className="
                flex
                flex-col
                gap-2.5

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7FD8C8]" />

                <p
                  className="
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.14em]
                    text-slate-300
                  "
                >
                  {String(categories.length).padStart(2, "0")} pilihan kreatif
                </p>
              </div>

              <p
                className="
                  max-w-[300px]
                  text-[10px]
                  leading-relaxed
                  text-slate-400

                  sm:text-right
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
        <div
          className="
            mx-auto max-w-7xl
            px-5 py-14
            sm:px-8 sm:py-20
            lg:px-10 lg:py-24
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[1.75rem]
              border
              border-slate-200
              px-5
              py-9

              sm:rounded-[2rem]
              sm:px-10
              sm:py-12

              lg:px-14
              lg:py-14
            "
          >
            {/* ---------------------------------------------------------
                Playful Accents
            --------------------------------------------------------- */}
            <div
              aria-hidden="true"
              className="
                absolute
                right-5
                top-5
                h-8
                w-8
                rotate-12
                rounded-[9px]
                bg-[#FFF0C7]

                sm:right-14
                sm:top-10
                sm:h-14
                sm:w-14
                sm:rounded-[12px]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                right-16
                top-12
                h-3
                w-3
                rounded-full
                bg-[#FF9B8A]

                sm:right-36
                sm:top-20
                sm:h-4
                sm:w-4
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-10
                right-[20%]
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
                bottom-7
                left-6
                h-2.5
                w-2.5
                rounded-full
                bg-[#A99BEF]

                sm:left-14
                sm:h-3
                sm:w-3
              "
            />

            {/* ---------------------------------------------------------
                CTA Content
            --------------------------------------------------------- */}
            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-8

                sm:gap-10

                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div className="max-w-2xl">
                <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF9B8A]" />

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#E47D6B]

                      sm:text-[10px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Ada yang ingin diwujudkan?
                  </p>
                </div>

                <h2
                  className="
                    text-[2.5rem]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.06em]

                    sm:text-[3.8rem]

                    lg:text-[clamp(4rem,5vw,4.8rem)]
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

            {/* ---------------------------------------------------------
                CTA Footer
            --------------------------------------------------------- */}
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

                sm:mt-10
                sm:flex-row
                sm:items-center
                sm:justify-between
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
                  "
                >
                  Skinylabs / Studio Kreatif
                </span>
              </div>

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
