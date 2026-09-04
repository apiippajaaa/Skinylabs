"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import TechStack from "./TechStack";

/* =========================================================
   CONTENT
========================================================= */

const benefits = [
  {
    number: "01",
    title: "Built around ideas",
    description:
      "From the first concept to the final experience, every detail starts with the idea.",
  },
  {
    number: "02",
    title: "Design meets technology",
    description:
      "Creative direction and engineering work together to build digital products that feel right.",
  },
  {
    number: "03",
    title: "Made for real users",
    description:
      "Clear interfaces, thoughtful interactions, and reliable technology built around people.",
  },
  {
    number: "04",
    title: "Flexible by nature",
    description:
      "Websites, digital products, visual content, and creative work — shaped around your needs.",
  },
];

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  eyebrow,
  number,
}: {
  eyebrow: string;
  number: string;
}) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <span
        className="
          font-mono
          text-[9px] sm:text-[10px]
          font-medium
          tracking-[0.16em]
          text-slate-300
        "
      >
        {number}
      </span>

      <span className="h-px w-6 bg-slate-200 sm:w-8" />

      <span
        className="
          text-[9px] sm:text-[10px]
          font-semibold
          uppercase
          tracking-[0.18em] sm:tracking-[0.22em]
          text-slate-400
        "
      >
        {eyebrow}
      </span>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function WhySkinylabs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        w-full
        overflow-hidden
        pt-16
        pb-14
        xs:pt-20
        xs:pb-16
        sm:pt-20
        sm:pb-20
        md:pt-24
        md:pb-24
        lg:pt-28
        lg:pb-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          xs:px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            WHY SKINYLABS
        ================================================= */}

        <div
          className="
            grid
            items-start
            gap-8
            border-t border-slate-200
            pt-7
            sm:gap-10
            sm:pt-8
            md:gap-12
            lg:grid-cols-[0.30fr_0.70fr]
            lg:gap-16
            lg:pt-9
            xl:gap-20
          "
        >
          {/* TITLE */}

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="
              min-w-0
              lg:sticky
              lg:top-28
            "
          >
            <SectionLabel eyebrow="Why Skinylabs" number="01" />

            <h2
              className="
                mt-5
                max-w-[280px]
                text-[30px]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-slate-950
                xs:text-[33px]
                sm:mt-6
                sm:text-[38px]
                md:text-[42px]
                lg:text-[46px]
                xl:text-[50px]
              "
            >
              Ideas deserve
              <br />
              <span className="text-slate-400">better execution.</span>
            </h2>

            <p
              className="
                mt-4
                max-w-[290px]
                text-[11px]
                leading-5
                text-slate-400
                sm:mt-5
                sm:text-[12px]
                sm:leading-6
              "
            >
              We combine design, technology, and creative production to turn
              ideas into digital experiences people want to use.
            </p>
          </motion.div>

          {/* CONTENT */}

          <div className="min-w-0">
            <div
              className="
                grid
                overflow-hidden
                rounded-[20px]
                xs:rounded-[24px]
                border border-slate-200
                bg-white
                sm:grid-cols-2
              "
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  initial={
                    shouldReduceMotion ? undefined : { opacity: 0, y: 14 }
                  }
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="
                    group
                    relative
                    min-h-[145px]
                    border-slate-100
                    p-4
                    transition-colors
                    duration-300
                    hover:bg-slate-50/70
                    xs:min-h-[155px]
                    xs:p-5
                    sm:min-h-[175px]
                    sm:p-6
                  "
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="
                        font-mono
                        text-[9px]
                        font-medium
                        tracking-[0.12em]
                        text-slate-300
                        transition-colors
                        group-hover:text-slate-500
                      "
                    >
                      {benefit.number}
                    </span>

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="
                        text-slate-300
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-slate-600
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  <div
                    className="
                      mt-8
                      xs:mt-9
                      sm:mt-11
                    "
                  >
                    <h3
                      className="
                        text-[12px]
                        font-medium
                        tracking-[-0.01em]
                        text-slate-900
                        sm:text-[13px]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        max-w-[300px]
                        text-[10px]
                        leading-[1.65]
                        text-slate-400
                        sm:text-[11px]
                      "
                    >
                      {benefit.description}
                    </p>
                  </div>

                  <span
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-4
                      h-px
                      w-0
                      bg-slate-900
                      transition-all
                      duration-500
                      group-hover:w-8
                      xs:left-5
                      sm:left-6
                    "
                  />
                </motion.div>
              ))}
            </div>

            <div
              className="
                mt-4
                flex
                items-center
                gap-2.5
                text-[9px]
                text-slate-300
                sm:mt-5
                sm:text-[10px]
              "
            >
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>From concept to experience</span>
            </div>
          </div>
        </div>

        {/* =================================================
            TOOLKIT
        ================================================= */}

        <div
          className="
            mt-16
            grid
            items-start
            gap-8
            border-t border-slate-200
            pt-7
            sm:mt-20
            sm:gap-10
            sm:pt-8
            md:mt-24
            md:gap-12
            lg:grid-cols-[0.30fr_0.70fr]
            lg:gap-16
            lg:pt-9
            xl:gap-20
          "
        >
          {/* TITLE */}

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="
              min-w-0
              lg:sticky
              lg:top-28
            "
          >
            <SectionLabel eyebrow="Our toolkit" number="02" />

            <h2
              className="
                mt-5
                max-w-[280px]
                text-[30px]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-slate-950
                xs:text-[33px]
                sm:mt-6
                sm:text-[38px]
                md:text-[42px]
                lg:text-[46px]
                xl:text-[50px]
              "
            >
              Design meets
              <br />
              <span className="text-slate-400">technology.</span>
            </h2>

            <p
              className="
                mt-4
                max-w-[290px]
                text-[11px]
                leading-5
                text-slate-400
                sm:mt-5
                sm:text-[12px]
                sm:leading-6
              "
            >
              A carefully selected stack for building fast websites, digital
              products, and creative experiences.
            </p>

            <div
              className="
                mt-6
                hidden
                border-l
                border-slate-200
                pl-4
                lg:block
              "
            >
              <p
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-slate-300
                "
              >
                Selected tools
              </p>

              <p
                className="
                  mt-1.5
                  text-[10px]
                  leading-5
                  text-slate-400
                "
              >
                The stack evolves. The standard stays high.
              </p>
            </div>
          </motion.div>

          {/* CONTENT */}

          <div className="min-w-0">
            <TechStack />

            <div
              className="
                mt-4
                flex
                flex-col
                gap-3
                border-t
                border-slate-200
                pt-4
                sm:mt-5
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:pt-5
              "
            >
              <p
                className="
                  max-w-sm
                  text-[9px]
                  leading-5
                  text-slate-400
                  sm:text-[10px]
                "
              >
                The tools may evolve. The focus stays the same — creating better
                digital experiences.
              </p>

              <a
                href="/about"
                className="
                  group
                  flex
                  shrink-0
                  items-center
                  gap-1.5
                  self-start
                  text-[10px]
                  font-medium
                  text-slate-600
                  transition-colors
                  hover:text-slate-950
                  sm:self-auto
                  sm:text-[11px]
                "
              >
                Our approach
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
