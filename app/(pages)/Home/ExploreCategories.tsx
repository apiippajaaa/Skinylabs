import { ArrowUpRight } from "lucide-react";
import { categories } from "./data/ExploreCategories";

export default function ExploreCategories() {
  return (
    <section className="w-full overflow-hidden  py-8 md:py-8">
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
            className="group hidden items-center gap-3 text-sm font-medium text-slate-700 md:flex"
          >
            <span>View all categories</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.name}
                href={`/categories/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace("/", "")}`}
                className="group relative min-h-65 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300"
              >
                {/* Decorative corner */}
                <div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 transition-all duration-500 group-hover:scale-[2.2] group-hover:opacity-100 ${category.soft}`}
                />

                {/* Top */}
                <div className="relative flex items-start justify-end">
                  {/* <span
                    className="
                      font-mono text-[11px] font-medium
                      tracking-wider text-slate-300
                      transition-colors duration-300
                      group-hover:text-slate-500
                    "
                  >
                    {category.number}
                  </span> */}

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                {/* Icon */}
                <div className="relative mt-9">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-[18px] text-white shadow-sm transition-all duration-500 ${category.accent} ${category.rotate} group-hover:rotate-0 group-hover:scale-110`}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="text-[17px] font-semibold tracking-tight text-slate-950">
                    {category.name}
                  </h3>

                  <p className=" mt-2 max-w-47.5 text-[13px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-500">
                    {category.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 h-0.75 w-0 transition-all duration-500 group-hover:w-full ${category.accent}`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile link */}
        <a
          href="/categories"
          className="group mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 md:hidden"
        >
          <span>View all categories</span>

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </section>
  );
}
