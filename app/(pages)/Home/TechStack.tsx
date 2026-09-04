"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

/* =========================================================
   SKILL ICONS
========================================================= */

type SkillIcon =
  | "nextjs"
  | "react"
  | "ts"
  | "tailwind"
  | "laravel"
  | "figma"
  | "nodejs"
  | "php"
  | "mysql"
  | "postgres"
  | "supabase"
  | "vercel"
  | "git"
  | "docker"
  | "vite"
  | "ps"
  | "ae"
  | "pr";

type Technology = {
  name: string;
  icon: SkillIcon;
  orbit: 1 | 2 | 3;
  angle: number;
};

const technologies: Technology[] = [
  { name: "Next.js", icon: "nextjs", orbit: 1, angle: 0 },
  { name: "React", icon: "react", orbit: 1, angle: 60 },
  { name: "TypeScript", icon: "ts", orbit: 1, angle: 120 },
  { name: "Tailwind CSS", icon: "tailwind", orbit: 1, angle: 180 },
  { name: "Laravel", icon: "laravel", orbit: 1, angle: 240 },
  { name: "Figma", icon: "figma", orbit: 1, angle: 300 },

  { name: "Node.js", icon: "nodejs", orbit: 2, angle: 0 },
  { name: "PHP", icon: "php", orbit: 2, angle: 72 },
  { name: "MySQL", icon: "mysql", orbit: 2, angle: 144 },
  { name: "PostgreSQL", icon: "postgres", orbit: 2, angle: 216 },
  { name: "Supabase", icon: "supabase", orbit: 2, angle: 288 },

  { name: "Git", icon: "git", orbit: 3, angle: 0 },
  { name: "Docker", icon: "docker", orbit: 3, angle: 90 },
  { name: "Vite", icon: "vite", orbit: 3, angle: 180 },
  { name: "After Effects", icon: "ae", orbit: 3, angle: 270 },
];

const SKILL_ICON_BASE = "https://skillicons.dev/icons";

function getSkillIconUrl(icon: SkillIcon) {
  return `${SKILL_ICON_BASE}?i=${icon}&theme=light`;
}

/* =========================================================
   TECH NODE
========================================================= */

function TechNode({ tech }: { tech: Technology }) {
  return (
    <div
      className="
        group relative flex
        h-9 w-9
        xs:h-10 xs:w-10
        sm:h-11 sm:w-11
        shrink-0 items-center justify-center
        rounded-[11px] xs:rounded-[13px]
        border border-slate-200/80
        bg-white/95
        shadow-[0_3px_12px_rgba(15,23,42,0.05)]
        backdrop-blur-sm
        transition-all duration-300
        hover:scale-110
        hover:border-slate-300
        hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]
      "
      aria-label={tech.name}
    >
      <img
        src={getSkillIconUrl(tech.icon)}
        alt=""
        width={28}
        height={28}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="
          h-6 w-6
          xs:h-7 xs:w-7
          select-none object-contain
        "
      />

      <div
        className="
          pointer-events-none absolute left-1/2 top-full z-50 mt-2
          -translate-x-1/2 translate-y-1
          whitespace-nowrap rounded-lg
          border border-slate-200 bg-white
          px-2 py-1
          text-[8px] xs:text-[9px]
          font-medium tracking-tight text-slate-600
          opacity-0
          shadow-lg shadow-slate-900/[0.06]
          transition-all duration-200
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        {tech.name}
      </div>
    </div>
  );
}

/* =========================================================
   ORBIT
========================================================= */

type OrbitProps = {
  size: number;
  radius: number;
  duration: number;
  direction: 1 | -1;
  technologies: Technology[];
  shouldReduceMotion: boolean | null;
  dashed?: boolean;
};

