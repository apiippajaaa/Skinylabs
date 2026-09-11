import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CreativeCardProps {
  number?: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  hoverAccent: string;
  soft: string;
  rotate?: string;
  href?: string;
}

export default function CreativeCard({
  number,
  title,
  description,
  icon: Icon,
  accent,
  hoverAccent,
  soft,
  rotate = "",
  href,
}: CreativeCardProps) {
  const content = (
    <>
      {/* Background shape */}
      <div
        className={`
          pointer-events-none
          absolute -right-12 -top-12
          h-28 w-28
          rounded-full
          opacity-60
          transition-all duration-700
          ease-out
          group-hover:scale-[2.1]
          group-hover:opacity-100
          sm:h-32 sm:w-32
          ${soft}
        `}
      />

      {/* Decorative dot */}
      <div
        className={`
          pointer-events-none
          absolute right-6 top-16
          h-1.5 w-1.5
          rounded-full
          opacity-40
          transition-all duration-500
          group-hover:scale-150
          group-hover:opacity-100
          ${accent}
        `}
      />

      {/* Top row */}
      <div className="relative z-10 flex items-start justify-between">
        {number ? (
          <span className="font-mono text-[10px] font-medium tracking-[0.14em] text-slate-300">
            {number}
          </span>
        ) : (
          <span />
        )}

        <span
          className={`
            flex h-8 w-8
            items-center justify-center
            rounded-full
            border border-slate-200
            bg-white/80
            text-slate-400
            shadow-sm
            transition-all duration-500
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:border-transparent
            group-hover:text-white
            group-hover:shadow-md
            sm:h-9 sm:w-9
            ${accent}
            ${hoverAccent}
          `}
        >
          <ArrowUpRight
            size={14}
            strokeWidth={1.8}
            className="
              transition-transform duration-500
              group-hover:rotate-6
            "
          />
        </span>
      </div>

      {/* Icon */}
      <div className="relative z-10 mt-8 sm:mt-9">
        <div
          className={`
            relative
            flex h-12 w-12
            items-center justify-center
            rounded-[16px]
            text-white
            shadow-[0_8px_20px_-8px_rgba(15,23,42,0.3)]
            transition-all duration-500
            ease-out
            group-hover:scale-110
            group-hover:rotate-3
            group-hover:shadow-[0_14px_28px_-10px_rgba(15,23,42,0.35)]
            sm:h-14 sm:w-14
            sm:rounded-[19px]
            ${accent}
            ${rotate}
          `}
        >
          <span
            className="
              absolute right-1.5 top-1.5
              h-1.5 w-1.5
              rounded-full
              bg-white/40
            "
          />

          <Icon
            size={20}
            strokeWidth={1.8}
            className="
              relative z-10
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Offset shape */}
        <div
          className={`
            absolute -bottom-1 left-1
            -z-10
            h-12 w-12
            rounded-[16px]
            opacity-20
            transition-all duration-500
            group-hover:translate-x-1
            group-hover:translate-y-1
            sm:h-14 sm:w-14
            sm:rounded-[19px]
            ${soft}
          `}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto pt-6 sm:pt-8">
        <h3
          className="
            text-[15px]
            font-semibold
            tracking-[-0.025em]
            text-slate-950
            sm:text-[17px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1.5
            max-w-60
            text-[11px]
            leading-[1.7]
            text-slate-400
            transition-colors duration-300
            group-hover:text-slate-500
            sm:mt-2
            sm:text-[13px]
          "
        >
          {description}
        </p>
      </div>

      {/* Bottom accent */}
      <div
        className={`
          absolute bottom-0 left-5 right-5
          h-1
          origin-left
          scale-x-0
          rounded-full
          transition-transform duration-500
          ease-out
          group-hover:scale-x-100
          sm:left-6 sm:right-6
          ${accent}
        `}
      />

      {/* Corner detail */}
      <div
        className="
          pointer-events-none
          absolute bottom-5 right-5
          h-7 w-7
          opacity-0
          transition-all duration-500
          group-hover:opacity-100
          sm:bottom-6 sm:right-6
        "
      >
        <span className="absolute bottom-0 right-0 h-px w-7 bg-slate-200" />
        <span className="absolute bottom-0 right-0 h-7 w-px bg-slate-200" />
      </div>
    </>
  );

  const className = `
    group relative
    flex min-h-55 flex-col
    overflow-hidden
    rounded-3xl
    border border-slate-200/70

 bg-white 
 

    p-4
    transition-all duration-500
    ease-out
    hover:z-10
    hover:-translate-y-1.5
    hover:border-slate-300
    hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.3)]
    sm:min-h-64
    sm:rounded-[30px]
    sm:p-6
  `;

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
