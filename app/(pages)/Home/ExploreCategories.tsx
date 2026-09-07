import {
  Palette,
  LayoutTemplate,
  PenTool,
  Box,
  Type,
  Camera,
  Video,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    number: "01",
    name: "Graphics",
    description: "Visual assets & illustrations",
    icon: Palette,
    accent: "bg-[#FF6B57]",
    soft: "bg-[#FFF0ED]",
    rotate: "-rotate-3",
  },
  {
    number: "02",
    name: "Templates",
    description: "Ready-to-use creative templates",
    icon: LayoutTemplate,
    accent: "bg-[#F4C430]",
    soft: "bg-[#FFF8DD]",
    rotate: "rotate-2",
  },
  {
    number: "03",
    name: "UI / UX",
    description: "Interfaces & design systems",
    icon: PenTool,
    accent: "bg-[#6C63FF]",
    soft: "bg-[#F0EFFF]",
    rotate: "-rotate-2",
  },
  {
    number: "04",
    name: "3D Assets",
    description: "Models, objects & scenes",
    icon: Box,
    accent: "bg-[#35BFA4]",
    soft: "bg-[#E9FAF6]",
    rotate: "rotate-3",
  },
  {
    number: "05",
    name: "Fonts",
    description: "Typefaces & typography",
    icon: Type,
    accent: "bg-[#FF9F43]",
    soft: "bg-[#FFF3E5]",
    rotate: "-rotate-2",
  },
  {
    number: "06",
    name: "Photography",
    description: "Photos & visual collections",
    icon: Camera,
    accent: "bg-[#E85D9E]",
    soft: "bg-[#FDEBF4]",
    rotate: "rotate-2",
  },
  {
    number: "07",
    name: "Video",
    description: "Motion & video assets",
    icon: Video,
    accent: "bg-[#3B82F6]",
    soft: "bg-[#EAF2FF]",
    rotate: "-rotate-3",
  },
  {
    number: "08",
    name: "Code",
    description: "Code, components & resources",
    icon: Code2,
    accent: "bg-[#222222]",
    soft: "bg-[#F1F1F1]",
    rotate: "rotate-2",
  },
];

export default function ExploreCategories() {
  return (
    <section className="w-full overflow-hidden bg-[#F8F7F3] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Explore the collection
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 md:text-6xl">
              Find something
              <br />
              <span className="text-slate-400">worth creating.</span>
            </h2>
          </div>

          <a
            href="/categories"
            className="
              group hidden items-center gap-3
              text-sm font-medium text-slate-700
              md:flex
            "
          >
            <span>View all categories</span>

            <span
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full border border-slate-300
                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:border-slate-900
                group-hover:bg-slate-900
                group-hover:text-white
              "
            >
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>

        {/* Categories */}
        <div
          className="
            grid grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.name}
                href={`/categories/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace("/", "")}`}
                className="
                  group relative min-h-[260px]
                  overflow-hidden rounded-[24px]
                  border border-slate-200/80
                  bg-white
                  p-6
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-slate-300
                "
              >
                {/* Decorative corner */}
                <div
                  className={`
                    absolute -right-8 -top-8
                    h-24 w-24 rounded-full
                    opacity-0
                    transition-all duration-500
                    group-hover:scale-[2.2]
                    group-hover:opacity-100
                    ${category.soft}
                  `}
                />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <span
                    className="
                      font-mono text-[11px] font-medium
                      tracking-wider text-slate-300
                      transition-colors duration-300
                      group-hover:text-slate-500
                    "
                  >
                    {category.number}
                  </span>

                  <span
                    className="
                      flex h-8 w-8 items-center justify-center
                      rounded-full border border-slate-200
                      text-slate-300
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:border-slate-900
                      group-hover:bg-slate-900
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                {/* Icon */}
                <div className="relative mt-9">
                  <div
                    className={`
                      flex h-14 w-14
                      items-center justify-center
                      rounded-[18px]
                      text-white
                      shadow-sm
                      transition-all duration-500
                      ${category.accent}
                      ${category.rotate}
                      group-hover:rotate-0
                      group-hover:scale-110
                    `}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3
                    className="
                      text-[17px] font-semibold
                      tracking-[-0.025em]
                      text-slate-950
                    "
                  >
                    {category.name}
                  </h3>

                  <p
                    className="
                      mt-2 max-w-[190px]
                      text-[13px] leading-relaxed
                      text-slate-400
                      transition-colors duration-300
                      group-hover:text-slate-500
                    "
                  >
                    {category.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`
                    absolute bottom-0 left-0
                    h-[3px] w-0
                    transition-all duration-500
                    group-hover:w-full
                    ${category.accent}
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile link */}
        <a
          href="/categories"
          className="
            group mt-8 flex items-center justify-between
            rounded-2xl border border-slate-200
            bg-white px-5 py-4
            text-sm font-medium text-slate-700
            md:hidden
          "
        >
          <span>View all categories</span>

          <ArrowUpRight
            size={17}
            className="
              transition-transform duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>
      </div>
    </section>
  );
}
