import {
  Palette,
  LayoutTemplate,
  PenTool,
  Box,
  Type,
  Camera,
  Video,
  Code2,
} from "lucide-react";

const categories = [
  {
    number: "01",
    name: "Graphics",
    description: "Visual assets & illustrations",
    icon: Palette,
  },
  {
    number: "02",
    name: "Templates",
    description: "Ready-to-use creative templates",
    icon: LayoutTemplate,
  },
  {
    number: "03",
    name: "UI / UX",
    description: "Interfaces & design systems",
    icon: PenTool,
  },
  {
    number: "04",
    name: "3D Assets",
    description: "Models, objects & scenes",
    icon: Box,
  },
  {
    number: "05",
    name: "Fonts",
    description: "Typefaces & typography",
    icon: Type,
  },
  {
    number: "06",
    name: "Photography",
    description: "Photos & visual collections",
    icon: Camera,
  },
  {
    number: "07",
    name: "Video",
    description: "Motion & video assets",
    icon: Video,
  },
  {
    number: "08",
    name: "Code",
    description: "Code, components & resources",
    icon: Code2,
  },
];

export default function ExploreCategories() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Explore
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-900 md:text-4xl">
              Find something worth creating.
            </h2>
          </div>

          <a
            href="/categories"
            className="hidden text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 md:block"
          >
            View all →
          </a>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4">
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
                    group relative bg-white p-6
                    transition-all duration-300
                    hover:bg-slate-50
                  "
              >
                {/* Number */}
                <span className="text-[10px] font-medium tracking-wider text-slate-300">
                  {category.number}
                </span>

                {/* Icon */}
                <div className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:text-slate-900">
                  <Icon size={18} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="text-[15px] font-medium tracking-tight text-slate-900">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {category.description}
                  </p>
                </div>

                {/* Arrow */}
                <span className="absolute right-6 top-6 text-sm text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-900">
                  ↗
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile link */}
        <a
          href="/categories"
          className="mt-6 block text-sm font-medium text-slate-500 md:hidden"
        >
          View all categories →
        </a>
      </div>
    </section>
  );
}
