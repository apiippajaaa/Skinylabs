// app\(pages)\home\ExploreCategories.tsx

import { categories } from "../explore/[slug]/Categories";
import CreativeCard from "./CreativeCard";

export default function ExploreCategories() {
  return (
    <section className="w-full overflow-hidden py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-wide text-neutral-500 uppercase">
              What we do
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
              Explore what we create.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-neutral-500 md:text-right">
            From visual identities to digital experiences, we bring ideas to
            life through design, technology, and creativity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <CreativeCard
              key={category.slug}
              title={category.name}
              description={category.description}
              icon={category.icon}
              accent={category.accent}
              hoverAccent={category.hoverAccent}
              soft={category.soft}
              rotate={category.rotate}
              href={`/explore/${category.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
