"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function CTASection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="w-full overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative border-t border-slate-200 pt-10 sm:pt-14">
          {/* Decorative route */}
          <div className="pointer-events-none absolute right-[8%] top-[-1px] hidden md:block">
            <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
              <motion.path
                d="M0 1 C35 1 30 70 75 70 C115 70 105 108 150 108"
                stroke="#CBD2DC"
                strokeWidth="1.5"
                strokeDasharray="3 7"
                strokeLinecap="round"
                initial={reducedMotion ? undefined : { pathLength: 0 }}
                whileInView={reducedMotion ? undefined : { pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 1.5,
                  ease: "easeInOut",
                }}
              />

              <motion.circle
                cx="150"
                cy="108"
                r="4"
                fill="#6C63FF"
                initial={reducedMotion ? undefined : { scale: 0, opacity: 0 }}
                whileInView={
                  reducedMotion ? undefined : { scale: 1, opacity: 1 }
                }
                viewport={{ once: true }}
                transition={{
                  delay: reducedMotion ? 0 : 1.2,
                  duration: 0.4,
                }}
              />
            </svg>
          </div>

          {/* Label */}
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6C63FF]" />
            </span>

            <span className="font-mono text-[9px] tracking-[0.2em] text-slate-400">
              WHAT&apos;S NEXT?
            </span>
          </div>

          {/* Main */}
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl text-[3rem] font-semibold leading-[0.9] tracking-[-0.07em] text-slate-950 sm:text-5xl lg:text-[5rem]">
                Punya sesuatu
                <br />
                <span className="text-slate-300">di kepala?</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-slate-500 sm:text-[15px]">
                Ceritakan idemu. Kita cari bentuk terbaik untuk membuatnya jadi
                nyata.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      y: -6,
                    }
              }
              whileTap={
                reducedMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              className="
                group relative
                flex h-32 w-32 shrink-0
                items-center justify-center
                rounded-full
                bg-[#6C63FF]
                text-white
                transition-shadow duration-500
                hover:shadow-[0_25px_50px_-20px_rgba(108,99,255,0.6)]
                sm:h-36 sm:w-36
              "
            >
              <span className="absolute inset-2 rounded-full border border-white/20 transition-transform duration-500 group-hover:scale-90" />

              <span className="relative flex flex-col items-center gap-2">
                <span className="text-[11px] font-medium tracking-wide">
                  Start a project
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.7}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </motion.a>
          </div>

          {/* Bottom note */}
          <div className="mt-14 flex items-center gap-3">
            <span className="h-px w-10 bg-slate-200" />

            <span className="text-[10px] text-slate-400">
              No big brief needed. Just say hello.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
