"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  Palette,
  Code2,
  BrainCircuit,
  Layers3,
} from "lucide-react";
import Image from "next/image";

type Tool = {
  name: string;
  icon: string;
  x: number;
  y: number;
  accent: string;
  rotate?: string;
};

const creativeTools: Tool[] = [
  {
    name: "Adobe",
    icon: "https://cdn.simpleicons.org/adobe/FF0000",
    x: 14.64,
    y: 14.64,
    accent: "bg-[#FFF0ED]",
    rotate: "-rotate-3",
  },
  {
    name: "CorelDRAW",
    icon: "https://cdn.simpleicons.org/coreldraw/44A148",
    x: 85.36,
    y: 14.64,
    accent: "bg-[#E9FAF6]",
    rotate: "rotate-3",
  },
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
    x: 14.64,
    y: 85.36,
    accent: "bg-[#F0EFFF]",
    rotate: "rotate-2",
  },
  {
    name: "Premiere Pro",
    icon: "https://cdn.simpleicons.org/adobepremierepro/9999FF",
    x: 85.36,
    y: 85.36,
    accent: "bg-[#F0EFFF]",
    rotate: "-rotate-2",
  },
  {
    name: "After Effects",
    icon: "https://cdn.simpleicons.org/adobeaftereffects/9999FF",
    x: 50,
    y: 0,
    accent: "bg-[#FFF8DD]",
    rotate: "rotate-3",
  },
  {
    name: "DaVinci Resolve",
    icon: "https://cdn.simpleicons.org/davinciresolve/233A51",
    x: 50,
    y: 100,
    accent: "bg-[#EAF2FF]",
    rotate: "-rotate-3",
  },
];

const frontendTools: Tool[] = [
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    x: 0,
    y: 50,
    accent: "bg-[#EAF2FF]",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/000000",
    x: 100,
    y: 50,
    accent: "bg-[#F1F1F1]",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    x: 50,
    y: 100,
    accent: "bg-[#EAF2FF]",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    x: 50,
    y: 0,
    accent: "bg-[#E9FAF6]",
  },
];

const backendTools: Tool[] = [
  {
    name: "Laravel",
    icon: "https://cdn.simpleicons.org/laravel/FF2D20",
    x: 100,
    y: 50,
    accent: "bg-[#FFF0ED]",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    x: 75,
    y: 6.7,
    accent: "bg-[#E9FAF6]",
  },
  {
    name: "OpenAI",
    icon: "https://cdn.simpleicons.org/openai/000000",
    x: 25,
    y: 6.7,
    accent: "bg-[#F1F1F1]",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    x: 0,
    y: 50,
    accent: "bg-[#FFF8DD]",
  },
  {
    name: "Groq",
    icon: "https://cdn.simpleicons.org/groq/F55036",
    x: 25,
    y: 93.3,
    accent: "bg-[#FFF8DD]",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    x: 75,
    y: 93.3,
    accent: "bg-[#EAF2FF]",
  },
];

const categories = [
  {
    label: "Creative",
    count: "06",
    icon: Palette,
    description: "Visual design & motion",
    iconClass: "text-[#E85D9E]",
    bgClass: "bg-[#FDF0F7]",
  },
  {
    label: "Frontend",
    count: "04",
    icon: Code2,
    description: "Interfaces & experiences",
    iconClass: "text-[#6C63FF]",
    bgClass: "bg-[#F0EFFF]",
  },
  {
    label: "Backend + AI",
    count: "06",
    icon: BrainCircuit,
    description: "Systems & intelligence",
    iconClass: "text-[#FF6B57]",
    bgClass: "bg-[#FFF0ED]",
  },
];

