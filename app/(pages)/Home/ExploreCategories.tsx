import { ArrowUpRight } from "lucide-react";
import { categories } from "./data/ExploreCategories";

export default function ExploreCategories() {
  return (
    <section className="w-full overflow-hidden py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                Explore the collection
              </p>
            </div>

            <h2 className="text-[38px] font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-4xl md:text-6xl">
              Find something
              <br />
              <span className="text-slate-400">worth creating.</span>
            </h2>
          </div>

          {/* Desktop link */}
          <a
            href="/categories"
            className="group hidden items-center gap-3 text-sm font-medium text-slate-700 md:flex"
          >
            <span>View all categories</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            const slug = category.name
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace("/", "");

            return (
              <a
                key={category.name}
                href={`/categories/${slug}`}
                className="
                  group relative
                  min-h-55
                  overflow-hidden
                  rounded-2xl
                  border border-slate-200/80
                  bg-white
                  p-4
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-slate-300
                  sm:min-h-65
                  sm:rounded-3xl
                  sm:p-6
                "
              >
                {/* Decorative corner */}
                <div
                  className={`
                    absolute -right-8 -top-8
                    h-20 w-20
                    rounded-full
                    opacity-0
                    transition-all duration-500
                    group-hover:scale-[2.2]
                    group-hover:opacity-100
                    sm:h-24 sm:w-24
                    ${category.soft}
                  `}
                />

                {/* Arrow */}
                <div className="relative flex items-start justify-end">
                  <span
                    className="
                      flex h-7 w-7
                      items-center justify-center
                      rounded-full
                      border border-slate-200
                      text-slate-300
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:border-slate-900
                      group-hover:bg-slate-900
                      group-hover:text-white
                      sm:h-8 sm:w-8
                    "
                  >
                    <ArrowUpRight
                      size={13}
                      className="sm:h-[14px] sm:w-[14px]"
                    />
                  </span>
                </div>

                {/* Icon */}
                <div className="relative mt-6 sm:mt-9">
                  <div
                    className={`
                      flex
                      h-11 w-11
                      items-center justify-center
                      rounded-[14px]
                      text-white
                      shadow-sm
                      transition-all duration-500
                      group-hover:rotate-0
                      group-hover:scale-110
                      sm:h-14 sm:w-14
                      sm:rounded-[18px]
                      ${category.accent}
                      ${category.rotate}
                    `}
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="sm:h-[22px] sm:w-[22px]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-5 sm:mt-7">
                  <h3 className="text-[15px] font-semibold tracking-tight text-slate-950 sm:text-[17px]">
                    {category.name}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      max-w-full
                      text-[11px]
                      leading-relaxed
                      text-slate-400
                      transition-colors duration-300
                      group-hover:text-slate-500
                      sm:mt-2
                      sm:max-w-47.5
                      sm:text-[13px]
                    "
                  >
                    {category.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`
                    absolute bottom-0 left-0
                    h-0.75 w-0
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
            group mt-5
            flex items-center justify-between
            rounded-2xl
            border border-slate-200
            bg-white
            px-5 py-4
            text-sm font-medium
            text-slate-700
            transition-all duration-300
            hover:border-slate-300
            hover:bg-slate-50
            md:hidden
          "
        >
          <span>View all categories</span>

          <span
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-full
              border border-slate-200
              transition-all duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              group-hover:border-slate-900
              group-hover:bg-slate-900
              group-hover:text-white
            "
          >
            <ArrowUpRight size={15} />
          </span>
        </a>
      </div>
    </section>
  );
}
