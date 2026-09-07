"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Lightbulb,
  Layers3,
  UsersRound,
  Shapes,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Built around ideas",
    description:
      "From the first concept to the final experience, every detail starts with the idea.",
    icon: Lightbulb,
    position: "lg:translate-y-8",
    accent: "bg-[#FF6B57]",
    soft: "bg-[#FFF0ED]",
  },
  {
    number: "02",
    title: "Design meets technology",
    description:
      "Creative direction and engineering work together to build digital products that feel right.",
    icon: Layers3,
    position: "lg:-translate-y-4",
    accent: "bg-[#6C63FF]",
    soft: "bg-[#F0EFFF]",
  },
  {
    number: "03",
    title: "Made for real users",
    description:
      "Clear interfaces, thoughtful interactions, and reliable technology built around people.",
    icon: UsersRound,
    position: "lg:translate-y-14",
    accent: "bg-[#35BFA4]",
    soft: "bg-[#E9FAF6]",
  },
  {
    number: "04",
    title: "Flexible by nature",
    description:
      "Websites, digital products, visual content, and creative work — shaped around your needs.",
    icon: Shapes,
    position: "lg:translate-y-1",
    accent: "bg-[#F4C430]",
    soft: "bg-[#FFF8DD]",
  },
];

function Benefit({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[number];
  index: number;
}) {
  const Icon = benefit.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      className={`
        group relative
        ${benefit.position}
      `}
    >
      <div
        className="
          relative overflow-hidden
          rounded-[28px]
          border border-slate-200
          bg-white
          p-6
          transition-all duration-500
          hover:-translate-y-2
          hover:border-slate-300
        "
      >
        {/* Decorative shape */}
        <div
          className={`
            absolute -right-12 -top-12
            h-32 w-32
            rounded-full
            opacity-0
            transition-all duration-500
            group-hover:scale-125
            group-hover:opacity-100
            ${benefit.soft}
          `}
        />

        {/* Header */}
        <div className="relative flex items-center justify-between">
          <span className="font-mono text-[10px] font-medium tracking-[0.14em] text-slate-300">
            {benefit.number}
          </span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
            className="
              text-slate-300
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-slate-900
            "
          />
        </div>

        {/* Icon */}
        <div className="relative mt-10">
          <div
            className={`
              flex h-12 w-12
              items-center justify-center
              rounded-[16px]
              text-white
              transition-all duration-500
              group-hover:rotate-6
              group-hover:scale-110
              ${benefit.accent}
            `}
          >
            <Icon size={20} strokeWidth={1.7} />
          </div>
        </div>

        {/* Text */}
        <div className="relative mt-7">
          <h3 className="text-[16px] font-semibold tracking-[-0.025em] text-slate-950">
            {benefit.title}
          </h3>

          <p className="mt-2 max-w-[260px] text-[11px] leading-[1.7] text-slate-400">
            {benefit.description}
          </p>
        </div>

        {/* Accent */}
        <div
          className={`
            absolute bottom-0 left-6
            h-[3px] w-0
            transition-all duration-500
            group-hover:w-10
            ${benefit.accent}
          `}
        />
      </div>
    </motion.article>
  );
}

export default function WhySkinylabs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F7F3] py-24 md:py-32 lg:py-40">
      {/* Background details */}
      <div className="pointer-events-none absolute left-[8%] top-[15%] h-2 w-2 rounded-full bg-[#FF6B57]" />

      <div className="pointer-events-none absolute right-[12%] top-[28%] h-1.5 w-1.5 rounded-full bg-slate-300" />

      <div className="pointer-events-none absolute bottom-[15%] left-[18%] h-1.5 w-1.5 rounded-full bg-slate-300" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            INTRO
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] font-medium tracking-[0.16em] text-slate-300">
              01
            </span>

            <span className="h-px w-8 bg-slate-200" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Why Skinylabs
            </span>
          </div>

          <h2 className="text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] text-slate-950 sm:text-[64px] md:text-[78px] lg:text-[92px]">
            Ideas deserve
            <br />
            <span className="text-slate-400">better execution.</span>
          </h2>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-[12px] leading-6 text-slate-400">
              We bring design, technology, and creative production together to
              turn ideas into digital experiences people want to use.
            </p>

            <span className="hidden font-mono text-[10px] tracking-[0.12em] text-slate-300 sm:block">
              DESIGN × TECHNOLOGY × CREATIVITY
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:items-start">
          {benefits.map((benefit, index) => (
            <Benefit key={benefit.number} benefit={benefit} index={index} />
          ))}
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-28"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />

            <span className="text-[10px] text-slate-400">
              From concept to experience
            </span>
          </div>

          <a
            href="/about"
            className="
              group flex items-center gap-2
              text-[11px] font-medium text-slate-600
              transition-colors
              hover:text-slate-950
            "
          >
            Our approach
            <span
              className="
                flex h-7 w-7 items-center justify-center
                rounded-full border border-slate-200
                transition-all duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:border-slate-900
                group-hover:bg-slate-900
                group-hover:text-white
              "
            >
              <ArrowUpRight size={13} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