function ToolNode({
  tool,
  index,
  reverse,
  duration,
  reduceMotion,
}: {
  tool: Tool;
  index: number;
  reverse: boolean;
  duration: number;
  reduceMotion: boolean;
}) {
  const counterRotation = reverse ? 360 : -360;

  return (
    <motion.div
      className="
        absolute
        z-20
        -translate-x-1/2
        -translate-y-1/2
      "
      style={{
        left: `${tool.x}%`,
        top: `${tool.y}%`,
      }}
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.045,
        ease: "easeOut",
      }}
    >
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, counterRotation],
              }
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -3, 0],
                }
          }
          transition={{
            duration: 4 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="group relative"
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-full
              z-50
              mt-2
              -translate-x-1/2
              translate-y-1
              whitespace-nowrap
              rounded-full
              border
              border-slate-200
              bg-white
              px-3
              py-1.5
              text-[9px]
              font-medium
              text-slate-700
              opacity-0
              shadow-[0_8px_24px_rgba(15,23,42,0.08)]
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            {tool.name}
          </div>

          <div
            className={`
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-[13px]
              border
              border-white
              shadow-[0_6px_22px_rgba(15,23,42,0.08)]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)]
              sm:h-[42px]
              sm:w-[42px]
              ${tool.accent}
              ${tool.rotate ?? ""}
            `}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-[1px]
                rounded-[12px]
                border
                border-black/[0.025]
              "
            />

            <img
              src={tool.icon}
              alt={tool.name}
              width={20}
              height={20}
              loading="lazy"
              draggable={false}
              className="
                relative
                h-4.75
                w-4.75
                object-contain
              "
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Orbit({
  tools,
  size,
  duration,
  reverse = false,
  dashed = false,
  subtle = false,
}: {
  tools: Tool[];
  size: string;
  duration: number;
  reverse?: boolean;
  dashed?: boolean;
  subtle?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? undefined
          : {
              rotate: reverse ? [0, -360] : [0, 360],
            }
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`
        absolute
        left-1/2
        top-1/2
        aspect-square
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        ${size}
        ${
          dashed
            ? "border border-dashed border-slate-300/80"
            : subtle
            ? "border border-slate-200/50"
            : "border border-slate-300/80"
        }
      `}
    >
      {tools.map((tool, index) => (
        <ToolNode
          key={tool.name}
          tool={tool}
          index={index}
          reverse={reverse}
          duration={duration}
          reduceMotion={Boolean(shouldReduceMotion)}
        />
      ))}

      {!subtle && (
        <span
          className={`
            absolute
            left-1/2
            top-[-3px]
            h-1.5
            w-1.5
            -translate-x-1/2
            rounded-full
            ${dashed ? "bg-[#6C63FF]" : "bg-[#FF6B57]"}
          `}
        />
      )}
    </motion.div>
  );
}

function CategoryItem({
  label,
  count,
  description,
  icon: Icon,
  iconClass,
  bgClass,
}: {
  label: string;
  count: string;
  description: string;
  icon: typeof Palette;
  iconClass: string;
  bgClass: string;
}) {
  return (
    <div className="group flex items-center gap-3">
      <div
        className={`
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-[11px]
          ${bgClass}
          transition-transform
          duration-300
          group-hover:scale-105
        `}
      >
        <Icon size={15} strokeWidth={1.6} className={iconClass} />
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="
              text-[10px]
              font-semibold
              tracking-[-0.01em]
              text-slate-800
            "
          >
            {label}
          </span>

          <span
            className="
              font-mono
              text-[8px]
              text-slate-300
            "
          >
            {count}
          </span>
        </div>

        <p
          className="
            mt-0.5
            text-[9px]
            leading-4
            text-slate-400
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   ORBIT DECORATIONS
========================================================= */

function OrbitDecorations() {
  return (
    <>
      {/* Floating particle */}

      <motion.span
        animate={{
          y: [0, -7, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[9%]
          top-[24%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#FF6B57]
        "
      />

      <motion.span
        animate={{
          y: [0, 6, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[12%]
          top-[17%]
          h-1
          w-1
          rounded-full
          bg-[#6C63FF]
        "
      />

      <motion.span
        animate={{
          y: [0, -5, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[18%]
          left-[15%]
          h-1
          w-1
          rounded-full
          bg-[#F4C430]
        "
      />

      <span
        className="
          absolute
          bottom-[23%]
          right-[9%]
          h-1.5
          w-1.5
          rounded-full
          bg-slate-300
        "
      />

      {/* Tiny cross */}

      <span className="absolute left-[18%] top-[70%]">
        <span
          className="
            absolute
            left-1/2
            top-0
            h-3
            w-px
            -translate-x-1/2
            bg-slate-200
          "
        />

        <span
          className="
            absolute
            left-0
            top-1/2
            h-px
            w-3
            -translate-y-1/2
            bg-slate-200
          "
        />
      </span>

      {/* Another tiny cross */}

      <span className="absolute bottom-[35%] right-[17%]">
        <span
          className="
            absolute
            left-1/2
            top-0
            h-2.5
            w-px
            -translate-x-1/2
            bg-slate-200
          "
        />

        <span
          className="
            absolute
            left-0
            top-1/2
            h-px
            w-2.5
            -translate-y-1/2
            bg-slate-200
          "
        />
      </span>
    </>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function TechStack() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F8F7F3]
        py-8
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        {/* 
        <div className="border-t border-slate-200 pt-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Explore the collection
            </p>
          </div>
        </div> */}

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            mt-12
            grid
            items-center
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* ===================================================
              LEFT — EDITORIAL CONTENT
          ==================================================== */}

          <div className="max-w-xl">
            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-2">
              <div
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-950
                  text-white
                "
              >
                <Layers3 size={11} strokeWidth={1.6} />
              </div>

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-slate-400
                "
              >
                Built around the work
              </span>
            </div>

            {/* Title */}

            <h2
              className="
                text-[46px]
                font-semibold
                leading-[0.92]
                tracking-[-0.065em]
                text-slate-950
                sm:text-[58px]
                md:text-[66px]
                lg:text-[70px]
              "
            >
              Everything we need
              <br />
              <span className="text-slate-400">to make ideas real.</span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-md
                text-[12px]
                leading-6
                text-slate-500
                sm:text-[13px]
              "
            >
              From visual direction to production-ready digital products, we
              bring design, development, and AI into one flexible toolkit.
            </p>

            {/* Categories */}

            <div
              className="
                mt-9
                grid
                gap-4
                border-t
                border-slate-200
                pt-6
                sm:grid-cols-3
                sm:gap-5
              "
            >
              {categories.map((category) => (
                <CategoryItem key={category.label} {...category} />
              ))}
            </div>

            {/* Statement */}

            <div className="mt-9 flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#FF6B57]
                "
              />

              <span
                className="
                  text-[9px]
                  text-slate-400
                "
              >
                The tools evolve. The standard stays high.
              </span>
            </div>
          </div>

          {/* ===================================================
              RIGHT — ORBIT SYSTEM
          ==================================================== */}

          <div
            className="
              relative
              flex
              min-h-[330px]
              items-center
              justify-center
              sm:min-h-[390px]
              lg:min-h-[460px]
            "
          >
            {/* Soft atmosphere */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[260px]
                w-[260px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/60
                blur-[1px]
                sm:h-[330px]
                sm:w-[330px]
                lg:h-[390px]
                lg:w-[390px]
              "
            />

            {/* Radial glow */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[180px]
                w-[180px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/80
                blur-2xl
                sm:h-[230px]
                sm:w-[230px]
              "
            />

            {/* =================================================
                ORBIT PLAYGROUND
            ================================================== */}

            <div
              className="
                relative
                aspect-square
                w-full
                max-w-[320px]
                sm:max-w-[390px]
                lg:max-w-[460px]
              "
            >
              <OrbitDecorations />

              {/* =================================================
                  OUTER — BACKEND / AI
              ================================================= */}

              <Orbit
                tools={backendTools}
                size="h-[90%] w-[90%]"
                duration={46}
                reverse
              />

              {/* =================================================
                  MIDDLE — FRONTEND

                  FIX:
                  4 nodes sekarang tepat pada circumference:

                  React       → 0 / 50
                  Next.js     → 100 / 50
                  Tailwind    → 50 / 0
                  TypeScript  → 50 / 100

                  Tidak lagi menggunakan:
                  7.57 / 92.43

                  Jadi center icon benar-benar menempel
                  di garis dashed.
              ================================================== */}

              <Orbit
                tools={frontendTools}
                size="h-[65%] w-[65%]"
                duration={34}
                dashed
              />

              {/* =================================================
                  INNER — CREATIVE
              ================================================== */}

              <Orbit
                tools={creativeTools}
                size="h-[42%] w-[42%]"
                duration={25}
                reverse
                subtle
              />

              {/* =================================================
                  CENTER HUB
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-30
                  flex
                  h-22
                  w-22
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-[#F8F7F3]/95
                  shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                  sm:h-25
                  sm:w-25
                "
              >
                <div
                  className="
                    flex
                    h-16.5
                    w-16.5
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-white
                    shadow-[0_8px_30px_rgba(15,23,42,0.15)]
                    sm:h-18.5
                    sm:w-18.5
                  "
                >
                  <img src="/logo.svg" alt="" width={50} height={50} />
                </div>
              </motion.div>

              {/* <div
                className="
                  absolute
                  left-[7%]
                  top-[7%]
                  z-40
                  hidden
                  sm:block
                "
              >
                <div
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-[#F8F7F3]
                    px-3
                    py-1.5
                    shadow-[0_5px_20px_rgba(15,23,42,0.04)]
                  "
                >
                  <span
                    className="
                      text-[7px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-slate-400
                    "
                  >
                    Design
                  </span>
                </div>
              </div>

              <div
                className="
                  absolute
                  bottom-[9%]
                  right-[2%]
                  z-40
                  hidden
                  sm:block
                "
              >
                <div
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-[#F8F7F3]
                    px-3
                    py-1.5
                    shadow-[0_5px_20px_rgba(15,23,42,0.04)]
                  "
                >
                  <span
                    className="
                      text-[7px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-slate-400
                    "
                  >
                    Build
                  </span>
                </div>
              </div> */}

              <div
                className="
                  absolute
                  bottom-[4%]
                  left-1/2
                  z-40
                  -translate-x-1/2
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-px w-5 bg-slate-200" />

                  <span
                    className="
                      font-mono
                      text-[7px]
                      tracking-[0.16em]
                      text-slate-300
                    "
                  >
                    16 TOOLS
                  </span>

                  <span className="h-px w-5 bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t
            border-slate-200
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-sm
              text-[10px]
              leading-5
              text-slate-400
            "
          >
            A flexible stack for turning rough ideas into polished digital
            experiences.
          </p>

          <a
            href="/work"
            className="
              group
              flex
              w-fit
              items-center
              gap-2
              text-[10px]
              font-medium
              text-slate-600
              transition-colors
              hover:text-slate-950
            "
          >
            See what we build
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:border-slate-900
                group-hover:bg-slate-900
                group-hover:text-white
              "
            >
              <ArrowUpRight size={12} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