function Orbit({
  size,
  radius,
  duration,
  direction,
  technologies,
  shouldReduceMotion,
  dashed = false,
}: OrbitProps) {
  const rotation = direction === 1 ? { rotate: 360 } : { rotate: -360 };

  const counterRotation = direction === 1 ? { rotate: -360 } : { rotate: 360 };

  return (
    <motion.div
      aria-hidden="true"
      className={`
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        rounded-full border
        ${dashed ? "border-dashed border-slate-200/70" : "border-slate-200/70"}
      `}
      style={{
        width: size,
        height: size,
      }}
      animate={shouldReduceMotion ? undefined : rotation}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="
            absolute left-1/2 top-1/2
            -ml-[18px] -mt-[18px]
            xs:-ml-[20px] xs:-mt-[20px]
            sm:-ml-[22px] sm:-mt-[22px]
          "
          style={{
            transform: `rotate(${tech.angle}deg) translateY(-${radius}px)`,
          }}
        >
          <div style={{ transform: `rotate(${-tech.angle}deg)` }}>
            <motion.div
              animate={shouldReduceMotion ? undefined : counterRotation}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <TechNode tech={tech} />
            </motion.div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

/* =========================================================
   BRAND CORE
========================================================= */

function BrandCore({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      className="
        relative z-30
        flex
        h-14 w-14
        xs:h-16 xs:w-16
        sm:h-[68px] sm:w-[68px]
        items-center justify-center
        rounded-[18px] xs:rounded-[21px] sm:rounded-[23px]
        border border-slate-200
        bg-white
        shadow-[0_20px_50px_rgba(15,23,42,0.10)]
      "
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -3, 0],
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="
          relative flex
          h-9 w-9
          xs:h-10 xs:w-10
          sm:h-11 sm:w-11
          items-center justify-center
          rounded-xl xs:rounded-2xl
          bg-slate-50
        "
      >
        <Image
          src="/logo.svg"
          alt="Skinylabs Logo"
          width={40}
          height={40}
          className="
            h-7 w-7
            xs:h-8 xs:w-8
            sm:h-9 sm:w-9
          "
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   TECHNOLOGY VISUAL
========================================================= */

export default function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  const outer = technologies.filter((technology) => technology.orbit === 1);

  const middle = technologies.filter((technology) => technology.orbit === 2);

  const inner = technologies.filter((technology) => technology.orbit === 3);

  return (
    <div
      className="
        relative flex
        min-h-[300px]
        xs:min-h-[320px]
        sm:min-h-[370px]
        md:min-h-[400px]
        items-center justify-center
        overflow-hidden
        rounded-[22px]
        xs:rounded-[26px]
        sm:rounded-[30px]
        border border-slate-200/90
        bg-[#fafafa]
        shadow-[0_18px_60px_rgba(15,23,42,0.05)]
      "
    >
      {/* GRID */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.28]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
        }}
      />

      {/* CENTER GLOW */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-52 w-52
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-white
          blur-3xl
          sm:h-64 sm:w-64
        "
      />

      {/* ORBIT SYSTEM */}
      <div
        className="
          relative
          flex
          h-[230px] w-[230px]
          xs:h-[250px] xs:w-[250px]
          sm:h-[290px] sm:w-[290px]
          md:h-[320px] md:w-[320px]
          items-center justify-center
        "
      >
        <Orbit
          size={250}
          radius={125}
          duration={50}
          direction={1}
          technologies={outer}
          shouldReduceMotion={shouldReduceMotion}
        />

        <Orbit
          size={180}
          radius={90}
          duration={36}
          direction={-1}
          technologies={middle}
          shouldReduceMotion={shouldReduceMotion}
          dashed
        />

        <Orbit
          size={110}
          radius={55}
          duration={26}
          direction={1}
          technologies={inner}
          shouldReduceMotion={shouldReduceMotion}
        />

        <BrandCore shouldReduceMotion={shouldReduceMotion} />
      </div>

      {/* STATUS */}
      <div
        className="
          absolute bottom-4 left-4
          hidden items-center gap-2
          sm:flex
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

        <span
          className="
            text-[8px]
            font-medium uppercase
            tracking-[0.16em]
            text-slate-400
          "
        >
          Digital ecosystem
        </span>
      </div>

      <div
        className="
          absolute bottom-4 right-4
          hidden
          text-[8px]
          font-medium
          tracking-wide
          text-slate-300
          sm:block
        "
      >
        2026
      </div>
    </div>
  );
}
