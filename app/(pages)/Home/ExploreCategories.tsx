import { ArrowUpRight } from "lucide-react";
import { categories } from "./data/ExploreCategories";
import CreativeCard from "./CreativeCard";

export default function ExploreCategories() {
  return (
    <section className="w-full overflow-hidden py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
              Explore the collection
            </p>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-[38px] font-semibold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-5xl md:text-6xl">
              Find something
              <br />
              <span className="text-slate-400">worth creating.</span>
            </h2>

            <p className="max-w-xs text-sm leading-relaxed text-slate-400 md:pb-1">
              Explore a collection of creative resources built to help turn
              ideas into something real.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CreativeCard
              key={category.name}
              title={category.name}
              description={category.description}
              icon={category.icon}
              accent={category.accent}
              hoverAccent={category.hoverAccent}
              soft={category.soft}
              rotate={category.rotate}
              href={`/categories/${category.name
                .toLowerCase()
                .replace(/\s*\/\s*/g, "-")
                .replace(/\s+/g, "-")}`}
            />
          ))}
        </div>

        {/* Mobile link */}
        <a
          href="/categories"
          className="
            group mt-4 flex items-center justify-between
            rounded-2xl border border-slate-200 bg-white
            px-5 py-4 text-sm font-medium text-slate-700
            transition-all duration-300
            hover:border-slate-300 hover:bg-slate-50
            md:hidden
          "
        >
          <span>View all categories</span>

          <span
            className="
              flex h-8 w-8 items-center justify-center
              rounded-full border border-slate-200
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
