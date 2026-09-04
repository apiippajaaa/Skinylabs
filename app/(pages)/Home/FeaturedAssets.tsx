"use client";

import Image from "next/image";

const assets = [
  {
    id: 1,
    title: "Vintage Poster Collection",
    creator: "Studio Mono",
    category: "Graphics",
    price: "$12",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200",
  },
  {
    id: 2,
    title: "Editorial Brand Kit",
    creator: "Atelier 09",
    category: "Templates",
    price: "$18",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200",
  },
  {
    id: 3,
    title: "Minimal Interface Kit",
    creator: "North Studio",
    category: "UI / UX",
    price: "Free",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200",
  },
  {
    id: 4,
    title: "Form & Space",
    creator: "Object Dept.",
    category: "3D Assets",
    price: "$24",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200",
  },
];

const filters = ["All", "Graphics", "Templates", "UI / UX", "3D Assets"];

export default function FeaturedAssets() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Featured
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-900 md:text-4xl">
              Discover work worth using.
            </h2>
          </div>

          <a
            href="/explore"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            View all →
          </a>
        </div>

        {/* Filter */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`
                shrink-0 rounded-full px-4 py-2 text-xs font-medium
                transition-all duration-200
                ${
                  index === 0
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Assets */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-5">
          {assets.map((asset) => (
            <a key={asset.id} href={`/assets/${asset.id}`} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={asset.image}
                  alt={asset.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Category */}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-slate-600 backdrop-blur-sm">
                  {asset.category}
                </span>
              </div>

              {/* Info */}
              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-medium tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      {asset.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      by {asset.creator}
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-medium text-slate-700">
                    {asset.price}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
